import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Apply for Buyzaar Mart Franchise Gurugram | Step-by-Step Guide",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Gurugram. Complete step-by-step process for a low investment supermarket franchise, from enquiry to launch.",
  keywords: [
    "how to apply Buyzaar Mart franchise",
    "franchise application Gurugram",
    "low investment supermarket franchise",
    "grocery franchise apply Gurugram",
    "Buyzaar Mart franchise process",
    "low investment supermarket franchise Lucknow",
    "FOCM FOCO franchise model",
    "franchise documents required",
    "supermarket franchise application NCR",
    "mart franchise steps Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/how-to-apply-for-buyzaar-mart-franchise-gurugram",
  },
  openGraph: {
    title: "How to Apply for Buyzaar Mart Franchise Gurugram | Step-by-Step Guide",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Gurugram. Complete step-by-step process for a low investment supermarket franchise, from enquiry to launch.",
    url: "https://www.thebuyzaarmart.com/gurgaon/how-to-apply-for-buyzaar-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise Gurugram | Step-by-Step Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Buyzaar Mart Franchise Gurugram | Step-by-Step Guide",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Gurugram. Complete step-by-step process for a low investment supermarket franchise, from enquiry to launch.",
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