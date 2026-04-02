import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise in Meerut: Low Investment Supermarket Business Opportunity",
  description: "Start your own grocery mart franchise in Meerut with a low-investment, high-demand business model. Learn benefits, investment details, setup process, and FAQs for aspiring retail entrepreneurs.",
  keywords: "grocery mart franchise meerut, low investment supermarket, buyzaar mart franchise, supermarket business opportunity meerut, retail franchise meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-mart-franchise-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Grocery Mart Franchise in Meerut: Low Investment Supermarket Business Opportunity",
    description: "Start your own grocery mart franchise in Meerut with a low-investment, high-demand business model. Learn benefits, investment details, setup process, and FAQs for aspiring retail entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-mart-franchise-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise in Meerut: Low Investment Supermarket Business Opportunity",
    description: "Start your own grocery mart franchise in Meerut with a low-investment, high-demand business model. Learn benefits, investment details, setup process, and FAQs for aspiring retail entrepreneurs.",
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
