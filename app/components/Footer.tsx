// app/components/Footer.tsx
"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-text-light py-4">
      <div className="container mx-auto text-center">
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
