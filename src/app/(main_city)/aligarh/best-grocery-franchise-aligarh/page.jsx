import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Compare what makes the best grocery franchise in Aligarh. See The Buyzaar Mart's FOCM and FOCO models, 18–20% margin, supply chain support and investment.",
  keywords: [
    "best grocery franchise Aligarh",
    "best grocery franchise in Aligarh",
    "top grocery franchise Aligarh",
    "grocery franchise in Aligarh",
    "grocery franchise opportunity Aligarh",
    "grocery store franchise Aligarh",
    "profitable grocery franchise Aligarh",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "best grocery franchise India",
    "Buyzaar Mart grocery franchise",
    "FOCM grocery franchise",
    "FOCO grocery franchise",
    "supermarket franchise in Aligarh",
    "grocery franchise Uttar Pradesh",
    "grocery franchise with full support",
    "franchise owned company managed",
    "grocery franchise cost",
    "FMCG franchise Aligarh",
    "daily need franchise Aligarh",
    "Mini Mart franchise Aligarh",
    "trusted grocery franchise brand",
    "grocery business Aligarh",
    "The Buyzaar Mart",
    "grocery franchise 15 lakh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/best-grocery-franchise-aligarh",
  },
  openGraph: {
    title: "Best Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Compare what makes the best grocery franchise in Aligarh. See The Buyzaar Mart's FOCM and FOCO models, 18–20% margin, supply chain support and investment.",
    url: "https://www.thebuyzaarmart.com/aligarh/best-grocery-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Compare what makes the best grocery franchise in Aligarh. See The Buyzaar Mart's FOCM and FOCO models, 18–20% margin, supply chain support and investment.",
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