import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Amroha | Buyzaar Mart",
  description:
    "Learn how to open a mart franchise in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh, 18–20% gross margin, full setup and support. Apply now.",
  keywords: [
    "mart franchise in Amroha",
    "how to open mart franchise in Amroha",
    "supermarket franchise in Amroha",
    "grocery franchise in Amroha",
    "Buyzaar Mart franchise",
    "Buyzaar Mart Amroha",
    "supermarket franchise in Uttar Pradesh",
    "grocery store franchise in India",
    "low investment supermarket franchise",
    "mini mart franchise in UP",
    "FOCM franchise model",
    "FOCO franchise model",
    "retail franchise in Amroha",
    "kirana store franchise",
    "franchise business in Amroha",
    "supermarket franchise cost",
    "mart franchise total investment",
    "15 lakh grocery franchise",
    "grocery franchise with full support",
    "super mart franchise",
    "hyper mart franchise",
    "FMCG store franchise",
    "supermarket franchise near Moradabad",
    "neighbourhood supermarket franchise",
    "apply for supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-open-mart-franchise-in-amroha",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Amroha | Buyzaar Mart",
    description:
      "Learn how to open a mart franchise in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh, 18–20% gross margin, full setup and support. Apply now.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-open-mart-franchise-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Amroha | Buyzaar Mart",
    description:
      "Learn how to open a mart franchise in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh, 18–20% gross margin, full setup and support. Apply now.",
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