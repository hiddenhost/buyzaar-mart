import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise in Noida | The Buyzaar Mart Franchise Opportunity",

  description:
    "Looking for a mart franchise in Noida? Partner with The Buyzaar Mart and start a modern grocery and daily-needs store",

  keywords:
    "retail franchise in noida, the buyzaar mart noida, noida retail franchise, retail business opportunity noida, franchise in noida, buyzaar mart franchise, retail store franchise noida, noida franchise opportunity, business franchise noida, retail investment noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/mart-franchise-in-noida",
  },

  openGraph: {
    title: "Mart Franchise in Noida | The Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a mart franchise in Noida? Partner with The Buyzaar Mart and start a modern grocery and daily-needs store",
    url: "https://www.thebuyzaarmart.com/cities/noida/mart-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise in Noida | The Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise in Noida | The Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a mart franchise in Noida? Partner with The Buyzaar Mart and start a modern grocery and daily-needs store",
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