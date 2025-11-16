"use client";

import Image from "next/image";
import Link from "next/link";
import PromotionalBanner from "./PromotionalBanner";
import { brandConfig } from "@/config/brand.config";

const featuredCollections = [
  {
    title: "China and Flatware",
    body: "Click here to view full manufacturer product catalogs for items beyond our vast online selection.",
    href: "/china-and-flatware",
    buttonText: "View Catalogs",
    image: brandConfig.assets.plateCard,
  },
  {
    title: "Navigating Our Site",
    body: "Watch this short informative video on how to best navigate our site to find the products you are looking for.",
    href: "/video-tutorial",
    buttonText: "View Tutorial",
    image: brandConfig.assets.videoThumbnail,
  },
  {
    title: "Catalogs",
    body: "Try our online catalogs from our favorite vendors.",
    href: "/vendor-catalogs",
    buttonText: "View Brand List",
    image: brandConfig.assets.catalogImage,
  },
  {
    title: "Food Displays and Risers",
    body: "We offer a wide variety of food displays and risers.",
    href: "/products/buffet-items/",
    buttonText: "View Products",
    image: brandConfig.assets.foodDisplayImage,
  },
  {
    title: "We only sell quality products",
    body: "Products we stock and recommend are designed to withstand the rigorous demands of our customers and hold up longer than others.",
    href: null,
    image: brandConfig.assets.qualityCard,
  },
  {
    title: "Service, Integrity, Reputation",
    body: "We are considered to be among the top suppliers to the hospitality industry and our organization is based on integrity, service, and reputation.",
    href: null,
    image: brandConfig.assets.integrityCard,
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-4 sm:py-8 md:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Promotional Banner Card */}
        <PromotionalBanner />

        <div className="grid grid-cols-1 md:grid-cols-8 gap-3 sm:gap-4 md:gap-8">
          {featuredCollections.map((collection, index) => (
            <div
              key={collection.title}
              className={`relative h-[300px] sm:h-[275px] md:h-[300px] overflow-hidden rounded-lg ${
                index === 0 || index === 3
                  ? "md:col-span-5"
                  : index === 4 || index === 5
                  ? "md:col-span-4"
                  : "md:col-span-3"
              }`}
            >
              <div className="relative w-full h-full group">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40 p-5 sm:p-4 md:p-6 flex flex-col justify-center transition-colors group-hover:bg-black/50">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">
                    {collection.title}
                  </h3>
                  <p className="text-sm md:text-base text-white mb-4 line-clamp-3">
                    {collection.body}
                  </p>
                  {collection.href && (
                    <div className="mt-auto">
                      <Link
                        href={collection.href}
                        className="inline-block bg-[#B87B5C] text-white px-4 md:px-6 py-2 rounded hover:bg-[#A66D4F] transition-colors text-sm md:text-base"
                      >
                        {collection.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
