import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Noida | The Buyzaar Mart Tops the List",

  description:
    "Explore the best supermarket in Noida at The Buyzaar Mart. Premium quality, vast selection, quick delivery across sectors. Your go-to for fresh groceries and more in Noida Extension & beyond!",

  keywords:
    "best supermarket noida, supermarket noida, buyzaar mart noida, top supermarket noida, fresh groceries noida, grocery store noida, daily essentials noida, supermarket delivery noida, quality supermarket noida, noida extension supermarket",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Supermarket in Noida | The Buyzaar Mart Tops the List",
    description: "Explore the best supermarket in Noida at The Buyzaar Mart. Premium quality, vast selection, quick delivery across sectors. Your go-to for fresh groceries and more in Noida Extension & beyond!",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart - Best Supermarket in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Noida | The Buyzaar Mart Tops the List",
    description: "Explore the best supermarket in Noida at The Buyzaar Mart. Premium quality, vast selection, quick delivery across sectors. Your go-to for fresh groceries and more in Noida Extension & beyond!",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
