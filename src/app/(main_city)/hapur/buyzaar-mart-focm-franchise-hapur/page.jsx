import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCM Franchise Hapur | Franchise Owned Company Managed",
  description:
    "Explore the Buyzaar Mart FOCM franchise model in Hapur. Learn how the franchise owned company managed format works, its benefits, eligibility, and process.",
  keywords: [
    "buyzaar mart FOCM franchise Hapur",
    "FOCM franchise Hapur",
    "franchise owned company managed Hapur",
    "buyzaar mart Hapur",
    "grocery franchise Hapur",
    "supermarket franchise Hapur",
    "salaried professional franchise Hapur",
    "mini mart FOCM Hapur",
    "super mart FOCM Hapur",
    "hyper mart FOCM Hapur",
    "company managed store Hapur",
    "retail investment Hapur",
    "FOCM vs FOCO Hapur",
    "semi-active franchise Hapur",
    "retail franchise Uttar Pradesh",
    "buyzaar mart franchise apply Hapur",
    "side income franchise Hapur",
    "franchise support Hapur",
    "organised retail investment Hapur",
    "daily needs store franchise Hapur",
    "franchise application process Hapur",
    "retail business opportunity Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-focm-franchise-hapur",
  },
  openGraph: {
    title: "Buyzaar Mart FOCM Franchise Hapur | Franchise Owned Company Managed",
    description:
      "Explore the Buyzaar Mart FOCM franchise model in Hapur. Learn how the franchise owned company managed format works, its benefits, eligibility, and process.",
    url: "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-focm-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise Hapur | Franchise Owned Company Managed",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCM Franchise Hapur | Franchise Owned Company Managed",
    description:
      "Explore the Buyzaar Mart FOCM franchise model in Hapur. Learn how the franchise owned company managed format works, its benefits, eligibility, and process.",
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