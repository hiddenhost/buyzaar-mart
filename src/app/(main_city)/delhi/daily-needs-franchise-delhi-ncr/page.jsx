import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Daily Needs Franchise delhi NCR | Buyzaar Mart Supermarket Franchise Opportunity in Delhi NCR 2026 – FOCM Model",
  description:
    "Own a profitable daily needs franchise in NCR with Buyzaar Mart. Franchise Owned Company Managed (FOCM) model – you invest, we manage. Mini, Super & Hyper Mart formats starting low investment. High demand in Gurgaon, Ghaziabad, Noida & Delhi. 18-20% gross margins, full support, FSSAI licensed. Call 9217991727 for details.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/daily-needs-franchise-delhi-ncr",
  },
  openGraph: {
    title:
      "Daily Needs Franchise delhi NCR | Buyzaar Mart Supermarket Franchise Opportunity in Delhi NCR 2026 – FOCM Model",
    description:
      "Own a profitable daily needs franchise in NCR with Buyzaar Mart. Franchise Owned Company Managed (FOCM) model – you invest, we manage. Mini, Super & Hyper Mart formats starting low investment. High demand in Gurgaon, Ghaziabad, Noida & Delhi. 18-20% gross margins, full support, FSSAI licensed. Call 9217991727 for details.",
    url: "https://www.thebuyzaarmart.com/delhi/daily-needs-franchise-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Franchise delhi NCR | Buyzaar Mart Supermarket Franchise Opportunity in Delhi NCR 2026 – FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Needs Franchise delhi NCR | Buyzaar Mart Supermarket Franchise Opportunity in Delhi NCR 2026 – FOCM Model",
    description:
      "Own a profitable daily needs franchise in NCR with Buyzaar Mart. Franchise Owned Company Managed (FOCM) model – you invest, we manage. Mini, Super & Hyper Mart formats starting low investment. High demand in Gurgaon, Ghaziabad, Noida & Delhi. 18-20% gross margins, full support, FSSAI licensed. Call 9217991727 for details.",
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