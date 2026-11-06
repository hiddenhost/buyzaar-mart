import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Buyzaar Mart Franchise Apply in Amroha | Supermarket Franchise",
  description:
    "Apply for a Buyzaar Mart franchise in Amroha. Total investment starts from ₹15 lakh with FOCM and FOCO models, POS, training and full support. Submit your inquiry today.",
  keywords: [
    "buyzaar mart franchise apply amroha",
    "buyzaar mart franchise amroha",
    "apply for supermarket franchise amroha",
    "supermarket franchise in amroha",
    "the buyzaar mart",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "supermarket franchise uttar pradesh",
    "how to apply buyzaar mart franchise",
    "buyzaar mart franchise application",
    "buyzaar mart franchise documents",
    "FOCM franchise amroha",
    "FOCO franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity amroha",
    "organised retail franchise amroha",
    "best franchise to open in amroha",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-apply-amroha",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Apply in Amroha | Supermarket Franchise",
    description:
      "Apply for a Buyzaar Mart franchise in Amroha. Total investment starts from ₹15 lakh with FOCM and FOCO models, POS, training and full support. Submit your inquiry today.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-apply-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Apply in Amroha | Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Apply in Amroha | Supermarket Franchise",
    description:
      "Apply for a Buyzaar Mart franchise in Amroha. Total investment starts from ₹15 lakh with FOCM and FOCO models, POS, training and full support. Submit your inquiry today.",
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