import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Rampur | Buyzaar Mart",
  description:
    "Learn how to open a mart franchise in Rampur with Buyzaar Mart: models, space, steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
  keywords: [
    "how to open mart franchise in rampur",
    "how to open a mart franchise",
    "open mart franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart franchise",
    "how to start supermarket franchise rampur",
    "how to open grocery franchise rampur",
    "buyzaar mart franchise process",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise investment",
    "buyzaar mart franchise contact number",
    "buyzaar mart franchise apply online",
    "mart franchise rampur",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "retail franchise in uttar pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-open-mart-franchise-in-rampur",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to open a mart franchise in Rampur with Buyzaar Mart: models, space, steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-open-mart-franchise-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to open a mart franchise in Rampur with Buyzaar Mart: models, space, steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
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