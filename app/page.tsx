// app/page.tsx
"use client";

import { useRecoilValue } from "recoil";
import { userState } from "../state/atoms";
import ExperienceSection from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  const user = useRecoilValue(userState);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PricingSection />
        <ExperienceSection />
        {/* <div className="container mx-auto px-4 py-8">
          {user ? (
            <p className="text-text mt-4">
              Welcome back, {user.displayName || user.email}!
            </p>
          ) : (
            <p className="text-text mt-4">
              Please log in to see your bookings.
            </p>
          )}
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
