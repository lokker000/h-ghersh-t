import RetroButton from "@/components/RetroButton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success message */}
        <div className="border-4 border-black bg-green-50 p-8 text-center shadow-[6px_6px_0px_#000] mb-8">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
            ¡pago exitoso!
          </h1>
          <p className="text-lg text-green-700 mb-2">
            tu compra ha sido procesada correctamente
          </p>
          <p className="text-sm text-green-600">
            recibirás un correo de confirmación con los detalles
          </p>
        </div>

        {/* Order details */}
        <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000] mb-8">
          <h2 className="text-2xl font-bold mb-4">✦ detalles de la orden ✦</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold">estado:</span>
              <span className="text-green-600 font-bold">pagado</span>
            </div>
            
            {token && (
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-semibold">token de transacción:</span>
                <span className="font-mono text-sm">{token}</span>
              </div>
            )}
            
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold">fecha:</span>
              <span>{new Date().toLocaleDateString("es-CL")}</span>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="border-4 border-black bg-retro-cream p-6 shadow-[4px_4px_0px_#000] mb-8">
          <h3 className="text-xl font-bold mb-4">✧ qué sigue ✧</h3>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>recibirás un email de confirmación con los detalles de tu compra</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>tu pedido será procesado y despachado en 1-2 días hábiles</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>te enviaremos el número de seguimiento por correo</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/catalogo" className="flex-1">
            <RetroButton variant="white" className="w-full">
              seguir comprando
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
