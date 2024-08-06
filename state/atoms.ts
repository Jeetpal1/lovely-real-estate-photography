// state/atoms.ts
import { atom } from 'recoil';
import { Booking, User } from '../types';

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


export interface PricingPlan {
  title: string;
  price: number;
  features: { text: string; tooltip: string }[];
}

export const selectedPricingPlanState = atom<PricingPlan | null>({
  key: 'selectedPricingPlanState',
  default: null,
});