import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Supermarket Business Meerut | The Buyzaar Mart",
  description: "Launch your supermarket business Meerut with The Buyzaar Mart franchise. Complete investment breakdown, expert support & proven business modules. Start today!",
  keywords: "supermarket business meerut, buyzaar mart business, grocery business meerut, retail business meerut, supermarket opportunity meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/start-supermarket-business-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Start Supermarket Business Meerut | The Buyzaar Mart",
    description: "Launch your supermarket business Meerut with The Buyzaar Mart franchise. Complete investment breakdown, expert support & proven business modules. Start today!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/start-supermarket-business-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start Supermarket Business Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Start Supermarket Business Meerut | The Buyzaar Mart",
    description: "Launch your supermarket business Meerut with The Buyzaar Mart franchise. Complete investment breakdown, expert support & proven business modules. Start today!",
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