// services/bookingsService.ts
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Booking } from '../types';

export const createBooking = async (booking: Omit<Booking, "id">) => {
  try {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating booking: ", error);
    throw error;
  }
};

export const fetchAvailableTimeSlots = async (date: Date): Promise<string[]> => {
  const response = await fetch(`/api/available-slots?date=${date.toISOString().split('T')[0]}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getUserBookings = async (userId: string): Promise<Booking[]> => {
  const q = query(collection(db, 'bookings'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Booking);
};
