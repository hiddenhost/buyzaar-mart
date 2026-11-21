import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Amroha | The Buyzaar Mart",
  description:
    "Open a mart franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training, POS and full support. Apply now.",
  keywords: [
    "mart franchise opportunity amroha",
    "mart franchise amroha",
    "mart franchise business amroha",
    "neighbourhood mart franchise amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "grocery franchise amroha",
    "retail franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "low investment mart franchise amroha",
    "mart franchise under 20 lakh",
    "mart franchise 15 lakh amroha",
    "focm mart franchise amroha",
    "foco mart franchise amroha",
    "mart franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise business opportunity amroha",
    "mart franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/mart-franchise-opportunity-amroha",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Open a mart franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training, POS and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/amroha/mart-franchise-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Open a mart franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training, POS and full support. Apply now.",
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