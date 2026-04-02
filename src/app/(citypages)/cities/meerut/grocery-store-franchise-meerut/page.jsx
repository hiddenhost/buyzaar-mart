import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Meerut | The Buyzaar Mart",
  description: "Start a profitable grocery store franchise in Meerut with The Buyzaar Mart. Low-risk, high-demand grocery business with full setup and operations support.",
  keywords: "grocery store franchise meerut, buyzaar mart grocery franchise, grocery business meerut, retail franchise meerut, grocery opportunity meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-store-franchise-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Grocery Store Franchise Meerut | The Buyzaar Mart",
    description: "Start a profitable grocery store franchise in Meerut with The Buyzaar Mart. Low-risk, high-demand grocery business with full setup and operations support.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-store-franchise-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Meerut | The Buyzaar Mart",
    description: "Start a profitable grocery store franchise in Meerut with The Buyzaar Mart. Low-risk, high-demand grocery business with full setup and operations support.",
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
