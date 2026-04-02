import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Mart in Muzaffarnagar | The Buyzaar Mart Fresh Deals",

  description: "Discover The Buyzaar Mart, the best grocery mart in Muzaffarnagar. Fresh produce, low prices on staples, household essentials near Bhopa Road. Shop now for quality!",

  keywords: "best grocery mart muzaffarnagar, buyzaar mart muzaffarnagar, grocery mart bhopa road, fresh produce muzaffarnagar, low price staples muzaffarnagar, household essentials muzaffarnagar, grocery deals muzaffarnagar",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Grocery Mart in Muzaffarnagar | The Buyzaar Mart Fresh Deals",

    description: "Discover The Buyzaar Mart, the best grocery mart in Muzaffarnagar. Fresh produce, low prices on staples, household essentials near Bhopa Road. Shop now for quality!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Mart in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Mart in Muzaffarnagar | The Buyzaar Mart Fresh Deals",

    description: "Discover The Buyzaar Mart, the best grocery mart in Muzaffarnagar. Fresh produce, low prices on staples, household essentials near Bhopa Road. Shop now for quality!",

    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

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