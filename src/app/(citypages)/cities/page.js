import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Our Service Locations | The Buyzaar Mart",
  description:
    "Explore the locations where The Buyzaar Mart operates supermarkets and franchise stores, delivering quality groceries and daily essentials across key cities in Uttar Pradesh.",
  keywords: [
    "buyzaar mart locations",
    "supermarket in gangoh",
    "grocery store in saharanpur",
    "retail store in muzaffarnagar",
    "daily needs store up",
    "the buyzaar mart presence"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Our Service Locations | The Buyzaar Mart",
    description:
      "Find The Buyzaar Mart supermarkets and franchise stores operating in Gangoh, Saharanpur, and Muzaffarnagar with quality groceries and trusted retail services.",
    url: "https://www.thebuyzaarmart.com/cities",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Our Service Locations | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Our Service Locations | The Buyzaar Mart",
    description:
      "Discover where The Buyzaar Mart supermarkets operate in Uttar Pradesh with affordable groceries and daily essentials.",
    images: ["https://www.thebuyzaarmart.com/logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

const cities = [
  { name: "Gangoh", slug: "gangoh", desc: "Supermarket & grocery store services in Gangoh" },
  { name: "Saharanpur", slug: "saharanpur", desc: "Retail & daily needs supermarket in Saharanpur" },
  { name: "Muzaffarnagar", slug: "muzaffarnagar", desc: "Neighborhood grocery & retail services in Muzaffarnagar" },
];

export default function Page() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-medium text-center mb-4 mt-20 font-serif">
        Our Service Locations
      </h1>

      <p className="text-gray-700 text-1xl text-center mb-10 max-w-7xl mx-auto">
        The Buyzaar Mart currently operates in select cities across Uttar Pradesh,
        providing trusted supermarkets, quality groceries, and daily essential products
        for neighborhood communities. Choose your city below to explore our stores and services near you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white"
          >
            <div className="flex items-start gap-3">
              <svg
  className="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  />
</svg>


              <div>
                <h2 className="text-xl font-medium font-serif">{city.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{city.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
