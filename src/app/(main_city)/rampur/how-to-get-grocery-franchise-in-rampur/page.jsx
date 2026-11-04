import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "How to Get a Grocery Franchise in Rampur | Buyzaar Mart",
  description:
    "Learn how to get a grocery franchise in Rampur with The Buyzaar Mart. Check eligibility, documents and approval steps. Total investment from ₹15 Lakh.",
  keywords: [
    "how to get grocery franchise in Rampur",
    "grocery franchise Rampur",
    "get grocery franchise Rampur",
    "grocery franchise eligibility",
    "grocery franchise process Rampur",
    "grocery franchise approval",
    "grocery store franchise Rampur",
    "Buyzaar Mart franchise Rampur",
    "mini mart franchise Rampur",
    "supermarket franchise Rampur",
    "mart franchise Rampur",
    "retail franchise Rampur",
    "franchise opportunity Rampur",
    "franchise business Rampur",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "grocery franchise Uttar Pradesh",
    "grocery franchise near Moradabad",
    "FOCM grocery franchise",
    "franchise owned company managed",
    "grocery franchise documents required",
    "grocery franchise application",
    "who can apply for grocery franchise",
    "grocery franchise in Bilaspur Milak Suar",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-get-grocery-franchise-in-rampur",
  },
  openGraph: {
    title: "How to Get a Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Rampur with The Buyzaar Mart. Check eligibility, documents and approval steps. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-get-grocery-franchise-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Get a Grocery Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get a Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Rampur with The Buyzaar Mart. Check eligibility, documents and approval steps. Total investment from ₹15 Lakh.",
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