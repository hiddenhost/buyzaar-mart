import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Neighbourhood Store Kanpur | The Buyzaar Mart",
  description:
    "Open your own neighbourhood store in Kanpur with The Buyzaar Mart. Full brand support. Enquire today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/neighbourhood-store-in-kanpur",
  },
  openGraph: {
    title: "How to Open Neighbourhood Store Kanpur | The Buyzaar Mart",
    description:
      "Open your own neighbourhood store in Kanpur with The Buyzaar Mart. Full brand support. Enquire today!",
    url: "https://www.thebuyzaarmart.com/kanpur/neighbourhood-store-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Neighbourhood Store Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Neighbourhood Store Kanpur | The Buyzaar Mart",
    description:
      "Open your own neighbourhood store in Kanpur with The Buyzaar Mart. Full brand support. Enquire today!",
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