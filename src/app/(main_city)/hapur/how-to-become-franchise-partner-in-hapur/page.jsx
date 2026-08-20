import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become Franchise Partner in Hapur | Buyzaar Mart Guide",
  description:
    "Learn how to become a Buyzaar Mart franchise partner in Hapur, covering eligibility, partner qualities, evaluation criteria, and the complete onboarding journey.",
  keywords: [
    "how to become franchise partner Hapur",
    "become franchise partner Hapur",
    "buyzaar mart Hapur",
    "franchise partner eligibility Hapur",
    "grocery franchise partner Hapur",
    "supermarket franchise Hapur",
    "mini mart partner Hapur",
    "super mart partner Hapur",
    "hyper mart partner Hapur",
    "franchise partner criteria Hapur",
    "franchise onboarding Hapur",
    "retail franchise Uttar Pradesh",
    "franchise partner journey Hapur",
    "buyzaar mart franchise apply Hapur",
    "franchise partner qualities Hapur",
    "franchise partner support Hapur",
    "organised retail partner Hapur",
    "daily needs store franchise Hapur",
    "franchise partner documentation Hapur",
    "franchise partner evaluation Hapur",
    "retail business opportunity Hapur",
    "franchise partner growth Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-become-franchise-partner-in-hapur",
  },
  openGraph: {
    title: "How to Become Franchise Partner in Hapur | Buyzaar Mart Guide",
    description:
      "Learn how to become a Buyzaar Mart franchise partner in Hapur, covering eligibility, partner qualities, evaluation criteria, and the complete onboarding journey.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-become-franchise-partner-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become Franchise Partner in Hapur | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become Franchise Partner in Hapur | Buyzaar Mart Guide",
    description:
      "Learn how to become a Buyzaar Mart franchise partner in Hapur, covering eligibility, partner qualities, evaluation criteria, and the complete onboarding journey.",
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