import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Mini Mart in Varanasi | Neighbourhood Grocery Store Near You",
  description:
    "Discover The Buyzaar Mart Mini Mart in Varanasi — your nearest organised neighbourhood grocery store offering fresh essentials, FMCG products, and daily household needs at the best prices. Find a store near you.",
  keywords: [
    "Buyzaar Mart mini mart Varanasi",
    "mini mart Varanasi",
    "neighbourhood grocery store Varanasi",
    "small grocery store Varanasi",
    "FMCG store Varanasi",
    "daily essentials store Varanasi",
    "The Buyzaar Mart Varanasi",
    "convenience store Varanasi",
    "local supermarket Varanasi",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-mini-mart-varanasi",
  },
  openGraph: {
    title: "Buyzaar Mart Mini Mart in Varanasi | Neighbourhood Grocery Store Near You",
    description:
      "Discover The Buyzaar Mart Mini Mart in Varanasi — your nearest organised neighbourhood grocery store offering fresh essentials, FMCG products, and daily household needs at the best prices. Find a store near you.",
    url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-mini-mart-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Mini Mart in Varanasi | Neighbourhood Grocery Store Near You",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Mini Mart in Varanasi | Neighbourhood Grocery Store Near You",
    description:
      "Discover The Buyzaar Mart Mini Mart in Varanasi — your nearest organised neighbourhood grocery store offering fresh essentials, FMCG products, and daily household needs at the best prices. Find a store near you.",
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