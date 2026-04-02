import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top Grocery Store in Muzaffarnagar | The Buyzaar Mart Quality",

  description: "The Buyzaar Mart ranks as the top grocery store in Muzaffarnagar. Fresh produce, daily needs, family packs. Experience reliable shopping today!",

  keywords: "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Top Grocery Store in Muzaffarnagar | The Buyzaar Mart Quality",

    description: "The Buyzaar Mart ranks as the top grocery store in Muzaffarnagar. Fresh produce, daily needs, family packs. Experience reliable shopping today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Top Grocery Store in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Top Grocery Store in Muzaffarnagar | The Buyzaar Mart Quality",

    description: "The Buyzaar Mart ranks as the top grocery store in Muzaffarnagar. Fresh produce, daily needs, family packs. Experience reliable shopping today!",

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