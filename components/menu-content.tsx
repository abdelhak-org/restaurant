"use client";

import Image from "next/image";
import {
  Plus,
  Leaf,
  Flame,
  Wheat,
  Sparkles,
  UtensilsCrossed,
  Wine,
  Cake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  CHEFS_RECOMMENDATION,
} from "@/lib/constants";

type DietaryTag = "vegetarian" | "gluten-free" | "spicy" | "seasonal";

const tagConfig: Record<
  DietaryTag,
  { label: string; className: string; icon?: React.ReactNode }
> = {
  vegetarian: {
    label: "Vegetarian",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    icon: <Leaf className="h-3 w-3" />,
  },
  "gluten-free": {
    label: "GF",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  spicy: {
    label: "Spicy",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    icon: <Flame className="h-3 w-3" />,
  },
  seasonal: {
    label: "Seasonal",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    icon: <Sparkles className="h-3 w-3" />,
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  starters: <UtensilsCrossed className="h-4 w-4" />,
  mains: <UtensilsCrossed className="h-4 w-4" />,
  desserts: <Cake className="h-4 w-4" />,
  drinks: <Wine className="h-4 w-4" />,
};

function DietaryTags({ tags }: { tags: readonly string[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const config = tagConfig[tag as DietaryTag];
        if (!config) return null;
        return (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.className}`}
          >
            {config.icon}
            {config.label}
          </span>
        );
      })}
    </div>
  );
}

function MenuCard({
  item,
  categoryId,
}: {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags?: readonly string[];
  };
  categoryId: string;
}) {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
          <span className="text-primary font-bold shrink-0">${item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          {item.tags && <DietaryTags tags={item.tags} />}
          <AddToCartButton
            item={{
              id: item.id,
              name: item.name,
              price: item.price,
              category: categoryId,
            }}
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
          </AddToCartButton>
        </div>
      </CardContent>
    </Card>
  );
}

function DrinkItem({
  item,
  categoryId,
}: {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    tags?: readonly string[];
  };
  categoryId: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
      <div className="flex items-center gap-3 ml-4">
        <span className="font-semibold text-primary">${item.price}</span>
        <AddToCartButton
          item={{
            id: item.id,
            name: item.name,
            price: item.price,
            category: categoryId,
          }}
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground"
        >
          <Plus className="h-4 w-4" />
        </AddToCartButton>
      </div>
    </div>
  );
}

function ChefsRecommendation() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary to-primary/80 text-primary-foreground my-12">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={CHEFS_RECOMMENDATION.image}
          alt={CHEFS_RECOMMENDATION.name}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          Chef&apos;s Recommendation
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          {CHEFS_RECOMMENDATION.name}
        </h3>
        <p className="text-white/90 max-w-xl mb-6">
          {CHEFS_RECOMMENDATION.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ${CHEFS_RECOMMENDATION.price}
          </span>
          <AddToCartButton
            item={{
              id: CHEFS_RECOMMENDATION.id,
              name: CHEFS_RECOMMENDATION.name,
              price: CHEFS_RECOMMENDATION.price,
              category: "mains",
            }}
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Order Now
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}

export function MenuContent() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-3xl mx-auto flex flex-wrap justify-center gap-2 h-auto bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
          >
            All
          </TabsTrigger>
          {MENU_CATEGORIES.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* All Items Tab */}
        <TabsContent value="all" className="mt-8">
          {MENU_CATEGORIES.filter((cat) => cat.id !== "drinks").map(
            (category) => (
              <div key={category.id} className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-primary">
                    {categoryIcons[category.id]}
                  </span>
                  <h2 className="text-2xl font-bold">{category.label}</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map(
                    (item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        categoryId={category.id}
                      />
                    )
                  )}
                </div>

                {/* Show Chef's Recommendation after mains */}
                {category.id === "mains" && <ChefsRecommendation />}
              </div>
            )
          )}

          {/* Drinks Section - Compact Layout */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary">{categoryIcons.drinks}</span>
              <h2 className="text-2xl font-bold">Drinks & Cocktails</h2>
            </div>
            <div className="grid gap-x-12 md:grid-cols-2">
              {MENU_ITEMS.drinks.map((item) => (
                <DrinkItem key={item.id} item={item} categoryId="drinks" />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Individual Category Tabs */}
        {MENU_CATEGORIES.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary">{categoryIcons[category.id]}</span>
              <h2 className="text-2xl font-bold">{category.label}</h2>
            </div>

            {category.id === "drinks" ? (
              <div className="grid gap-x-12 md:grid-cols-2">
                {MENU_ITEMS.drinks.map((item) => (
                  <DrinkItem key={item.id} item={item} categoryId="drinks" />
                ))}
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map(
                    (item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        categoryId={category.id}
                      />
                    )
                  )}
                </div>

                {/* Show Chef's Recommendation for mains tab */}
                {category.id === "mains" && <ChefsRecommendation />}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
