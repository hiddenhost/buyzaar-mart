import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Near Me Muzaffarnagar | The Buyzaar Mart",

  description:
    "Find the best supermarket near me in Muzaffarnagar at The Buyzaar Mart. Shop fresh fruits, vegetables, groceries & daily essentials at great prices. Open today!",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  openGraph: {
    title: "Supermarket Near Me Muzaffarnagar | The Buyzaar Mart",

    description:
      "Find the best supermarket near me in Muzaffarnagar at The Buyzaar Mart. Shop fresh fruits, vegetables, groceries & daily essentials at great prices. Open today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Near Me Muzaffarnagar | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Near Me Muzaffarnagar | The Buyzaar Mart",

    description:
      "Find the best supermarket near me in Muzaffarnagar at The Buyzaar Mart. Shop fresh fruits, vegetables, groceries & daily essentials at great prices. Open today!",

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