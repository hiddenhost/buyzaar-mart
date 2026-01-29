import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Privacy Policy | Buyzaar Mart",
  description:
    "Read Buyzaar Mart’s Privacy Policy to understand how we collect, use, protect, and handle your personal information when you visit our website or submit franchise enquiries.",

  keywords: [
    "buyzaar mart privacy policy",
    "buyzaar mart data protection",
    "buyzaar mart website privacy",
    "franchise enquiry data policy",
    "user data security buyzaar mart"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/privacy-policy",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Privacy Policy | Buyzaar Mart",
    description:
      "Learn how Buyzaar Mart collects, uses, and safeguards your personal data in compliance with privacy standards.",
    url: "https://www.thebuyzaarmart.com/privacy-policy",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary",
    title: "Privacy Policy | Buyzaar Mart",
    description:
      "Buyzaar Mart Privacy Policy explains how user data is collected and protected.",
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
