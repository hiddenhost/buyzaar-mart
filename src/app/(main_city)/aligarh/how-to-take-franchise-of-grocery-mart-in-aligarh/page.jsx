import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Take a Grocery Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Planning to take a grocery mart franchise in Aligarh? Explore costs, funding options, investment slabs, licenses, and setup steps with The Buyzaar Mart.",
  keywords: [
    "how to take franchise of grocery mart in Aligarh",
    "grocery mart franchise cost India",
    "franchise funding options India",
    "grocery franchise investment plan",
    "mini mart franchise",
    "super mart franchise",
    "hyper mart franchise",
    "business loan for franchise India",
    "low investment grocery franchise",
    "best grocery mart franchise India",
    "The Buyzaar Mart franchise",
    "franchise setup process Aligarh",
    "grocery business opportunity Uttar Pradesh",
    "franchise cost breakdown India",
    "MSME loan franchise business",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-take-franchise-of-grocery-mart-in-aligarh",
  },
  openGraph: {
    title: "How to Take a Grocery Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Planning to take a grocery mart franchise in Aligarh? Explore costs, funding options, investment slabs, licenses, and setup steps with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-take-franchise-of-grocery-mart-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Take a Grocery Mart Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Take a Grocery Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Planning to take a grocery mart franchise in Aligarh? Explore costs, funding options, investment slabs, licenses, and setup steps with The Buyzaar Mart.",
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