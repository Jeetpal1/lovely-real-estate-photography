// app/components/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/real-estate-hero-section2.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 text-center text-white">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Transform Your Listings with High-End Real Estate Media
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed">
          Boost your realtor business in Winnipeg with premium real estate
          photography, cinematic video tours, 4K drone shots, and immersive 3D
          virtual tours.
        </p>

        <p className="text-base sm:text-lg md:text-xl mb-8">
          Realtors using professional media sell homes 32% faster and see a 47%
          increase in buyer interest.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Call Button */}
          <Link
            href="tel:+12048876797"
            className="bg-primary hover:bg-primary-dark transition-colors px-10 py-3 rounded-full text-base md:text-lg lg:text-xl font-semibold"
          >
            Call Now To Book
          </Link>

          {/* Message Button */}
          <Link
            href="sms:+12048876797?body=Hi, I'd like to book a listing for real estate media."
            className="bg-secondary hover:bg-secondary-dark transition-colors px-10 py-3 rounded-full text-base md:text-lg lg:text-xl font-semibold"
          >
            Message Us
          </Link>
        </div>
      </div>
    </section>
  );
}
