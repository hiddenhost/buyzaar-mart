import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Noida | Buyzaar Mart",
  description:
    "Explore a grocery franchise opportunity in Noida with Buyzaar Mart. Learn about benefits, store formats, investment, and how to apply today.",
  keywords: [
    "grocery franchise opportunity Noida",
    "Buyzaar Mart franchise Noida",
    "retail franchise Noida",
    "supermarket franchise Noida sectors",
    "grocery store franchise NCR",
    "organised retail business Noida",
    "franchise investment Noida",
    "Buyzaar Mart Noida franchise",
    "grocery business opportunity Noida",
    "franchise store setup Noida",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/grocery-franchise-opportunity-in-noida",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Noida | Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Noida with Buyzaar Mart. Learn about benefits, store formats, investment, and how to apply today.'s growing market.",
    url: "https://www.thebuyzaarmart.com/delhi/grocery-franchise-opportunity-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Noida | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Noida | Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Noida with Buyzaar Mart. Learn about benefits, store formats, investment, and how to apply today.",
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