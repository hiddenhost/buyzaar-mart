import Content from "./Content";
import Services from "@/app/components/Services";
import Banner from "./Banner";
export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}
export const metadata = {
  title: "Open Supermarket in Saharanpur | Business Setup Guide",

  description:
    "Open a supermarket in Saharanpur with proper planning, organized retail format, and strong local market demand.",

  keywords:
    "open supermarket in saharanpur, supermarket opening saharanpur, how to open supermarket saharanpur, supermarket setup saharanpur, supermarket registration saharanpur, supermarket license saharanpur, open retail supermarket saharanpur, supermarket business opening saharanpur, supermarket near me saharanpur, new supermarket saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/open-supermarket-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Open Supermarket in Saharanpur | Business Setup Guide",
    description:
      "Open a supermarket in Saharanpur with proper planning, organized retail format, and strong local market demand.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/open-supermarket-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Open Supermarket in Saharanpur | Business Setup Guide",
    description:
      "Open a supermarket in Saharanpur with proper planning, organized retail format, and strong local market demand.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};
