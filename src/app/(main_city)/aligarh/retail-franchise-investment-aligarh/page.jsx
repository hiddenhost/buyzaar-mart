import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Investment in Aligarh | Financial Analysis Guide",
  description:
    "A financial breakdown of retail franchise investment in Aligarh — capital requirements, margins, ROI, payback period & risk factors with The Buyzaar Mart.",
  keywords: [
    "retail franchise investment Aligarh",
    "franchise ROI analysis India",
    "retail franchise margins India",
    "franchise payback period calculation",
    "franchise risk analysis India",
    "best retail investment Aligarh",
    "FMCG franchise financial analysis",
    "The Buyzaar Mart franchise",
    "franchise business Uttar Pradesh",
    "retail investment opportunity India",
    "franchise capital requirement India",
    "grocery franchise ROI",
    "supermarket franchise investment analysis",
    "franchise financial planning India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/retail-franchise-investment-aligarh",
  },
  openGraph: {
    title: "Retail Franchise Investment in Aligarh | Financial Analysis Guide",
    description:
      "A financial breakdown of retail franchise investment in Aligarh — capital requirements, margins, ROI, payback period & risk factors with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/aligarh/retail-franchise-investment-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Aligarh | Financial Analysis Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Aligarh | Financial Analysis Guide",
    description:
      "A financial breakdown of retail franchise investment in Aligarh — capital requirements, margins, ROI, payback period & risk factors with The Buyzaar Mart.",
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