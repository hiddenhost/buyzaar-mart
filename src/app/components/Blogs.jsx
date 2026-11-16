"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { blogs } from "@/data/blogs";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Sort blogs by date (newest first), take top 5
  const featuredPosts = useMemo(() => {
    const sorted = [...blogs].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
    return sorted.slice(0, 5);
  }, []);

  // 5-second auto slide timer for mobile carousel
  useEffect(() => {
    if (isPaused || featuredPosts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, featuredPosts.length]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    } else if (distance < -40) {
      setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  return (
    <section id="blog" className="bg-white relative overflow-hidden py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#b00000] mb-3 sm:mb-4 px-2">
            Blogs
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Retail growth strategies, store management tips, and business insights.
          </p>
        </div>

        {/* Mobile View: Slide Carousel with 5s Timer & Tap/Hold Pause */}
        <div className="block md:hidden relative px-1">
          {/* Status Bar */}
          <div className="flex items-center justify-between mb-2 text-xs text-gray-500 font-medium">
            <span className="text-gray-400">Auto-slides every 5s • Hold to pause</span>
            {isPaused && (
              <span className="flex items-center gap-1 text-[#b00000] font-semibold bg-red-50 px-2 py-0.5 rounded-full border border-red-200 text-[11px] animate-pulse">
                <Pause size={11} /> Paused
              </span>
            )}
          </div>

          <div
            className="overflow-hidden rounded-2xl select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => setIsPaused(false)}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.map((post) => (
                <div key={post.id} className="w-full shrink-0 px-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1 text-[#b00000] font-medium">
                          <Calendar size={13} />
                          {post.date}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} />
                            {post.readTime}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold mb-2 line-clamp-2 text-gray-900 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 mb-3 line-clamp-2 leading-relaxed">
                        {post.content}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b00000]">
                          Read Full Article
                          <ArrowRight size={13} />
                        </span>
                        {post.tags?.[0] && (
                          <span className="px-2 py-0.5 bg-slate-100 text-[10px] text-slate-600 rounded-md">
                            {post.tags[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Controls: Prev/Next & Dots */}
          <div className="flex items-center justify-between mt-3 px-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 active:scale-90 transition"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex space-x-1.5 items-center">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-6 h-2 bg-[#b00000]"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 active:scale-90 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[13/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500 mb-2.5">
                  <span className="flex items-center gap-1 text-[#b00000]">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#b00000] transition">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-slate-600 mb-3 line-clamp-2">
                  {post.content}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:text-blue-700 transition mb-3">
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t">
                  {post.tags?.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-xs rounded-md hover:bg-blue-100 hover:text-blue-700 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 bg-black text-white px-6 py-3 md:px-8 md:py-2.5 rounded-xl font-semibold text-base md:text-lg hover:scale-105 transition shadow-lg"
          >
            View All Blogs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;