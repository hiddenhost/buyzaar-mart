import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Mathura | The Buyzaar Mart",
  description:
    "Explore the FOCO, Franchise Owned Company Operated, model with The Buyzaar Mart in Mathura — low-involvement investment, professional store management, and opportunities from ₹15 lakh onwards.",
  keywords: [
    "foco model franchise Mathura",
    "franchise owned company operated",
    "foco franchise India",
    "Buyzaar Mart Mathura",
    "passive franchise investment Mathura",
    "company managed franchise UP",
    "foco vs focm franchise",
    "grocery franchise foco model",
    "low investment foco franchise",
    "supermarket foco franchise India",
    "foco franchise Uttar Pradesh",
    "passive retail investment India",
    "foco franchise near Vrindavan",
    "company operated grocery store",
    "foco franchise cost Mathura",
    "best foco franchise India",
    "franchise management model India",
    "foco franchise ROI Mathura",
    "hands off franchise investment",
    "foco franchise support India",
    "how does foco franchise work",
    "franchise business model comparison",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/foco-model-franchise-mathura",
  },
  openGraph: {
    title: "FOCO Model Franchise in Mathura | The Buyzaar Mart",
    description:
      "Explore the FOCO, Franchise Owned Company Operated, model with The Buyzaar Mart in Mathura — low-involvement investment, professional store management, and opportunities from ₹15 lakh onwards.",
    url: "https://www.thebuyzaarmart.com/mathura/foco-model-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Mathura | The Buyzaar Mart",
    description:
      "Explore the FOCO, Franchise Owned Company Operated, model with The Buyzaar Mart in Mathura — low-involvement investment, professional store management, and opportunities from ₹15 lakh onwards.",
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