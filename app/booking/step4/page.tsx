// /app/booking/step4/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BookingLayout from "../layout";

export default function Step4() {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData((prevPaymentData) => ({
      ...prevPaymentData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (
      paymentData.cardNumber &&
      paymentData.expiryDate &&
      paymentData.cvc &&
      paymentData.zip
    ) {
      router.push("/booking/confirmation");
    } else {
      alert("Please fill in all the payment details");
    }
  };

  return (
    <BookingLayout>
      <h2 className="text-xl font-bold mb-4">Step 4: Payment Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          value={paymentData.expiryDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">CVC</label>
        <input
          type="text"
          name="cvc"
          value={paymentData.cvc}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={paymentData.zip}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </BookingLayout>
  );
}
