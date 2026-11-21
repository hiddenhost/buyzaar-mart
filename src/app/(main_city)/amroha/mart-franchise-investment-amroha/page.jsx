import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Investment in Amroha | The Buyzaar Mart",
  description:
    "Planning a mart franchise in Amroha? Total investment ₹15–20 lakh for a Mini Mart, 18–20% gross margin, 5-year FOCM model, POS and full support. Enquire now.",
  keywords: [
    "mart franchise investment Amroha",
    "mart franchise in Amroha",
    "supermarket franchise Amroha",
    "Buyzaar Mart franchise Amroha",
    "The Buyzaar Mart",
    "grocery franchise Amroha",
    "Mini Mart franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "supermarket franchise in Uttar Pradesh",
    "FOCM franchise India",
    "franchise owned company managed",
    "low investment supermarket franchise",
    "grocery franchise under 20 lakh",
    "retail franchise Amroha",
    "kirana store upgrade franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "mart franchise cost India",
    "how to start a mart franchise",
    "franchise business opportunity UP",
    "supermarket franchise with training",
    "POS enabled supermarket franchise",
    "mart franchise profit margin",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/mart-franchise-investment-amroha",
  },
  openGraph: {
    title: "Mart Franchise Investment in Amroha | The Buyzaar Mart",
    description:
      "Planning a mart franchise in Amroha? Total investment ₹15–20 lakh for a Mini Mart, 18–20% gross margin, 5-year FOCM model, POS and full support. Enquire now.",
    url: "https://www.thebuyzaarmart.com/amroha/mart-franchise-investment-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Investment in Amroha | The Buyzaar Mart",
    description:
      "Planning a mart franchise in Amroha? Total investment ₹15–20 lakh for a Mini Mart, 18–20% gross margin, 5-year FOCM model, POS and full support. Enquire now.",
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