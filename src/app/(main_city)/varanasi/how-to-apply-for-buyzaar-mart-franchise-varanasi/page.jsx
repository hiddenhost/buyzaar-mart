import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Apply for Buyzaar Mart Franchise in Varanasi | 2026 Guide",
  description:
    "Step-by-step guide on how to apply for a Buyzaar Mart franchise in Varanasi — eligibility, documents, process, investment, and application tips.",
  keywords: [
    "apply Buyzaar Mart franchise Varanasi",
    "Buyzaar Mart application process",
    "how to get Buyzaar Mart franchise",
    "grocery franchise application Varanasi",
    "Buyzaar Mart eligibility",
    "Buyzaar Mart documents required",
    "franchise inquiry form Buyzaar Mart",
    "retail franchise apply UP",
    "Buyzaar Mart Varanasi contact",
    "supermarket franchise application India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/how-to-apply-for-buyzaar-mart-franchise-varanasi",
  },
  openGraph: {
    title: "How to Apply for Buyzaar Mart Franchise in Varanasi | 2026 Guide",
    description:
      "Step-by-step guide on how to apply for a Buyzaar Mart franchise in Varanasi — eligibility, documents, process, investment, and application tips.",
    url: "https://www.thebuyzaarmart.com/varanasi/how-to-apply-for-buyzaar-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise in Varanasi | 2026 Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Buyzaar Mart Franchise in Varanasi | 2026 Guide",
    description:
      "Step-by-step guide on how to apply for a Buyzaar Mart franchise in Varanasi — eligibility, documents, process, investment, and application tips.",
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