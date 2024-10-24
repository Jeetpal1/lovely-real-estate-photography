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
          Enhance Your Realtor Business with High-End Real Estate Media
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Capture the attention of buyers and grow your real estate business in
          Winnipeg with premium real estate photography, cinematic video tours,
          4K drone shots, and immersive 3D virtual tours. Our fast turnaround
          and professional media will help you stand out in the competitive
          market.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Highlight that professional media helps homes sell 32% faster and
          boosts buyer interest by 47%.
        </p>
        <Link
          href="/book-now"
          className="bg-primary text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold"
        >
          Book Now and Sell Listings Faster
        </Link>
      </div>
    </section>
  );
}
