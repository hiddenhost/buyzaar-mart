import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Noida | Join The Buyzaar Mart Network",

  description:
    "Discover grocery franchise opportunity in Noida with The Buyzaar Mart. Low-risk entry, proven model, complete support, and high returns in Noida's growing retail market. Start your success story today!",

  keywords:
    "grocery franchise opportunity noida, buyzaar mart franchise noida, noida franchise opportunity, supermarket franchise noida, join buyzaar mart network, grocery business opportunity noida, retail franchise noida, noida grocery franchise, franchise network noida, buyzaar mart opportunity",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-franchise-opportunity-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Franchise Opportunity in Noida | Join The Buyzaar Mart Network",
    description: "Discover grocery franchise opportunity in Noida with The Buyzaar Mart. Low-risk entry, proven model, complete support, and high returns in Noida's growing retail market. Start your success story today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-franchise-opportunity-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Noida - Join The Buyzaar Mart Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Noida | Join The Buyzaar Mart Network",
    description: "Discover grocery franchise opportunity in Noida with The Buyzaar Mart. Low-risk entry, proven model, complete support, and high returns in Noida's growing retail market. Start your success story today!",
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
