// /app/booking/confirmation/page.tsx
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import {
  selectedDateState,
  selectedPricingPlanState,
  selectedTimeSlotState,
} from "../../../state/atoms";
import { useAuth } from "../../hooks/useAuth";
import { useBookings } from "../../hooks/useBookings";
import BookingLayout from "../layout";

export default function Confirmation() {
  const router = useRouter();
  const selectedPackage = useRecoilValue(selectedPricingPlanState);
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedTimeSlot = useRecoilValue(selectedTimeSlotState);
  const { addBooking } = useBookings();
  const { user } = useAuth();

  const handleConfirm = () => {
    if (user && selectedPackage && selectedDate && selectedTimeSlot) {
      const newBooking = {
        id: `${Date.now()}`,
        userId: user.uid,
        package: selectedPackage.title,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        status: "pending",
      };
      addBooking(newBooking);
      router.push("/booking/thank-you");
    } else {
      alert("Please make sure all details are filled in correctly.");
    }
  };

  return (
    <BookingLayout>
      <h2 className="text-xl font-bold mb-4">Confirmation</h2>
      <div className="mb-4">
        <p>
          <strong>Package:</strong> {selectedPackage?.title}
        </p>
        <p>
          <strong>Date:</strong> {selectedDate?.toDateString()}
        </p>
        <p>
          <strong>Time Slot:</strong> {selectedTimeSlot}
        </p>
      </div>
      <button
        onClick={handleConfirm}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>
    </BookingLayout>
  );
}
