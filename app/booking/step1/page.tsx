// /app/booking/step1/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { selectedPricingPlanState } from "../../../state/atoms";
import { PricingPlan } from "../../../types";
import { pricingPlans } from "../../data/pricingPlans";
import BookingLayout from "../layout";

export default function Step1() {
  const [selectedPackage, setSelectedPackage] = useRecoilState(
    selectedPricingPlanState
  );
  const router = useRouter();

  const handlePackageSelect = (pkg: PricingPlan) => {
    setSelectedPackage(pkg);
    router.push("/booking/step2");
  };

  return (
    <BookingLayout>
      <h2 className="text-xl font-bold mb-4">Step 1: Select a Package</h2>
      <div className="grid grid-cols-1 gap-4">
        {pricingPlans.under4000.map((pkg, index) => (
          <button
            key={index}
            onClick={() => handlePackageSelect(pkg)}
            className={`border px-4 py-2 rounded ${
              selectedPackage?.title === pkg.title
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {pkg.title}
          </button>
        ))}
      </div>
    </BookingLayout>
  );
}
