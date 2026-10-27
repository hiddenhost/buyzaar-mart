import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Apply for Buyzaar Mart Franchise Rampur | Steps",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Rampur. See the steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
  keywords: [
    "how to apply for buyzaar mart franchise rampur",
    "buyzaar mart franchise rampur",
    "buyzaar mart franchise apply online",
    "buyzaar mart franchise application form",
    "how to get buyzaar mart franchise",
    "buyzaar mart franchise process",
    "buyzaar mart franchise documents required",
    "buyzaar mart franchise registration",
    "buyzaar mart franchise contact number",
    "the buyzaar mart franchise enquiry",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "FOCM franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "retail franchise in uttar pradesh",
    "buyzaar mart franchise cost",
    "franchise business opportunity rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-apply-for-buyzaar-mart-franchise-rampur",
  },
  openGraph: {
    title: "How to Apply for Buyzaar Mart Franchise Rampur | Steps",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Rampur. See the steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-apply-for-buyzaar-mart-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise Rampur | Steps",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Buyzaar Mart Franchise Rampur | Steps",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Rampur. See the steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
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