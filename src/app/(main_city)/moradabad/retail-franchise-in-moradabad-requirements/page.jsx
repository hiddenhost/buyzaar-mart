import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise in Moradabad Requirements | The Buyzaar Mart",
  description:
    "Complete eligibility, space, and documentation requirements for a retail franchise in Moradabad with The Buyzaar Mart. Check if you qualify today.",
  keywords: [
    "retail franchise moradabad requirements",
    "buyzaar mart eligibility",
    "franchise space requirement moradabad",
    "grocery franchise qualification moradabad",
    "franchise documents moradabad",
    "who can apply franchise moradabad",
    "franchise investment requirement UP",
    "small business eligibility moradabad",
    "supermarket franchise requirements",
    "franchise application criteria",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/retail-franchise-in-moradabad-requirements",
  },
  openGraph: {
    title: "Retail Franchise in Moradabad Requirements | The Buyzaar Mart",
    description:
      "Complete eligibility, space, and documentation requirements for a retail franchise in Moradabad with The Buyzaar Mart. Check if you qualify today.",
    url: "https://www.thebuyzaarmart.com/moradabad/retail-franchise-in-moradabad-requirements",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise in Moradabad Requirements | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise in Moradabad Requirements | The Buyzaar Mart",
    description:
      "Complete eligibility, space, and documentation requirements for a retail franchise in Moradabad with The Buyzaar Mart. Check if you qualify today.",
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