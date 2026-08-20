import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Get Grocery Franchise in Hapur | Eligibility & Process",
  description:
    "Learn how to get a grocery franchise in Hapur with The Buyzaar Mart, covering eligibility, qualifying criteria, required documents, and the approval process.",
  keywords: [
    "how to get grocery franchise Hapur",
    "get grocery franchise Hapur",
    "buyzaar mart Hapur",
    "grocery franchise eligibility Hapur",
    "grocery franchise approval Hapur",
    "supermarket franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "grocery franchise qualifying criteria Hapur",
    "grocery franchise documents Hapur",
    "retail franchise Uttar Pradesh",
    "buyzaar mart franchise apply Hapur",
    "grocery franchise selection Hapur",
    "organised retail franchise Hapur",
    "daily needs store franchise Hapur",
    "grocery franchise requirements Hapur",
    "franchise partner selection Hapur",
    "grocery retail business Hapur",
    "franchise approval timeline Hapur",
    "grocery franchise checklist Hapur",
    "retail business opportunity Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-get-grocery-franchise-in-hapur",
  },
  openGraph: {
    title: "How to Get Grocery Franchise in Hapur | Eligibility & Process",
    description:
      "Learn how to get a grocery franchise in Hapur with The Buyzaar Mart, covering eligibility, qualifying criteria, required documents, and the approval process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-get-grocery-franchise-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Get Grocery Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Grocery Franchise in Hapur | Eligibility & Process",
    description:
      "Learn how to get a grocery franchise in Hapur with The Buyzaar Mart, covering eligibility, qualifying criteria, required documents, and the approval process.",
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