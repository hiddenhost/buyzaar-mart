import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Enquiry Varanasi | Apply for Zero Royalty Grocery Store",
  description:
    "Planning a Buyzaar Mart franchise enquiry in Varanasi? Get complete details on investment, process, documents, and support before you apply. Start your grocery business today.",
  keywords: [
    "Buyzaar Mart franchise enquiry",
    "franchise enquiry Varanasi",
    "grocery franchise application",
    "Buyzaar Mart contact",
    "franchise apply Varanasi",
    "grocery store franchise enquiry",
    "franchise business enquiry UP",
    "zero royalty franchise enquiry",
    "supermarket franchise contact",
    "franchise registration Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-franchise-enquiry-varanasi",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Enquiry Varanasi | Apply for Zero Royalty Grocery Store",
    description:
      "Planning a Buyzaar Mart franchise enquiry in Varanasi? Get complete details on investment, process, documents, and support before you apply. Start your grocery business today.",
    url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-franchise-enquiry-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Enquiry Varanasi | Apply for Zero Royalty Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Enquiry Varanasi | Apply for Zero Royalty Grocery Store",
    description:
      "Planning a Buyzaar Mart franchise enquiry in Varanasi? Get complete details on investment, process, documents, and support before you apply. Start your grocery business today.",
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