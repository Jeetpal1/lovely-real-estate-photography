// app/api/available-slots/route.ts

import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../firebase/config';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
  }

  const slots: string[] = [];
  const bookingsRef = collection(db, 'bookings');
  const q = query(bookingsRef, where('date', '==', date));

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const bookingData = doc.data();
      slots.push(bookingData.timeSlot);
    });

    const predefinedTimeSlots = [
      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
      "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"
    ];

    const availableSlots = predefinedTimeSlots.filter(slot => !slots.includes(slot));
    return NextResponse.json(availableSlots);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch available slots' }, { status: 500 });
  }
}
