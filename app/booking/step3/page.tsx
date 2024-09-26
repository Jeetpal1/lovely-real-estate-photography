// /app/booking/step3/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import BookingLayout from "../layout";

export default function Step3() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    address: "",
    unitNumber: "",
    propertyType: "",
    over4000: false,
    lockbox: "",
    realtor: false,
    referral: "",
    specialInstructions: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    if (formData.address && formData.propertyType) {
      toast.success("Property details saved!");
      router.push("/booking/step4");
    } else {
      toast.error("Please fill in the required fields");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Step 3: Property Details</h2>
      <div className="mb-4">
        <label className="block text-text mb-2">Address</label>
        <input
          type="text"
          title="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Unit Number (Optional)</label>
        <input
          type="text"
          title="unitNumber"
          value={formData.unitNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Property Type</label>
        <select
          title="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="" disabled>
            Select property type
          </option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Single Home">Single Home</option>
          <option value="Large Home">Large Home</option>
          <option value="Commercial">Commercial</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">
          Is the property over 4000 sq.ft?
        </label>
        <input
          type="checkbox"
          title="over4000"
          checked={formData.over4000}
          onChange={handleChange}
          className="mr-2"
        />
        Yes
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Lockbox Code</label>
        <input
          type="text"
          title="lockbox"
          value={formData.lockbox}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Are you a Realtor?</label>
        <input
          type="checkbox"
          title="realtor"
          checked={formData.realtor}
          onChange={handleChange}
          className="mr-2"
        />
        Yes
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">
          How did you hear about us?
        </label>
        <input
          type="text"
          title="referral"
          value={formData.referral}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Special Instructions</label>
        <textarea
          title="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => router.back()}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}
