"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { OLYMPIC_EVENTS, OlympicEvent } from "@/lib/events";
import {
  Ticket,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  GripVertical,
  Clock,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ShoppingBag,
  Search,
  X,
} from "lucide-react";

type Priority = "must-have" | "backup";
type Status = "wishlist" | "purchased";

interface TicketPlan {
  id: string;
  event: string;
  date: string;
  time: string;
  venue: string;
  quantity: number;
  priority: Priority;
  status: Status;
  notes: string;
}

const INITIAL_TICKETS: TicketPlan[] = [
  {
    id: "p1",
    event: "Beach Volleyball",
    date: "2028-07-22",
    time: "",
    venue: "Santa Monica Beach",
    quantity: 6,
    priority: "must-have",
    status: "purchased",
    notes: "Already purchased by family",
  },
  {
    id: "p2",
    event: "Tennis",
    date: "2028-07-23",
    time: "",
    venue: "",
    quantity: 6,
    priority: "must-have",
    status: "purchased",
    notes: "Already purchased by family",
  },
  {
    id: "p3",
    event: "Women's Soccer Quarterfinal",
    date: "2028-07-21",
    time: "",
    venue: "",
    quantity: 12,
    priority: "must-have",
    status: "purchased",
    notes: "Already purchased by family",
  },
  {
    id: "1",
    event: "Women's Gymnastics",
    date: "2028-07-20",
    time: "18:00",
    venue: "",
    quantity: 6,
    priority: "must-have",
    status: "wishlist",
    notes: "",
  },
  {
    id: "2",
    event: "Swimming",
    date: "2028-07-23",
    time: "",
    venue: "",
    quantity: 6,
    priority: "must-have",
    status: "wishlist",
    notes: "",
  },
  {
    id: "3",
    event: "Women's Soccer Semifinal",
    date: "2028-08-01",
    time: "17:00",
    venue: "SoFi Stadium",
    quantity: 4,
    priority: "must-have",
    status: "wishlist",
    notes: "",
  },
  {
    id: "4",
    event: "Women's Basketball Gold Medal Game",
    date: "2028-08-09",
    time: "19:30",
    venue: "Crypto.com Arena",
    quantity: 2,
    priority: "backup",
    status: "wishlist",
    notes: "If gymnastics sells out",
  },
  {
    id: "5",
    event: "Women's Beach Volleyball Final",
    date: "2028-08-06",
    time: "20:00",
    venue: "Santa Monica Beach",
    quantity: 2,
    priority: "backup",
    status: "wishlist",
    notes: "",
  },
];

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

const ALL_SPORTS = Array.from(
  new Set(OLYMPIC_EVENTS.map((e) => e.sport))
).sort();

