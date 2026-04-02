import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Open Supermarket in Meerut | The Buyzaar Mart Guide",
  description: "Complete guide to open supermarket in Meerut with The Buyzaar Mart. Licenses, investment, prime locations, step-by-step execution. Launch your profitable store now!",
  keywords: "open supermarket meerut, buyzaar mart supermarket meerut, supermarket franchise meerut, start supermarket business meerut, supermarket licenses meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-business-opportunity-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Open Supermarket in Meerut | The Buyzaar Mart Guide",
    description: "Complete guide to open supermarket in Meerut with The Buyzaar Mart. Licenses, investment, prime locations, step-by-step execution. Launch your profitable store now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-business-opportunity-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Open Supermarket in Meerut | The Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Open Supermarket in Meerut | The Buyzaar Mart Guide",
    description: "Complete guide to open supermarket in Meerut with The Buyzaar Mart. Licenses, investment, prime locations, step-by-step execution. Launch your profitable store now!",
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