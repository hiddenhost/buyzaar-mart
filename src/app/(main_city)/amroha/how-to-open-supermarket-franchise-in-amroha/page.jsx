import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Supermarket Franchise in Amroha | Buyzaar Mart",
  description:
    "Looking to open a supermarket franchise in Amroha? Know formats, models, process and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
  keywords: [
    "supermarket franchise in Amroha",
    "how to open supermarket franchise in Amroha",
    "supermarket franchise in Uttar Pradesh",
    "supermarket franchise in India",
    "Buyzaar Mart supermarket franchise",
    "Buyzaar Mart Amroha",
    "low investment supermarket franchise",
    "supermarket franchise cost",
    "supermarket franchise 15 lakh",
    "supermarket franchise total investment",
    "mini mart franchise in UP",
    "super mart franchise",
    "hyper mart franchise",
    "FOCM franchise model",
    "FOCO franchise model",
    "neighbourhood supermarket franchise",
    "supermarket franchise without experience",
    "supermarket franchise with full support",
    "grocery supermarket franchise",
    "FMCG supermarket franchise",
    "kirana to supermarket franchise",
    "supermarket franchise near Moradabad",
    "franchise business in Amroha",
    "apply for supermarket franchise",
    "organised retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-open-supermarket-franchise-in-amroha",
  },
  openGraph: {
    title: "How to Open Supermarket Franchise in Amroha | Buyzaar Mart",
    description:
      "Looking to open a supermarket franchise in Amroha? Know formats, models, process and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-open-supermarket-franchise-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Supermarket Franchise in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Supermarket Franchise in Amroha | Buyzaar Mart",
    description:
      "Looking to open a supermarket franchise in Amroha? Know formats, models, process and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
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