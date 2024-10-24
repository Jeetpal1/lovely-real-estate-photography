// app/components/HeroSection.tsx
import Link from "next/link";

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
          Transform Your Listings with High-End Real Estate Media
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Boost your realtor business in Winnipeg with premium real estate
          photography, cinematic video tours, 4K drone shots, and immersive 3D
          virtual tours.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Realtors using professional media sell homes 32% faster and see a 47%
          increase in buyer interest.
        </p>
        <Link
          href="tel:+12048876797"
          className="bg-primary text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold"
        >
          Call Now to Discuss Your Project
        </Link>
      </div>
    </section>
  );
}
