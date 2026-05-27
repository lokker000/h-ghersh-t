import RetroButton from "./RetroButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative border-4 border-black shadow-[6px_6px_0px_#000] p-8 md:p-12 mb-8 transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[8px_8px_0px_#000] overflow-hidden" style={{ borderWidth: "4px", backgroundImage: "url('/perro.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-[#f4f4f1]/65 backdrop-blur-[1px] z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          h!gher sh!t
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center mb-4">
          spiritual clothes for internet souls
        </p>

        {/* Banner */}
        <div className="border-2 border-black bg-[#f4f4f1]/82 backdrop-blur-sm p-3 mb-6 text-center">
          <p className="font-bold text-sm">✦ new drop online ✦</p>
          <p className="font-bold text-sm">✧ internet-core clothing ✧</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/catalogo">
            <RetroButton variant="white" className="w-full sm:w-auto">
              ver catálogo
            </RetroButton>
          </Link>
          <Link href="/catalogo">
            <RetroButton variant="cream" className="w-full sm:w-auto">
              último drop
            </RetroButton>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="text-center">
          <span className="text-2xl">☻ ☼ ♡ ✞ 𖤐</span>
        </div>
      </div>
    </div>
  );
}
