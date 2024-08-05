import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovely Real Estate Photography | Winnipeg",
  description:
    "Lovely Real Estate Photography, based in Winnipeg, specializes in professional real estate photography services. We offer high-quality photos, 3D Matterport tours, drone photography, and video walkthroughs to showcase properties at their best. Our experienced team and state-of-the-art equipment ensure your listings stand out in the competitive market. Whether you're a real estate agent, homeowner, or property manager, our services are designed to capture the true essence of your properties. Visit realestate.lovelyphotography.ca to book your session today.",
  openGraph: {
    title: "Lovely Real Estate Photography | Winnipeg",
    description:
      "Lovely Real Estate Photography, based in Winnipeg, specializes in professional real estate photography services. We offer high-quality photos, 3D Matterport tours, drone photography, and video walkthroughs to showcase properties at their best. Our experienced team and state-of-the-art equipment ensure your listings stand out in the competitive market. Whether you're a real estate agent, homeowner, or property manager, our services are designed to capture the true essence of your properties. Visit realestate.lovelyphotography.ca to book your session today.",
    url: "https://realestate.lovelyphotography.ca/",
    images: [
      {
        url: "https://realestate.lovelyphotography.ca/logo.png",
        width: 800,
        height: 600,
        alt: "Lovely Real Estate Photography",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovely Real Estate Photography | Winnipeg",
    description:
      "Lovely Real Estate Photography, based in Winnipeg, specializes in professional real estate photography services. We offer high-quality photos, 3D Matterport tours, drone photography, and video walkthroughs to showcase properties at their best. Our experienced team and state-of-the-art equipment ensure your listings stand out in the competitive market. Whether you're a real estate agent, homeowner, or property manager, our services are designed to capture the true essence of your properties. Visit realestate.lovelyphotography.ca to book your session today.",
    images: [
      {
        url: "https://realestate.lovelyphotography.ca/logo.png",
        alt: "Lovely Real Estate Photography",
      },
    ],
  },
  keywords:
    "Real Estate Photography Winnipeg, Property Photography Winnipeg, Drone Photography Winnipeg, 3D Matterport Tours Winnipeg, Real Estate Listings Photography, Professional Property Photos Winnipeg, Lovely Real Estate Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
