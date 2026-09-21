import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Aligarh | Open with The Buyzaar Mart",
  description:
    "Learn how to open a supermarket franchise in Aligarh with The Buyzaar Mart. Get details on investment, store formats, licenses, margins, and setup steps.",
  keywords: [
    "supermarket franchise in Aligarh",
    "open supermarket business Aligarh",
    "FMCG supermarket franchise India",
    "hyper mart franchise",
    "super mart franchise",
    "mini mart franchise",
    "retail franchise opportunities Aligarh",
    "grocery and supermarket franchise",
    "low investment supermarket franchise",
    "best supermarket franchise India",
    "The Buyzaar Mart franchise",
    "franchise business Uttar Pradesh",
    "organized retail franchise India",
    "supermarket business plan Aligarh",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-open-supermarket-franchise-in-aligarh",
  },
  openGraph: {
    title: "Supermarket Franchise in Aligarh | Open with The Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Aligarh with The Buyzaar Mart. Get details on investment, store formats, licenses, margins, and setup steps.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-open-supermarket-franchise-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Aligarh | Open with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Aligarh | Open with The Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Aligarh with The Buyzaar Mart. Get details on investment, store formats, licenses, margins, and setup steps.",
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