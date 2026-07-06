import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Opportunity in Bareilly for Beginners | Buyzaar Mart",
  description:
    "Explore a beginner-friendly franchise business opportunity in Bareilly with Buyzaar Mart. Simple setup, brand support, low-risk entry. Enquire now!",
  keywords: [
    "franchise business opportunity Bareilly",
    "franchise for beginners Bareilly",
    "Buyzaar Mart beginner franchise",
    "first business franchise UP",
    "low risk franchise Bareilly",
    "easy franchise business India",
    "new entrepreneur franchise Bareilly",
    "retail franchise for beginners",
    "Buyzaar Mart franchise support",
    "start a business Bareilly",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/franchise-business-opportunity-in-bareilly-for-beginners",
  },
  openGraph: {
    title: "Franchise Business Opportunity in Bareilly for Beginners | Buyzaar Mart",
    description:
      "Explore a beginner-friendly franchise business opportunity in Bareilly with Buyzaar Mart. Simple setup, brand support, low-risk entry. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/franchise-business-opportunity-in-bareilly-for-beginners",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Opportunity in Bareilly for Beginners | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Opportunity in Bareilly for Beginners | Buyzaar Mart",
    description:
      "Explore a beginner-friendly franchise business opportunity in Bareilly with Buyzaar Mart. Simple setup, brand support, low-risk entry. Enquire now!",
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