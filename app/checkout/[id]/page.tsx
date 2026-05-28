"use client";

import { useState } from "react";
import { getProductById } from "@/data/products";
import { handleBuyNow } from "@/lib/flow";
import RetroButton from "@/components/RetroButton";
import Link from "next/link";

interface CheckoutPageProps {
  params: {
    id: string;
  };
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const product = getProductById(params.id);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="border-3 border-black bg-retro-white p-6 text-center shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
          <h1 className="text-2xl font-bold mb-4">✦ producto no encontrado ✦</h1>
          <Link href="/catalogo">
            <RetroButton variant="white">volver al catálogo</RetroButton>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await handleBuyNow(product, email, name);
    setIsProcessing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="border-3 border-black bg-retro-white p-6 mb-8 text-center shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">✦ checkout ✦</h1>
        <p className="text-sm">compra segura vía Flow.cl</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Product info */}
        <div className="border-3 border-black bg-retro-cream p-6 shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
          <h2 className="text-2xl font-bold mb-4">✧ producto ✧</h2>
          
          {/* Image placeholder */}
          <div className="aspect-square bg-gradient-to-br from-retro-yellow to-retro-orange border-2 border-black mb-4 flex items-center justify-center">
            <span className="text-4xl">✦</span>
          </div>

          <h3 className="font-bold text-xl mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
          <p className="text-sm mb-4">{product.description}</p>
          <p className="font-bold text-2xl">${product.price.toLocaleString("es-CL")} CLP</p>
        </div>

        {/* Checkout form */}
        <div className="border-3 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
          <h2 className="text-2xl font-bold mb-4">✦ información de pago ✦</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-retro-orange"
                placeholder="tu@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">nombre (opcional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-retro-orange"
                placeholder="Tu nombre"
              />
            </div>

            <div className="border-2 border-black bg-retro-cream p-4">
              <p className="text-sm font-bold mb-2">RESUMEN</p>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Producto:</span>
                <span className="text-sm font-semibold">{product.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Precio:</span>
                <span className="text-sm font-semibold">${product.price.toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between font-bold border-t-2 border-black pt-2 mt-2">
                <span>Total:</span>
                <span>${product.price.toLocaleString("es-CL")} CLP</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3 border-2 border-black bg-retro-yellow font-bold hover:bg-retro-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "procesando..." : "pagar con Flow.cl"}
            </button>
          </form>

          <div className="mt-4">
            <Link href="/catalogo">
              <RetroButton variant="white" className="w-full">
                volver al catálogo
              </RetroButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Security info */}
      <div className="border-2 border-black bg-retro-cream p-4 text-center">
        <p className="text-sm font-bold mb-1">🔒 pagos seguros con Flow.cl</p>
        <p className="text-xs text-gray-600">
          Tu información de pago es procesada de forma segura por Flow.cl
        </p>
      </div>
    </div>
  );
}
