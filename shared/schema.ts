import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone").notNull(),
  zipcode: text("zipcode").notNull(),
  email: text("email").notNull(),
  projectTypes: jsonb("project_types").notNull(),
  budget: text("budget").notNull(),
  description: text("description"),
  createdAt: text("created_at").notNull().default("now()"),
});

export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  zipcode: z.string().min(5, "Zip code must be at least 5 digits"),
  email: z.string().email("Invalid email address"),
  projectTypes: z.array(z.string()).min(1, "Please select at least one project type"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to receive communications" }),
  }),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
