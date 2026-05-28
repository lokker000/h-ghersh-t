import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-retro-cream">
      {/* Admin Header */}
      <header className="border-b-4 border-black bg-retro-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">✦ admin panel ✦</h1>
              <p className="text-sm text-gray-600">h!gher sh!t management</p>
            </div>
            <Link href="/" className="text-sm hover:underline">
              ← volver al sitio
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="border-b-2 border-black bg-retro-white">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 py-2">
            <Link
              href="/admin"
              className="px-4 py-2 border-2 border-black hover:bg-retro-yellow transition-colors"
            >
              dashboard
            </Link>
            <Link
              href="/admin/productos"
              className="px-4 py-2 border-2 border-black hover:bg-retro-yellow transition-colors"
            >
              productos
            </Link>
            <Link
              href="/admin/ordenes"
              className="px-4 py-2 border-2 border-black hover:bg-retro-yellow transition-colors"
            >
              órdenes
            </Link>
          </div>
        </div>
      </nav>

      {/* Admin Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
