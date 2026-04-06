import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LA 2028 Olympics Ticket Planner",
  description: "Plan your LA 2028 Olympics ticket purchases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
