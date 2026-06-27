import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Grocery Business Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Learn the step-by-step process to start a grocery business franchise in Varanasi with The Buyzaar Mart. Investment, location, POS billing, and setup guidance.",
  keywords: [
    "start grocery business franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "grocery franchise startup guide",
    "grocery business UP",
    "retail franchise process Varanasi",
    "open grocery store franchise",
    "grocery franchise investment",
    "POS billing grocery franchise",
    "franchise application Varanasi",
    "organized retail business Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/how-to-start-grocery-business-franchise-varanasi",
  },
  openGraph: {
    title: "How to Start a Grocery Business Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Learn the step-by-step process to start a grocery business franchise in Varanasi with The Buyzaar Mart. Investment, location, POS billing, and setup guidance.",
    url: "https://www.thebuyzaarmart.com/varanasi/how-to-start-grocery-business-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Business Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Grocery Business Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Learn the step-by-step process to start a grocery business franchise in Varanasi with The Buyzaar Mart. Investment, location, POS billing, and setup guidance.",
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