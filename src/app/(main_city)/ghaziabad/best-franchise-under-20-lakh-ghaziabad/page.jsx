import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title: "Best Franchise Under 20 Lakh in Ghaziabad | Top Low-Cost Franchises 2025",
  description:
    "Explore the best franchise opportunities under 20 lakh in Ghaziabad. Compare low-investment, high-return franchise businesses across food, retail, education & more. Start your business today!",
  keywords:
    "best franchise under 20 lakh in Ghaziabad, low cost franchise in Ghaziabad, top franchise in Ghaziabad, franchise opportunities under 20 lakh, low investment high return franchise Ghaziabad, food franchise Ghaziabad, retail franchise Ghaziabad, education franchise Ghaziabad, best business under 20 lakh in Ghaziabad, affordable franchise Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/best-franchise-under-20-lakh-ghaziabad",
  },
  openGraph: {
    title: "Best Franchise Under 20 Lakh in Ghaziabad | Top Low-Cost Franchises 2025",
    description:
      "Explore the best franchise opportunities under 20 lakh in Ghaziabad. Compare low-investment, high-return franchise businesses across food, retail, education & more. Start your business today!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/best-franchise-under-20-lakh-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Under 20 Lakh in Ghaziabad | Top Low-Cost Franchises 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Under 20 Lakh in Ghaziabad | Top Low-Cost Franchises 2025",
    description:
      "Explore the best franchise opportunities under 20 lakh in Ghaziabad. Compare low-investment, high-return franchise businesses across food, retail, education & more. Start your business today!",
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