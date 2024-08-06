// state/atoms.ts
import { atom } from 'recoil';
import { Booking, PricingPlan, User } from '../types';

// User state atom
export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

// Booking state atom
export const bookingState = atom<Booking[]>({
  key: 'bookingState',
  default: [],
});

// Selected pricing plan state atom
export const selectedPricingPlanState = atom<PricingPlan | null>({
  key: 'selectedPricingPlanState',
  default: null,
});

// Selected date state atom
export const selectedDateState = atom<Date | null>({
  key: 'selectedDateState',
  default: null,
});

// Selected time slot state atom
export const selectedTimeSlotState = atom<string | null>({
  key: 'selectedTimeSlotState',
  default: null,
});
