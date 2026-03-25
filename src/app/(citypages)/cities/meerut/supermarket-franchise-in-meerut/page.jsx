import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Meerut | The Buyzaar Mart",
  description: "Start a profitable supermarket franchise in Meerut with The Buyzaar Mart. Low investment, high demand, full setup and marketing support. Enquire now!",
  keywords: "supermarket franchise meerut, buyzaar mart franchise, grocery franchise meerut, supermarket business meerut, retail franchise meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-franchise-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Supermarket Franchise in Meerut | The Buyzaar Mart",
    description: "Start a profitable supermarket franchise in Meerut with The Buyzaar Mart. Low investment, high demand, full setup and marketing support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-franchise-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Meerut | The Buyzaar Mart",
    description: "Start a profitable supermarket franchise in Meerut with The Buyzaar Mart. Low investment, high demand, full setup and marketing support. Enquire now!",
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
