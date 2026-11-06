import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Apply for Buyzaar Mart Franchise in Amroha | Step-by-Step Guide",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Amroha in 8 simple steps. Documents, application form and total investment from ₹15 lakh. Reply within 24 hours.",
  keywords: [
    "how to apply for buyzaar mart franchise amroha",
    "buyzaar mart franchise apply",
    "buyzaar mart franchise amroha",
    "how to apply supermarket franchise amroha",
    "buyzaar mart franchise application process",
    "buyzaar mart franchise form",
    "buyzaar mart franchise documents",
    "the buyzaar mart",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "step by step franchise application",
    "buyzaar mart franchise process",
    "supermarket franchise uttar pradesh",
    "FOCM franchise amroha",
    "FOCO franchise amroha",
    "mini mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity amroha",
    "organised retail franchise amroha",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-apply-for-buyzaar-mart-franchise-amroha",
  },
  openGraph: {
    title:
      "How to Apply for Buyzaar Mart Franchise in Amroha | Step-by-Step Guide",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Amroha in 8 simple steps. Documents, application form and total investment from ₹15 lakh. Reply within 24 hours.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-apply-for-buyzaar-mart-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise in Amroha | Step-by-Step Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Apply for Buyzaar Mart Franchise in Amroha | Step-by-Step Guide",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Amroha in 8 simple steps. Documents, application form and total investment from ₹15 lakh. Reply within 24 hours.",
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