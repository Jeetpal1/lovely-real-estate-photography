// app/book-now/page.tsx
"use client";

import BookingForm from "../components/BookingForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function BookingsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold mb-8">
          Book Your Session
        </h1>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
