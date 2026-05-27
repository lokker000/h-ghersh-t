import RetroButton from "@/components/RetroButton";

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-8" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
      {/* Page header */}
      <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-6 mb-8 text-center overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/contacto.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">✦ contacto ✦</h1>
          <p className="text-sm">¿tienes dudas? escríbenos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Contact info */}
        <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-6 overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/contacto.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">✧ contáctanos ✧</h2>
            <p className="text-sm mb-4">
              ¿Tienes dudas sobre tallas, drops o envíos? Escríbenos y te responderemos lo antes posible.
            </p>
            
            <div className="space-y-4">
              <div className="border-2 border-black bg-retro-cream p-3">
                <h3 className="font-bold text-sm mb-1">Instagram</h3>
                <p className="text-sm">@highershit</p>
              </div>
              
              <div className="border-2 border-black bg-retro-cream p-3">
                <h3 className="font-bold text-sm mb-1">Email</h3>
                <p className="text-sm">hola@highershit.cl</p>
              </div>
              
              <div className="border-2 border-black bg-retro-cream p-3">
                <h3 className="font-bold text-sm mb-1">WhatsApp</h3>
                <p className="text-sm">+56 9 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form placeholder */}
        <div className="relative border-3 border-black shadow-[4px_4px_0px_#000] p-6 overflow-hidden" style={{ borderWidth: "3px", backgroundImage: "url('/contacto.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">✦ envíanos un mensaje ✦</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">nombre</label>
                <input
                  type="text"
                  className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:bg-retro-cream"
                  placeholder="tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-1">email</label>
                <input
                  type="email"
                  className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:bg-retro-cream"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-1">mensaje</label>
                <textarea
                  className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:bg-retro-cream h-32"
                  placeholder="tu mensaje..."
                />
              </div>
              
              <RetroButton variant="white" className="w-full" type="button">
                enviar mensaje
              </RetroButton>
            </form>
            
            <p className="text-xs mt-4 text-gray-600 text-center">
              formulario no funcional por ahora — usa Instagram o email
            </p>
          </div>
        </div>
      </div>

      {/* Quick contact buttons */}
      <div className="relative border-2 border-black shadow-[4px_4px_0px_#000] p-4 text-center overflow-hidden" style={{ backgroundImage: "url('/contacto.gif')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-[#f4f4f1]/75 backdrop-blur-[1px] z-0" />
        <div className="relative z-10">
          <p className="font-bold mb-3">✧ contacto rápido ✦</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://instagram.com/highershit"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black bg-retro-cream px-4 py-2 font-semibold hover:bg-retro-orange transition-colors text-sm inline-block"
            >
              Instagram
            </a>
            <a
              href="mailto:hola@highershit.cl"
              className="border-2 border-black bg-retro-cream px-4 py-2 font-semibold hover:bg-retro-orange transition-colors text-sm inline-block"
            >
              Email
            </a>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black bg-retro-cream px-4 py-2 font-semibold hover:bg-retro-orange transition-colors text-sm inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
