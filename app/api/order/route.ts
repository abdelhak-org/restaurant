import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/validations/order";

// Generate a simple order ID
function generateOrderId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `ORD-${timestamp}-${randomPart}`.toUpperCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the order data
    const validationResult = orderSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid order data",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const orderData = validationResult.data;

    // Generate order ID
    const orderId = generateOrderId();

    // Here you would typically:
    // 1. Save the order to your database
    // 2. Process payment with Stripe/PayPal
    // 3. Send confirmation email
    // 4. Notify kitchen/staff

    // For demo purposes, we'll simulate a successful order
    console.log("New order received:", {
      orderId,
      orderType: orderData.orderType,
      customer: orderData.customerInfo.email,
      total: orderData.total,
      itemCount: orderData.items.length,
    });

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        orderId,
        message: "Order placed successfully",
        estimatedTime:
          orderData.orderType === "pickup" ? "15-20 minutes" : "30-45 minutes",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json(
      { error: "Failed to process order. Please try again." },
      { status: 500 }
    );
  }
}
