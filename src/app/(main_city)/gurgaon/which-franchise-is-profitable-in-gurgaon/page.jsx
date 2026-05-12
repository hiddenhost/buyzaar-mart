import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Which Franchise Is Profitable in Gurgaon? | Buyzaar Mart",
  description:
    "Find out which franchise is most profitable in Gurgaon. Daily needs retail with The Buyzaar Mart FOCM model delivers consistent returns. Call 9217991727 today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/which-franchise-is-profitable-in-gurgaon",
  },
  openGraph: {
    title: "Which Franchise Is Profitable in Gurgaon? | Buyzaar Mart",
    description:
      "Find out which franchise is most profitable in Gurgaon. Daily needs retail with The Buyzaar Mart FOCM model delivers consistent returns. Call 9217991727 today!",
    url: "https://www.thebuyzaarmart.com/gurgaon/which-franchise-is-profitable-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Which Franchise Is Profitable in Gurgaon? | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Franchise Is Profitable in Gurgaon? | Buyzaar Mart",
    description:
      "Find out which franchise is most profitable in Gurgaon. Daily needs retail with The Buyzaar Mart FOCM model delivers consistent returns. Call 9217991727 today!",
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