"use client";

import { useRecoilValue } from "recoil";
import { userBookingsState } from "../../state/selectors";
import { BookingList } from "../components/BookingList";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Bookings() {
  const bookings = useRecoilValue(userBookingsState);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold">Your Bookings</h1>
        <BookingList bookings={bookings} />
      </main>
      <Footer />
    </div>
  );
}
