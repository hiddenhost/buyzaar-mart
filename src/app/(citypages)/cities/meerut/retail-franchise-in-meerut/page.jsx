import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise in Meerut | The Buyzaar Mart",
  description: "Discover profitable retail franchise opportunities in Meerut with The Buyzaar Mart. Supermarket, grocery, hypermart formats with complete support. Start your business!",
  keywords: "retail franchise meerut, buyzaar mart franchise, supermarket franchise meerut, grocery franchise meerut, retail business meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/retail-franchise-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Retail Franchise in Meerut | The Buyzaar Mart",
    description: "Discover profitable retail franchise opportunities in Meerut with The Buyzaar Mart. Supermarket, grocery, hypermart formats with complete support. Start your business!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/retail-franchise-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise in Meerut | The Buyzaar Mart",
    description: "Discover profitable retail franchise opportunities in Meerut with The Buyzaar Mart. Supermarket, grocery, hypermart formats with complete support. Start your business!",
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