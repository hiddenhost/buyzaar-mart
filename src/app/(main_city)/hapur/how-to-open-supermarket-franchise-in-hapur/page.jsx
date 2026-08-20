import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Supermarket Franchise in Hapur | Complete Guide",
  description:
    "Learn how to open a supermarket franchise in Hapur with The Buyzaar Mart, covering formats, space, staffing, investment, and the complete setup process.",
  keywords: [
    "how to open supermarket franchise Hapur",
    "open supermarket franchise Hapur",
    "buyzaar mart Hapur",
    "supermarket business Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "supermarket setup Hapur",
    "supermarket investment Hapur",
    "supermarket staffing Hapur",
    "supermarket licenses Hapur",
    "supermarket location Hapur",
    "retail franchise Uttar Pradesh",
    "buyzaar mart franchise apply Hapur",
    "supermarket launch Hapur",
    "organised retail supermarket Hapur",
    "branded supermarket Hapur",
    "supermarket training support Hapur",
    "daily needs supermarket Hapur",
    "supermarket franchise timeline Hapur",
    "supermarket business plan Hapur",
    "large format retail Hapur",
    "supermarket franchise process Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-open-supermarket-franchise-in-hapur",
  },
  openGraph: {
    title: "How to Open Supermarket Franchise in Hapur | Complete Guide",
    description:
      "Learn how to open a supermarket franchise in Hapur with The Buyzaar Mart, covering formats, space, staffing, investment, and the complete setup process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-open-supermarket-franchise-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Supermarket Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Supermarket Franchise in Hapur | Complete Guide",
    description:
      "Learn how to open a supermarket franchise in Hapur with The Buyzaar Mart, covering formats, space, staffing, investment, and the complete setup process.",
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