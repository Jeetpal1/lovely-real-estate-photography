// utils/api.ts
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Booking } from '../types';

export const createBooking = async (booking: Booking) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), booking);
    return docRef.id;
  } catch (e) {
    console.error('Error adding booking: ', e);
    throw e;
  }
};

export const getUserBookings = async (userId: string) => {
  const q = query(collection(db, 'bookings'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Booking);
};
