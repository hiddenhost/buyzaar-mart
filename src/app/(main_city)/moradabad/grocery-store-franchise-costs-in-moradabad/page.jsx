import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
    title: "Grocery Store Franchise Costs in Moradabad | The Buyzaar Mart",
    description:
        "Explore complete grocery store franchise costs in Moradabad with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment, from ₹15 lakh, with full cost breakdown.",
    keywords: [
        "grocery store franchise cost Moradabad",
        "supermarket franchise investment Moradabad",
        "The Buyzaar Mart franchise cost",
        "Mini Mart franchise cost",
        "Super Mart franchise cost",
        "Hyper Mart franchise cost",
        "low investment grocery franchise Moradabad",
        "retail franchise cost Uttar Pradesh",
        "FOCM FOCO franchise cost",
        "franchise fee grocery store",
        "daily needs store franchise cost Moradabad",
    ],
    alternates: {
        canonical:
            "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-costs-in-moradabad",
    },
    openGraph: {
        title: "Grocery Store Franchise Costs in Moradabad | The Buyzaar Mart",
        description:
            "Explore complete grocery store franchise costs in Moradabad with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment, from ₹15 lakh, with full cost breakdown.",
        url: "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-costs-in-moradabad",
        siteName: "The Buyzaar Mart",
        images: [
            {
                url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
                width: 1200,
                height: 630,
                alt: "Grocery Store Franchise Costs in Moradabad | The Buyzaar Mart",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Grocery Store Franchise Costs in Moradabad | The Buyzaar Mart",
        description:
            "Explore complete grocery store franchise costs in Moradabad with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment, from ₹15 lakh, with full cost breakdown.",
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