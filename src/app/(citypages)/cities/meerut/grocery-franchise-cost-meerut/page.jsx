import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Cost Meerut | The Buyzaar Mart",
  description: "Complete grocery franchise cost breakdown for Meerut with The Buyzaar Mart. Investment from ₹15-40 lakhs, full support included. Get your customized quote now!",
  keywords: "grocery franchise cost meerut, buyzaar mart franchise cost, supermarket investment meerut, grocery franchise investment meerut, retail franchise cost meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-franchise-cost-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Grocery Franchise Cost Meerut | The Buyzaar Mart",
    description: "Complete grocery franchise cost breakdown for Meerut with The Buyzaar Mart. Investment from ₹15-40 lakhs, full support included. Get your customized quote now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-franchise-cost-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Cost Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Cost Meerut | The Buyzaar Mart",
    description: "Complete grocery franchise cost breakdown for Meerut with The Buyzaar Mart. Investment from ₹15-40 lakhs, full support included. Get your customized quote now!",
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