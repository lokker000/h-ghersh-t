"use client";

import { Product } from "@/data/products";
import Badge from "./Badge";
import RetroButton from "./RetroButton";
import { handleBuyNow } from "@/lib/flow";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border-3 border-black bg-retro-cream shadow-[4px_4px_0px_#000] p-4 flex flex-col" style={{ borderWidth: "3px" }}>
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-retro-yellow to-retro-orange border-2 border-black mb-4 flex items-center justify-center">
        <span className="text-4xl">✦</span>
      </div>

      {/* Badge */}
      {product.badge && (
        <div className="mb-2">
          <Badge variant={product.badge === "new" ? "new" : product.badge === "limited" ? "limited" : product.badge === "drop" ? "drop" : "default"}>
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Product info */}
      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{product.category}</p>
      <p className="text-sm mb-2 flex-grow">{product.description}</p>
      <p className="font-bold text-xl mb-4">${product.price.toLocaleString("es-CL")} CLP</p>

      {/* Buttons */}
      <div className="space-y-2">
        <RetroButton
          onClick={() => handleBuyNow(product)}
          variant="yellow"
          className="w-full"
        >
          Comprar ahora
        </RetroButton>
      </div>
    </div>
  );
}
