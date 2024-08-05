// app/components/BookingForm.tsx
"use client";

import { useState } from "react";

export const BookingForm = () => {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle booking submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <div className="mb-4">
        <label className="block text-text mb-2" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border border-neutral rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-neutral rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2" htmlFor="time">
          Time
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border border-neutral rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-text-light px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};
