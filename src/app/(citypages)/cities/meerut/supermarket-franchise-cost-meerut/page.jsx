import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Cost in Meerut | The Buyzaar Mart Investment Guide",
  description: "Explore supermarket franchise cost in Meerut with The Buyzaar Mart. Learn investment details, setup process, and growth potential to start your retail business successfully.",
  keywords: "supermarket franchise meerut, buyzaar mart franchise cost, supermarket investment meerut, retail franchise meerut, supermarket cost meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-franchise-cost-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Supermarket Franchise Cost in Meerut | The Buyzaar Mart Investment Guide",
    description: "Explore supermarket franchise cost in Meerut with The Buyzaar Mart. Learn investment details, setup process, and growth potential to start your retail business successfully.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-franchise-cost-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Cost in Meerut | The Buyzaar Mart Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Cost in Meerut | The Buyzaar Mart Investment Guide",
    description: "Explore supermarket franchise cost in Meerut with The Buyzaar Mart. Learn investment details, setup process, and growth potential to start your retail business successfully.",
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