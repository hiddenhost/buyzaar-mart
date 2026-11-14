import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above 15 Lakh in Amroha | Buyzaar Mart",
  description:
    "Planning a mart franchise above ₹15 lakh in Amroha? Explore Mini, Super and Hyper Mart formats with Buyzaar Mart, full setup support, training and 18-20% margin.",
  keywords: [
    "mart franchise above 15 lakh Amroha",
    "mart franchise Amroha",
    "Buyzaar Mart franchise Amroha",
    "supermarket franchise Amroha",
    "grocery franchise Amroha",
    "grocery franchise above 15 lakh",
    "super mart franchise Amroha",
    "hyper mart franchise Amroha",
    "mini mart franchise Amroha",
    "retail franchise Amroha",
    "FOCM franchise Amroha",
    "FOCO franchise Amroha",
    "supermarket franchise cost India",
    "grocery franchise under 20 lakh",
    "large format grocery franchise",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "apply for mart franchise",
    "supermarket franchise with full support",
    "neighborhood supermarket franchise",
    "FMCG store franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/mart-franchise-above-15-lakh-amroha",
  },
  openGraph: {
    title: "Mart Franchise Above 15 Lakh in Amroha | Buyzaar Mart",
    description:
      "Planning a mart franchise above ₹15 lakh in Amroha? Explore Mini, Super and Hyper Mart formats with Buyzaar Mart, full setup support, training and 18-20% margin.",
    url: "https://www.thebuyzaarmart.com/amroha/mart-franchise-above-15-lakh-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above 15 Lakh in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above 15 Lakh in Amroha | Buyzaar Mart",
    description:
      "Planning a mart franchise above ₹15 lakh in Amroha? Explore Mini, Super and Hyper Mart formats with Buyzaar Mart, full setup support, training and 18-20% margin.",
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