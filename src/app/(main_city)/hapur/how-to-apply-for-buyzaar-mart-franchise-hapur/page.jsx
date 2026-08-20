import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "How to Apply for Buyzaar Mart Franchise in Hapur | Step-by-Step Guide",
  description:
    "Learn how to apply for The Buyzaar Mart franchise in Hapur with this step-by-step guide covering eligibility, documentation, store setup, and launch process.",
  keywords: [
    "how to apply buyzaar mart franchise Hapur",
    "buyzaar mart franchise Hapur",
    "franchise application process Hapur",
    "grocery franchise Hapur",
    "supermarket franchise Hapur",
    "apply franchise online Hapur",
    "Buyzaar Mart application steps",
    "mini mart franchise apply Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "retail franchise Uttar Pradesh",
    "franchise inquiry form Hapur",
    "franchise KYC documentation",
    "franchise eligibility Hapur",
    "franchise store setup process",
    "franchise training support Hapur",
    "franchise investment Hapur",
    "organised retail franchise Hapur",
    "neighbourhood store franchise Hapur",
    "franchise launch support Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-apply-for-buyzaar-mart-franchise-hapur",
  },
  openGraph: {
    title: "How to Apply for Buyzaar Mart Franchise in Hapur | Step-by-Step Guide",
    description:
      "Learn how to apply for The Buyzaar Mart franchise in Hapur with this step-by-step guide covering eligibility, documentation, store setup, and launch process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-apply-for-buyzaar-mart-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise in Hapur | Step-by-Step Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Buyzaar Mart Franchise in Hapur | Step-by-Step Guide",
    description:
      "Learn how to apply for The Buyzaar Mart franchise in Hapur with this step-by-step guide covering eligibility, documentation, store setup, and launch process.",
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