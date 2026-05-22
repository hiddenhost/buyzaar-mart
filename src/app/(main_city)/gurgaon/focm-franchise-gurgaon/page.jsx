import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise in Gurgaon | The Buyzaar Mart",
  description:
    "Looking for a FOCM franchise in Gurgaon? The Buyzaar Mart's Franchise Owned Company Managed model lets you invest & own while we run the store. Call 9217991727!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/focm-franchise-gurgaon",
  },
  openGraph: {
    title: "FOCM Franchise in Gurgaon | The Buyzaar Mart",
    description:
      "Looking for a FOCM franchise in Gurgaon? The Buyzaar Mart's Franchise Owned Company Managed model lets you invest & own while we run the store. Call 9217991727!",
    url: "https://www.thebuyzaarmart.com/gurgaon/focm-franchise-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise in Gurgaon | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise in Gurgaon | The Buyzaar Mart",
    description:
      "Looking for a FOCM franchise in Gurgaon? The Buyzaar Mart's Franchise Owned Company Managed model lets you invest & own while we run the store. Call 9217991727!",
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