import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Recycle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReservationDialog } from "@/components/forms/reservation-dialog";
import {
  SITE_CONFIG,
  RESTAURANT_STATS,
  CHEF_INFO,
  TEAM_MEMBERS,
  PHILOSOPHY_VALUES,
} from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="h-6 w-6" />,
  recycle: <Recycle className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
};

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our story, our passionate team, and our commitment to exceptional French cuisine.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-80 md:min-h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight mb-4">
            More Than Just Food – A Legacy of Flavor
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Experience the passion, tradition, and artistry in every bite at{" "}
            {SITE_CONFIG.name}.
          </p>
        </div>
      </section>

      {/* Our Origins Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Our Origins
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From a Humble Kitchen to the City&apos;s Heart
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {SITE_CONFIG.name} wasn&apos;t built in a boardroom. It
                  started in {RESTAURANT_STATS.establishedYear} with a
                  grandmother&apos;s recipe book and a simple passion for
                  authentic flavors. What began as a small family kitchen with
                  just four tables has grown into a culinary destination beloved
                  by the city.
                </p>
                <p>
                  We believe that every meal tells a story. Ours is one of
                  perseverance, family, and the relentless pursuit of the
                  perfect taste. We honor our roots by keeping traditional
                  techniques alive while embracing modern culinary innovation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
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
                    {(RESTAURANT_STATS.happyGuests / 1000).toFixed(0)}k+
                  </p>
                  <p className="text-sm text-muted-foreground">Happy Guests</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {RESTAURANT_STATS.signatureDishes}+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Signature Dishes
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground">
              We believe in food that nourishes the soul as well as the body.
              Our core values guide every decision we make in the kitchen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PHILOSOPHY_VALUES.map((value) => (
              <Card
                key={value.id}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {iconMap[value.icon]}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Chef Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Chef Image */}
            <div className="relative">
              <div className="relative aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={CHEF_INFO.image}
                  alt={CHEF_INFO.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Chef Info */}
            <div className="lg:pl-8">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Head Executive Chef
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Chef {CHEF_INFO.name.split(" ")[0]}
              </h2>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-4 mb-6">
                <p className="text-lg italic text-muted-foreground">
                  &ldquo;{CHEF_INFO.quote}&rdquo;
                </p>
              </blockquote>

              <p className="text-muted-foreground mb-8">{CHEF_INFO.bio}</p>

              <Button asChild className="group">
                <Link href="/menu">
                  View Chef&apos;s Specials
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              The Family
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              Behind every great meal is a dedicated team. These are the faces
              that make {SITE_CONFIG.name} experience possible.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Taste the Passion?
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Join us for an unforgettable dining experience. Whether it&apos;s
              a romantic dinner or a family gathering, we have a table waiting
              for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ReservationDialog />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background text-background hover:bg-background hover:text-foreground"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
