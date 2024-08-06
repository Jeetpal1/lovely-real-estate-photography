// app/services/page.tsx

"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ServiceCard } from "../components/ServiceCard";

const services = [
  {
    title: "Real Estate Photography",
    description: "High-quality photos to showcase properties.",
  },
  { title: "3D Matterport Tours", description: "Immersive 3D virtual tours." },
  {
    title: "Drone Photography",
    description: "Aerial footage to highlight property features.",
  },
  // Add more services as needed
];

export default function Services() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
