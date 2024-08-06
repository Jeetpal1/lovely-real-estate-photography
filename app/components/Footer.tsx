// app/components/Footer.tsx
"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-text-light ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214442.02131412264!2d-97.32748553201087!3d49.89553629771781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf0869a7f%3A0x2b571ad9c8bf4e6a!2sWinnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sbd!4v1664346602854!5m2!1sen!2sbd"
        className="w-full h-64 "
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container mx-auto text-center py-5">
        <p>
          &copy; {new Date().getFullYear()} Lovely Real Estate Photography. All
          rights reserved.{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-primary-light"
          >
            Privacy Policy & Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
};
