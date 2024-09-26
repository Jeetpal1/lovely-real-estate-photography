// app/components/BookingList.tsx
"use client";

import { Booking } from "../../types";

interface BookingListProps {
  bookings: Booking[];
}

export const BookingList: React.FC<BookingListProps> = ({ bookings }) => {
  return (
    <div className="mt-8">
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="bg-white p-4 mb-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold">
                {/* {booking.propertyDetails.address} */}
              </h3>
              <p>Date: {new Date(booking.timeSlot).toLocaleDateString()}</p>
              <p>Time: {new Date(booking.timeSlot).toLocaleTimeString()}</p>
              <p>Status: {booking.status}</p>
              {/* <p>Payment Status: {booking.paymentStatus}</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};
