import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Here you would integrate with an email service like Nodemailer
      // For now, we'll just log the message
      console.log("Contact form submission:", message);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Download CV endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real implementation, you would serve the actual CV file
    res.json({ 
      success: true, 
      downloadUrl: "/cv/raghav-raj-sah-cv.pdf",
      message: "CV download ready" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
