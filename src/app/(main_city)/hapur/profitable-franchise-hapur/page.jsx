import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Franchise in Hapur | The Buyzaar Mart",
  description:
    "Start a profitable franchise in Hapur with The Buyzaar Mart. Effective gross margin of 18–20%, full support and total investment from ₹15 Lakh. Apply now.",
  keywords: [
    "profitable franchise Hapur",
    "profitable franchise in Hapur",
    "most profitable franchise Hapur",
    "high profit franchise Hapur",
    "profitable business franchise Hapur",
    "Buyzaar Mart franchise Hapur",
    "The Buyzaar Mart Hapur",
    "grocery franchise Hapur",
    "supermarket franchise Hapur",
    "retail franchise Hapur",
    "low investment profitable franchise",
    "franchise from 15 lakh",
    "18-20 percent gross margin franchise",
    "FMCG franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "franchise business opportunity Hapur",
    "franchise with full support",
    "franchise with training and support",
    "supermarket franchise Delhi NCR",
    "supermarket franchise Uttar Pradesh",
    "best franchise to invest in Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/profitable-franchise-hapur",
  },
  openGraph: {
    title: "Profitable Franchise in Hapur | The Buyzaar Mart",
    description:
      "Start a profitable franchise in Hapur with The Buyzaar Mart. Effective gross margin of 18–20%, full support and total investment from ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/profitable-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Hapur | The Buyzaar Mart",
    description:
      "Start a profitable franchise in Hapur with The Buyzaar Mart. Effective gross margin of 18–20%, full support and total investment from ₹15 Lakh. Apply now.",
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