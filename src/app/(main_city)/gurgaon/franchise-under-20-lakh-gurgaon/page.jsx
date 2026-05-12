import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Under 20 Lakh Gurgaon | The Buyzaar Mart",
  description:
    "Find the best franchise under 20 lakh in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage your daily needs store. Call 9217991727 to know more!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/franchise-under-20-lakh-gurgaon",
  },
  openGraph: {
    title: "Franchise Under 20 Lakh Gurgaon | The Buyzaar Mart",
    description:
      "Find the best franchise under 20 lakh in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage your daily needs store. Call 9217991727 to know more!",
    url: "https://www.thebuyzaarmart.com/gurgaon/franchise-under-20-lakh-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Under 20 Lakh Gurgaon | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Under 20 Lakh Gurgaon | The Buyzaar Mart",
    description:
      "Find the best franchise under 20 lakh in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage your daily needs store. Call 9217991727 to know more!",
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