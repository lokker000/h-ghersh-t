"use client";

import Badge from "./Badge";
import RetroButton from "./RetroButton";
import Link from "next/link";

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
  checkoutUrl?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-4 flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[6px_6px_0px_#000] overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/bordebuda.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-[#f4f4f1]/80 to-[#e9e9e4]/80 backdrop-blur-sm border-2 border-black mb-4 flex items-center justify-center">
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
          <Link href={`/checkout/${product.id}`}>
            <RetroButton
              variant="white"
              className="w-full"
            >
              Comprar ahora
            </RetroButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
