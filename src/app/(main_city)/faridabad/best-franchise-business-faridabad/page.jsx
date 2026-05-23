import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Franchise Business in Faridabad | The Buyzaar Mart Grocery Franchise",
  description:
    "Discover the best franchise business in Faridabad with The Buyzaar Mart. Start your own supermarket in ₹15 Lakh with FOCM/FOCO model, full brand support & guaranteed returns. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/best-franchise-business-faridabad",
  },
  openGraph: {
    title:
      "Best Franchise Business in Faridabad | The Buyzaar Mart Grocery Franchise",
    description:
      "Discover the best franchise business in Faridabad with The Buyzaar Mart. Start your own supermarket in ₹15 Lakh with FOCM/FOCO model, full brand support & guaranteed returns. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/best-franchise-business-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Business in Faridabad | The Buyzaar Mart Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Franchise Business in Faridabad | The Buyzaar Mart Grocery Franchise",
    description:
      "Discover the best franchise business in Faridabad with The Buyzaar Mart. Start your own supermarket in ₹15 Lakh with FOCM/FOCO model, full brand support & guaranteed returns. Apply now!",
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