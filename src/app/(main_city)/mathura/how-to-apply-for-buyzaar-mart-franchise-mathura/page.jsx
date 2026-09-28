import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Apply for The Buyzaar Mart Franchise in Mathura | Step-by-Step Guide",
  description:
    "Learn how to apply for The Buyzaar Mart franchise in Mathura — step-by-step process, documents required, investment, training & launch support explained.",
  keywords: [
    "how to apply Buyzaar Mart franchise Mathura",
    "Buyzaar Mart franchise application process",
    "franchise apply Mathura",
    "grocery franchise application Mathura",
    "Buyzaar Mart franchise steps",
    "franchise inquiry form Mathura",
    "grocery franchise documents required",
    "franchise KYC process Mathura",
    "Buyzaar Mart site evaluation",
    "grocery franchise agreement Mathura",
    "franchise application timeline",
    "Buyzaar Mart franchise training process",
    "FOCM franchise application Mathura",
    "FOFO franchise application Mathura",
    "supermarket franchise apply online",
    "grocery franchise store setup Mathura",
    "franchise launch process Mathura",
    "Buyzaar Mart franchise contact",
    "grocery franchise eligibility Mathura",
    "franchise application requirements Uttar Pradesh",
    "how to start grocery franchise Mathura",
    "Buyzaar Mart franchise support after launch",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-apply-for-buyzaar-mart-franchise-mathura",
  },
  openGraph: {
    title:
      "How to Apply for The Buyzaar Mart Franchise in Mathura | Step-by-Step Guide",
    description:
      "Learn how to apply for The Buyzaar Mart franchise in Mathura — step-by-step process, documents required, investment, training & launch support explained.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-apply-for-buyzaar-mart-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for The Buyzaar Mart Franchise in Mathura | Step-by-Step Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Apply for The Buyzaar Mart Franchise in Mathura | Step-by-Step Guide",
    description:
      "Learn how to apply for The Buyzaar Mart franchise in Mathura — step-by-step process, documents required, investment, training & launch support explained.",
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