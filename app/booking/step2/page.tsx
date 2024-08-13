// /app/booking/step2/page.tsx

"use client";

import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import { useRecoilState } from "recoil";
import { selectedDateState, selectedTimeSlotState } from "../../../state/atoms";
import BookingLayout from "../layout";

export default function Step2() {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedTimeSlot, setSelectedTimeSlot] = useRecoilState(
    selectedTimeSlotState
  );
  const router = useRouter();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const availableTimeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

  const handleNext = () => {
    if (selectedDate && selectedTimeSlot) {
      router.push("/booking/step3");
    } else {
      alert("Please select a date and time slot");
    }
  };

  return (
    <BookingLayout>
      <h2 className="text-xl font-bold mb-4">Step 2: Select Date and Time</h2>
      <Calendar value={selectedDate} onChange={handleDateChange} />
      <div className="mt-4">
        {availableTimeSlots.map((timeSlot, index) => (
          <button
            key={index}
            onClick={() => handleTimeSlotChange(timeSlot)}
            className={`border px-4 py-2 rounded ${
              selectedTimeSlot === timeSlot
                ? "bg-blue-500 text-white"
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </BookingLayout>
  );
}
