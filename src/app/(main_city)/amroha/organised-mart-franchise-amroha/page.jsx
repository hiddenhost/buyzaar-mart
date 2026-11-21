import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Amroha | The Buyzaar Mart",
  description:
    "Open an organised mart franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, POS, training and full support.",
  keywords: [
    "organised mart franchise amroha",
    "organized mart franchise amroha",
    "organised retail franchise amroha",
    "organised supermarket franchise amroha",
    "buyzaar mart franchise amroha",
    "mart franchise amroha",
    "supermarket franchise amroha",
    "grocery franchise amroha",
    "retail franchise amroha",
    "branded mart franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "low investment mart franchise amroha",
    "mart franchise under 20 lakh",
    "focm mart franchise amroha",
    "foco mart franchise amroha",
    "organised mart franchise uttar pradesh",
    "franchise business opportunity amroha",
    "apply buyzaar mart franchise",
    "mart franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/organised-mart-franchise-amroha",
  },
  openGraph: {
    title: "Organised Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Open an organised mart franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, POS, training and full support.",
    url: "https://www.thebuyzaarmart.com/amroha/organised-mart-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Open an organised mart franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, POS, training and full support.",
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