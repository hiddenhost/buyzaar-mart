import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Mart Franchise in Mathura | Run a Buyzaar Mart",
  description:
    "Own and run a Buyzaar Mart in Mathura with the FOCM model. See your role as owner, investment, margins, store formats, team needs and how to apply today.",
  keywords: [
    "FOCM mart franchise Mathura",
    "Buyzaar Mart FOCM franchise",
    "FOCM franchise model",
    "mart franchise in Mathura",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "mini mart franchise Mathura",
    "owner operated franchise India",
    "retail franchise Mathura",
    "low investment mart franchise",
    "supermarket franchise Uttar Pradesh",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "Mini Mart franchise cost",
    "franchise business in Mathura",
    "Mathura Vrindavan franchise",
    "FMCG franchise Mathura",
    "kirana to supermarket franchise",
    "grocery store franchise India",
    "FOCM vs FOCO",
    "best mart franchise in India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/focm-mart-franchise-mathura",
  },
  openGraph: {
    title: "FOCM Mart Franchise in Mathura | Run a Buyzaar Mart",
    description:
      "Own and run a Buyzaar Mart in Mathura with the FOCM model. See your role as owner, investment, margins, store formats, team needs and how to apply today.",
    url: "https://www.thebuyzaarmart.com/mathura/focm-mart-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise in Mathura | Run a Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise in Mathura | Run a Buyzaar Mart",
    description:
      "Own and run a Buyzaar Mart in Mathura with the FOCM model. See your role as owner, investment, margins, store formats, team needs and how to apply today.",
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