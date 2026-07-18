import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Business in Meerut | The Buyzaar Mart",
  description: "Start a profitable supermarket business in Meerut with The Buyzaar Mart. High-demand retail opportunity with complete setup support and proven model. Enquire now!",
  keywords: "supermarket business meerut, buyzaar mart business, grocery business meerut, retail business meerut, supermarket opportunity meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-business-in-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Supermarket Business in Meerut | The Buyzaar Mart",
    description: "Start a profitable supermarket business in Meerut with The Buyzaar Mart. High-demand retail opportunity with complete setup support and proven model. Enquire now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-business-in-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Business in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Business in Meerut | The Buyzaar Mart",
    description: "Start a profitable supermarket business in Meerut with The Buyzaar Mart. High-demand retail opportunity with complete setup support and proven model. Enquire now!",
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
