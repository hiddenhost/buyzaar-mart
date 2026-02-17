import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Setup in Saharanpur | Planning & Execution",

  description:
    "Plan and execute supermarket setup in Saharanpur with proper layout, inventory, and systems.",

  keywords:
    "supermarket setup saharanpur, supermarket opening saharanpur, supermarket setup cost saharanpur, supermarket planning saharanpur, supermarket interior saharanpur, supermarket registration saharanpur, supermarket license saharanpur, supermarket startup saharanpur, supermarket setup near saharanpur, supermarket store setup saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-setup-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Setup in Saharanpur | Planning & Execution",
    description:
      "Plan and execute supermarket setup in Saharanpur with proper layout, inventory, and systems.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-setup-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Setup in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Setup in Saharanpur | Planning & Execution",
    description:
      "Plan and execute supermarket setup in Saharanpur with proper layout, inventory, and systems.",
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
