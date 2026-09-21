import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Get a Grocery Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Learn how to get a grocery franchise in Aligarh with The Buyzaar Mart. Explore eligibility, required documents, application process, investment & returns.",
  keywords: [
    "how to get grocery franchise in Aligarh",
    "grocery franchise eligibility India",
    "grocery franchise application process",
    "FMCG franchise India",
    "mini mart franchise",
    "super mart franchise",
    "hyper mart franchise",
    "become a franchise partner Aligarh",
    "low investment grocery franchise",
    "best grocery franchise India",
    "The Buyzaar Mart franchise",
    "franchise documents required India",
    "grocery business opportunity Aligarh",
    "organized retail franchise Uttar Pradesh",
    "franchise approval process India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-get-grocery-franchise-in-aligarh",
  },
  openGraph: {
    title: "How to Get a Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Aligarh with The Buyzaar Mart. Explore eligibility, required documents, application process, investment & returns.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-get-grocery-franchise-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Get a Grocery Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get a Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Aligarh with The Buyzaar Mart. Explore eligibility, required documents, application process, investment & returns.",
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