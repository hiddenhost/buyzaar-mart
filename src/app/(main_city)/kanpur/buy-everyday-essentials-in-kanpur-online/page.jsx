import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buy Everyday Essentials in Kanpur Online | The Buyzaar Mart",
  description:
    "Buy everyday essentials in Kanpur with The Buyzaar Mart. Explore groceries, dairy, personal care, and household products across Mini Mart, Super Mart, and Hyper Mart stores.",
  keywords: [
    "buy everyday essentials Kanpur",
    "online grocery shopping Kanpur",
    "Buyzaar Mart Kanpur",
    "daily essentials store Kanpur",
    "grocery store near me Kanpur",
    "Mini Mart Super Mart Hyper Mart Kanpur",
    "household essentials Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/buy-everyday-essentials-in-kanpur-online",
  },
  openGraph: {
    title: "Buy Everyday Essentials in Kanpur Online | The Buyzaar Mart",
    description:
      "Buy everyday essentials in Kanpur with The Buyzaar Mart. Explore groceries, dairy, personal care, and household products across Mini Mart, Super Mart, and Hyper Mart stores.",
    url: "https://www.thebuyzaarmart.com/kanpur/buy-everyday-essentials-in-kanpur-online",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buy Everyday Essentials in Kanpur Online | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Everyday Essentials in Kanpur Online | The Buyzaar Mart",
    description:
      "Buy everyday essentials in Kanpur with The Buyzaar Mart. Explore groceries, dairy, personal care, and household products across Mini Mart, Super Mart, and Hyper Mart stores.",
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