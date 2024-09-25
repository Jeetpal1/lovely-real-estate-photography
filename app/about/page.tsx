// app\about\page.tsx
"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function About() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-primary text-4xl md:text-5xl font-bold text-center">
          About Us
        </h1>
        <section className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
          <p className="text-center">
            {`Welcome to Lovely Real Estate Photography, Winnipeg's premier provider of professional real estate imagery. Our mission is simple: to help realtors like you close deals faster, at higher prices, and with less hassle. Studies show that listings with high-quality photos sell 32% faster than those without, and at a premium price up to 10% higher.*`}
          </p>
          <p className="text-center">
            {`In today's competitive real estate market, having stunning visuals is not just an option—it's a necessity. We're here to ensure that your properties stand out from the crowd, capturing the essence and allure of each space with precision and artistry. Our services are designed to transform ordinary listings into extraordinary showcases that attract buyers' attention and drive engagement.`}
          </p>
          <p className="text-center">
            {`As a locally-owned business, we're deeply rooted in the Winnipeg community. We understand the unique characteristics of the market and tailor our services to meet the specific needs of realtors in this area. Our team uses cutting-edge technology and creative expertise to deliver unparalleled results, whether through our breathtaking aerial drone photography, immersive 3D Matterport tours, or meticulously crafted property photos.`}
          </p>
          <p className="text-center">
            {`At Lovely Real Estate Photography, we're not just taking pictures—we're creating experiences that resonate with potential buyers and bring your listings to life. We know that every property has a story to tell, and we're here to tell it in a way that captivates and converts.`}
          </p>
        </section>

        <section className="mt-12 bg-primary-light py-8 px-4 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-primary">
            Elevate Your Listings, Accelerate Your Success
          </h2>
          <p className="mt-4 text-gray-800">
            {`Imagine the impact of professionally enhanced photos that highlight every feature, cinematic video tours that immerse buyers in the property, and 3D virtual tours that allow them to explore every corner from the comfort of their own home. It's not just about selling properties—it's about creating a lasting impression that leads to quicker closings and higher satisfaction for your clients.`}
          </p>
          <p className="mt-4 text-gray-800">
            {`Our services are proven to enhance your marketing strategy, making your listings more attractive and your business more profitable. Partner with us, and let’s make your real estate business not just successful, but exceptional.`}
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
