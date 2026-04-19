import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Ghaziabad | The Buyzaar Mart",
  description:
    "Start your own neighbourhood mart franchise in Ghaziabad with The Buyzaar Mart. Full support, inventory guarantee, hyper-local marketing & proven model. Apply today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/ghaziabad/neighbourhood-mart-franchise-ghaziabad",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Start your own neighbourhood mart franchise in Ghaziabad with The Buyzaar Mart. Full support, inventory guarantee, hyper-local marketing & proven model. Apply today.",
    url: "https://www.thebuyzaarmart.com/cities/ghaziabad/neighbourhood-mart-franchise-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Ghaziabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Start your own neighbourhood mart franchise in Ghaziabad with The Buyzaar Mart. Full support, inventory guarantee, hyper-local marketing & proven model. Apply today.",
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