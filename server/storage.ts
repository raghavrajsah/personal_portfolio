import { users, contactMessages, cvRequests, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type CvRequest, type InsertCvRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createCvRequest(request: InsertCvRequest): Promise<CvRequest>;
  getCvRequests(): Promise<CvRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private cvRequests: Map<number, CvRequest>;
  currentUserId: number;
  currentMessageId: number;
  currentCvRequestId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.cvRequests = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentCvRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createCvRequest(insertRequest: InsertCvRequest): Promise<CvRequest> {
    const id = this.currentCvRequestId++;
    const request: CvRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.cvRequests.set(id, request);
    return request;
  }

  async getCvRequests(): Promise<CvRequest[]> {
    return Array.from(this.cvRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
