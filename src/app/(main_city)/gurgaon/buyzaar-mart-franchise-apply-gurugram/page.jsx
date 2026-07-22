import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Apply for Buyzaar Mart Franchise in Gurugram | Application Process & Investment",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Gurugram. Step-by-step application process, Mini Mart, Super Mart, Hyper Mart investment and area details.",
  keywords: [
    "Buyzaar Mart franchise apply Gurugram",
    "apply grocery franchise Gurugram",
    "Buyzaar Mart application process",
    "FOCM FOCO franchise Gurugram",
    "Mini Mart Super Mart Hyper Mart Gurugram",
    "grocery franchise investment Gurugram",
    "how to apply franchise Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-franchise-apply-gurugram",
  },
  openGraph: {
    title: "Apply for Buyzaar Mart Franchise in Gurugram | Application Process & Investment",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Gurugram. Step-by-step application process, Mini Mart, Super Mart, Hyper Mart investment and area details.",
    url: "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-franchise-apply-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Apply for Buyzaar Mart Franchise in Gurugram | Application Process & Investment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Buyzaar Mart Franchise in Gurugram | Application Process & Investment",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Gurugram. Step-by-step application process, Mini Mart, Super Mart, Hyper Mart investment and area details.",
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