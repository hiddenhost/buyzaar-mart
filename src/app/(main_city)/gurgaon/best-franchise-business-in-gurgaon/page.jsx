import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Business in Gurgaon | The Buyzaar Mart",
  description:
    "Discover the best franchise business in Gurgaon. The Buyzaar Mart FOCM model — daily needs retail, you invest, we manage. FSSAI licensed. Call 9217991727 today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/best-franchise-business-in-gurgaon",
  },
  openGraph: {
    title: "Best Franchise Business in Gurgaon | The Buyzaar Mart",
    description:
      "Discover the best franchise business in Gurgaon. The Buyzaar Mart FOCM model — daily needs retail, you invest, we manage. FSSAI licensed. Call 9217991727 today!",
    url: "https://www.thebuyzaarmart.com/gurgaon/best-franchise-business-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Business in Gurgaon | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Business in Gurgaon | The Buyzaar Mart",
    description:
      "Discover the best franchise business in Gurgaon. The Buyzaar Mart FOCM model — daily needs retail, you invest, we manage. FSSAI licensed. Call 9217991727 today!",
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