// app/components/PricingSection.tsx

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { PricingPlan, selectedPricingPlanState } from "../../state/atoms";
import Tooltip from "./Tooltip";

const pricingPlans = {
  under4000: [
    {
      title: "BASIC",
      price: 95,
      features: [
        {
          text: "Up to 30 Stunning Photos (Professionally Enhanced)",
          tooltip: "",
        },
        {
          text: "Dedicated Property Website to Showcase Listings",
          tooltip: "",
        },
        {
          text: "NEW: Unlimited Object Removal (Basic)",
          tooltip:
            "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
        },
        {
          text: "Unlimited Revisions",
          tooltip:
            "Submit as many change requests as you'd like until you're satisfied with the content. See terms of use for details.",
        },
        { text: "24-Hour Turnaround for Quick Results", tooltip: "" },
        { text: "Free Graphic Designer for a Polished Finish", tooltip: "" },
      ],
    },
    {
      title: "PREMIUM",
      price: 145,
      features: [
        { text: "Unlimited Photos (Professionally Enhanced)", tooltip: "" },
        { text: "Cinematic Video Tours to Captivate Buyers", tooltip: "" },
        {
          text: "Matterport 3D Virtual Tour (1-Month Free)",
          tooltip:
            "*3D Virtual Tours include a 30-day free hosting period. Upon completion of the trial, each 3D Virtual Tour is hosted for $9.99/month plus applicable taxes and fees. You may cancel at any time. For inquiries, please contact billing@lovelyrealestatephotography.com.",
        },
        {
          text: "NEW: Unlimited Object Removal (Basic)",
          tooltip:
            "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
        },
        { text: "Dedicated Property Website", tooltip: "" },
        { text: "Virtual Feature Sheets for Detailed Listings", tooltip: "" },
        {
          text: "Unlimited Revisions",
          tooltip:
            "Submit as many change requests as you'd like until you're satisfied with the content. See terms of use for details.",
        },
        { text: "12-Hour Turnaround for Faster Results", tooltip: "" },
        { text: "Free Graphic Designer for Superior Quality", tooltip: "" },
      ],
    },
    {
      title: "PREMIUM PLUS+",
      price: 195,
      popular: true,
      features: [
        { text: "Unlimited Photos (Professionally Enhanced)", tooltip: "" },
        { text: "Cinematic Video Tours", tooltip: "" },
        {
          text: "Matterport 3D Virtual Tour (1-Month Free)",
          tooltip:
            "*3D Virtual Tours include a 30-day free hosting period. Upon completion of the trial, each 3D Virtual Tour is hosted for $9.99/month plus applicable taxes and fees. You may cancel at any time. For inquiries, please contact billing@lovelyrealestatephotography.com.",
        },
        {
          text: "NEW: Unlimited Object Removal (Basic)",
          tooltip:
            "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
        },
        { text: "Dedicated Property Website", tooltip: "" },
        { text: "Detailed Floorplans with Dimensions", tooltip: "" },
        {
          text: "Premium Twilight Photos for Breathtaking Visuals",
          tooltip: "",
        },
        { text: "Virtual Feature Sheets", tooltip: "" },
        {
          text: "Unlimited Revisions",
          tooltip:
            "Submit as many change requests as you'd like until you're satisfied with the content. See terms of use for details.",
        },
        { text: "12-Hour Turnaround", tooltip: "" },
        { text: "Free Graphic Designer", tooltip: "" },
      ],
    },
  ],
  over4000: [
    {
      title: "PREMIUM PLUS+",
      price: 699,
      popular: true,
      features: [
        { text: "Unlimited Photos (Professionally Enhanced)", tooltip: "" },
        { text: "Cinematic Video Tours", tooltip: "" },
        {
          text: "Matterport 3D Virtual Tour (1-Month Free)",
          tooltip:
            "*3D Virtual Tours include a 30-day free hosting period. Upon completion of the trial, each 3D Virtual Tour is hosted for $9.99/month plus applicable taxes and fees. You may cancel at any time. For inquiries, please contact billing@lovelyrealestatephotography.com.",
        },
        {
          text: "NEW: Unlimited Object Removal (Basic)",
          tooltip:
            "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
        },
        { text: "Dedicated Property Website", tooltip: "" },
        { text: "Detailed Floorplans with Dimensions", tooltip: "" },
        { text: "Premium Twilight Photos", tooltip: "" },
        { text: "Virtual Feature Sheets", tooltip: "" },
        {
          text: "Unlimited Revisions",
          tooltip:
            "Submit as many change requests as you'd like until you're satisfied with the content. See terms of use for details.",
        },
        { text: "12-Hour Turnaround", tooltip: "" },
        { text: "Free Graphic Designer", tooltip: "" },
      ],
    },
  ],
};

const PricingSection = () => {
  const [selectedTab, setSelectedTab] = useState<"under4000" | "over4000">(
    "under4000"
  );
  const [selectedPricingPlan, setSelectedPricingPlan] = useRecoilState(
    selectedPricingPlanState
  );
  const router = useRouter();

  const handleBookNow = (plan: PricingPlan) => {
    setSelectedPricingPlan(plan);
    router.push("/book-now");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Simple Flat Fee Pricing
        </h2>
        <p className="text-center text-lg mb-8">
          Fast. Reliable. High Quality. No Hidden Fees.
        </p>
        <div className="flex justify-center mb-8">
          <button
            className={`bg-primary px-4 py-2 mx-2 rounded-full ${
              selectedTab === "under4000"
                ? "border-4 border-secondary text-secondary"
                : "text-white"
            }`}
            onClick={() => setSelectedTab("under4000")}
          >
            Under 4000 sq.ft
          </button>
          <button
            className={`bg-primary text-black px-4 py-2 mx-2 rounded-full ${
              selectedTab === "over4000"
                ? "border-4 border-secondary text-secondary"
                : "text-white"
            }`}
            onClick={() => setSelectedTab("over4000")}
          >
            Over 4000 sq.ft / Outside Service Area
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {pricingPlans[selectedTab].map((plan, index) => (
            <div
              key={index}
              className={`max-w-sm w-full lg:w-1/3 p-4 ${
                plan.popular ? "border-4 border-yellow-400" : "border"
              } rounded-lg shadow-lg m-4 bg-white relative`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-white text-xs py-1 px-2 rounded-bl">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-4 text-center">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-center text-primary mb-4">
                ${plan.price}
              </p>
              <p className="text-center text-sm text-gray-500 mb-4">
                *Plus taxes
              </p>
              <p className="text-center text-sm text-green-500 mb-4">
                No upfront payment required
              </p>
              <button
                className="bg-primary text-white w-full py-2 rounded-full mb-4"
                onClick={() => handleBookNow(plan)}
              >
                Book Now
              </button>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                    {feature.tooltip ? (
                      <Tooltip content={feature.tooltip}>
                        <div className="flex items-center space-x-2 cursor-pointer">
                          <span>{feature.text}</span>
                          <FaInfoCircle className="text-gray-500" />
                        </div>
                      </Tooltip>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
