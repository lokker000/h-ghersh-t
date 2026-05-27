import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Catalogo() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="border-3 border-black bg-retro-yellow p-6 mb-8 text-center shadow-[4px_4px_0px_#000]" style={{ borderWidth: "3px" }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">✦ catálogo ✦</h1>
        <p className="text-sm">todas las prendas para internet souls</p>
        <div className="mt-4">
          <span className="px-3 py-1 border-2 border-black bg-retro-cream text-xs font-bold inline-block">
            online store
          </span>
        </div>
      </div>

      {/* Banner */}
      <div className="border-2 border-black bg-retro-cream p-4 mb-8 text-center">
        <p className="font-bold">✧ new drop online ✦ internet-core clothing ✧</p>
      </div>

      {/* Products grid */}
      <ProductGrid products={products} />

      {/* Bottom banner */}
      <div className="border-2 border-black bg-retro-yellow p-4 mt-8 text-center">
        <p className="font-bold">✦ no cart, direct checkout ✧</p>
        <p className="text-sm mt-1">compra directa vía Flow próximamente</p>
      </div>
    </div>
  );
}
