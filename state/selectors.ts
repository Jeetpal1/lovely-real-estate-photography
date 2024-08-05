// state/selectors.ts

import { selector } from 'recoil';
import { bookingState, userState } from './atoms';

// Selector to get user email
export const userEmailState = selector<string | null>({
  key: 'userEmailState',
  get: ({ get }) => {
    const user = get(userState);
    return user ? user.email : null;
  },
});

// Selector to get user's bookings
export const userBookingsState = selector({
  key: 'userBookingsState',
  get: ({ get }) => {
    const bookings = get(bookingState);
    const user = get(userState);
    if (!user) return [];
    return bookings.filter((booking) => booking.userId === user.uid);
  },
});
