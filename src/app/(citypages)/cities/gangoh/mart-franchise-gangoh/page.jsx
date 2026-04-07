import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Gangoh | Open Your Own Store with The Buyzaar Mart",
  description:
    "Looking for a mart franchise in Gangoh? The Buyzaar Mart offers a proven FOCM model, full operational support, and store formats for every budget. Start your franchise journey today — apply at thebuyzaarmart.com.",
  keywords: [
    "mart franchise gangoh",
    "the buyzaar mart gangoh",
    "grocery mart franchise gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart franchise gangoh",
    "focm franchise gangoh",
    "open mart in gangoh",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/mart-franchise-gangoh",
  },

  openGraph: {
    title: "Mart Franchise Gangoh | Open Your Own Store with The Buyzaar Mart",
    description:
      "Looking for a mart franchise in Gangoh? The Buyzaar Mart offers a proven FOCM model, full operational support, and store formats for every budget. Start your franchise journey today — apply at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/mart-franchise-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Gangoh | Open Your Own Store with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Gangoh | Open Your Own Store with The Buyzaar Mart",
    description:
      "Looking for a mart franchise in Gangoh? The Buyzaar Mart offers a proven FOCM model, full operational support, and store formats for every budget. Start your franchise journey today — apply at thebuyzaarmart.com.",
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