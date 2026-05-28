"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="border-4 border-black bg-retro-white p-8 shadow-[6px_6px_0px_#000] max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">✦ acceso admin ✦</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-retro-orange"
              placeholder="ingresa contraseña"
            />
          </div>
          
          {error && (
            <div className="border-2 border-red-500 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 border-2 border-black bg-retro-yellow font-bold hover:bg-retro-orange transition-colors"
          >
            entrar
          </button>
        </form>
        
        <p className="text-xs text-center mt-4 text-gray-600">
          contraseña por defecto: admin123
        </p>
      </div>
    </div>
  );
}
