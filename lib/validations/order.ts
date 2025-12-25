import { z } from "zod";

export const orderTypeSchema = z.enum(["pickup", "delivery"]);

export const paymentMethodSchema = z.enum(["stripe", "paypal"]);

// Form schema for checkout page UI
export const checkoutFormSchema = z.object({
  orderType: orderTypeSchema,
  customerInfo: z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number is required"),
  }),
  deliveryAddress: z.object({
    street: z.string(),
    city: z.string(),
    postalCode: z.string(),
    notes: z.string().optional(),
  }),
  pickupTime: z.string(),
  paymentMethod: paymentMethodSchema,
});

// Add conditional validation
export const checkoutSchema = checkoutFormSchema.superRefine((data, ctx) => {
  if (data.orderType === "delivery") {
    if (
      !data.deliveryAddress.street ||
      data.deliveryAddress.street.length < 5
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Street address is required (min 5 characters)",
        path: ["deliveryAddress", "street"],
      });
    }
    if (!data.deliveryAddress.city || data.deliveryAddress.city.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "City is required",
        path: ["deliveryAddress", "city"],
      });
    }
    if (
      !data.deliveryAddress.postalCode ||
      data.deliveryAddress.postalCode.length < 4
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Valid postal code is required",
        path: ["deliveryAddress", "postalCode"],
      });
    }
  }

  if (data.orderType === "pickup" && !data.pickupTime) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please select a pickup time",
      path: ["pickupTime"],
    });
  }
});

export const orderItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
});

// Full order data schema for API
export const orderSchema = z.object({
  orderType: orderTypeSchema,
  customerInfo: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
  deliveryAddress: z
    .object({
      street: z.string(),
      city: z.string(),
      postalCode: z.string(),
      notes: z.string().optional(),
    })
    .optional(),
  pickupTime: z.string().optional(),
  paymentMethod: paymentMethodSchema,
  items: z.array(orderItemSchema).min(1, "Cart cannot be empty"),
  subtotal: z.number(),
  tax: z.number(),
  deliveryFee: z.number().optional(),
  total: z.number(),
});

export type OrderType = z.infer<typeof orderTypeSchema>;
export type PaymentMethod = z.infer<typeof paymentMethodSchema>;
export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
export type OrderItem = z.infer<typeof orderItemSchema>;
export type OrderData = z.infer<typeof orderSchema>;
