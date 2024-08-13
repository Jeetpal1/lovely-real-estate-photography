// components/ReminderEmailTemplate.tsx

import * as React from "react";

interface ReminderEmailTemplateProps {
  firstName: string;
  bookingDate: string;
  bookingTime: string;
  propertyAddress: string;
}

export const ReminderEmailTemplate: React.FC<
  Readonly<ReminderEmailTemplateProps>
> = ({ firstName, bookingDate, bookingTime, propertyAddress }) => (
  <div>
    <h1>Reminder: Upcoming Booking</h1>
    <p>Dear {firstName},</p>
    <p>
      This is a reminder for your upcoming booking at {propertyAddress} on{" "}
      {bookingDate} at {bookingTime}.
    </p>
    <p>We look forward to serving you!</p>
  </div>
);
