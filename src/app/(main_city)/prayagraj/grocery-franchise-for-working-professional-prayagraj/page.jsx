import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise for Working Professionals in Prayagraj | Buyzaar Mart",
  description:
    "Explore a grocery franchise in Prayagraj built for working professionals. Manage part-time with Buyzaar Mart's trained staff and structured support system.",
  keywords: [
    "grocery franchise working professionals Prayagraj",
    "Buyzaar Mart franchise",
    "part-time franchise business Prayagraj",
    "passive income franchise India",
    "side business franchise Prayagraj",
    "manager-run grocery franchise",
    "grocery store franchise UP",
    "franchise for salaried employees",
    "second income franchise India",
    "retail franchise part-time investment",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-for-working-professional-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise for Working Professionals in Prayagraj | Buyzaar Mart",
    description:
      "Explore a grocery franchise in Prayagraj built for working professionals. Manage part-time with Buyzaar Mart's trained staff and structured support system.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-for-working-professional-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise for Working Professionals in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise for Working Professionals in Prayagraj | Buyzaar Mart",
    description:
      "Explore a grocery franchise in Prayagraj built for working professionals. Manage part-time with Buyzaar Mart's trained staff and structured support system.",
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