import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Super Market Franchise in Muzaffarnagar 2026| The Buyzaar Mart Guide",
  description: " Discover top super market franchise opportunities in Muzaffarnagar with The Buyzaar Mart. Learn benefits, steps, local market insights, and how to launch a successful retail venture in this growing UP district.", 
  keywords: "buyzaar mart franchise muzaffarnagar, grocery mart franchise muzaffarnagar, supermarket franchise muzaffarnagar, retail franchise opportunity muzaffarnagar, franchise business muzaffarnagar, buyzaar mart dealership muzaffarnagar, grocery franchise investment muzaffarnagar, profitable franchise muzaffarnagar",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar/start-your-business-today",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Super Market Franchise in Muzaffarnagar 2026| The Buyzaar Mart Guide",
    description: "Discover top super market franchise opportunities in Muzaffarnagar with The Buyzaar Mart. Learn benefits, steps, local market insights, and how to launch a successful retail venture in this growing UP district.",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/the-buyzaar-mart-grocery-franchise-in-muzaffarnagar-start-your-business-today",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Muzaffarnagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Super Market Franchise in Muzaffarnagar 2026| The Buyzaar Mart Guide",
    description: "Discover top super market franchise opportunities in Muzaffarnagar with The Buyzaar Mart. Learn benefits, steps, local market insights, and how to launch a successful retail venture in this growing UP district",


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
