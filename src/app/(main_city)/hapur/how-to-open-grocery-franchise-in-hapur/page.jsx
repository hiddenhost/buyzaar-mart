import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Grocery Franchise in Hapur | Complete Business Guide",
  description:
    "Learn how to open a grocery franchise in Hapur with The Buyzaar Mart, covering formats, product range, investment, licensing, and the full setup process.",
  keywords: [
    "how to open grocery franchise Hapur",
    "open grocery franchise Hapur",
    "buyzaar mart Hapur",
    "grocery store franchise Hapur",
    "supermarket franchise Hapur",
    "mini mart grocery Hapur",
    "super mart grocery Hapur",
    "hyper mart grocery Hapur",
    "grocery business setup Hapur",
    "organised grocery retail Hapur",
    "grocery franchise investment Hapur",
    "grocery franchise licenses Hapur",
    "retail franchise Uttar Pradesh",
    "grocery franchise application Hapur",
    "buyzaar mart franchise apply Hapur",
    "grocery store setup process Hapur",
    "kirana upgrade franchise Hapur",
    "daily needs store franchise Hapur",
    "FMCG franchise Hapur",
    "grocery franchise training Hapur",
    "grocery retail investment Hapur",
    "branded grocery store Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-open-grocery-franchise-in-hapur",
  },
  openGraph: {
    title: "How to Open Grocery Franchise in Hapur | Complete Business Guide",
    description:
      "Learn how to open a grocery franchise in Hapur with The Buyzaar Mart, covering formats, product range, investment, licensing, and the full setup process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-open-grocery-franchise-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Grocery Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Grocery Franchise in Hapur | Complete Business Guide",
    description:
      "Learn how to open a grocery franchise in Hapur with The Buyzaar Mart, covering formats, product range, investment, licensing, and the full setup process.",
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