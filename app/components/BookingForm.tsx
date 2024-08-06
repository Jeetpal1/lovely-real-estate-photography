// app/components/BookingForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedPricingPlanState } from "../../state/atoms";
import {
  Booking,
  PaymentDetails,
  PricingPlan,
  PropertyDetails,
} from "../../types";
import { useAuth } from "../hooks/useAuth";
import { createBooking } from "../utils/api";
import PaymentWrapper from "./PaymentForm";

const BookingForm = () => {
  const { user } = useAuth();
  const selectedPricingPlan = useRecoilValue(selectedPricingPlanState);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<
    PropertyDetails & {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      paymentDetails: PaymentDetails;
    }
  >({
    address: "",
    unitNumber: "",
    propertyType: "",
    over4000: false,
    visitorParking: false,
    lockbox: "",
    realtor: false,
    referral: "",
    specialInstructions: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    paymentDetails: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      zip: "",
    },
  });

  useEffect(() => {
    if (selectedPricingPlan) {
      // Do something with selectedPricingPlan if needed
      console.log("Selected Pricing Plan:", selectedPricingPlan);
    }
  }, [selectedPricingPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const bookingId = await createBooking({
        propertyDetails: {
          address: formData.address,
          unitNumber: formData.unitNumber,
          propertyType: formData.propertyType,
          over4000: formData.over4000,
          visitorParking: formData.visitorParking,
          lockbox: formData.lockbox,
          realtor: formData.realtor,
          referral: formData.referral,
          specialInstructions: formData.specialInstructions,
        },
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        paymentDetails: formData.paymentDetails,
        userId: user?.uid || "",
        userEmail: user?.email || "",
        timeSlot: new Date(),
        status: "pending",
        paymentStatus: "unpaid",
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Omit<Booking, "id">);
      console.log("Booking created with ID:", bookingId);
      // Handle successful booking (e.g., show confirmation message)
    } catch (error) {
      console.error("Error creating booking:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Property Details</h2>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              title="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="unitNumber">
              Unit Number
            </label>
            <input
              type="text"
              id="unitNumber"
              name="unitNumber"
              title="Unit Number"
              value={formData.unitNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="propertyType">
              Property Type
            </label>
            <input
              type="text"
              id="propertyType"
              name="propertyType"
              title="Property Type"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2">
              Is the property over 4000 sq.ft?
            </label>
            <input
              type="checkbox"
              name="over4000"
              title="Is the property over 4000 sq.ft?"
              checked={formData.over4000}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2">
              Is there visitor parking available?
            </label>
            <input
              type="checkbox"
              name="visitorParking"
              title="Is there visitor parking available?"
              checked={formData.visitorParking}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="lockbox">
              Lockbox Code
            </label>
            <input
              type="text"
              id="lockbox"
              name="lockbox"
              title="Lockbox Code"
              value={formData.lockbox}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2">Are you a Realtor?</label>
            <input
              type="checkbox"
              name="realtor"
              title="Are you a Realtor?"
              checked={formData.realtor}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="referral">
              How did you hear about us?
            </label>
            <input
              type="text"
              id="referral"
              name="referral"
              title="How did you hear about us?"
              value={formData.referral}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-text mb-2"
              htmlFor="specialInstructions"
            >
              Special Instructions
            </label>
            <input
              type="text"
              id="specialInstructions"
              name="specialInstructions"
              title="Special Instructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              title="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              title="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              title="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              title="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <button
            type="button"
            onClick={handlePrevStep}
            className="bg-secondary text-white px-4 py-2 rounded mr-2"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <PaymentWrapper handleSubmit={handleSubmit} />
          <button
            type="button"
            onClick={handlePrevStep}
            className="bg-secondary text-white px-4 py-2 rounded mr-2"
          >
            Back
          </button>
        </>
      )}
    </form>
  );
};

export default BookingForm;
