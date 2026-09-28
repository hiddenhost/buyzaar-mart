import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Mathura | Complete Practical Guide",
  description:
    "Learn how to open a mart franchise in Mathura — location, budget, licenses, staffing & supply chain explained, with The Buyzaar Mart's franchise support.",
  keywords: [
    "how to open mart franchise Mathura",
    "open supermarket Mathura",
    "open grocery store Mathura",
    "mart franchise licenses Mathura",
    "FSSAI GST trade license Mathura",
    "grocery store investment Mathura",
    "mart franchise budget planning",
    "independent store vs franchise Mathura",
    "mart franchise location selection Mathura",
    "grocery franchise staffing Mathura",
    "mart franchise supply chain Mathura",
    "Buyzaar Mart franchise support",
    "how to start a mart business Mathura",
    "supermarket setup guide Mathura",
    "mart franchise store formats",
    "grocery franchise launch plan Mathura",
    "retail business setup Mathura",
    "mart franchise investment guide",
    "grocery store licensing India",
    "how to start supermarket franchise India",
    "Buyzaar Mart franchise Mathura",
    "mart franchise challenges solutions Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-open-mart-franchise-in-mathura",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Mathura | Complete Practical Guide",
    description:
      "Learn how to open a mart franchise in Mathura — location, budget, licenses, staffing & supply chain explained, with The Buyzaar Mart's franchise support.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-open-mart-franchise-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Mathura | Complete Practical Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Mathura | Complete Practical Guide",
    description:
      "Learn how to open a mart franchise in Mathura — location, budget, licenses, staffing & supply chain explained, with The Buyzaar Mart's franchise support.",
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