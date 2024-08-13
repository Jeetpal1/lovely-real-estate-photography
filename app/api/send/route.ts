// app/api/send/route.ts

import { NextRequest, NextResponse } from 'next/server';
import {
    sendBookingConfirmationEmail,
    sendContactInquiryEmail,
    sendReminderEmail,
} from '../../../services/emailService';

export async function POST(req: NextRequest) {
  try {
    const { type, ...data } = await req.json();

    let response;

    switch (type) {
      case 'contact':
        response = await sendContactInquiryEmail(data.name, data.email, data.phone, data.message);
        break;
      case 'booking_confirmation':
        response = await sendBookingConfirmationEmail(
          data.firstName,
          data.recipientEmail,
          data.bookingDate,
          data.bookingTime,
          data.propertyAddress
        );
        break;
      case 'reminder':
        response = await sendReminderEmail(
          data.firstName,
          data.recipientEmail,
          data.bookingDate,
          data.bookingTime,
          data.propertyAddress
        );
        break;
      default:
        return NextResponse.json({ error: 'Invalid email type' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
