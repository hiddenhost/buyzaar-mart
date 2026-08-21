import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Mart Franchise in Bulandshahr | Buyzaar Mart Guide",
  description:
    "Learn how to open a Buyzaar Mart franchise in Bulandshahr, covering formats, models, space, investment, documentation, setup and launch in detail.",
  keywords: [
    "how to open mart franchise in bulandshahr",
    "open grocery store bulandshahr",
    "start supermarket business bulandshahr",
    "buyzaar mart franchise setup",
    "open mini mart bulandshahr",
    "open super mart bulandshahr",
    "open hyper mart bulandshahr",
    "franchise opening process bulandshahr",
    "retail store setup guide uttar pradesh",
    "buyzaar mart application steps",
    "franchise site selection process",
    "POS system installation franchise",
    "staff training grocery franchise",
    "franchise launch marketing support",
    "buyzaar mart contact number",
    "FOCO FOCM franchise opening",
    "franchise documentation checklist",
    "grocery franchise investment bulandshahr",
    "organized retail store bulandshahr",
    "how to start a mart business",
    "buyzaar mart onboarding process",
    "franchise timeline bulandshahr",
    "low investment retail business UP",
    "first time entrepreneur franchise guide",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-mart-franchise-in-bulandshahr",
  },
  openGraph: {
    title: "How to Open Mart Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "Learn how to open a Buyzaar Mart franchise in Bulandshahr, covering formats, models, space, investment, documentation, setup and launch in detail.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-mart-franchise-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Mart Franchise in Bulandshahr | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Mart Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "Learn how to open a Buyzaar Mart franchise in Bulandshahr, covering formats, models, space, investment, documentation, setup and launch in detail.",
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