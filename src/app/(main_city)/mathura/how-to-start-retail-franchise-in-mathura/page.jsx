import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Retail Franchise in Mathura | Complete Business Guide",
  description:
    "Learn how to start a retail franchise in Mathura — financial planning, legal requirements, location, and brand selection, with The Buyzaar Mart's support.",
  keywords: [
    "how to start retail franchise Mathura",
    "retail franchise business guide",
    "start a franchise business Mathura",
    "retail franchise legal requirements",
    "retail franchise financial planning",
    "choosing a franchise brand Mathura",
    "retail franchise location selection",
    "retail franchise licensing India",
    "retail business registration Mathura",
    "franchise agreement fundamentals",
    "retail franchise investment guide",
    "first time franchise owner guide",
    "retail franchise supply chain Mathura",
    "retail franchise staffing plan",
    "retail franchise marketing plan Mathura",
    "franchise business structure India",
    "grocery vs apparel franchise Mathura",
    "retail franchise mistakes to avoid",
    "Buyzaar Mart franchise Mathura",
    "retail franchise ROI Mathura",
    "franchise business Uttar Pradesh",
    "how to evaluate franchise brands",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-start-retail-franchise-in-mathura",
  },
  openGraph: {
    title: "How to Start a Retail Franchise in Mathura | Complete Business Guide",
    description:
      "Learn how to start a retail franchise in Mathura — financial planning, legal requirements, location, and brand selection, with The Buyzaar Mart's support.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-start-retail-franchise-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Franchise in Mathura | Complete Business Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Franchise in Mathura | Complete Business Guide",
    description:
      "Learn how to start a retail franchise in Mathura — financial planning, legal requirements, location, and brand selection, with The Buyzaar Mart's support.",
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