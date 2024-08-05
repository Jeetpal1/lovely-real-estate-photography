// types/index.ts
// User type representing authenticated users
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
}

// Property details type
export interface PropertyDetails {
  address: string;
  unitNumber?: string;
  propertyType: string;
  squareFootage?: number;
  parking?: boolean;
  lockbox?: string;
  realtor?: boolean;
  specialInstructions?: string;
}

// Booking type representing a booking made by a user
export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  propertyDetails: PropertyDetails;
  timeSlot: Date;
  status: 'pending' | 'confirmed' | 'completed';
  paymentStatus: 'unpaid' | 'paid';
  createdAt: Date;
  updatedAt: Date;
}
