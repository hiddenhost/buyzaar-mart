import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Prayagraj | Buyzaar Mart Guide",
  description:
    "Step-by-step guide to opening a mart franchise in Prayagraj with The Buyzaar Mart — formats, ownership models, process, documentation & launch support.",
  keywords: [
    "how to open mart franchise prayagraj",
    "buyzaar mart franchise process",
    "open grocery store prayagraj",
    "mart franchise steps",
    "franchise enquiry process",
    "mini mart super mart hyper mart",
    "FOCO FOCM",
    "franchise documentation requirements",
    "store setup process prayagraj",
    "retail franchise guide prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/how-to-open-mart-franchise-in-prayagraj",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Prayagraj | Buyzaar Mart Guide",
    description:
      "Step-by-step guide to opening a mart franchise in Prayagraj with The Buyzaar Mart — formats, ownership models, process, documentation & launch support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/how-to-open-mart-franchise-in-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Prayagraj | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Prayagraj | Buyzaar Mart Guide",
    description:
      "Step-by-step guide to opening a mart franchise in Prayagraj with The Buyzaar Mart — formats, ownership models, process, documentation & launch support.",
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