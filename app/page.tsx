// app/page.tsx
"use client";

import { useRecoilValue } from "recoil";
import { userState } from "../state/atoms";
import ExperienceSection from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import YoutubeShowcaseSection from "./components/YoutubeShowcaseSection";

export default function Home() {
  const user = useRecoilValue(userState);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <YoutubeShowcaseSection />
        <ExperienceSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
