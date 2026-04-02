// src/components/storelocator.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5148064990226!2d77.3373295!3d28.5543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5007933db51%3A0xf5fafb28c39c930a!2sThe%20Buyzaar%20Mart!5e0!3m2!1sen!2sin!4v1764389444392!5m2!1sen!2sin";
const MAP_SHARE_URL = "https://share.google/tgTXiyhuJxGzPVPLp";

export default function StoreLocator() {
  return (
    <section className="w-full bg-[#0c0c0c] py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.35em] text-red-800 uppercase">
            Store Network
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            Find Your Nearest <span className="text-red-800">BUYZAAR Mart</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Explore our running and upcoming stores, discover exact locations,
            and plan your visit to the nearest BUYZAAR Mart.
          </p>
        </motion.div>

        {/* Cards + Map */}
        <div className="grid lg:grid-cols-[1.1fr,1.2fr] gap-10 items-stretch">
          {/* Cards column */}
          <div className="space-y-5">
            {/* Running stores card */}
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-800/80 via-red-500/80 to-amber-400/80 p-[1px]"
            >
              <div className="relative h-full w-full rounded-2xl bg-[#111111] px-6 py-6 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-red-300">
                      Running Stores
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">
                      Visit BUYZAAR Mart Today
                    </h3>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-800/80 text-white text-lg font-semibold shadow-[0_0_25px_rgba(248,113,113,0.75)]">
                    •
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  Visit our operational BUYZAAR Mart outlets and explore our
                  smart retail experience in person.
                </p>

                <ul className="text-white text-md leading-tight space-y-1">
                  <li>• The Buyzaar Mart, Sector 44 Chalera Noida.</li>
                  <li>• The Buyzaar Mart, Gangoh Near Bus Stand.</li>
                  <li>• The Buyzaar Mart, Behat, Saharanpur.</li>
                  <li>• The Buyzaar Mart, Bahadrabad, Haridwar.</li>
                </ul>

                {/* ── Photos & Videos link ── */}
                <Link
                  href="/store-images"
                  className="group inline-flex items-center gap-2 self-start mt-1 text-sm font-medium text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  {/* camera icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-shrink-0 text-red-500 group-hover:text-red-300 transition-colors duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span className="underline underline-offset-4 decoration-red-700 group-hover:decoration-red-400 transition-all duration-200">
                    Click here to see Photos &amp; Videos
                  </span>
                  {/* arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Upcoming stores card */}
            <motion.div
              custom={2}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-red-800/40 bg-gradient-to-br from-red-900/70 via-black/70 to-red-800/40 px-6 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-red-300">
                      Upcoming Store
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">
                      New Store Coming Soon
                    </h3>
                  </div>
                  <span className="px-3 py-1 text-[11px] rounded-full bg-red-500/20 text-red-200 border border-red-400/60 uppercase tracking-[0.2em]">
                    Opening Soon
                  </span>
                </div>

                <div className="mt-1 space-y-2 text-sm text-neutral-300">
                  <div className="font-medium text-white/90">
                    <p>
                      • The Buyzaar Mart, LV Plaza Laxmi Villas Rajnagar
                      Extension Ghaziabad
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-xs text-neutral-400">
                  Want to stay updated? Keep an eye on this section as we roll
                  out more BUYZAAR Mart locations across the city.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map / visual column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative h-[320px] md:h-[380px] rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-red-950 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-red-700/25 blur-3xl" />

              {MAP_EMBED_SRC !== "PASTE_YOUR_EMBED_SRC_HERE" ? (
                <iframe
                  title="Sec 44 BUYZAAR Mart Location"
                  src={MAP_EMBED_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-black/60 text-neutral-300 text-sm px-6 text-center">
                  Add your Google Maps embed src in {" MAP_EMBED_SRC "} to
                  display the live map.
                </div>
              )}

              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-neutral-200 border border-white/10 backdrop-blur">
                Sec 44 • Primary Location
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-5 pb-4 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs text-red-300 uppercase tracking-[0.25em]">
                      Store Directions
                    </p>
                    <p className="text-sm text-neutral-200">
                      Use the interactive map to navigate to our Sec 44 BUYZAAR
                      Mart location.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => window.open(MAP_SHARE_URL, "_blank")}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_22px_rgba(248,113,113,0.65)] hover:bg-red-500 transition-colors duration-200"
                  >
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}