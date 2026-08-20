import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start Retail Franchise in Hapur | Complete Guide",
  description:
    "Learn how to start a retail franchise in Hapur with The Buyzaar Mart, covering formats, investment, licensing, setup, and the complete launch process.",
  keywords: [
    "how to start retail franchise Hapur",
    "start retail franchise Hapur",
    "buyzaar mart Hapur",
    "retail business Hapur",
    "supermarket franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "retail franchise setup Hapur",
    "retail franchise investment Hapur",
    "retail franchise licenses Hapur",
    "retail franchise application Hapur",
    "buyzaar mart franchise apply Hapur",
    "retail business setup Hapur",
    "organised retail franchise Hapur",
    "retail franchise Uttar Pradesh",
    "first time entrepreneur franchise Hapur",
    "daily needs store franchise Hapur",
    "retail franchise training Hapur",
    "retail franchise documentation Hapur",
    "branded retail store Hapur",
    "retail franchise timeline Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-start-retail-franchise-in-hapur",
  },
  openGraph: {
    title: "How to Start Retail Franchise in Hapur | Complete Guide",
    description:
      "Learn how to start a retail franchise in Hapur with The Buyzaar Mart, covering formats, investment, licensing, setup, and the complete launch process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-start-retail-franchise-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start Retail Franchise in Hapur | Complete Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start Retail Franchise in Hapur | Complete Guide",
    description:
      "Learn how to start a retail franchise in Hapur with The Buyzaar Mart, covering formats, investment, licensing, setup, and the complete launch process.",
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