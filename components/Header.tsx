"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative border-b-4 border-black shadow-[0_5px_0px_#000] bg-gradient-to-r from-black via-[#111111] to-black">
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)',
      }} />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-4">
        {/* Desktop layout */}
        <div className="hidden md:block">
          {/* Top row with absolute positioning for perfect centering */}
          <div className="relative h-[140px] mb-3">
            {/* Centered logo - absolutely positioned */}
            <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/logo.png"
                alt="h!gher sh!t"
                width={300}
                height={120}
                className="rounded shadow-[3px_3px_0px_#000]"
              />
            </Link>

            {/* SHOP button - absolutely positioned on right */}
            <Link href="/catalogo" className="absolute right-8 top-1/2 -translate-y-1/2">
              <button className="bg-[#f0f0f0] border-2 border-black px-5 py-2 rounded-full font-bold text-black shadow-[3px_3px_0px_#000] hover:scale-105 hover:shadow-[4px_4px_0px_#000] transition-all duration-200 text-sm">
                SHOP
              </button>
            </Link>
          </div>

          {/* Navigation bar with vertical separators */}
          <div className="border-t border-b border-black py-2 bg-black/30">
            <nav className="flex items-center justify-center gap-1">
              <Link
                href="/"
                className="text-[#fff4c7] hover:text-[#f0f0f0] uppercase tracking-wide text-sm font-semibold px-3 py-1 transition-colors"
              >
                INICIO
              </Link>
              <span className="text-[#fff4c7] text-sm">|</span>
              <Link
                href="/catalogo"
                className="text-[#fff4c7] hover:text-[#f0f0f0] uppercase tracking-wide text-sm font-semibold px-3 py-1 transition-colors"
              >
                CATÁLOGO
              </Link>
              <span className="text-[#fff4c7] text-sm">|</span>
              <Link
                href="/nosotros"
                className="text-[#fff4c7] hover:text-[#f0f0f0] uppercase tracking-wide text-sm font-semibold px-3 py-1 transition-colors"
              >
                NOSOTROS
              </Link>
              <span className="text-[#fff4c7] text-sm">|</span>
              <Link
                href="/contacto"
                className="text-[#fff4c7] hover:text-[#f0f0f0] uppercase tracking-wide text-sm font-semibold px-3 py-1 transition-colors"
              >
                CONTACTO
              </Link>
            </nav>
          </div>

          {/* Gold bottom accent line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#fee978] to-transparent mt-0" />
        </div>

        {/* Mobile layout */}
        <div className="md:hidden block">
          <div className="flex flex-col items-center text-center">
            {/* Logo centered */}
            <Link href="/" className="mb-3">
              <Image
                src="/logo.png"
                alt="h!gher sh!t"
                width={200}
                height={80}
                className="rounded shadow-[3px_3px_0px_#000]"
              />
            </Link>

            {/* SHOP button */}
            <Link href="/catalogo" className="mb-3">
              <button className="bg-[#f0f0f0] border-2 border-black px-5 py-2 rounded-full font-bold text-black shadow-[3px_3px_0px_#000] hover:scale-105 hover:shadow-[4px_4px_0px_#000] transition-all duration-200 text-sm">
                SHOP
              </button>
            </Link>

            {/* Navigation bar */}
            <div className="border-t border-b border-black py-2 bg-black/30 w-full">
              <nav className="flex flex-wrap items-center justify-center gap-1 text-xs">
                <Link
                  href="/"
                  className="text-[#fff4c7] hover:text-[#f4f4f1] uppercase tracking-wide font-semibold px-2 py-1 transition-colors"
                >
                  INICIO
                </Link>
                <span className="text-[#fff4c7]">|</span>
                <Link
                  href="/catalogo"
                  className="text-[#fff4c7] hover:text-[#f4f4f1] uppercase tracking-wide font-semibold px-2 py-1 transition-colors"
                >
                  CATÁLOGO
                </Link>
                <span className="text-[#fff4c7]">|</span>
                <Link
                  href="/nosotros"
                  className="text-[#fff4c7] hover:text-[#f4f4f1] uppercase tracking-wide font-semibold px-2 py-1 transition-colors"
                >
                  NOSOTROS
                </Link>
                <span className="text-[#fff4c7]">|</span>
                <Link
                  href="/contacto"
                  className="text-[#fff4c7] hover:text-[#f4f4f1] uppercase tracking-wide font-semibold px-2 py-1 transition-colors"
                >
                  CONTACTO
                </Link>
              </nav>
            </div>

            {/* Gold bottom accent line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#f4f4f1] to-transparent w-full mt-0" />
          </div>
        </div>
      </div>
    </header>
  );
}
