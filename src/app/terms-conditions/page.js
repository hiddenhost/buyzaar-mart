import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Terms & Conditions | Buyzaar Mart",
  description:
    "Read Buyzaar Mart’s Terms & Conditions outlining the rules, responsibilities, and guidelines for using our website and submitting franchise enquiries.",

  keywords: [
    "buyzaar mart terms and conditions",
    "buyzaar mart website terms",
    "franchise enquiry terms",
    "buyzaar mart user agreement",
    "retail franchise website terms"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/terms-conditions",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Terms & Conditions | Buyzaar Mart",
    description:
      "Understand the terms governing the use of Buyzaar Mart’s website, services, and franchise enquiry process.",
    url: "https://www.thebuyzaarmart.com/terms-conditions",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Terms and Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Buyzaar Mart",
    description:
      "Buyzaar Mart Terms & Conditions define the rules and guidelines for using our website and services.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}
