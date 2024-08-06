// app/components/PaymentForm.tsx
"use client";

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface PaymentFormProps {
  handleSubmit: (event: React.FormEvent) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ handleSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string>("");

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message || "An unexpected error occurred.");
    } else {
      handleSubmit(event);
    }
  };

  return (
    <form
      onSubmit={handlePayment}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Secure Payment</h2>
      {error && <p className="text-red-500">{error}</p>}
      <CardElement className="p-3 border border-gray-300 rounded-md mb-4" />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Reserve
      </button>
    </form>
  );
};

const PaymentWrapper = ({ handleSubmit }: PaymentFormProps) => (
  <Elements stripe={stripePromise}>
    <PaymentForm handleSubmit={handleSubmit} />
  </Elements>
);

export default PaymentWrapper;
