import { getProductById } from "@/data/products";
import RetroButton from "@/components/RetroButton";
import Link from "next/link";

interface CheckoutPageProps {
  params: {
    id: string;
  };
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="border-3 border-black bg-retro-yellow p-6 text-center shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
          <h1 className="text-2xl font-bold mb-4">✦ producto no encontrado ✦</h1>
          <Link href="/catalogo">
            <RetroButton variant="yellow">volver al catálogo</RetroButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="border-3 border-black bg-retro-yellow p-6 mb-8 text-center shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">✦ checkout ✦</h1>
        <p className="text-sm">compra directa vía Flow</p>
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

        {/* Checkout info */}
        <div className="border-3 border-black bg-retro-yellow p-6 shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
          <h2 className="text-2xl font-bold mb-4">✦ información de pago ✦</h2>
          
          <div className="border-2 border-black bg-retro-cream p-4 mb-4">
            <p className="text-sm font-bold mb-2">FLOW.CL INTEGRATION</p>
            <p className="text-sm mb-2">
              Este checkout está preparado para integrarse con Flow.cl, el proveedor de pagos chileno.
            </p>
            <p className="text-sm">
              Por ahora, este es un placeholder. Cuando se integre Flow, el usuario será redirigido a una página de pago segura.
            </p>
          </div>

          <div className="border-2 border-black bg-retro-cream p-4 mb-4">
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

          <div className="border-2 border-black bg-retro-orange p-4 mb-4">
            <p className="text-sm font-bold text-center">
              ✧ PRÓXIMAMENTE ✦
            </p>
            <p className="text-xs text-center mt-1">
              Integración con Flow.cl en desarrollo
            </p>
          </div>

          <Link href="/catalogo">
            <RetroButton variant="yellow" className="w-full">
              volver al catálogo
            </RetroButton>
          </Link>
        </div>
      </div>

      {/* Technical info */}
      <div className="border-2 border-black bg-retro-cream p-4 text-center">
        <p className="text-xs text-gray-600">
          Ver archivo lib/flow.ts para detalles de la integración con Flow.cl
        </p>
      </div>
    </div>
  );
}
