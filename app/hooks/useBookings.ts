// app/hooks/useBookings.ts
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { bookingState } from '../../state/atoms';
import { Booking } from '../../types';

export const useBookings = () => {
  const bookings = useRecoilValue(bookingState);
  const setBookings = useSetRecoilState(bookingState);

  const addBooking = (booking: Booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  const removeBooking = (bookingId: string) => {
    setBookings((prevBookings) => prevBookings.filter(booking => booking.id !== bookingId));
  };

  return {
    bookings,
    addBooking,
    removeBooking,
  };
};
