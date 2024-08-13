// /app/booking/layout.tsx
import React from "react";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Book Your Photography Session</h1>
      {children}
    </div>
  );
}
