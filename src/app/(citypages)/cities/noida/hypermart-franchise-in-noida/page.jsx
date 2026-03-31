import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Hypermart Franchise in Noida | The Buyzaar Mart Opportunity",

  description:
    "Start a hypermart franchise in Noida with The Buyzaar Mart. Massive variety, complete support, high-volume success in Noida's retail boom. Apply today!",

  keywords:
    "hypermart franchise in noida, buyzaar mart noida, hypermarket franchise noida, retail franchise noida, supermarket franchise noida, the buyzaar mart franchise, noida retail business, hypermart business opportunity noida, buyzaar mart hypermart, franchise in noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/hypermart-franchise-in-noida",
  },

  openGraph: {
    title: "Hypermart Franchise in Noida | The Buyzaar Mart Opportunity",
    description:
      "Start a hypermart franchise in Noida with The Buyzaar Mart. Massive variety, complete support, high-volume success in Noida's retail boom. Apply today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/hypermart-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hypermart Franchise in Noida - The Buyzaar Mart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hypermart Franchise in Noida | The Buyzaar Mart Opportunity",
    description:
      "Start a hypermart franchise in Noida with The Buyzaar Mart. Massive variety, complete support, high-volume success in Noida's retail boom. Apply today!",
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