"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

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

export default function ProductosPage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productList] = useState<Product[]>(products);

  // Check authentication
  const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("adminAuth") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsEditing(true);
  };

  const handleDelete = () => {
    alert("Funcionalidad no implementada");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Funcionalidad no implementada");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingProduct(null);
  };

  if (!isAuthenticated) return null;

  if (isEditing && editingProduct) {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-8">✦ editar producto ✦</h2>
        
        <form onSubmit={handleSave} className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000] max-w-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">nombre</label>
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">slug</label>
              <input
                type="text"
                value={editingProduct.slug}
                onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">precio (CLP)</label>
              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                className="w-full px-4 py-2 border-2 border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">categoría</label>
              <input
                type="text"
                value={editingProduct.category}
                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">descripción</label>
              <textarea
                value={editingProduct.description}
                onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black"
                rows={3}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">imagen (URL)</label>
              <input
                type="text"
                value={editingProduct.image}
                onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">badge (opcional)</label>
              <input
                type="text"
                value={editingProduct.badge || ""}
                onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value || undefined })}
                className="w-full px-4 py-2 border-2 border-black"
              />
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-2 border-2 border-black bg-retro-yellow font-bold hover:bg-retro-orange"
              >
                guardar
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border-2 border-black bg-retro-white font-bold hover:bg-retro-cream"
              >
                cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">✦ productos ✦</h2>
        <button
          onClick={() => setIsEditing(true)}
          className="px-6 py-2 border-2 border-black bg-retro-yellow font-bold hover:bg-retro-orange"
        >
          + nuevo producto
        </button>
      </div>

      <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-2 px-4">imagen</th>
                <th className="text-left py-2 px-4">nombre</th>
                <th className="text-left py-2 px-4">categoría</th>
                <th className="text-left py-2 px-4">precio</th>
                <th className="text-left py-2 px-4">badge</th>
                <th className="text-left py-2 px-4">acciones</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-retro-yellow to-retro-orange border-2 border-black flex items-center justify-center">
                      <span className="text-xs">✦</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 font-semibold">{product.name}</td>
                  <td className="py-2 px-4">{product.category}</td>
                  <td className="py-2 px-4">${product.price.toLocaleString("es-CL")}</td>
                  <td className="py-2 px-4">
                    {product.badge && (
                      <span className="px-2 py-1 bg-retro-orange text-xs font-bold">
                        {product.badge}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-1 border border-black text-xs hover:bg-retro-yellow"
                      >
                        editar
                      </button>
                      <button
                        onClick={handleDelete}
                        className="px-3 py-1 border border-black text-xs hover:bg-red-200"
                      >
                        eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
