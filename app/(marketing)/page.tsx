import Link from "next/link";
import { ArrowRight, ChefHat, Clock, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RESTAURANT_INFO, SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Welcome to{" "}
              <span className="text-primary">{SITE_CONFIG.name}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/menu">
                  View Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Make a Reservation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <ChefHat className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Expert Chefs</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our culinary team brings decades of experience in French
                    haute cuisine.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    Premium Ingredients
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We source only the finest local and imported ingredients for
                    our dishes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    Cozy Atmosphere
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Enjoy your meal in our beautifully designed, intimate dining
                    space.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Hours */}
            <div>
              <h2 className="text-2xl font-bold">Opening Hours</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">
                      {RESTAURANT_INFO.hours.weekdays}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Saturday - Sunday</p>
                    <p className="text-muted-foreground">
                      {RESTAURANT_INFO.hours.weekends}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold">Find Us</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <Link href="/contact">Get Directions</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Ready for an Experience?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reserve your table today and discover the art of French cuisine.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Book a Table
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
