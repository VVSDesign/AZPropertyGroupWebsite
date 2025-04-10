import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact information
      const contact = await storage.createContact(contactData);
      
      // Return success response
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      } else {
        // Handle other errors
        console.error("Error handling contact form:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
