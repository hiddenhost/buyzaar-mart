import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Chain Muzaffarnagar — The Buyzaar Mart | Fresh, Organised & Local",

  description:
    "Discover The Buyzaar Mart — Muzaffarnagar's leading organized supermarket chain. Shop 10,000+ products, enjoy daily-fresh produce, transparent pricing, and unmatched community service. Visit us today or explore franchise opportunities.",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/supermarket-chain-muzaffarnagar",
  },

  openGraph: {
    title: "Supermarket Chain Muzaffarnagar — The Buyzaar Mart | Fresh, Organised & Local",

    description:
      "Discover The Buyzaar Mart — Muzaffarnagar's leading organized supermarket chain. Shop 10,000+ products, enjoy daily-fresh produce, transparent pricing, and unmatched community service. Visit us today or explore franchise opportunities.",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/supermarket-chain-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Chain Muzaffarnagar — The Buyzaar Mart | Fresh, Organised & Local",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Chain Muzaffarnagar — The Buyzaar Mart | Fresh, Organised & Local",

    description:
      "Discover The Buyzaar Mart — Muzaffarnagar's leading organized supermarket chain. Shop 10,000+ products, enjoy daily-fresh produce, transparent pricing, and unmatched community service. Visit us today or explore franchise opportunities.",

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