function EventPickerModal({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (event: OlympicEvent) => void;
}) {
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return OLYMPIC_EVENTS.filter((e) => {
      if (sportFilter && e.sport !== sportFilter) return false;
      if (!q) return true;
      return (
        e.sport.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.date.includes(q) ||
        e.sessionCode.toLowerCase().includes(q)
      );
    });
  }, [search, sportFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-brand-dark">
            Select an Olympic Event
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-black/5 transition-colors text-gray-400 hover:text-brand-dark"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-100 space-y-3">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by sport, event, venue, date..."
              className="w-full rounded-lg border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              autoFocus
            />
          </div>
          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          >
            <option value="">All Sports ({OLYMPIC_EVENTS.length} events)</option>
            {ALL_SPORTS.map((sport) => (
              <option key={sport} value={sport}>
                {sport} (
                {OLYMPIC_EVENTS.filter((e) => e.sport === sport).length})
              </option>
            ))}
          </select>
        </div>

        {/* Event list */}
        <div className="flex-1 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              No events match your search.
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.slice(0, 100).map((event) => {
                const dateLabel = new Date(
                  event.date + "T00:00:00"
                ).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                });
                return (
                  <div
                    key={event.sessionCode}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-cream/60 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-brand-red uppercase tracking-wide">
                          {event.sport}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">
                          {event.sessionType}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {event.sessionCode}
                        </span>
                      </div>
                      <p className="text-sm text-brand-dark font-medium truncate">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={11} />
                          {dateLabel}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={11} />
                          {event.startTime} - {event.endTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={11} />
                          {event.venue}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onSelect(event)}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                    >
                      Add
                    </button>
                  </div>
                );
              })}
              {filtered.length > 100 && (
                <div className="text-center py-4 text-xs text-gray-400">
                  Showing 100 of {filtered.length} results. Narrow your search
                  to see more.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TicketCard({
  ticket,
  onUpdate,
  onRemove,
  isEditing,
  onToggleEdit,
}: {
  ticket: TicketPlan;
  onUpdate: (updated: TicketPlan) => void;
  onRemove: () => void;
  isEditing: boolean;
  onToggleEdit: () => void;
}) {
  const isPrimary = ticket.priority === "must-have";
  const isPurchased = ticket.status === "purchased";

  return (
    <div
      className={cn(
        "rounded-2xl border-2 p-4 transition-all",
        isPurchased
          ? "border-emerald-400 bg-emerald-50/50 shadow-sm"
          : isPrimary
            ? "border-brand-red bg-white shadow-md"
            : "border-amber-300 bg-amber-50/50"
      )}
    >
      <div className="flex items-start gap-3">
        {!isPurchased && (
          <div className="mt-1 text-gray-300 cursor-grab">
            <GripVertical size={18} />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {isPurchased ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                <ShoppingBag size={12} />
                Purchased
              </span>
            ) : (
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full",
                  isPrimary
                    ? "bg-brand-red text-white"
                    : "bg-amber-200 text-amber-800"
                )}
              >
                {isPrimary ? (
                  <CheckCircle2 size={12} />
                ) : (
                  <AlertTriangle size={12} />
                )}
                {isPrimary ? "Must-Have" : "Backup"}
              </span>
            )}
            <span className="text-xs text-gray-400">
              x{ticket.quantity} ticket{ticket.quantity > 1 ? "s" : ""}
            </span>
          </div>

          <h3 className="font-bold text-brand-dark text-lg leading-tight">
            {ticket.event || "Untitled Event"}
          </h3>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
            {ticket.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {new Date(ticket.date + "T00:00:00").toLocaleDateString(
                  "en-US",
                  {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </span>
            )}
            {ticket.time && (
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {ticket.time}
              </span>
            )}
            {ticket.venue && (
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} />
                {ticket.venue}
              </span>
            )}
          </div>

          {ticket.notes && (
            <p className="mt-2 text-sm text-gray-400 italic">
              {ticket.notes}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onToggleEdit}
            className="p-1.5 rounded-lg hover:bg-black/5 transition-colors text-gray-400 hover:text-brand-dark"
          >
            {isEditing ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <button
            onClick={onRemove}
            className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-gray-300 hover:text-brand-red"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Event Name
            </label>
            <input
              type="text"
              value={ticket.event}
              onChange={(e) => onUpdate({ ...ticket, event: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              placeholder="e.g. Women's 200m Final"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Date
            </label>
            <input
              type="date"
              value={ticket.date}
              onChange={(e) => onUpdate({ ...ticket, date: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Time
            </label>
            <input
              type="time"
              value={ticket.time}
              onChange={(e) => onUpdate({ ...ticket, time: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Venue
            </label>
            <input
              type="text"
              value={ticket.venue}
              onChange={(e) => onUpdate({ ...ticket, venue: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              placeholder="e.g. LA Memorial Coliseum"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              max={24}
              value={ticket.quantity}
              onChange={(e) =>
                onUpdate({
                  ...ticket,
                  quantity: Math.max(1, parseInt(e.target.value) || 1),
                })
              }
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Priority
            </label>
            <select
              value={ticket.priority}
              onChange={(e) =>
                onUpdate({
                  ...ticket,
                  priority: e.target.value as Priority,
                })
              }
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              <option value="must-have">Must-Have</option>
              <option value="backup">Backup</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Status
            </label>
            <select
              value={ticket.status}
              onChange={(e) =>
                onUpdate({
                  ...ticket,
                  status: e.target.value as Status,
                })
              }
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              <option value="wishlist">Wish List</option>
              <option value="purchased">Purchased</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Notes
            </label>
            <input
              type="text"
              value={ticket.notes}
              onChange={(e) => onUpdate({ ...ticket, notes: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              placeholder="e.g. Backup if gymnastics sells out"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function HorizontalSchedule({ tickets }: { tickets: TicketPlan[] }) {
  const sorted = [...tickets].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group events by date
  const byDate = sorted.reduce<Record<string, TicketPlan[]>>((acc, t) => {
    if (!acc[t.date]) acc[t.date] = [];
    acc[t.date].push(t);
    return acc;
  }, {});

  const dates = Object.keys(byDate).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="overflow-x-auto pb-2">
      <div className="inline-flex gap-0 min-w-full">
        {dates.map((date) => {
          const dayLabel = new Date(date + "T00:00:00").toLocaleDateString(
            "en-US",
            { weekday: "short" }
          );
          const dateLabel = new Date(date + "T00:00:00").toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric" }
          );
          const events = byDate[date];

          return (
            <div
              key={date}
              className="flex flex-col items-center min-w-[140px] border-r border-gray-100 last:border-r-0"
            >
              {/* Day header */}
              <div className="text-center py-3 px-2 w-full bg-brand-dark text-white first:rounded-tl-xl last:rounded-tr-xl">
                <div className="text-xs font-bold uppercase tracking-wide opacity-70">
                  {dayLabel}
                </div>
                <div className="text-sm font-semibold">{dateLabel}</div>
              </div>

              {/* Events below */}
              <div className="flex flex-col gap-2 p-2 w-full min-h-[80px]">
                {events.map((t) => (
                  <div
                    key={t.id}
                    className={cn(
                      "rounded-lg px-3 py-2 text-xs font-semibold text-center border",
                      t.status === "purchased"
                        ? "bg-emerald-100 border-emerald-300 text-emerald-800"
                        : t.priority === "must-have"
                          ? "bg-red-50 border-brand-red/30 text-brand-red"
                          : "bg-amber-50 border-amber-300 text-amber-700"
                    )}
                  >
                    <div className="truncate">{t.event}</div>
                    <div className="text-[10px] opacity-70 mt-0.5">
                      x{t.quantity} &middot;{" "}
                      {t.status === "purchased" ? "Purchased" : t.priority === "must-have" ? "Must-Have" : "Backup"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function OlympicsScheduler() {
  const [tickets, setTickets] = useState<TicketPlan[]>(INITIAL_TICKETS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerPriority, setPickerPriority] = useState<Priority>("must-have");

  const purchased = tickets.filter((t) => t.status === "purchased");
  const wishlist = tickets.filter((t) => t.status === "wishlist");
  const mustHaves = wishlist.filter((t) => t.priority === "must-have");
  const backups = wishlist.filter((t) => t.priority === "backup");
  const totalMustHave = mustHaves.reduce((sum, t) => sum + t.quantity, 0);
  const totalBackup = backups.reduce((sum, t) => sum + t.quantity, 0);
  const totalPurchased = purchased.reduce((sum, t) => sum + t.quantity, 0);

  function openPicker(priority: Priority) {
    setPickerPriority(priority);
    setPickerOpen(true);
  }

  function handlePickEvent(event: OlympicEvent) {
    const newTicket: TicketPlan = {
      id: generateId(),
      event: event.sport + " - " + event.sessionType,
      date: event.date,
      time: event.startTime,
      venue: event.venue,
      quantity: 2,
      priority: pickerPriority,
      status: "wishlist",
      notes: event.description,
    };
    setTickets([...tickets, newTicket]);
    setPickerOpen(false);
    setEditingId(newTicket.id);
  }

  function updateTicket(updated: TicketPlan) {
    setTickets(tickets.map((t) => (t.id === updated.id ? updated : t)));
  }

  function removeTicket(id: string) {
    setTickets(tickets.filter((t) => t.id !== id));
    if (editingId === id) setEditingId(null);
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Event Picker Modal */}
      <EventPickerModal
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={handlePickEvent}
      />

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-brand-red text-white p-2.5 rounded-xl">
              <Ticket size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brand-dark">
                LA 2028 Olympics Ticket Planner
              </h1>
              <p className="text-sm text-gray-500">
                Purchase day: April 7, 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Budget Tracker */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-brand-dark mb-4">Ticket Budget</h2>
          <div className="flex items-end gap-2 mb-3">
            <span
              className={cn(
                "text-4xl font-black",
                totalMustHave > 24 ? "text-brand-red" : "text-brand-dark"
              )}
            >
              {totalMustHave}
            </span>
            <span className="text-lg text-gray-400 mb-1">/ 24 wish list tickets</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mb-3">
            <div
              className="h-full rounded-full transition-all duration-500 bg-brand-red"
              style={{ width: `${Math.min((totalMustHave / 24) * 100, 100)}%` }}
            />
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-gray-600">
                Purchased: <strong>{totalPurchased}</strong> tickets (
                {purchased.length} events)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-red" />
              <span className="text-gray-600">
                Must-Have: <strong>{totalMustHave}</strong> tickets (
                {mustHaves.length} events)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-300" />
              <span className="text-gray-600">
                Backup: <strong>{totalBackup}</strong> tickets ({backups.length}{" "}
                events)
              </span>
            </div>
          </div>

          {totalMustHave > 24 && (
            <div className="mt-3 flex items-center gap-2 text-brand-red text-sm font-semibold">
              <AlertTriangle size={16} />
              Over budget by {totalMustHave - 24} tickets! Move some to backup.
            </div>
          )}
        </div>

        {/* Horizontal Schedule */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-brand-dark mb-1">
            Schedule at a Glance
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Days across the top, events below. <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Green = purchased</span>, <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-red inline-block" /> Red = must-have</span>, <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Amber = backup</span>
          </p>
          <HorizontalSchedule tickets={tickets} />
        </div>

        {/* Purchased Tickets */}
        {purchased.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-brand-dark mb-1 flex items-center gap-2">
              <ShoppingBag size={20} className="text-emerald-500" />
              Purchased Tickets
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Already secured by the family.
            </p>
            <div className="space-y-3">
              {purchased.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onUpdate={updateTicket}
                  onRemove={() => removeTicket(ticket.id)}
                  isEditing={editingId === ticket.id}
                  onToggleEdit={() =>
                    setEditingId(editingId === ticket.id ? null : ticket.id)
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Purchase Order / Schedule */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-brand-dark mb-1">
            Purchase Order (Must-Haves)
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Try to buy these first, in order. Click the arrow to edit details.
          </p>
          <div className="space-y-3">
            {mustHaves.map((ticket, i) => (
              <div key={ticket.id} className="flex items-start gap-2">
                <span className="mt-4 w-6 h-6 rounded-full bg-brand-red text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <TicketCard
                    ticket={ticket}
                    onUpdate={updateTicket}
                    onRemove={() => removeTicket(ticket.id)}
                    isEditing={editingId === ticket.id}
                    onToggleEdit={() =>
                      setEditingId(
                        editingId === ticket.id ? null : ticket.id
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => openPicker("must-have")}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 py-3 text-sm font-semibold text-gray-400 hover:border-brand-red hover:text-brand-red transition-colors"
          >
            <Plus size={16} />
            Add Must-Have Event
          </button>
        </div>

        {/* Backup Plans */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-brand-dark mb-1">Backup Plans</h2>
          <p className="text-sm text-gray-400 mb-4">
            If a must-have sells out, grab one of these instead.
          </p>
          <div className="space-y-3">
            {backups.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onUpdate={updateTicket}
                onRemove={() => removeTicket(ticket.id)}
                isEditing={editingId === ticket.id}
                onToggleEdit={() =>
                  setEditingId(
                    editingId === ticket.id ? null : ticket.id
                  )
                }
              />
            ))}
          </div>
          <button
            onClick={() => openPicker("backup")}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 py-3 text-sm font-semibold text-gray-400 hover:border-amber-400 hover:text-amber-600 transition-colors"
          >
            <Plus size={16} />
            Add Backup Event
          </button>
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-brand-dark mb-3">
            Purchase Day Checklist
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Log in 15 minutes early and have payment info saved",
              "Open this page on a second screen for reference",
              `Must-have tickets total: ${totalMustHave} of 24`,
              `Backup events ready: ${backups.length} alternatives`,
              `Already purchased: ${totalPurchased} tickets secured`,
              "If an event is sold out, skip immediately and move to the next",
              "Circle back to backups only after all must-haves are attempted",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="text-brand-red shrink-0 mt-0.5"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
