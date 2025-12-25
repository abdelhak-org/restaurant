import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/constants";

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
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="starters" className="mt-12">
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-4">
            {MENU_CATEGORIES.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {MENU_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map(
                  (item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <span className="text-lg font-semibold text-primary">
                            ${item.price}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

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
