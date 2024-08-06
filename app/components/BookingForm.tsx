// app/components/BookingForm.tsx

"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  createBooking,
  fetchAvailableTimeSlots,
} from "../../services/bookingsService";
import {
  selectedDateState,
  selectedPricingPlanState,
  selectedTimeSlotState,
} from "../../state/atoms";
import { Booking, PaymentDetails, PropertyDetails } from "../../types";
import { pricingPlans } from "../data/pricingPlans";
import { useAuth } from "../hooks/useAuth";
import PaymentWrapper from "./PaymentForm";

const BookingForm = () => {
  const { user } = useAuth();
  const selectedPricingPlan = useRecoilValue(selectedPricingPlanState);
  const setSelectedDate = useSetRecoilState(selectedDateState);
  const setSelectedTimeSlot = useSetRecoilState(selectedTimeSlotState);
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedTimeSlot = useRecoilValue(selectedTimeSlotState);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
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
      console.log("Selected Pricing Plan:", selectedPricingPlan);
    }
  }, [selectedPricingPlan]);

  const handlePackageSelect = (pkg: string) => {
    setSelectedPackage(pkg);
    setStep(2);
  };

  const handleDateChange = async (value: Date) => {
    setSelectedDate(value);
    try {
      const response = await fetch(
        `/api/available-slots?date=${value.toISOString().split("T")[0]}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const slots = await response.json();
      setAvailableTimeSlots(slots);
    } catch (error) {
      console.error("Error fetching available time slots:", error);
    }
  };

  const handleTimeSlotChange = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
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
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    try {
      const bookingId = await createBooking({
        propertyDetails: {
          address: formData.address,
          unitNumber: formData.unitNumber,
          propertyType: formData.propertyType,
          over4000: formData.over4000,
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
        userId: user.uid,
        userEmail: user.email,
        timeSlot: selectedTimeSlot || "",
        status: "pending",
        paymentStatus: "unpaid",
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Omit<Booking, "id">);
      console.log("Booking created with ID:", bookingId);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Select a Package</h2>
          <div className="grid grid-cols-1 gap-4">
            {pricingPlans.under4000.map((plan, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handlePackageSelect(plan.title)}
                className="bg-white text-black px-4 py-2 border rounded"
              >
                {plan.title}
                <br />
                {plan.price}
                <br />
                {plan.features.map((feature) => (
                  <span key={feature.text}>
                    + {feature.text}
                    <br />
                  </span>
                ))}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Select Date and Time</h2>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="date">
              Select Date
            </label>
            <Calendar
              onChange={(value) => handleDateChange(value as Date)}
              value={selectedDate || new Date()}
              minDate={new Date()}
              className="w-full border border-neutral rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="timeSlot">
              Select Time Slot
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableTimeSlots.map((timeSlot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`border px-4 py-2 rounded ${
                    selectedTimeSlot === timeSlot
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleTimeSlotChange(timeSlot)}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
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
          <div className="mb-4">
            <h2 className="text-xl font-bold">{selectedPackage}</h2>
            <h3 className="text-lg">
              {selectedDate?.toDateString()} at {selectedTimeSlot}
            </h3>
          </div>
          <h2 className="text-2xl font-bold mb-4">Property Details</h2>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              title="First Name"
              placeholder="John"
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
              placeholder="Doe"
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
              placeholder="204-123-4567"
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
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="address">
              What is the complete address of the property? (include street
              number, street name, city, province)
            </label>
            <input
              type="text"
              id="address"
              name="address"
              title="Address"
              placeholder="123 Main St, Winnipeg, MB"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="unitNumber">
              Unit Number (Optional)
            </label>
            <input
              type="text"
              id="unitNumber"
              name="unitNumber"
              placeholder="Apt 101"
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
            <select
              id="propertyType"
              name="propertyType"
              title="Property Type"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral rounded"
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
              name="over4000"
              title="Is the property over 4000 sq.ft?"
              checked={formData.over4000}
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
              placeholder="Enter lockbox code if any"
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
              placeholder="Friend, Social Media, etc."
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
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              placeholder="Any special instructions for the appointment"
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

      {step === 4 && (
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
