import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart Franchise in Mathura – Apply Now | Grocery Franchise",
  description:
    "Apply for The Buyzaar Mart franchise in Mathura. Grocery & supermarket business opportunity from ₹15 Lakh with FOCM model, full setup, supply chain & support.",
  keywords: [
    "Buyzaar Mart franchise Mathura",
    "grocery franchise in Mathura",
    "supermarket franchise Mathura",
    "franchise apply Mathura",
    "how to apply Buyzaar Mart franchise",
    "grocery store franchise Mathura",
    "FOCM franchise Mathura",
    "FOFO franchise Mathura",
    "low investment grocery franchise Mathura",
    "supermarket franchise cost Mathura",
    "grocery franchise 15 lakh Mathura",
    "retail franchise Uttar Pradesh",
    "Buyzaar Mart franchise apply online",
    "grocery franchise application process",
    "supermarket business opportunity Mathura",
    "franchise owned company managed Mathura",
    "grocery franchise with training and support",
    "Mathura supermarket investment",
    "FMCG store franchise Mathura",
    "neighborhood grocery franchise Mathura",
    "Buyzaar Mart Mini Mart Super Mart Hyper Mart",
    "grocery franchise eligibility Mathura",
    "supermarket franchise ROI Mathura",
    "franchise business investment Mathura",
    "franchise documents required Mathura",
    "grocery franchise growth opportunities Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-apply-mathura",
  },
  openGraph: {
    title:
      "The Buyzaar Mart Franchise in Mathura – Apply Now | Grocery Franchise",
    description:
      "Apply for The Buyzaar Mart franchise in Mathura. Grocery & supermarket business opportunity from ₹15 Lakh with FOCM model, full setup, supply chain & support.",
    url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-apply-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart Franchise in Mathura – Apply Now | Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Buyzaar Mart Franchise in Mathura – Apply Now | Grocery Franchise",
    description:
      "Apply for The Buyzaar Mart franchise in Mathura. Grocery & supermarket business opportunity from ₹15 Lakh with FOCM model, full setup, supply chain & support.",
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