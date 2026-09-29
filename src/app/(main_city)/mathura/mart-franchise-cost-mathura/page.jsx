import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Cost in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
  description:
    "Compare mart franchise cost in Mathura across Mini, Super, and Hyper Mart formats with The Buyzaar Mart. Investment breakdown, scaling factors, and quotes.",
  keywords: [
    "mart franchise cost Mathura",
    "mini mart franchise cost",
    "super mart franchise cost",
    "hyper mart franchise cost",
    "Buyzaar Mart cost Mathura",
    "franchise cost comparison UP",
    "grocery franchise cost India",
    "mart store investment cost",
    "franchise format comparison Mathura",
    "mart franchise price UP",
    "low cost mart franchise",
    "franchise cost breakdown Mathura",
    "mart franchise near Vrindavan",
    "franchise investment calculator India",
    "supermarket franchise cost comparison",
    "mart franchise Uttar Pradesh",
    "franchise setup cost India",
    "mart franchise stock cost",
    "franchise cost by format",
    "best mart franchise cost Mathura",
    "how much does a mart franchise cost",
    "mart franchise total investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/mart-franchise-cost-mathura",
  },
  openGraph: {
    title:
      "Mart Franchise Cost in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
    description:
      "Compare mart franchise cost in Mathura across Mini, Super, and Hyper Mart formats with The Buyzaar Mart. Investment breakdown, scaling factors, and quotes.",
    url: "https://www.thebuyzaarmart.com/mathura/mart-franchise-cost-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Cost in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Cost in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
    description:
      "Compare mart franchise cost in Mathura across Mini, Super, and Hyper Mart formats with The Buyzaar Mart. Investment breakdown, scaling factors, and quotes.",
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