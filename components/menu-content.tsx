"use client";

import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/constants";

export function MenuContent() {
  return (
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
            {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map((item) => (
              <Card
                key={item.id}
                className="group flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      ${item.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <AddToCartButton
                    item={{
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      category: category.id,
                    }}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
