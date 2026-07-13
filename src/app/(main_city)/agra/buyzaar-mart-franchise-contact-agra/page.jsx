import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Contact Agra | Get in Touch for Franchise Details",
  description:
    "Contact Buyzaar Mart for a grocery franchise in Agra. Learn the best ways to reach the team, what to prepare, and what happens after you connect.",
  keywords: [
    "Buyzaar Mart franchise contact Agra",
    "contact Buyzaar Mart franchise",
    "grocery franchise contact Agra",
    "Buyzaar Mart Agra phone number",
    "franchise enquiry contact Agra",
    "zero royalty franchise Agra",
    "Mini Mart Super Mart Hyper Mart",
    "franchise team contact Agra",
    "Buyzaar Mart WhatsApp contact",
    "franchise opportunity Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/buyzaar-mart-franchise-contact-agra",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Contact Agra | Get in Touch for Franchise Details",
    description:
      "Contact Buyzaar Mart for a grocery franchise in Agra. Learn the best ways to reach the team, what to prepare, and what happens after you connect.",
    url: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-franchise-contact-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Contact Agra | Get in Touch for Franchise Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Contact Agra | Get in Touch for Franchise Details",
    description:
      "Contact Buyzaar Mart for a grocery franchise in Agra. Learn the best ways to reach the team, what to prepare, and what happens after you connect.",
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