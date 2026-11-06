import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise Registration in Amroha | Process and Documents",
  description:
    "Register for a Buyzaar Mart supermarket franchise in Amroha. Know the documents, application form, agreement steps and total investment from ₹15 lakh. Reply within 24 hours.",
  keywords: [
    "buyzaar mart franchise registration amroha",
    "buyzaar mart franchise registration",
    "buyzaar mart franchise application form",
    "buyzaar mart franchise documents",
    "buyzaar mart franchise amroha",
    "the buyzaar mart",
    "supermarket franchise registration amroha",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "franchise agreement buyzaar mart",
    "buyzaar mart franchise process",
    "how to register buyzaar mart franchise",
    "supermarket franchise uttar pradesh",
    "FOCM franchise amroha",
    "FOCO franchise amroha",
    "mini mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity amroha",
    "organised retail franchise amroha",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-registration-amroha",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise Registration in Amroha | Process and Documents",
    description:
      "Register for a Buyzaar Mart supermarket franchise in Amroha. Know the documents, application form, agreement steps and total investment from ₹15 lakh. Reply within 24 hours.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-registration-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Registration in Amroha | Process and Documents",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise Registration in Amroha | Process and Documents",
    description:
      "Register for a Buyzaar Mart supermarket franchise in Amroha. Know the documents, application form, agreement steps and total investment from ₹15 lakh. Reply within 24 hours.",
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