// services/bookingsService.ts

import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Booking } from '../types';

// Function to create a new booking
export const createBooking = async (booking: Booking) => {
  const bookingsRef = collection(db, 'bookings');
  await addDoc(bookingsRef, booking);
};

// Function to fetch bookings for a specific user
export const fetchUserBookings = async (userId: string): Promise<Booking[]> => {
  const bookingsRef = collection(db, 'bookings');
  const q = query(bookingsRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Booking[];
};
