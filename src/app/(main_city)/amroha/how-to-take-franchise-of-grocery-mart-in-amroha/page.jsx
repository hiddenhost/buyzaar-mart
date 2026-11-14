import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Take a Grocery Mart Franchise in Amroha | Buyzaar Mart",
  description:
    "Learn how to take a grocery mart franchise in Amroha with Buyzaar Mart. Total investment from ₹15 lakh, full setup support, training and easy application steps.",
  keywords: [
    "how to take franchise of grocery mart in Amroha",
    "grocery mart franchise Amroha",
    "Buyzaar Mart franchise Amroha",
    "take franchise in Amroha",
    "grocery franchise in Amroha",
    "supermarket franchise Amroha",
    "mart franchise Amroha",
    "retail franchise Amroha",
    "grocery store franchise Amroha",
    "FOCM franchise Amroha",
    "mini mart franchise Amroha",
    "grocery franchise under 20 lakh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise",
    "franchise application process",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "apply for grocery mart franchise",
    "supermarket franchise in India",
    "neighborhood supermarket franchise",
    "FMCG store franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-take-franchise-of-grocery-mart-in-amroha",
  },
  openGraph: {
    title: "Take a Grocery Mart Franchise in Amroha | Buyzaar Mart",
    description:
      "Learn how to take a grocery mart franchise in Amroha with Buyzaar Mart. Total investment from ₹15 lakh, full setup support, training and easy application steps.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-take-franchise-of-grocery-mart-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Take a Grocery Mart Franchise in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Take a Grocery Mart Franchise in Amroha | Buyzaar Mart",
    description:
      "Learn how to take a grocery mart franchise in Amroha with Buyzaar Mart. Total investment from ₹15 lakh, full setup support, training and easy application steps.",
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