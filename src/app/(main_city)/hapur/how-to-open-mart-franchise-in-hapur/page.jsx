import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Mart Franchise in Hapur | Complete Setup Guide",
  description:
    "Learn how to open a Buyzaar Mart franchise in Hapur, covering formats, space requirements, licenses, setup process, and everything before your store launch.",
  keywords: [
    "how to open mart franchise Hapur",
    "open mart franchise Hapur",
    "buyzaar mart Hapur",
    "grocery franchise Hapur",
    "supermarket franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "franchise setup process Hapur",
    "open supermarket Hapur",
    "franchise store setup Hapur",
    "retail franchise Uttar Pradesh",
    "franchise licenses Hapur",
    "franchise investment Hapur",
    "franchise application Hapur",
    "buyzaar mart franchise apply Hapur",
    "franchise timeline Hapur",
    "retail business setup Hapur",
    "organised retail franchise Hapur",
    "daily needs store franchise Hapur",
    "franchise training support Hapur",
    "franchise documentation Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-open-mart-franchise-in-hapur",
  },
  openGraph: {
    title: "How to Open Mart Franchise in Hapur | Complete Setup Guide",
    description:
      "Learn how to open a Buyzaar Mart franchise in Hapur, covering formats, space requirements, licenses, setup process, and everything before your store launch.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-open-mart-franchise-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Mart Franchise in Hapur | Complete Setup Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Mart Franchise in Hapur | Complete Setup Guide",
    description:
      "Learn how to open a Buyzaar Mart franchise in Hapur, covering formats, space requirements, licenses, setup process, and everything before your store launch.",
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