import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Investment in Meerut | The Buyzaar Mart",
  description: "Complete grocery store investment guide for Meerut with The Buyzaar Mart. Low-risk, high-demand retail opportunity with detailed cost breakdown. Start investing now!",
  keywords: "grocery store investment meerut, buyzaar mart grocery franchise, supermarket investment meerut, retail investment meerut, grocery business meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-store-investment-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Grocery Store Investment in Meerut | The Buyzaar Mart",
    description: "Complete grocery store investment guide for Meerut with The Buyzaar Mart. Low-risk, high-demand retail opportunity with detailed cost breakdown. Start investing now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-store-investment-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Investment in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Investment in Meerut | The Buyzaar Mart",
    description: "Complete grocery store investment guide for Meerut with The Buyzaar Mart. Low-risk, high-demand retail opportunity with detailed cost breakdown. Start investing now!",
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