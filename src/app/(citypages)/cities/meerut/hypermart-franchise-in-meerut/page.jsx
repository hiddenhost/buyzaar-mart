import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Hypermart Franchise Opportunity in Meerut – Start Your Retail Business Today",
  description: "Start a profitable hypermart franchise in Meerut with The Buyzaar Mart. Large-format retail, strong margins, full setup and marketing support. Apply now!",
  keywords: "hypermart franchise meerut, buyzaar mart hypermart, retail franchise meerut, hypermarket business meerut, hypermart opportunity meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/hypermart-franchise-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Hypermart Franchise Opportunity in Meerut – Start Your Retail Business Today",
    description: "Start a profitable hypermart franchise in Meerut with The Buyzaar Mart. Large-format retail, strong margins, full setup and marketing support. Apply now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/hypermart-franchise-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hypermart Franchise Opportunity in Meerut – Start Your Retail Business Today",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Hypermart Franchise Opportunity in Meerut – Start Your Retail Business Today",
    description: "Start a profitable hypermart franchise in Meerut with The Buyzaar Mart. Large-format retail, strong margins, full setup and marketing support. Apply now!",
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
