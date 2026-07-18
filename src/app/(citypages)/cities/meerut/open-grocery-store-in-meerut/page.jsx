import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Open Grocery Store in Meerut | The Buyzaar Mart",
  description: "Complete guide to open grocery store in Meerut with The Buyzaar Mart. Licenses, location tips, investment, step-by-step process. Start your profitable business now!",
  keywords: "open grocery store meerut, buyzaar mart meerut, grocery store franchise meerut, start grocery business meerut, grocery licenses meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/open-grocery-store-in-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Open Grocery Store in Meerut | The Buyzaar Mart",
    description: "Complete guide to open grocery store in Meerut with The Buyzaar Mart. Licenses, location tips, investment, step-by-step process. Start your profitable business now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/open-grocery-store-in-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Open Grocery Store in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Open Grocery Store in Meerut | The Buyzaar Mart",
    description: "Complete guide to open grocery store in Meerut with The Buyzaar Mart. Licenses, location tips, investment, step-by-step process. Start your profitable business now!",
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