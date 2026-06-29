import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise in Varanasi | The Buyzaar Mart Franchise Owned Company Managed Model",
  description:
    "Invest in a FOCM franchise in Varanasi with The Buyzaar Mart. Franchise Owned, Company Managed model means you own the business while we run it. Low risk, high returns. Enquire now.",
  keywords: [
    "FOCM franchise Varanasi",
    "franchise owned company managed Varanasi",
    "FOCM model franchise Varanasi",
    "The Buyzaar Mart FOCM Varanasi",
    "grocery franchise FOCM Varanasi",
    "managed franchise business Varanasi",
    "low risk franchise Varanasi",
    "retail franchise Varanasi",
    "FMCG franchise Varanasi UP",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/varanasi/foco-franchise-varanasi",
  },
  openGraph: {
    title: "FOCM Franchise in Varanasi | The Buyzaar Mart Franchise Owned Company Managed Model",
    description:
      "Invest in a FOCM franchise in Varanasi with The Buyzaar Mart. Franchise Owned, Company Managed model means you own the business while we run it. Low risk, high returns. Enquire now.",
    url: "https://www.thebuyzaarmart.com/varanasi/foco-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise in Varanasi | The Buyzaar Mart Franchise Owned Company Managed Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise in Varanasi | The Buyzaar Mart Franchise Owned Company Managed Model",
    description:
      "Invest in a FOCM franchise in Varanasi with The Buyzaar Mart. Franchise Owned, Company Managed model means you own the business while we run it. Low risk, high returns. Enquire now.",
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