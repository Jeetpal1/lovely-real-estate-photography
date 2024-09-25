// /app/booking/layout.tsx
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-auto px-4 py-8 max-w-3xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-primary">
          Book Your Photography Session
        </h1>
        {children}
      </main>
      <Footer />
    </div>
  );
}
