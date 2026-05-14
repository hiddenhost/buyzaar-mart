import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Mart Franchise in Delhi | The Buyzaar Mart 2026 Guide",
  description:
    "Master the process of how to start a mart franchise in Delhi with The Buyzaar Mart. Discover the FOCM model, investment steps, and high-ROI strategies for 2026.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/how-to-start-a-mart-franchise-in-delhi",
  },
  openGraph: {
    title: "How to Start a Mart Franchise in Delhi | The Buyzaar Mart 2026 Guide",
    description:
      "Master the process of how to start a mart franchise in Delhi with The Buyzaar Mart. Discover the FOCM model, investment steps, and high-ROI strategies for 2026.",
    url: "https://www.thebuyzaarmart.com/delhi/how-to-start-a-mart-franchise-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Mart Franchise in Delhi | The Buyzaar Mart 2026 Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Mart Franchise in Delhi | The Buyzaar Mart 2026 Guide",
    description:
      "Master the process of how to start a mart franchise in Delhi with The Buyzaar Mart. Discover the FOCM model, investment steps, and high-ROI strategies for 2026.",
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