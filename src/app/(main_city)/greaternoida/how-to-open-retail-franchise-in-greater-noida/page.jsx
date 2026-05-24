import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Open a Retail Franchise in Greater Noida | The Buyzaar Mart FOCM Guide",
  description:
    "Learn how to open a retail franchise in Greater Noida with The Buyzaar Mart. Step-by-step FOCM model guide — investment from ₹15 Lakh.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/how-to-open-a-retail-franchise-in-greater-noida",
  },
  openGraph: {
    title:
      "How to Open a Retail Franchise in Greater Noida | The Buyzaar Mart FOCM Guide",
    description:
      "Learn how to open a retail franchise in Greater Noida with The Buyzaar Mart. Step-by-step FOCM model guide — investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/greater-noida/how-to-open-a-retail-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Franchise in Greater Noida | The Buyzaar Mart FOCM Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Open a Retail Franchise in Greater Noida | The Buyzaar Mart FOCM Guide",
    description:
      "Learn how to open a retail franchise in Greater Noida with The Buyzaar Mart. Step-by-step FOCM model guide — investment from ₹15 Lakh.",
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