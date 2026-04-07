import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Near Me Gangoh | The Buyzaar Mart — Your Neighborhood Store",
  description:
    "Looking for a supermarket near you in Gangoh? The Buyzaar Mart is your friendly neighborhood store offering groceries, FMCG, dairy, fresh produce & more — all under one roof. Visit us or apply for a franchise today!",
  keywords: [
    "supermarket near me gangoh",
    "supermarket in gangoh",
    "grocery store in gangoh",
    "the buyzaar mart gangoh",
    "neighborhood supermarket gangoh",
    "best supermarket in gangoh",
    "daily needs store gangoh",
    "fmcg store gangoh",
    "fresh produce gangoh",
    "buyzaar mart franchise gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-near-me-gangoh",
  },

  openGraph: {
    title:
      "Supermarket Near Me Gangoh | The Buyzaar Mart — Your Neighborhood Store",
    description:
      "Looking for a supermarket near you in Gangoh? The Buyzaar Mart is your friendly neighborhood store offering groceries, FMCG, dairy, fresh produce & more — all under one roof. Visit us or apply for a franchise today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-near-me-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Near Me Gangoh | The Buyzaar Mart — Your Neighborhood Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Near Me Gangoh | The Buyzaar Mart — Your Neighborhood Store",
    description:
      "Looking for a supermarket near you in Gangoh? The Buyzaar Mart is your friendly neighborhood store offering groceries, FMCG, dairy, fresh produce & more — all under one roof. Visit us or apply for a franchise today!",
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