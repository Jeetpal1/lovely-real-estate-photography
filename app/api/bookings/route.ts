// app/api/bookings/route.ts


import { addDoc, collection } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../firebase/config';
import { Booking } from '../../../types';

export async function POST(req: NextRequest) {
  const booking: Omit<Booking, "id"> = await req.json();

  try {
    const docRef = await addDoc(collection(db, 'bookings'), booking);
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
