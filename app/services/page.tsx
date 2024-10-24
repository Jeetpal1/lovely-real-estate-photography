// app/services/page.tsx

"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ServiceCard } from "../components/ServiceCard";

const services = [
  {
    title: "Real Estate Photography",
    description:
      "High-quality, stunning images that capture the full essence of every property. Stand out in the competitive Winnipeg market with professionally enhanced photos that increase buyer engagement and make your listings irresistible.",
  },
  {
    title: "3D Matterport Tours",
    description:
      "Offer potential buyers an immersive, next-level experience with 3D Matterport tours. Make virtual walkthroughs available anytime, anywhere, and attract more out-of-town buyers with interactive, detailed property views.",
  },
  {
    title: "Drone Photography",
    description:
      "Elevate your listings with breathtaking 4K drone shots. Capture aerial views of the property and its surroundings to give potential buyers a complete perspective that sets your listings apart from the competition.",
  },
  {
    title: "Cinematic Video Tours",
    description:
      "Engage buyers with captivating, cinematic property videos that highlight the best features. Create emotional connections that inspire faster decisions and leave a lasting impression on prospective buyers.",
  },
  {
    title: "Floor Plans",
    description:
      "Provide crystal-clear, professional floor plans to give potential buyers an accurate idea of a property’s layout. Help them envision how the space can fit their needs, driving quicker sales.",
  },
  {
    title: "Virtual Staging",
    description:
      "Turn empty spaces into beautiful, furnished rooms that feel lived-in and inviting. Virtual staging helps buyers visualize the potential of a property and boosts your chances of closing the sale.",
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
        <h1 className="text-primary text-4xl font-bold">
          Maximize Your Listings with Our Expert Media Services
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          {`Professional real estate media services designed to help Winnipeg
          realtors stand out, sell faster, and win more clients. From
          photography to 3D tours, we've got everything you need to showcase
          properties at their best.`}
        </p>

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
