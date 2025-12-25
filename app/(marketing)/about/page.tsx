import type { Metadata } from "next";
import { Award, ChefHat, Heart, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our story, our passionate team, and our commitment to exceptional French cuisine.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight">Our Story</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded with a passion for authentic French cuisine,{" "}
              {SITE_CONFIG.name} has been serving exquisite dishes since 2010.
              Our journey began with a simple dream: to bring the heart of Paris
              to your table.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Our Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <ChefHat className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Excellence</h3>
                  <p className="mt-2 text-muted-foreground">
                    We strive for perfection in every dish we create.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Passion</h3>
                  <p className="mt-2 text-muted-foreground">
                    Cooking is our art, and passion is our secret ingredient.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Quality</h3>
                  <p className="mt-2 text-muted-foreground">
                    Only the finest ingredients make it to our kitchen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Community</h3>
                  <p className="mt-2 text-muted-foreground">
                    We cherish our guests and the memories we create together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Behind every great dish is a dedicated team of culinary artists.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-muted" />
                  <h3 className="mt-4 text-xl font-semibold">
                    Jean-Pierre Martin
                  </h3>
                  <p className="text-sm text-primary">Executive Chef</p>
                  <p className="mt-2 text-muted-foreground">
                    With 25 years of experience, Chef Jean-Pierre brings the
                    essence of French gastronomy to every plate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-muted" />
                  <h3 className="mt-4 text-xl font-semibold">Marie Dubois</h3>
                  <p className="text-sm text-primary">Pastry Chef</p>
                  <p className="mt-2 text-muted-foreground">
                    Marie&apos;s delicate pastries and desserts are the perfect
                    ending to any meal.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-muted" />
                  <h3 className="mt-4 text-xl font-semibold">
                    Pierre Lefebvre
                  </h3>
                  <p className="text-sm text-primary">Sommelier</p>
                  <p className="mt-2 text-muted-foreground">
                    Pierre curates our wine selection with expertise and
                    passion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At {SITE_CONFIG.name}, we believe that dining is more than just
              eating—it&apos;s an experience. Every dish tells a story, every
              ingredient has a purpose, and every guest deserves our very best.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We honor traditional French cooking techniques while embracing
              modern presentation. Our commitment to sustainability means we
              work closely with local farmers and suppliers to bring you the
              freshest seasonal ingredients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
