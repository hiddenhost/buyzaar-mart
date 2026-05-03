import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Which Franchise Is Best in Ghaziabad? | The Buyzaar Mart",
  description:
    "Wondering which franchise is best in Ghaziabad? Discover why a daily needs store franchise with The Buyzaar Mart leads in returns and stability. Call 9217991727!",
  keywords:
    "which franchise is best in Ghaziabad, best franchise in Ghaziabad, daily needs store franchise in Ghaziabad, grocery franchise Ghaziabad, supermarket franchise Ghaziabad, low investment franchise Ghaziabad, high return franchise Ghaziabad, Buyzaar Mart Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/which-franchise-is-best-in-ghaziabad",
  },
  openGraph: {
    title: "Which Franchise Is Best in Ghaziabad? | The Buyzaar Mart",
    description:
      "Wondering which franchise is best in Ghaziabad? Discover why a daily needs store franchise with The Buyzaar Mart leads in returns and stability. Call 9217991727!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/which-franchise-is-best-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Which Franchise Is Best in Ghaziabad? | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Franchise Is Best in Ghaziabad? | The Buyzaar Mart",
    description:
      "Wondering which franchise is best in Ghaziabad? Discover why a daily needs store franchise with The Buyzaar Mart leads in returns and stability. Call 9217991727!",
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