import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "New Franchise Opportunities in Moradabad | The Buyzaar Mart",
  description:
    "Discover new franchise opportunities in Moradabad with The Buyzaar Mart. First-mover advantage in growing localities, low investment, full brand support.",
  keywords: [
    "new franchise opportunities moradabad",
    "buyzaar mart expansion moradabad",
    "new business opportunity moradabad",
    "grocery franchise new locations moradabad",
    "first mover advantage retail moradabad",
    "emerging franchise UP",
    "new supermarket franchise moradabad",
    "franchise expansion 2026",
    "investor opportunity moradabad",
    "organized retail growth moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/new-franchise-opportunities-in-moradabad",
  },
  openGraph: {
    title: "New Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Discover new franchise opportunities in Moradabad with The Buyzaar Mart. First-mover advantage in growing localities, low investment, full brand support.",
    url: "https://www.thebuyzaarmart.com/moradabad/new-franchise-opportunities-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "New Franchise Opportunities in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Discover new franchise opportunities in Moradabad with The Buyzaar Mart. First-mover advantage in growing localities, low investment, full brand support.",
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