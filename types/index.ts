// types/index.ts

// User type representing authenticated users
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
}

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  zip: string;
}

// Property details type
export interface PropertyDetails {
  address: string;
  unitNumber?: string;
  propertyType: string;
  over4000: boolean;
  lockbox: string;
  realtor: boolean;
  referral: string;
  specialInstructions: string;
}

// Booking type representing a booking made by a user
export interface Booking {
  id?: string;
  userId: string;
  userEmail: string;
  propertyDetails: PropertyDetails;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  paymentDetails: PaymentDetails;
  timeSlot: string; // Changed from Date to string
  status: "pending" | "confirmed" | "completed";
  paymentStatus: "unpaid" | "paid";
  createdAt: Date;
  updatedAt: Date;
}

// Pricing plan type representing a pricing plan
export interface PricingPlan {
  title: string;
  price: number;
  features: { text: string; tooltip: string }[];
}
