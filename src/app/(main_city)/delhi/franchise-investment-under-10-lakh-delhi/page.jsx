import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Investment Under 10 Lakh Delhi | The Buyzaar Mart",
  description:
    "Start a highly profitable grocery supermarket with a franchise investment under 10 lakh in Delhi. Partner with The Buyzaar Mart for an FOCM model with zero operational stress, high margins, and secure returns.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/best-franchise-investment-under-10-lakh-delhi",
  },
  openGraph: {
    title: "Best Franchise Investment Under 10 Lakh Delhi | The Buyzaar Mart",
    description:
      "Start a highly profitable grocery supermarket with a franchise investment under 10 lakh in Delhi. Partner with The Buyzaar Mart for an FOCM model with zero operational stress, high margins, and secure returns.",
    url: "https://www.thebuyzaarmart.com/delhi/best-franchise-investment-under-10-lakh-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Investment Under 10 Lakh Delhi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Investment Under 10 Lakh Delhi | The Buyzaar Mart",
    description:
      "Start a highly profitable grocery supermarket with a franchise investment under 10 lakh in Delhi. Partner with The Buyzaar Mart for an FOCM model with zero operational stress, high margins, and secure returns.",
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