// src/app/store-images/page.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─────────────────────────────────────────────
//  ADD YOUR IMAGES & VIDEOS HERE
//  For images: set type: "image", src: "/your-image.jpg"
//  For videos: set type: "video", src: "/your-video.mp4"  (or a YouTube embed URL)
// ─────────────────────────────────────────────
const MEDIA = [
  {
    id: 6,
    type: "image",
    src: "https://res.cloudinary.com/dt8wjpf9e/image/upload/v1782109718/Buyzaar-shyam-nagar-store_ktqvi9.jpg",
    store: "Shyam Nagar, Kanpur",
    caption:
      "Now serving Kanpur! Visit The Buyzaar Mart at Shyam Nagar for quality products, great deals, and a seamless shopping experience.",
  },
  {
    id: 1,
    type: "image",
    src: "/store-images/store3.jpeg", // replace with your actual path
    store: "Sector 44, Noida",
    caption: "Grand storefront of The Buyzaar Mart, Sector 44 Chalera, Noida.",
  },
  {
    id: 2,
    type: "image",
    src: "/store-images/store2.png",
    store: "Gangoh, Near Bus Stand",
    caption:
      "Our Gangoh outlet — serving the community right near the Bus Stand.",
  },
  {
    id: 3,
    type: "image",
    src: "/store-images/store5.png",
    store: "Behat, Saharanpur",
    caption: "The Buyzaar Mart, Behat — bringing smart retail to Saharanpur.",
  },
  {
    id: 4,
    type: "image",
    src: "/store-images/store1.png",
    store: "Bahadrabad, Haridwar",
    caption:
      "Our Haridwar store at Bahadrabad, a go-to destination for locals.",
  },
  {
    id: 5,
    type: "image",
    src: "/store-images/store4.jpeg",
    store: "Laxmi vIlas Raj nagar EXT Ghaziabad",
    caption:
      "Exciting things are coming to Laxmi Vilas, Raj Nagar Extension, Ghaziabad — stay tuned!",
    locationEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.35787020355!2d77.43051487550358!3d28.708849175623207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzMxLjkiTiA3N8KwMjUnNTkuMSJF!5e0!3m2!1sen!2sin!4v1775302915562!5m2!1sen!2sin" width="100%" height="300" style="border:0;" loading="lazy"></iframe>`,
  },
  
];

// ─────────────────────────────────────────────
//  Unique store names for filter tabs
// ─────────────────────────────────────────────
const STORES = ["All", ...Array.from(new Set(MEDIA.map((m) => m.store)))];

export default function StoreImagesPage() {
  const [activeStore, setActiveStore] = useState("All");
  const [lightbox, setLightbox] = useState(null); // holds media item
  const [mapOpen, setMapOpen] = useState(null);

  const filtered =
    activeStore === "All"
      ? MEDIA
      : MEDIA.filter((m) => m.store === activeStore);

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        {/* background glow blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-red-700/25 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-10 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl" />

        {/* back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] text-red-400 hover:text-red-300 transition-colors mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.4em] text-red-700 uppercase mb-3">
            Store Gallery
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Photos &amp; <span className="text-red-600">Videos</span>
          </h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Take a visual tour of our BUYZAAR Mart outlets — the stores, the
            shelves, and the smiles.
          </p>
        </motion.div>
      </section>

      {/* ── Filter tabs ── */}
      <section className="px-4 md:px-6 max-w-6xl mx-auto mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {STORES.map((store) => (
            <button
              key={store}
              onClick={() => setActiveStore(store)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border transition-all duration-200 ${
                activeStore === store
                  ? "bg-red-700 border-red-600 text-white shadow-[0_0_18px_rgba(220,38,38,0.5)]"
                  : "border-neutral-700 text-neutral-400 hover:border-red-700 hover:text-red-300"
              }`}
            >
              {store}
            </button>
          ))}
        </div>
      </section>

      {/* ── Masonry / responsive grid ── */}
      <section className="px-4 md:px-6 max-w-6xl mx-auto pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                onClick={() => setLightbox(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:border-red-800/60 transition-all duration-300"
              >
                {/* Thumbnail */}
                {item.type === "image" ? (
                  <div className="relative w-full aspect-[4/3] bg-neutral-800 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // fallback placeholder if image missing
                        e.currentTarget.src =
                          "https://placehold.co/600x450/1a1a1a/555555?text=Image+Coming+Soon";
                      }}
                    />
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-[0.25em] border border-white/40 px-3 py-1.5 rounded-full backdrop-blur">
                        View
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                    {/* video play indicator */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="h-14 w-14 rounded-full bg-red-700/90 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.7)] group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-black/80 to-neutral-900" />
                    <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-red-300 z-10">
                      Video
                    </p>
                  </div>
                )}

                {/* Caption strip */}
                <div className="px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-red-500 mb-0.5">
                    {item.store}
                  </p>
                  <p className="text-sm text-neutral-300 leading-snug line-clamp-2">
                    {item.caption}
                  </p>
                </div>

               {item.locationEmbed && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      setMapOpen(item);
    }}
    className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full text-xs text-white border border-white/20 hover:bg-red-700 hover:border-red-500 transition-all duration-300"
  >
    {/* Location SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>

    <span className="uppercase tracking-wider text-[10px]">View Location</span>
  </button>
)}
              </motion.div>
            ))}
          </AnimatePresence>
          <AnimatePresence>
  {mapOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
      onClick={() => setMapOpen(null)}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-neutral-900 rounded-xl overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          dangerouslySetInnerHTML={{ __html: mapOpen.locationEmbed }}
        />

        <button
          onClick={() => setMapOpen(null)}
          className="absolute top-3 right-3 bg-black/70 p-2 rounded-full"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-neutral-500 py-16">
            No media found for this store.
          </p>
        )}
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-black/70 border border-neutral-600 flex items-center justify-center hover:bg-red-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Media */}
              {lightbox.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={lightbox.src}
                  alt={lightbox.caption}
                  className="w-full max-h-[70vh] object-contain bg-black"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/900x600/1a1a1a/555555?text=Image+Coming+Soon";
                  }}
                />
              ) : (
                <div className="w-full aspect-video bg-black">
                  <iframe
                    src={lightbox.src}
                    title={lightbox.caption}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Caption */}
              <div className="px-5 py-4 bg-[#111]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 mb-1">
                  {lightbox.store}
                </p>
                <p className="text-sm text-neutral-300">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
