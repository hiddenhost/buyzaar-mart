import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Muzaffarnagar | The Buyzaar Mart Top Choice",

  description: "The Buyzaar Mart is the best supermarket in Muzaffarnagar for fresh produce, daily essentials, and easy shopping. Visit near Bhopa Road or Civil Lines—discover quality today!",

  keywords: "best supermarket muzaffarnagar, buyzaar mart muzaffarnagar, supermarket near bhopa road, supermarket civil lines muzaffarnagar, fresh produce muzaffarnagar, grocery store muzaffarnagar, daily essentials muzaffarnagar",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Supermarket in Muzaffarnagar | The Buyzaar Mart Top Choice",

    description: "The Buyzaar Mart is the best supermarket in Muzaffarnagar for fresh produce, daily essentials, and easy shopping. Visit near Bhopa Road or Civil Lines—discover quality today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Muzaffarnagar | The Buyzaar Mart Top Choice",

    description: "The Buyzaar Mart is the best supermarket in Muzaffarnagar for fresh produce, daily essentials, and easy shopping. Visit near Bhopa Road or Civil Lines—discover quality today!",

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