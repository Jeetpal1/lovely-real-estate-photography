// app\contact\page.tsx
"use client";

import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, type: "contact" }), // Type 'contact' to trigger contact email
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus("sent");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold">Contact Us</h1>
        <p className="text-text mt-4">
          Reach out to us for any inquiries or to book a session.
        </p>
        <form className="mt-8 max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-neutral rounded"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-neutral rounded"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full px-3 py-2 border border-neutral rounded"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-neutral rounded"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            className="bg-primary text-text-light px-4 py-2 rounded"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "sent" && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-4">Failed to send the message.</p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
