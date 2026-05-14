import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Delhi NCR | Partner with The Buyzaar Mart",
  description:
    "Searching for the best franchise to open in Delhi NCR? The Buyzaar Mart offers a highly profitable, recession-proof grocery supermarket business. Enjoy smart retail, high margins, and end-to-end management support.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/best-franchise-to-open-in-delhi-ncr",
  },
  openGraph: {
    title: "Best Franchise to Open in Delhi NCR | Partner with The Buyzaar Mart",
    description:
      "Searching for the best franchise to open in Delhi NCR? The Buyzaar Mart offers a highly profitable, recession-proof grocery supermarket business. Enjoy smart retail, high margins, and end-to-end management support.",
    url: "https://www.thebuyzaarmart.com/delhi/best-franchise-to-open-in-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Delhi NCR | Partner with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Delhi NCR | Partner with The Buyzaar Mart",
    description:
      "Searching for the best franchise to open in Delhi NCR? The Buyzaar Mart offers a highly profitable, recession-proof grocery supermarket business. Enjoy smart retail, high margins, and end-to-end management support.",
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