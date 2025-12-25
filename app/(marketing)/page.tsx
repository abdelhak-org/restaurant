import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChefHat, Clock, MapPin, Quote, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReservationDialog } from "@/components/forms/reservation-dialog";
import { RESTAURANT_INFO, SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-background to-secondary/10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Authentic French Cuisine
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                <Link href="/menu">
                  View Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <ReservationDialog />
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

      {/* Testimonials Section */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">What Our Guests Say</h2>
            <p className="mt-4 text-muted-foreground">
              Don&apos;t just take our word for it – hear from our valued
              guests.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="mt-4 text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Ready for an Experience?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reserve your table today and discover the art of French cuisine.
            </p>
            <div className="mt-8">
              <ReservationDialog />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
