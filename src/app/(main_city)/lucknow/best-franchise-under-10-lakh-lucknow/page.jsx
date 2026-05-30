import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Under 10 Lakh in Lucknow | The Buyzaar Mart",
  description:
    "Looking for the best franchise under 10 lakh in Lucknow? The Buyzaar Mart offers a low-investment grocery franchise with full setup support, supply chain & training. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/best-franchise-under-10-lakh-in-lucknow",
  },
  openGraph: {
    title: "Best Franchise Under 10 Lakh in Lucknow | The Buyzaar Mart",
    description:
      "Looking for the best franchise under 10 lakh in Lucknow? The Buyzaar Mart offers a low-investment grocery franchise with full setup support, supply chain & training. Apply today!",
    url: "https://www.thebuyzaarmart.com/lucknow/best-franchise-under-10-lakh-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Under 10 Lakh in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Under 10 Lakh in Lucknow | The Buyzaar Mart",
    description:
      "Looking for the best franchise under 10 lakh in Lucknow? The Buyzaar Mart offers a low-investment grocery franchise with full setup support, supply chain & training. Apply today!",
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