import { Suspense } from "react";
import type { Metadata } from "next";
import { CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Order Confirmed | Bella Cucina",
  description: "Your order has been placed successfully.",
};

function OrderConfirmationContent({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>;
}) {
  return (
    <Suspense fallback={<OrderConfirmationSkeleton />}>
      <OrderDetails searchParams={searchParams} />
    </Suspense>
  );
}

async function OrderDetails({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>;
}) {
  const params = await searchParams;
  const orderId = params.orderId || "Unknown";

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        {/* Success Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground">
            Thank you for your order. We&apos;re preparing your delicious meal.
          </p>
        </div>

        {/* Order ID Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center">Order Number</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center font-mono text-2xl font-bold text-primary">
              {orderId}
            </p>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Please save this number for reference
            </p>
          </CardContent>
        </Card>

        {/* Estimated Time */}
        <Card className="mb-6">
          <CardContent className="flex items-center gap-4 pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Estimated Time</h3>
              <p className="text-muted-foreground">15-30 minutes</p>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What&apos;s Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                1
              </div>
              <div>
                <h4 className="font-semibold">Order Received</h4>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve received your order and it&apos;s being prepared
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold">Preparation</h4>
                <p className="text-sm text-muted-foreground">
                  Our chefs are cooking your meal with care
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold">Ready / Delivered</h4>
                <p className="text-sm text-muted-foreground">
                  Pick up at our location or wait for delivery
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Restaurant Contact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+49 30 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>orders@bellacucina.de</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Musterstraße 123, 12345 Berlin</span>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/menu">Order More</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          A confirmation email has been sent to your email address with the
          order details.
        </p>
      </div>
    </div>
  );
}

function OrderConfirmationSkeleton() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <Skeleton className="mx-auto mb-4 h-16 w-16 rounded-full" />
          <Skeleton className="mx-auto mb-2 h-10 w-64" />
          <Skeleton className="mx-auto h-5 w-80" />
        </div>
        <Skeleton className="mb-6 h-32 w-full" />
        <Skeleton className="mb-6 h-24 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}

export default function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>;
}) {
  return <OrderConfirmationContent searchParams={searchParams} />;
}
