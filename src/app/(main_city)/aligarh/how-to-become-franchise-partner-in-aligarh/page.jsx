import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become a Franchise Partner in Aligarh | The Buyzaar Mart",
  description:
    "Learn how to become a franchise partner with The Buyzaar Mart in Aligarh. Explore partner qualities, roles, benefits, and the complete onboarding journey.",
  keywords: [
    "how to become franchise partner Aligarh",
    "franchise partner Aligarh",
    "Buyzaar Mart franchise partner",
    "become franchise partner Uttar Pradesh",
    "grocery franchise partner Aligarh",
    "supermarket franchise partner Aligarh",
    "retail franchise partner Aligarh",
    "franchise partnership Aligarh",
    "franchise apply Aligarh",
    "franchise investment Aligarh",
    "franchise onboarding Aligarh",
    "FOCM FOCO franchise partner",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "franchise opportunity Uttar Pradesh",
    "franchise eligibility Aligarh",
    "best franchise in Aligarh",
    "daily needs store franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "low investment franchise Aligarh",
    "organized retail partner Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-become-franchise-partner-in-aligarh",
  },
  openGraph: {
    title: "How to Become a Franchise Partner in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to become a franchise partner with The Buyzaar Mart in Aligarh. Explore partner qualities, roles, benefits, and the complete onboarding journey.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-become-franchise-partner-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become a Franchise Partner in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Franchise Partner in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to become a franchise partner with The Buyzaar Mart in Aligarh. Explore partner qualities, roles, benefits, and the complete onboarding journey.",
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