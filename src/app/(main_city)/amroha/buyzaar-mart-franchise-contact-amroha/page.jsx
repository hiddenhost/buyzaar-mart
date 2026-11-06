import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise Contact in Amroha | Phone, Email, Address",
  description:
    "Contact The Buyzaar Mart for a supermarket franchise in Amroha. Call +91 9217991727 or email info@thebuyzaarmart.com. Total investment starts from ₹15 lakh. Reply within 24 hours.",
  keywords: [
    "buyzaar mart franchise contact amroha",
    "buyzaar mart contact number",
    "buyzaar mart franchise phone number",
    "buyzaar mart email id",
    "buyzaar mart head office noida",
    "buyzaar mart franchise amroha",
    "the buyzaar mart",
    "supermarket franchise contact amroha",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "franchise enquiry amroha",
    "buyzaar mart franchise helpline",
    "supermarket franchise uttar pradesh",
    "FOCM franchise amroha",
    "FOCO franchise amroha",
    "mini mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "buyzaar mart franchise details",
    "organised retail franchise amroha",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-contact-amroha",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise Contact in Amroha | Phone, Email, Address",
    description:
      "Contact The Buyzaar Mart for a supermarket franchise in Amroha. Call +91 9217991727 or email info@thebuyzaarmart.com. Total investment starts from ₹15 lakh. Reply within 24 hours.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-contact-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Contact in Amroha | Phone, Email, Address",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise Contact in Amroha | Phone, Email, Address",
    description:
      "Contact The Buyzaar Mart for a supermarket franchise in Amroha. Call +91 9217991727 or email info@thebuyzaarmart.com. Total investment starts from ₹15 lakh. Reply within 24 hours.",
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