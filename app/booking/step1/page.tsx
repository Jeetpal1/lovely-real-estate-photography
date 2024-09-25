// /app/booking/step1/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
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
    toast.success(`${pkg.title} package selected!`);
    router.push("/booking/step2");
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Step 1: Select a Package</h2>
      <div className="grid grid-cols-1 gap-4">
        {pricingPlans.under4000.map((pkg, index) => (
          <button
            key={index}
            onClick={() => handlePackageSelect(pkg)}
            className={`border px-4 py-2 rounded ${
              selectedPackage?.title === pkg.title
                ? "bg-primary text-white"
                : "bg-white text-black"
            }`}
          >
            <div className="text-lg font-bold">{pkg.title}</div>
            <div className="text-md">{`$${pkg.price}`}</div>
            <div className="text-sm">
              {pkg.features.map((feature) => (
                <p key={feature.text} className="mt-2">
                  {feature.text}
                </p>
              ))}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
