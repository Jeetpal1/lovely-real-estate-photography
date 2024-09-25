// app/services/page.tsx

"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ServiceCard } from "../components/ServiceCard";

const services = [
  {
    title: "Real Estate Photography",
    description:
      "Capture every angle and feature with our expert photography services, ensuring your listings stand out in a crowded market.",
  },
  {
    title: "3D Matterport Tours",
    description:
      "Offer potential buyers an immersive experience with our state-of-the-art 3D Matterport tours, providing a comprehensive view of the property.",
  },
  {
    title: "Drone Photography",
    description:
      "Showcase your property's location and surroundings from a new perspective with stunning aerial shots that capture the entire scope.",
  },
  {
    title: "Cinematic Video Tours",
    description:
      "Immerse your audience in a cinematic experience that highlights the best aspects of the property, making it easier for buyers to envision themselves in the space.",
  },
  {
    title: "Floor Plans",
    description:
      "Provide potential buyers with detailed floor plans that give them a clear understanding of the property's layout, helping them make informed decisions.",
  },
  {
    title: "Virtual Staging",
    description:
      "Transform empty spaces into beautifully furnished rooms with our virtual staging services. Help buyers visualize the full potential of a property.",
  },
  {
    title: "Social Media Content Accelerator",
    description:
      "Accelerate your online presence with up to 10 short-form videos, 20 lifestyle photos, and more—all shot at one location with up to 4 on-site hours dedicated. Includes unlimited changes and 36-hour project completion. Add a Social Media Management Bundle to automate your online branding.",
  },
];

export default function Services() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
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
