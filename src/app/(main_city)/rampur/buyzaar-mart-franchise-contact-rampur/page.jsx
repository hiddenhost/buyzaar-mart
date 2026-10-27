import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Contact Rampur | Apply Now",
  description:
    "Contact the Buyzaar Mart franchise team for Rampur. Call +91 9217991727, email or apply online. Total investment from ₹15 Lakh with full support.",
  keywords: [
    "buyzaar mart franchise contact rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart contact number",
    "buyzaar mart franchise enquiry",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "franchise contact rampur uttar pradesh",
    "buyzaar mart franchise phone number",
    "buyzaar mart franchise email",
    "buyzaar mart franchise apply online",
    "FOCM franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "retail franchise in uttar pradesh",
    "branded grocery franchise rampur",
    "franchise business opportunity rampur",
    "buyzaar mart franchise cost",
    "supermarket franchise with full support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-contact-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Contact Rampur | Apply Now",
    description:
      "Contact the Buyzaar Mart franchise team for Rampur. Call +91 9217991727, email or apply online. Total investment from ₹15 Lakh with full support.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-contact-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Contact Rampur | Apply Now",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Contact Rampur | Apply Now",
    description:
      "Contact the Buyzaar Mart franchise team for Rampur. Call +91 9217991727, email or apply online. Total investment from ₹15 Lakh with full support.",
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