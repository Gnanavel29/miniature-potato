import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince Nandagopal — Yoga & Stress Reset",
  description: "Practical yoga protocols for engineers. Reduce burnout, regulate your nervous system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
