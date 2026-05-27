import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-4 border-black bg-retro-yellow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              h!gher sh!t
            </h1>
            <p className="text-sm mt-1">spiritual clothes for internet souls</p>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/"
              className="px-3 py-1 border-2 border-black bg-retro-cream hover:bg-retro-orange transition-colors text-sm font-semibold"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="px-3 py-1 border-2 border-black bg-retro-cream hover:bg-retro-orange transition-colors text-sm font-semibold"
            >
              Catálogo
            </Link>
            <Link
              href="/nosotros"
              className="px-3 py-1 border-2 border-black bg-retro-cream hover:bg-retro-orange transition-colors text-sm font-semibold"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="px-3 py-1 border-2 border-black bg-retro-cream hover:bg-retro-orange transition-colors text-sm font-semibold"
            >
              Contacto
            </Link>
          </nav>

          {/* Badge */}
          <div className="hidden md:block">
            <span className="px-3 py-1 border-2 border-black bg-retro-cream text-xs font-bold">
              ✦ online store ✦
            </span>
          </div>
        </div>

        {/* Mobile badge */}
        <div className="md:hidden text-center mt-2">
          <span className="px-3 py-1 border-2 border-black bg-retro-cream text-xs font-bold inline-block">
            ✦ online store ✦
          </span>
        </div>
      </div>
    </header>
  );
}
