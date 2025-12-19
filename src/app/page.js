import HomeClient from "@/app/HomeClient"

export const metadata = {
  title:
    "The Buyzaar Mart – Retail Franchise & Neighborhood Store Solutions in India",

  description:
    "The Buyzaar Mart is a leading retail franchise network in India offering smart neighborhood store ownership opportunities, quality daily-need products, and reliable retail solutions for entrepreneurs.",

  keywords: [
    "retail franchise in India",
    "neighborhood store franchise",
    "buyzaar mart franchise",
    "smart retail solutions",
    "retail business opportunity",
    "franchise store network",
    "daily need retail store",
    "FMCG retail store franchise",
    "local grocery retail solutions",
    "franchise investment opportunity",
    "retail operations support",
    "POS enabled retail systems",
    "retail CRM solutions",
    "franchise business in India",
    "affordable retail franchise",
    "store launch support",
    "micro retail franchise",
    "entrepreneur retail network",
    "retail store ownership",
    "community retail services",
    "India retail franchise network",
    "retail training and support"
  ],

  // CANONICAL URL
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/",
  },

  // OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "The Buyzaar Mart – Retail Franchise & Neighborhood Store Solutions",

    description:
      "Join The Buyzaar Mart franchise network to own and operate your neighborhood retail store with modern systems, inventory support, and ongoing operations guidance.",

    url: "https://www.thebuyzaarmart.com/",
    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart – Retail Franchise & Store Ownership",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "The Buyzaar Mart – Retail Franchise & Neighborhood Store Network",

    description:
      "Empowering entrepreneurs with retail franchise opportunities, smart store solutions, and community-focused retail services across India.",

    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <HomeClient />;
}
