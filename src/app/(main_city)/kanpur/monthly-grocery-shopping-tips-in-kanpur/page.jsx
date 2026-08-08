import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Monthly Grocery Shopping Tips in Kanpur | The Buyzaar Mart",
  description:
    "Practical monthly grocery shopping tips for Kanpur households — smart budgeting, list-making, storage hacks, and money-saving habits from The Buyzaar Mart.",
  keywords: [
    "monthly grocery shopping tips Kanpur",
    "monthly grocery shopping Kanpur",
    "grocery shopping tips Kanpur",
    "monthly grocery checklist Kanpur",
    "grocery budget planning Kanpur",
    "grocery shopping guide Kanpur",
    "smart grocery shopping Kanpur",
    "grocery savings tips Kanpur",
    "family grocery shopping Kanpur",
    "monthly ration shopping Kanpur",
    "grocery planning Kanpur",
    "grocery list for family Kanpur",
    "household essentials shopping Kanpur",
    "daily essentials shopping Kanpur",
    "supermarket shopping tips Kanpur",
    "affordable grocery shopping Kanpur",
    "grocery shopping on a budget Kanpur",
    "best supermarket in Kanpur",
    "grocery store Kanpur",
    "grocery shopping offers Kanpur",
    "monthly household shopping Kanpur",
    "grocery shopping checklist Kanpur",
    "save money on groceries Kanpur",
    "grocery shopping ideas Kanpur",
    "organized grocery shopping Kanpur",
    "grocery shopping guide for families Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/monthly-grocery-shopping-tips-in-kanpur",
  },
  openGraph: {
    title: "Monthly Grocery Shopping Tips in Kanpur | The Buyzaar Mart",
    description:
      "Practical monthly grocery shopping tips for Kanpur households — smart budgeting, list-making, storage hacks, and money-saving habits from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/kanpur/monthly-grocery-shopping-tips-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Monthly Grocery Shopping Tips in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Grocery Shopping Tips in Kanpur | The Buyzaar Mart",
    description:
      "Practical monthly grocery shopping tips for Kanpur households — smart budgeting, list-making, storage hacks, and money-saving habits from The Buyzaar Mart.",
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