import BlogPostPage from "./BlogPostPage";

export const metadata = {
  title: "Buyzaar Mart Blog | Retail Franchise, FOCM Model & Business Investment Insights",

  description:
    "Explore expert blogs from Buyzaar Mart on retail franchise opportunities, the FOCM (Franchise Owned Company Managed) model, retail investment strategies, and profitable business growth insights.",

  keywords:
    "Buyzaar Mart blog, FOCM franchise model blog, retail franchise investment, franchise owned company managed model, profitable retail franchise opportunities, retail business investment blogs, company managed franchise model India, retail franchise guide, Buyzaar Mart franchise insights, modern retail investment strategies",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/blog",
  },

  openGraph: {
    type: "website",
    url: "https://www.thebuyzaarmart.com/blog",
    title:
      "Buyzaar Mart Blog | Retail Franchise & FOCM Business Insights",

    description:
      "Read the latest insights from Buyzaar Mart on retail franchise opportunities, FOCM business models, and smart investment strategies in the retail industry.",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Blog – Retail Franchise & Investment Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Blog | Retail Franchise & Investment Insights",

    description:
      "Stay updated with expert blogs on retail franchise opportunities, FOCM model investments, and business growth strategies by Buyzaar Mart.",

    images: [
      "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
    ],
  },

  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogPostPage />
    </div>
  );
}