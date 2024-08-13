"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function About() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow  mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold">About Us</h1>
        <p className="text-text mt-4">
          {`Lovely Real Estate Photography, based in Winnipeg, specializes in
          capturing life's most precious moments with elegance and perfection.`}
        </p>
      </main>
      <Footer />
    </div>
  );
}
