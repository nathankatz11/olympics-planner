import { pgTable, text, integer, timestamp, boolean } from "drizzle-orm/pg-core";

export const tickets = pgTable("tickets", {
  id: text("id").primaryKey(),
  event: text("event").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull().default(""),
  venue: text("venue").notNull().default(""),
  quantity: integer("quantity").notNull().default(2),
  priority: text("priority").notNull().default("must-have"),
  status: text("status").notNull().default("wishlist"),
  notes: text("notes").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
