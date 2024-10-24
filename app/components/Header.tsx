// app/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
  HiArrowRightOnRectangle,
  HiBars3,
  HiCalendarDays,
  HiCamera,
  HiInformationCircle,
  HiPhone,
  HiXMark,
} from "react-icons/hi2";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+14314582575"; // First phone number
  const email = "lovelyphotographywinnipeg@gmail.com"; // Email address

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 overflow-hidden bg-white">
      <div className="container mx-auto flex justify-between items-center h-24 pb-4">
        <Link href="/" className="relative h-24 w-48 overflow-hidden">
          <Image
            src="/images/lovely-media-logo.png"
            className="absolute top-0 left-0 h-30 w-38 z-[60]"
            width={120}
            height={52}
            alt="Logo"
          />
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="">
            {isOpen ? (
              <HiXMark className="h-12 w-12" />
            ) : (
              <HiBars3 className="h-12 w-12" />
            )}
          </button>
        </div>
        <nav
          className={`lg:flex items-center pt-4 space-x-4 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Link href="/about">
            <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
              <HiInformationCircle className="h-5 w-5" />
              <span>About</span>
            </div>
          </Link>
          <Link href="/services">
            <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
              <HiCamera className="h-5 w-5" />
              <span>Services</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
              <HiPhone className="h-5 w-5" />
              <span>Contact</span>
            </div>
          </Link>
          {/* <Link href="/book-now">
            <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
              <HiCalendarDays className="h-5 w-5" />
              <span>Bookings</span>
            </div>
          </Link> */}
          <Link href="/login">
            <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
              <HiArrowRightOnRectangle className="h-5 w-5" />
              <span>Login</span>
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/lovelyrealestatephotography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-5 w-5 mx-2 " />
          </Link>
          <Link legacyBehavior href={`tel:${phoneNumber}`}>
            <button className="bg-primary text-white px-4 py-2 rounded-full">
              Call Us
            </button>
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-9 right-4"
            type="button"
            title="close"
          >
            <HiXMark className="h-12 w-12" />
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/about">
              <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
                <HiInformationCircle className="h-6 w-6" />
                <span className="text-xl">About</span>
              </div>
            </Link>
            <Link href="/services">
              <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
                <HiCamera className="h-6 w-6" />
                <span className="text-xl">Services</span>
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
                <HiPhone className="h-6 w-6" />
                <span className="text-xl">Contact</span>
              </div>
            </Link>
            <Link href="/book-now">
              <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
                <HiCalendarDays className="h-6 w-6" />
                <span className="text-xl">Bookings</span>
              </div>
            </Link>
            <Link href="/login">
              <div className="flex items-center space-x-1 mx-2 cursor-pointer ">
                <HiArrowRightOnRectangle className="h-6 w-6" />
                <span className="text-xl">Login</span>
              </div>
            </Link>

            <Link legacyBehavior href={`tel:${phoneNumber}`}>
              <button className="bg-primary text-white px-6 py-2 rounded-full mt-4">
                Call Us
              </button>
            </Link>
            <Link
              href="https://www.instagram.com/lovelyrealestatephotography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-6 w-6 mx-2  mt-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
