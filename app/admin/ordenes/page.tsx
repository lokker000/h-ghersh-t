"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Order {
  id: string;
  customerEmail: string;
  customerName?: string;
  productName: string;
  price: number;
  status: "pending" | "paid" | "failed" | "shipped";
  date: string;
  flowToken?: string;
}

export default function OrdenesPage() {
  const router = useRouter();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication
  const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("adminAuth") === "true";

  const loadOrders = async () => {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error loading orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin");
      return;
    }
    loadOrders();
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;
  if (isLoading) return <div className="text-center py-8">cargando...</div>;

  const updateOrderStatus = async (orderId: string, newStatus: Order["status"]) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        await loadOrders();
      } else {
        alert("Error al actualizar estado");
      }
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Error al actualizar estado");
    }
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "paid":
        return "bg-green-200";
      case "pending":
        return "bg-yellow-200";
      case "failed":
        return "bg-red-200";
      case "shipped":
        return "bg-blue-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">✦ órdenes ✦</h2>

      <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-2 px-4">ID</th>
                <th className="text-left py-2 px-4">cliente</th>
                <th className="text-left py-2 px-4">email</th>
                <th className="text-left py-2 px-4">producto</th>
                <th className="text-left py-2 px-4">precio</th>
                <th className="text-left py-2 px-4">estado</th>
                <th className="text-left py-2 px-4">fecha</th>
                <th className="text-left py-2 px-4">acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200">
                  <td className="py-2 px-4 font-mono text-sm">{order.id}</td>
                  <td className="py-2 px-4">{order.customerName || "-"}</td>
                  <td className="py-2 px-4">{order.customerEmail}</td>
                  <td className="py-2 px-4">{order.productName}</td>
                  <td className="py-2 px-4">${order.price.toLocaleString("es-CL")}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 text-xs font-bold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{new Date(order.date).toLocaleDateString("es-CL")}</td>
                  <td className="py-2 px-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as Order["status"])}
                      className="px-2 py-1 border border-black text-xs"
                    >
                      <option value="pending">pending</option>
                      <option value="paid">paid</option>
                      <option value="shipped">shipped</option>
                      <option value="failed">failed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000] max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">✦ detalles de orden ✦</h3>
            <div className="space-y-2 text-sm">
              <p><strong>ID:</strong> {selectedOrder.id}</p>
              <p><strong>Cliente:</strong> {selectedOrder.customerName}</p>
              <p><strong>Email:</strong> {selectedOrder.customerEmail}</p>
              <p><strong>Producto:</strong> {selectedOrder.productName}</p>
              <p><strong>Precio:</strong> ${selectedOrder.price.toLocaleString("es-CL")}</p>
              <p><strong>Estado:</strong> {selectedOrder.status}</p>
              <p><strong>Fecha:</strong> {new Date(selectedOrder.date).toLocaleDateString("es-CL")}</p>
              {selectedOrder.flowToken && (
                <p><strong>Flow Token:</strong> {selectedOrder.flowToken}</p>
              )}
            </div>
            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-4 px-4 py-2 border-2 border-black bg-retro-yellow font-bold w-full"
            >
              cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
