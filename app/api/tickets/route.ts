import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { tickets } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const rows = await db.select().from(tickets).orderBy(tickets.sortOrder);
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (Array.isArray(body)) {
    // Bulk upsert (full sync)
    // Delete all existing, insert all new
    await db.delete(tickets);
    if (body.length > 0) {
      await db.insert(tickets).values(
        body.map((t: Record<string, unknown>, i: number) => ({
          id: t.id as string,
          event: t.event as string,
          date: t.date as string,
          time: (t.time as string) || "",
          venue: (t.venue as string) || "",
          quantity: (t.quantity as number) || 2,
          priority: (t.priority as string) || "must-have",
          status: (t.status as string) || "wishlist",
          notes: (t.notes as string) || "",
          sortOrder: i,
        }))
      );
    }
    return NextResponse.json({ ok: true, count: body.length });
  }

  // Single insert
  await db.insert(tickets).values({
    id: body.id,
    event: body.event,
    date: body.date,
    time: body.time || "",
    venue: body.venue || "",
    quantity: body.quantity || 2,
    priority: body.priority || "must-have",
    status: body.status || "wishlist",
    notes: body.notes || "",
    sortOrder: body.sortOrder || 0,
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await db.delete(tickets).where(eq(tickets.id, id));
  return NextResponse.json({ ok: true });
}
