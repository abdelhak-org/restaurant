import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, Quote, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReservationDialog } from "@/components/forms/reservation-dialog";
import {
  RESTAURANT_INFO,
  SITE_CONFIG,
  TESTIMONIALS,
  FEATURED_DISHES,
  RESTAURANT_STATS,
} from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Width with Background Image */}
      <section className="relative min-h-150 md:min-h-175 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80"
            alt="Delicious steak"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Taste the Passion of{" "}
            <span className="text-primary">{SITE_CONFIG.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Experience culinary excellence with locally sourced ingredients in a
            modern, elegant setting.
          </p>
          <ReservationDialog />
        </div>
      </section>

      {/* Chef's Selection Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
                Fresh From The Kitchen
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Chef&apos;s Selection Today
              </h2>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {FEATURED_DISHES.map((dish) => (
                <CarouselItem
                  key={dish.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <Card className="overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 right-3 bg-white text-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        ${dish.price}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {dish.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About Section - Tradition Meets Modern */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Chef preparing dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Established Badge */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-sm uppercase tracking-wider opacity-90">
                  Established
                </p>
                <p className="text-4xl font-bold">
                  {RESTAURANT_STATS.establishedYear}
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:pl-8">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tradition Meets Modern Taste
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Founded with a passion for authentic flavors, our kitchen brings
                the freshest locally sourced ingredients to your table. Meet
                Chef Mario and discover the history behind our signature dishes.
                We believe that food is not just sustenance, but a memory in the
                making.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {RESTAURANT_STATS.yearsOfService}+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years of Service
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {RESTAURANT_STATS.originalRecipes}+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Original Recipes
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {RESTAURANT_STATS.customerRating}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Customer Rating
                  </p>
                </div>
              </div>

              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/about">
                  Read Our Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Contact Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Side */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Visit Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Opening Hours & Contact
              </h2>
              <p className="text-muted-foreground mb-8">
                We are located in the heart of the city, perfect for a business
                lunch or a romantic dinner.
              </p>

              <div className="space-y-6">
                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Opening Hours</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex justify-between gap-8">
                        <span>Mon - Fri</span>
                        <span>{RESTAURANT_INFO.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday</span>
                        <span>10:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-sm text-muted-foreground">
                      {RESTAURANT_INFO.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {RESTAURANT_INFO.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-100 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674389!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1635959765432!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location"
                className="absolute inset-0"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <Button asChild className="w-full" variant="secondary">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      RESTAURANT_INFO.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Guests Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don&apos;t just take our word for it – hear from our valued
              guests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="relative border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="mt-4 text-muted-foreground line-clamp-4">
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for an Experience?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Reserve your table today and discover the art of fine cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ReservationDialog />
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/menu">
                  View Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
