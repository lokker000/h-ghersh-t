import RetroButton from "@/components/RetroButton";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Cancel message */}
        <div className="border-4 border-black bg-red-50 p-8 text-center shadow-[6px_6px_0px_#000] mb-8">
          <div className="text-6xl mb-4">✕</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
            pago cancelado
          </h1>
          <p className="text-lg text-red-700 mb-2">
            tu compra no fue completada
          </p>
          <p className="text-sm text-red-600">
            no se ha realizado ningún cargo a tu tarjeta
          </p>
        </div>

        {/* Info */}
        <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000] mb-8">
          <h2 className="text-2xl font-bold mb-4">✦ información ✦</h2>
          
          <div className="space-y-3 text-sm">
            <p>
              Si cancelaste el pago intencionalmente, no hay problema. Puedes
              volver al catálogo cuando estés listo.
            </p>
            <p>
              Si el pago fue cancelado por error, intenta nuevamente o contáctanos
              si el problema persiste.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/catalogo" className="flex-1">
            <RetroButton variant="white" className="w-full">
              volver al catálogo
            </RetroButton>
          </Link>
          <Link href="/" className="flex-1">
            <RetroButton variant="orange" className="w-full">
              volver al inicio
            </RetroButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
