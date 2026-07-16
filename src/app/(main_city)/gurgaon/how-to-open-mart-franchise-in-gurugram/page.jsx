import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Gurugram | Buyzaar Mart Guide",
  description:
    "Learn how to open a mart franchise in Gurugram with Buyzaar Mart. Step-by-step process, low investment supermarket franchise details & full support. Read now!",
  keywords: [
    "how to open mart franchise in Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "open supermarket franchise Gurugram",
    "franchise process India",
    "start grocery store franchise",
    "low investment supermarket franchise in Gurgaon",
    "mart franchise application process",
    "retail franchise steps",
    "franchise eligibility Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/how-to-open-mart-franchise-in-gurugram",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Gurugram | Buyzaar Mart Guide",
    description:
      "Learn how to open a mart franchise in Gurugram with Buyzaar Mart. Step-by-step process, low investment supermarket franchise details & full support. Read now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/how-to-open-mart-franchise-in-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Gurugram | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Gurugram | Buyzaar Mart Guide",
    description:
      "Learn how to open a mart franchise in Gurugram with Buyzaar Mart. Step-by-step process, low investment supermarket franchise details & full support. Read now!",
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