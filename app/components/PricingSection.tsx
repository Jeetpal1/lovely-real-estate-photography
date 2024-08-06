// app/components/PricingSection.tsx

import { PricingPlan } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { selectedPricingPlanState } from "../../state/atoms";
import { pricingPlans } from "../data/pricingPlans";
import Tooltip from "./Tooltip";

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
