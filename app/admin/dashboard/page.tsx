"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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

export default function DashboardPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication on mount
  const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("adminAuth") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin");
      return;
    }

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

    loadOrders();
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;
  if (isLoading) return <div className="text-center py-8">cargando...</div>;

  const totalRevenue = orders
    .filter((o) => o.status === "paid")
    .reduce((sum, o) => sum + o.price, 0);

  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">✦ dashboard ✦</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]">
          <h3 className="text-sm font-bold text-gray-600 mb-2">ingresos totales</h3>
          <p className="text-3xl font-bold">${totalRevenue.toLocaleString("es-CL")} CLP</p>
        </div>
        
        <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]">
          <h3 className="text-sm font-bold text-gray-600 mb-2">órdenes pendientes</h3>
          <p className="text-3xl font-bold">{pendingOrders}</p>
        </div>
        
        <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]">
          <h3 className="text-sm font-bold text-gray-600 mb-2">total órdenes</h3>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="border-4 border-black bg-retro-white p-6 shadow-[4px_4px_0px_#000]">
        <h3 className="text-xl font-bold mb-4">✧ órdenes recientes ✧</h3>
        
        {orders.length === 0 ? (
          <p className="text-gray-600 text-center py-8">no hay órdenes aún</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-2 px-4">ID</th>
                  <th className="text-left py-2 px-4">producto</th>
                  <th className="text-left py-2 px-4">precio</th>
                  <th className="text-left py-2 px-4">estado</th>
                  <th className="text-left py-2 px-4">fecha</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200">
                    <td className="py-2 px-4 font-mono text-sm">{order.id}</td>
                    <td className="py-2 px-4">{order.productName}</td>
                    <td className="py-2 px-4">${order.price.toLocaleString("es-CL")}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 text-xs font-bold ${
                          order.status === "paid"
                            ? "bg-green-200"
                            : order.status === "pending"
                            ? "bg-yellow-200"
                            : order.status === "shipped"
                            ? "bg-blue-200"
                            : "bg-red-200"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{new Date(order.date).toLocaleDateString("es-CL")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
