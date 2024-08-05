"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold">Contact Us</h1>
        <p className="text-text mt-4">
          Reach out to us for any inquiries or to book a session.
        </p>
        <form className="mt-8 max-w-lg">
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-neutral rounded"
              id="name"
              type="text"
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
              required
            ></textarea>
          </div>
          <button
            className="bg-primary text-text-light px-4 py-2 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
