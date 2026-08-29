import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Aligarh | The Buyzaar Mart Guide",
  description:
    "Learn how to open a mart franchise in Aligarh with The Buyzaar Mart. Step-by-step process, investment, store formats, licenses, and launch support explained.",
  keywords: [
    "how to open mart franchise Aligarh",
    "mart franchise Aligarh",
    "open grocery store Aligarh",
    "Buyzaar Mart Aligarh",
    "supermarket franchise Aligarh",
    "retail franchise Aligarh",
    "grocery franchise Aligarh",
    "franchise process Aligarh",
    "how to start franchise Aligarh",
    "franchise apply Aligarh",
    "franchise investment Aligarh",
    "franchise licenses Aligarh",
    "open supermarket Aligarh",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "franchise business Aligarh",
    "FOCM FOCO franchise Aligarh",
    "best franchise in Aligarh",
    "franchise opportunity Uttar Pradesh",
    "daily needs store franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "franchise partner Aligarh",
    "low investment franchise Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-open-mart-franchise-in-aligarh",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Aligarh | The Buyzaar Mart Guide",
    description:
      "Learn how to open a mart franchise in Aligarh with The Buyzaar Mart. Step-by-step process, investment, store formats, licenses, and launch support explained.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-open-mart-franchise-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Aligarh | The Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Aligarh | The Buyzaar Mart Guide",
    description:
      "Learn how to open a mart franchise in Aligarh with The Buyzaar Mart. Step-by-step process, investment, store formats, licenses, and launch support explained.",
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