import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Aligarh | Category Financial Guide",
  description:
    "A grocery-specific financial breakdown for franchise investment in Aligarh — inventory turnover, wastage, margins, FSSAI costs & ROI with The Buyzaar Mart.",
  keywords: [
    "grocery franchise investment Aligarh",
    "grocery inventory turnover analysis",
    "perishable wastage margin retail",
    "FSSAI cost grocery franchise",
    "grocery category margin analysis",
    "grocery franchise ROI India",
    "FMCG inventory management franchise",
    "best grocery investment Aligarh",
    "The Buyzaar Mart franchise",
    "franchise business Uttar Pradesh",
    "grocery working capital planning",
    "grocery retail compliance costs",
    "food retail franchise financial analysis",
    "grocery franchise profit margins India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-investment-aligarh",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Aligarh | Category Financial Guide",
    description:
      "A grocery-specific financial breakdown for franchise investment in Aligarh — inventory turnover, wastage, margins, FSSAI costs & ROI with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-investment-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Aligarh | Category Financial Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Aligarh | Category Financial Guide",
    description:
      "A grocery-specific financial breakdown for franchise investment in Aligarh — inventory turnover, wastage, margins, FSSAI costs & ROI with The Buyzaar Mart.",
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