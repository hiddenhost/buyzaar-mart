import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Cost in Muzaffarnagar | The Buyzaar Mart 2026 Guide",

  description: "Complete grocery franchise cost in Muzaffarnagar with The Buyzaar Mart – from ₹25 lakhs investment to 25% ROI. Full support, low risks. Start your store now!",

  keywords: "grocery franchise cost muzaffarnagar, buyzaar mart franchise muzaffarnagar, grocery franchise investment muzaffarnagar, 25 lakhs grocery franchise, 25% roi grocery franchise muzaffarnagar, buyzaar mart 2026 guide",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Franchise Cost in Muzaffarnagar | The Buyzaar Mart 2026 Guide",

    description: "Complete grocery franchise cost in Muzaffarnagar with The Buyzaar Mart – from ₹25 lakhs investment to 25% ROI. Full support, low risks. Start your store now!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Cost in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Cost in Muzaffarnagar | The Buyzaar Mart 2026 Guide",

    description: "Complete grocery franchise cost in Muzaffarnagar with The Buyzaar Mart – from ₹25 lakhs investment to 25% ROI. Full support, low risks. Start your store now!",

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