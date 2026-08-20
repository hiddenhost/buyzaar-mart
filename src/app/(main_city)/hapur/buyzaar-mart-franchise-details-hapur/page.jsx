import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Details Hapur | Investment, Formats & Support",
  description:
    "Get complete Buyzaar Mart franchise details for Hapur, including store formats, business models, support offered, eligibility, and the application process.",
  keywords: [
    "buyzaar mart franchise details Hapur",
    "franchise details Hapur",
    "buyzaar mart Hapur",
    "grocery franchise details Hapur",
    "supermarket franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "franchise support Hapur",
    "retail franchise Uttar Pradesh",
    "franchise eligibility Hapur",
    "franchise investment details Hapur",
    "franchise application process Hapur",
    "buyzaar mart franchise apply Hapur",
    "franchise store setup Hapur",
    "franchise training support Hapur",
    "retail business opportunity Hapur",
    "organised retail franchise Hapur",
    "daily needs store franchise Hapur",
    "franchise documentation Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-franchise-details-hapur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Details Hapur | Investment, Formats & Support",
    description:
      "Get complete Buyzaar Mart franchise details for Hapur, including store formats, business models, support offered, eligibility, and the application process.",
    url: "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-franchise-details-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Details Hapur | Investment, Formats & Support",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Details Hapur | Investment, Formats & Support",
    description:
      "Get complete Buyzaar Mart franchise details for Hapur, including store formats, business models, support offered, eligibility, and the application process.",
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