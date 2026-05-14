import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Franchise in Delhi: A Step-by-Step Guide | The Buyzaar Mart",
  description:
    "Discover the ultimate guide on how to open a retail grocery franchise in Delhi. Learn about investments, licenses, locations, and how The Buyzaar Mart’s FOCM model guarantees success.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/how-to-open-a-retail-franchise-in-delhi",
  },
  openGraph: {
    title: "How to Open a Retail Franchise in Delhi: A Step-by-Step Guide | The Buyzaar Mart",
    description:
      "Discover the ultimate guide on how to open a retail grocery franchise in Delhi. Learn about investments, licenses, locations, and how The Buyzaar Mart’s FOCM model guarantees success.",
    url: "https://www.thebuyzaarmart.com/delhi/how-to-open-a-retail-franchise-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Franchise in Delhi: A Step-by-Step Guide | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Franchise in Delhi: A Step-by-Step Guide | The Buyzaar Mart",
    description:
      "Discover the ultimate guide on how to open a retail grocery franchise in Delhi. Learn about investments, licenses, locations, and how The Buyzaar Mart’s FOCM model guarantees success.",
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