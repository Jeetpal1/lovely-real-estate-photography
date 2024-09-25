// /app/booking/step2/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { selectedDateState, selectedTimeSlotState } from "../../../state/atoms";
import BookingLayout from "../layout";

export default function Step2() {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedTimeSlot, setSelectedTimeSlot] = useRecoilState(
    selectedTimeSlotState
  );
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const router = useRouter();

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    try {
      const response = await fetch(
        `/api/available-slots?date=${date.toISOString().split("T")[0]}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const slots = await response.json();
      setAvailableTimeSlots(slots);
    } catch (error) {
      console.error("Error fetching available time slots:", error);
      toast.error("Failed to load available time slots. Please try again.");
    }
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleNext = () => {
    if (selectedDate && selectedTimeSlot) {
      toast.success("Date and time selected!");
      router.push("/booking/step3");
    } else {
      toast.error("Please select a date and time slot");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Step 2: Select Date and Time</h2>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full border border-neutral rounded"
        minDate={new Date()}
      />
      <div className="mt-4 grid grid-cols-2 gap-2">
        {availableTimeSlots.map((timeSlot, index) => (
          <button
            key={index}
            onClick={() => handleTimeSlotChange(timeSlot)}
            className={`border px-4 py-2 rounded ${
              selectedTimeSlot === timeSlot
                ? "bg-primary text-white"
                : "bg-white text-black"
            }`}
          >
            {timeSlot}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
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
