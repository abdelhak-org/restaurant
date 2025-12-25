import type { Metadata } from "next";

import { MenuContent } from "@/components/menu-content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our exquisite menu featuring classic French dishes prepared with the finest ingredients.",
};

export default function MenuPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Menu</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our carefully crafted selection of classic French dishes,
            prepared with passion and the finest ingredients.
          </p>
          <p className="mt-2 text-sm text-primary font-medium">
            Order online for pickup or delivery!
          </p>
        </div>

        {/* Menu with Cart */}
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
  );
}
