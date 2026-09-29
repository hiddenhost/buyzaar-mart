import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above ₹15 Lakh in Mathura | Buyzaar Mart",
  description:
    "Planning a mart franchise above ₹15 lakh in Mathura? Explore Super Mart and Hyper Mart formats, extra costs and how to apply with The Buyzaar Mart. Enquire now.",
  keywords: [
    "mart franchise above 15 lakh Mathura",
    "mart franchise in Mathura",
    "supermarket franchise Mathura",
    "Super Mart franchise Mathura",
    "Hyper Mart franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "grocery mart franchise Mathura",
    "retail franchise Mathura",
    "high investment franchise Mathura",
    "big format grocery franchise",
    "FMCG franchise Mathura",
    "franchise above 15 lakh India",
    "supermarket franchise Uttar Pradesh",
    "best mart franchise in UP",
    "Mathura franchise investment",
    "start supermarket in Mathura",
    "Buyzaar Mart franchise cost",
    "franchise business in Mathura",
    "hypermarket franchise India",
    "mart franchise enquiry",
    "larger grocery store franchise",
    "Buyzaar Mart Super Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/mart-franchise-above-15-lakh-mathura",
  },
  openGraph: {
    title: "Mart Franchise Above ₹15 Lakh in Mathura | Buyzaar Mart",
    description:
      "Planning a mart franchise above ₹15 lakh in Mathura? Explore Super Mart and Hyper Mart formats, extra costs and how to apply with The Buyzaar Mart. Enquire now.",
    url: "https://www.thebuyzaarmart.com/mathura/mart-franchise-above-15-lakh-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above ₹15 Lakh in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above ₹15 Lakh in Mathura | Buyzaar Mart",
    description:
      "Planning a mart franchise above ₹15 lakh in Mathura? Explore Super Mart and Hyper Mart formats, extra costs and how to apply with The Buyzaar Mart. Enquire now.",
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