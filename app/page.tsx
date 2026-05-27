import Hero from "@/components/Hero";
import RetroBox from "@/components/RetroBox";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      <div className="mb-8">
        <RetroBox title="site update" bgColor="bg-retro-cream">
          <p className="text-sm">
            Bienvenido a h!gher sh!t — nuestra tienda oficial de ropa con estética
            internet-core y energía dosmilera. Nuevos drops disponibles.
          </p>
          <p className="text-xs mt-2 text-gray-600">✦ updated: may 2026 ✦</p>
        </RetroBox>
      </div>

      <div className="mb-8">
        <div className="border-3 border-black bg-retro-white p-4 mb-6 text-center" style={{ borderWidth: "3px" }}>
          <h2 className="text-2xl font-bold">✦ productos destacados ✦</h2>
          <p className="text-sm">selección especial para internet souls</p>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>

      <div className="border-2 border-black bg-retro-cream p-4 text-center mb-8">
        <p className="font-bold">✧ higher mind ✦ lost website ✧ web archive ✧</p>
        <p className="text-sm mt-1">internet souls only</p>
      </div>

      <div className="text-center">
        <div className="border-3 border-black bg-retro-white inline-block p-6 shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
          <h3 className="font-bold text-xl mb-2">¿listo para elevar tu estilo?</h3>
          <p className="text-sm mb-4">explora nuestro catálogo completo</p>
          <p className="text-2xl">✦ ✧ ✩</p>
        </div>
      </div>
    </div>
  );
}
