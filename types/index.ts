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
  visitorParking: boolean;
  lockbox: string;
  realtor: boolean;
  referral: string;
  specialInstructions: string;
}

export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  propertyDetails: PropertyDetails;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  paymentDetails: PaymentDetails;
  timeSlot: Date;
  status: "pending" | "confirmed" | "completed";
  paymentStatus: "unpaid" | "paid";
  createdAt: Date;
  updatedAt: Date;
}