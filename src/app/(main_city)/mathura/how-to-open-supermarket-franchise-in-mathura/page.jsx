import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Open a Supermarket Franchise in Mathura | Large-Format Store Guide",
  description:
    "Learn how to open a supermarket franchise in Mathura — Super Mart & Hyper Mart formats, layout, staffing, inventory & investment explained in detail.",
  keywords: [
    "how to open supermarket franchise Mathura",
    "supermarket franchise large format",
    "Super Mart Hyper Mart Mathura",
    "supermarket layout planning Mathura",
    "supermarket staffing requirements",
    "supermarket inventory management",
    "supermarket franchise investment Mathura",
    "large format grocery store Mathura",
    "supermarket franchise checklist",
    "supermarket store design Mathura",
    "supermarket product range planning",
    "supermarket franchise licensing",
    "supermarket launch marketing Mathura",
    "supermarket franchise financial expectations",
    "Buyzaar Mart supermarket franchise",
    "supermarket vs mini mart Mathura",
    "supermarket franchise common mistakes",
    "supermarket franchise store formats",
    "large format retail Uttar Pradesh",
    "supermarket franchise space planning",
    "supermarket franchise Mathura guide",
    "open large grocery store India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-open-supermarket-franchise-in-mathura",
  },
  openGraph: {
    title:
      "How to Open a Supermarket Franchise in Mathura | Large-Format Store Guide",
    description:
      "Learn how to open a supermarket franchise in Mathura — Super Mart & Hyper Mart formats, layout, staffing, inventory & investment explained in detail.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-open-supermarket-franchise-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Supermarket Franchise in Mathura | Large-Format Store Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Open a Supermarket Franchise in Mathura | Large-Format Store Guide",
    description:
      "Learn how to open a supermarket franchise in Mathura — Super Mart & Hyper Mart formats, layout, staffing, inventory & investment explained in detail.",
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