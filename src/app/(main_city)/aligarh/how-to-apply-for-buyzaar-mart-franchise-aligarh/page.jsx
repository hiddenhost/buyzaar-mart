import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Apply for Buyzaar Mart Franchise in Aligarh | Step-by-Step Application Guide",
  description:
    "Complete guide on how to apply for The Buyzaar Mart franchise in Aligarh — documents needed, application steps, timeline, costs, and eligibility. Start your application today.",
  keywords: [
    "how to apply Buyzaar Mart franchise",
    "Buyzaar Mart application Aligarh",
    "franchise application process Aligarh",
    "apply grocery franchise UP",
    "franchise documents required",
    "franchise KYC process",
    "franchise agreement grocery store",
    "franchise inquiry form Aligarh",
    "how to open grocery store Aligarh",
    "franchise application timeline",
    "franchise site survey process",
    "franchise eligibility criteria",
    "Mini Mart application process",
    "Super Mart application Aligarh",
    "Hyper Mart application UP",
    "franchise onboarding process",
    "retail franchise documents India",
    "grocery franchise apply online",
    "franchise partner application Aligarh",
    "step by step franchise guide",
    "buyzaar mart apply now",
    "franchise investment application",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-apply-for-buyzaar-mart-franchise-aligarh",
  },
  openGraph: {
    title: "How to Apply for Buyzaar Mart Franchise in Aligarh | Step-by-Step Application Guide",
    description:
      "Complete guide on how to apply for The Buyzaar Mart franchise in Aligarh — documents needed, application steps, timeline, costs, and eligibility. Start your application today.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-apply-for-buyzaar-mart-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise in Aligarh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Buyzaar Mart Franchise in Aligarh | Step-by-Step Application Guide",
    description:
      "Complete guide on how to apply for The Buyzaar Mart franchise in Aligarh — documents needed, application steps, timeline, costs, and eligibility. Start your application today.",
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