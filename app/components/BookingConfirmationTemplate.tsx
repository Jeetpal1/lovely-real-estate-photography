// components/BookingConfirmationTemplate.tsx

import * as React from "react";

interface BookingConfirmationTemplateProps {
  firstName: string;
  bookingDate: string;
  bookingTime: string;
  propertyAddress: string;
}

export const BookingConfirmationTemplate: React.FC<
  Readonly<BookingConfirmationTemplateProps>
> = ({ firstName, bookingDate, bookingTime, propertyAddress }) => (
  <div>
    <h1>Booking Confirmation</h1>
    <p>Dear {firstName},</p>
    <p>
      Your booking for {propertyAddress} is confirmed on {bookingDate} at{" "}
      {bookingTime}.
    </p>
    <p>Thank you for choosing our services!</p>
  </div>
);
