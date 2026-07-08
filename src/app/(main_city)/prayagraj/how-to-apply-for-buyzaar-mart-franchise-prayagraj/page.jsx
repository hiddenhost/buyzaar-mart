import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Apply for a Buyzaar Mart Franchise in Prayagraj",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Prayagraj with this step-by-step guide covering documents, timelines, and the complete application process.",
  keywords: [
    "apply Buyzaar Mart franchise Prayagraj",
    "Buyzaar Mart franchise application",
    "grocery franchise application India",
    "franchise process Prayagraj",
    "how to start franchise UP",
    "franchise documents required India",
    "mart franchise apply Prayagraj",
    "franchise application steps India",
    "retail franchise application Prayagraj",
    "franchise inquiry process India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/how-to-apply-for-buyzaar-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "How to Apply for a Buyzaar Mart Franchise in Prayagraj",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Prayagraj with this step-by-step guide covering documents, timelines, and the complete application process.",
    url: "https://www.thebuyzaarmart.com/prayagraj/how-to-apply-for-buyzaar-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for a Buyzaar Mart Franchise in Prayagraj",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for a Buyzaar Mart Franchise in Prayagraj",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Prayagraj with this step-by-step guide covering documents, timelines, and the complete application process.",
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