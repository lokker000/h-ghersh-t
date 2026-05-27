import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      <div className="mb-8">
        <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/om.jpg')", backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-[#f4f4f1]/70 backdrop-blur-[1px] z-0" />

          {/* Content */}
          <div className="relative z-10">
            <div className="border-b-2 border-black bg-[#f4f4f1]/75 px-4 py-2">
              <h3 className="font-bold">site update</h3>
            </div>
            <div className="p-4">
              <p className="text-sm font-bold">
                Bienvenido a h!gher sh!t — nuestra tienda oficial de ropa con estética
                internet-core y energía dosmilera. Nuevos drops disponibles.
              </p>
              <p className="text-xs mt-2 text-gray-600 font-bold">✦ updated: may 2026 ✦</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-2 border-black shadow-[4px_4px_0px_#000] p-4 text-center mb-8 overflow-hidden" style={{ backgroundImage: "url('/chief.jpg')", backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-[#f4f4f1]/70 backdrop-blur-[1px] z-0" />
        <div className="relative z-10">
          <p className="font-bold">✧ higher mind ✦ lost website ✧ web archive ✧</p>
          <p className="text-sm mt-1">internet souls only</p>
        </div>
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
