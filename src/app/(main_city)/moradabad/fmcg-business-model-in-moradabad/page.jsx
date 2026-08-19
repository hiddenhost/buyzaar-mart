import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Business in Moradabad UP | The Buyzaar Mart Franchise Guide",
  description:
    "Explore the FMCG business opportunity in Moradabad, Uttar Pradesh — market size, growth drivers, and how a Buyzaar Mart franchise helps you start smart.",
  keywords: [
    "FMCG business Moradabad",
    "FMCG franchise Moradabad",
    "grocery franchise Moradabad",
    "The Buyzaar Mart Moradabad",
    "FMCG business Uttar Pradesh",
    "mini mart franchise Moradabad",
    "grocery store investment Moradabad",
    "organized retail western UP",
    "kirana to supermarket Moradabad",
    "low investment franchise UP",
    "FOCM FOCO franchise model",
    "daily needs store Moradabad",
    "Peetal Nagri retail business",
    "FMCG distributor Moradabad",
    "branded grocery store Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/fmcg-business-model-in-moradabad",
  },
  openGraph: {
    title: "FMCG Business in Moradabad UP | The Buyzaar Mart Franchise Guide",
    description:
      "Explore the FMCG business opportunity in Moradabad, Uttar Pradesh — market size, growth drivers, and how a Buyzaar Mart franchise helps you start smart.",
    url: "https://www.thebuyzaarmart.com/moradabad/fmcg-business-model-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Business in Moradabad UP | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Business in Moradabad UP | The Buyzaar Mart Franchise Guide",
    description:
      "Explore the FMCG business opportunity in Moradabad, Uttar Pradesh — market size, growth drivers, and how a Buyzaar Mart franchise helps you start smart.",
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