import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Business Opportunity in Noida | The Buyzaar Mart Guide",

  description:
    "Best business opportunity in Noida: Partner with The Buyzaar Mart for a scalable grocery and essentials store in high-growth areas.",

  keywords:
    "best business opportunity noida, business opportunity noida, buyzaar mart franchise, retail business noida, franchise opportunity noida, grocery business noida, profitable business noida, retail investment noida, neighborhood store noida, essentials store franchise noida",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/best-business-opportunity-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Profitable Business Opportunity in Noida | The Buyzaar Mart Guide",
    description: "Best business opportunity in Noida: Partner with The Buyzaar Mart for a scalable grocery and essentials store in high-growth areas.",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-business-opportunity-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart - Best Business Opportunity in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Profitable Business Opportunity in Noida | The Buyzaar Mart Guide",
    description: "Best business opportunity in Noida: Partner with The Buyzaar Mart for a scalable grocery and essentials store in high-growth areas.",
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
