import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Franchise Under 10 Lakh in Greater Noida | The Buyzaar Mart Mini Mart & Super Mart",
  description:
    "Looking for the best franchise under 10 lakh in Greater Noida? Explore The Buyzaar Mart's Mini Mart & Super Mart formats. FOCM model, company-managed operations, full support. Low investment, high potential. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/best-franchise-under-10-lakh-in-greater-noida",
  },
  openGraph: {
    title:
      "Best Franchise Under 10 Lakh in Greater Noida | The Buyzaar Mart Mini Mart & Super Mart",
    description:
      "Looking for the best franchise under 10 lakh in Greater Noida? Explore The Buyzaar Mart's Mini Mart & Super Mart formats. FOCM model, company-managed operations, full support. Low investment, high potential. Apply now.",
    url: "https://www.thebuyzaarmart.com/greater-noida/best-franchise-under-10-lakh-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Under 10 Lakh in Greater Noida | The Buyzaar Mart Mini Mart & Super Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Franchise Under 10 Lakh in Greater Noida | The Buyzaar Mart Mini Mart & Super Mart",
    description:
      "Looking for the best franchise under 10 lakh in Greater Noida? Explore The Buyzaar Mart's Mini Mart & Super Mart formats. FOCM model, company-managed operations, full support. Low investment, high potential. Apply now.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}