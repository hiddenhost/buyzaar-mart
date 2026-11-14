import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Grocery Franchise in Amroha | Buyzaar Mart",
  description:
    "Want to open a grocery franchise in Amroha? Know the process, documents, store sizes and total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
  keywords: [
    "grocery franchise in Amroha",
    "how to open grocery franchise in Amroha",
    "grocery store franchise in Amroha",
    "Buyzaar Mart grocery franchise",
    "grocery franchise in Uttar Pradesh",
    "grocery franchise in India",
    "low investment grocery franchise",
    "supermarket franchise in Amroha",
    "kirana store franchise",
    "grocery franchise 15 lakh",
    "grocery franchise total investment",
    "mini mart franchise in UP",
    "FOCM franchise model",
    "FOCO franchise model",
    "franchise business in Amroha",
    "retail franchise in Amroha",
    "FMCG store franchise",
    "grocery franchise with full support",
    "grocery franchise without experience",
    "supermarket franchise near Moradabad",
    "neighbourhood grocery franchise",
    "grocery store business in Amroha",
    "apply for grocery franchise",
    "super mart franchise",
    "organised retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-open-grocery-franchise-in-amroha",
  },
  openGraph: {
    title: "How to Open a Grocery Franchise in Amroha | Buyzaar Mart",
    description:
      "Want to open a grocery franchise in Amroha? Know the process, documents, store sizes and total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-open-grocery-franchise-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Grocery Franchise in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Grocery Franchise in Amroha | Buyzaar Mart",
    description:
      "Want to open a grocery franchise in Amroha? Know the process, documents, store sizes and total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
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