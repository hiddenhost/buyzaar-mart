import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Modern Grocery Store Gangoh | The Buyzaar Mart — Shop Smart, Live Better",
  description:
    "Discover Gangoh's most modern grocery store — The Buyzaar Mart. POS billing, wide FMCG range, fresh produce & trusted brands all in your neighborhood. Shop with us or open your own franchise today!",
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
      "https://www.thebuyzaarmart.com/cities/gangoh/modern-grocery-store-gangoh",
  },

  openGraph: {
    title:
      "Modern Grocery Store Gangoh | The Buyzaar Mart — Shop Smart, Live Better",
    description:
      "Discover Gangoh's most modern grocery store — The Buyzaar Mart. POS billing, wide FMCG range, fresh produce & trusted brands all in your neighborhood. Shop with us or open your own franchise today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/modern-grocery-store-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Modern Grocery Store Gangoh | The Buyzaar Mart — Shop Smart, Live Better",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modern Grocery Store Gangoh | The Buyzaar Mart — Shop Smart, Live Better",
    description:
      "Discover Gangoh's most modern grocery store — The Buyzaar Mart. POS billing, wide FMCG range, fresh produce & trusted brands all in your neighborhood. Shop with us or open your own franchise today!",
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