import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity Meerut 2026: Low Investment High ROI| The Buyzaar Mart",
  description: "Discover profitable grocery franchise opportunity Meerut with The Buyzaar Mart. Full training & local support. Secure prime locations before 2026 fills up!",
  keywords: "grocery franchise meerut, franchise opportunity meerut, buyzaar mart franchise, low investment franchise meerut, high roi franchise meerut, supermarket franchise meerut, buyzaar mart meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-franchise-opportunity-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Grocery Franchise Opportunity Meerut 2026: Low Investment High ROI| The Buyzaar Mart",
    description: "Discover profitable grocery franchise opportunity Meerut with The Buyzaar Mart. Full training & local support. Secure prime locations before 2026 fills up!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-franchise-opportunity-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity Meerut 2026: Low Investment High ROI| The Buyzaar Mart",
    description: "Discover profitable grocery franchise opportunity Meerut with The Buyzaar Mart. Full training & local support. Secure prime locations before 2026 fills up!",
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
