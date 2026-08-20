import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Hapur | Apply for Grocery Store Franchise",
  description:
    "Apply for The Buyzaar Mart franchise in Hapur. Explore Mini Mart, Super Mart and Hyper Mart formats, FOCM and FOCO models, and start your own supermarket business.",
  keywords: [
    "buyzaar mart franchise Hapur",
    "grocery franchise apply Hapur",
    "supermarket franchise Hapur",
    "apply franchise Hapur",
    "Buyzaar Mart Hapur",
    "mini mart franchise Hapur",
    "retail franchise Uttar Pradesh",
    "FOCM FOCO franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-franchise-apply-hapur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Hapur | Apply for Grocery Store Franchise",
    description:
      "Apply for The Buyzaar Mart franchise in Hapur. Explore Mini Mart, Super Mart and Hyper Mart formats, FOCM and FOCO models, and start your own supermarket business.",
    url: "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-franchise-apply-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Hapur | Apply for Grocery Store Franchise",
    description:
      "Apply for The Buyzaar Mart franchise in Hapur. Explore Mini Mart, Super Mart and Hyper Mart formats, FOCM and FOCO models, and start your own supermarket business.",
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