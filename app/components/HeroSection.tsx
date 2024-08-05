// app/components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/images/real-estate-hero-section2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Transform Your Listings with Stunning Real Estate Photography
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Capture the attention of buyers with unlimited premium photos,
          cinematic 4K videos, detailed floor plans, and immersive 3D virtual
          tours – all in one seamless appointment.
        </p>
        <Link
          href="/bookings"
          className="bg-primary text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold"
        >
          Book Your Session Today
        </Link>
      </div>
    </section>
  );
}
