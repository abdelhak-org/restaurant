"use client";

import { Plus, Minus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

interface AddToCartButtonProps {
  item: {
    id: number;
    name: string;
    price: number;
    category: string;
  };
}

export function AddToCartButton({ item }: AddToCartButtonProps) {
  const { items, addItem, updateQuantity } = useCart();

  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem(item);
    toast.success(`${item.name} added to cart`);
  };

  const handleIncrease = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, quantity - 1);
    if (quantity === 1) {
      toast.info(`${item.name} removed from cart`);
    }
  };

  if (quantity === 0) {
    return (
      <Button onClick={handleAdd} size="sm" className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleDecrease}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleIncrease}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
