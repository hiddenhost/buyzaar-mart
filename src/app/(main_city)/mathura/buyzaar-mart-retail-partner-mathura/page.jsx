import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Retail Partner in Mathura | Join Our Franchise Network",
  description:
    "Become a Buyzaar Mart retail partner in Mathura. Explore FOCM & FOFO models, investment, support & growth opportunities in organized grocery retail.",
  keywords: [
    "Buyzaar Mart retail partner Mathura",
    "retail partner program Mathura",
    "grocery retail partner India",
    "Buyzaar Mart partnership Mathura",
    "FOCM retail partner Mathura",
    "FOFO retail partner Mathura",
    "become a retail partner Mathura",
    "grocery franchise partner Uttar Pradesh",
    "supermarket retail partner Mathura",
    "organized retail partner Mathura",
    "Buyzaar Mart partner benefits",
    "retail partner investment Mathura",
    "retail partner support Buyzaar Mart",
    "grocery business partnership Mathura",
    "franchise partner network India",
    "retail partner eligibility Mathura",
    "Buyzaar Mart supply chain partner",
    "multi-store retail partner Mathura",
    "retail partner training Buyzaar Mart",
    "grocery retail ecosystem Mathura",
    "Buyzaar Mart partner growth opportunities",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-retail-partner-mathura",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner in Mathura | Join Our Franchise Network",
    description:
      "Become a Buyzaar Mart retail partner in Mathura. Explore FOCM & FOCO models, investment, support & growth opportunities in organized grocery retail.",
    url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-retail-partner-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner in Mathura | Join Our Franchise Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner in Mathura | Join Our Franchise Network",
    description:
      "Become a Buyzaar Mart retail partner in Mathura. Explore FOCM & FOCO models, investment, support & growth opportunities in organized grocery retail.",
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