import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Opportunities in Moradabad | The Buyzaar Mart",
  description:
    "Explore the best franchise opportunities in Moradabad. Low risk, proven systems, and complete brand support with The Buyzaar Mart grocery franchise.",
  keywords: [
    "best franchise opportunities moradabad",
    "best grocery franchise moradabad",
    "top franchise business UP",
    "best supermarket franchise moradabad",
    "low risk franchise moradabad",
    "buyzaar mart best franchise",
    "best investment franchise moradabad",
    "top retail franchise moradabad",
    "franchise ranking moradabad",
    "best business to start moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/best-franchise-opportunities-in-moradabad",
  },
  openGraph: {
    title: "Best Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Explore the best franchise opportunities in Moradabad. Low risk, proven systems, and complete brand support with The Buyzaar Mart grocery franchise.",
    url: "https://www.thebuyzaarmart.com/moradabad/best-franchise-opportunities-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Opportunities in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Explore the best franchise opportunities in Moradabad. Low risk, proven systems, and complete brand support with The Buyzaar Mart grocery franchise.",
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