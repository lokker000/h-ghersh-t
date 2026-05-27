
export default function Nosotros() {
  return (
    <div className="container mx-auto px-4 py-8" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
      {/* Page header */}
      <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-6 mb-8 text-center overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/nosotros.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">✦ nosotros ✦</h1>
          <p className="text-sm">la historia detrás de h!gher sh!t</p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Brand story */}
        <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-6 overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/nosotros.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">✧ nuestra historia ✧</h2>
            <p className="text-sm mb-4">
              h!gher sh!t nace como una marca de ropa inspirada en la energía del internet antiguo, las páginas web perdidas de los 2000, la espiritualidad digital y la nostalgia visual de una época donde cada sitio tenía alma propia.
            </p>
            <p className="text-sm mb-4">
              Cada prenda busca sentirse como un archivo encontrado en una carpeta olvidada: rara, simple, nostálgica y con identidad. No seguimos una estética limpia tradicional; mezclamos lo espiritual, lo digital y lo imperfecto para crear ropa con presencia.
            </p>
          </div>
        </div>

        {/* Brand values */}
        <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-6 overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/nosotros.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">✦ lo que creemos ✦</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-1">created for internet souls</h3>
                <p className="text-sm">ropa diseñada para quienes viven conectados</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">pastel digital energy</h3>
                <p className="text-sm">colores que evocan nostalgia web</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">web archive clothing</h3>
                <p className="text-sm">prendas como archivos perdidos del internet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand manifesto */}
      <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/nosotros.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
        <div className="relative z-10 p-4">
          <div className="border-b-2 border-black bg-[#f4f4f1]/75 px-4 py-2">
            <h3 className="font-bold">brand manifesto</h3>
          </div>
          <div className="p-4">
            <p className="text-sm mb-4">
              Creemos en la belleza de lo imperfecto, en la estética de lo olvidado, en la energía de los sitios web que alguna vez fueron importantes y ahora viven solo en la memoria de quienes los visitaron.
            </p>
            <p className="text-sm mb-4">
              Nuestra ropa no sigue tendencias. Sigue la intuición digital, el feeling de navegar por páginas con marcos, gifs animados y fondos de colores que hoy llamaríamos feos pero que tenían alma.
            </p>
            <p className="text-sm">
              h!gher sh!t es para quienes recuerdan el sonido del módem, quienes escribieron su primer código en Notepad, quienes saben lo que significa under construction.
            </p>
            <p className="text-xs mt-4 text-gray-600">✧ internet souls only ✦</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="border-2 border-black bg-retro-cream p-4 mt-8 text-center">
        <p className="font-bold">✦ higher mind ✦ lost website ✧ web archive ✦</p>
        <p className="text-sm mt-1">since 2026</p>
      </div>
    </div>
  );
}
