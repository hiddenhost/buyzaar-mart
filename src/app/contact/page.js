import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Contact Buyzaar Mart | Franchise Enquiry & Business Support",
  description:
    "Get in touch with Buyzaar Mart for franchise enquiries, business partnerships, and support. Contact our team to start your supermarket franchise journey in India.",

  keywords: [
    "contact buyzaar mart",
    "buyzaar mart franchise contact",
    "supermarket franchise enquiry",
    "grocery franchise contact india",
    "buyzaar mart support",
    "franchise business enquiry",
    "buyzaar mart customer support"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/contact",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Contact Buyzaar Mart | Franchise Enquiry & Business Support",
    description:
      "Have questions about Buyzaar Mart franchise opportunities? Contact our team for franchise enquiries, partnerships, and support.",
    url: "https://www.thebuyzaarmart.com/contact",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Buyzaar Mart Franchise Support Team",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Contact Buyzaar Mart | Franchise Enquiry",
    description:
      "Reach Buyzaar Mart for supermarket franchise enquiries and business support across India.",
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
