import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Organized Store Kanpur - The Buyzaar Mart Franchise",
  description:
    "Learn how to open a highly profitable organized grocery store or supermarket franchise in Kanpur with The Buyzaar Mart. Explore market scope, location strategies, step-by-step setup, investment requirements, and smart retail technologies.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/how-to-open-retail-store-franchise-kanpur",
  },
  openGraph: {
    title: "How to Open Organized Store Kanpur - The Buyzaar Mart Franchise",
    description:
      "Learn how to open a highly profitable organized grocery store or supermarket franchise in Kanpur with The Buyzaar Mart. Explore market scope, location strategies, step-by-step setup, investment requirements, and smart retail technologies.",
    url: "https://www.thebuyzaarmart.com/kanpur/how-to-open-retail-store-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Organized Store Kanpur - The Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Organized Store Kanpur - The Buyzaar Mart Franchise",
    description:
      "Learn how to open a highly profitable organized grocery store or supermarket franchise in Kanpur with The Buyzaar Mart. Explore market scope, location strategies, step-by-step setup, investment requirements, and smart retail technologies.",
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