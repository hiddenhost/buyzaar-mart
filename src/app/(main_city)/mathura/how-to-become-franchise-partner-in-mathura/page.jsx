import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become a Franchise Partner in Mathura | Buyzaar Mart Guide",
  description:
    "Learn how to become a franchise partner in Mathura — readiness check, involvement levels, investment & the partner journey with The Buyzaar Mart.",
  keywords: [
    "how to become franchise partner Mathura",
    "franchise partner readiness Mathura",
    "become a business owner Mathura",
    "franchise partner qualities",
    "franchise partner involvement levels",
    "FOCM FOFO FOCO partner Mathura",
    "Buyzaar Mart franchise partner guide",
    "franchise partner journey Mathura",
    "franchise partner investment Mathura",
    "first time franchise partner guide",
    "franchise partner brand relationship",
    "retail franchise partner Uttar Pradesh",
    "franchise partner day to day",
    "franchise partner expansion Mathura",
    "franchise partner self assessment",
    "grocery franchise partner Mathura",
    "franchise partner financial readiness",
    "franchise partner training support",
    "Buyzaar Mart partner opportunities",
    "franchise partner long term growth",
    "how to start as a franchise partner",
    "franchise partner mindset guide",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-become-franchise-partner-in-mathura",
  },
  openGraph: {
    title: "How to Become a Franchise Partner in Mathura | Buyzaar Mart Guide",
    description:
      "Learn how to become a franchise partner in Mathura — readiness check, involvement levels, investment & the partner journey with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-become-franchise-partner-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become a Franchise Partner in Mathura | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Franchise Partner in Mathura | Buyzaar Mart Guide",
    description:
      "Learn how to become a franchise partner in Mathura — readiness check, involvement levels, investment & the partner journey with The Buyzaar Mart.",
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