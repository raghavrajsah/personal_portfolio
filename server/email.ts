import nodemailer from "nodemailer";

// Check if email credentials are configured
const isEmailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS && 
  process.env.EMAIL_USER !== "your-email@gmail.com" && 
  process.env.EMAIL_PASS !== "your-app-password";

// Debug logging
console.log("🔍 Email configuration debug:");
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "Not set");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Set" : "Not set");
console.log("isEmailConfigured:", isEmailConfigured);

// Create a transporter only if credentials are configured
let transporter: nodemailer.Transporter | null = null;

if (isEmailConfigured) {
  try {
    // Use Gmail SMTP with better configuration
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add timeout and connection settings
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,   // 30 seconds
      socketTimeout: 60000,     // 60 seconds
    });
    
    console.log("📧 Email transporter created successfully");
  } catch (error) {
    console.log("❌ Failed to create email transporter:", error);
  }
} else {
  console.log("📧 Email not configured. CV requests will be logged but no emails will be sent.");
  console.log("📧 To enable email notifications, create a .env file with:");
  console.log("   EMAIL_USER=your-email@gmail.com");
  console.log("   EMAIL_PASS=your-password");
  console.log("📧 Note: Gmail may require App Passwords if 2FA is enabled");
}

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!isEmailConfigured || !transporter) {
    console.log("📧 Email not configured. Skipping email send.");
    return false;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html || options.text,
    };

    console.log("📧 Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return false;
  }
}

export async function sendCvRequestNotification(requestorEmail: string): Promise<boolean> {
  const subject = `CV Request from ${requestorEmail}`;
  const text = `${requestorEmail} has requested your CV.`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">CV Request</h2>
      <p><strong>${requestorEmail}</strong> has requested your CV.</p>
      <p>You can send them your CV or contact them directly.</p>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
      <p style="color: #666; font-size: 12px;">
        This is an automated notification from your portfolio website.
      </p>
    </div>
  `;

  return sendEmail({
    to: "rsah@colgate.edu",
    subject,
    text,
    html,
  });
} 