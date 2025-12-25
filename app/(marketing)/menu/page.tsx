import type { Metadata } from "next";
import Image from "next/image";

import { MenuContent } from "@/components/menu-content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our exquisite menu featuring classic French dishes prepared with the finest ingredients.",
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-80 md:min-h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Restaurant dishes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight mb-4">
            Seasonal Flavors
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Experience our chef&apos;s curated selection of dishes, crafted with
            locally sourced ingredients and passion.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <MenuContent />

          {/* Note */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-muted-foreground">
              Prices are in USD. Please inform us of any dietary requirements or
              allergies when ordering. A 10% service charge may be added for
              parties of 6 or more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
