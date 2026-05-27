import RetroButton from "./RetroButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="border-4 border-black bg-retro-yellow shadow-[6px_6px_0px_#000] p-8 md:p-12 mb-8" style={{ borderWidth: "4px" }}>
      {/* Decorative elements */}
      <div className="text-center mb-6">
        <span className="text-2xl">✦ ✧ ✩</span>
      </div>

      {/* Main title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        h!gher sh!t
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-center mb-4">
        spiritual clothes for internet souls
      </p>

      {/* Description */}
      <p className="text-center mb-6 text-sm md:text-base">
        ropa para almas digitales, energía dosmilera y archivos perdidos de internet
      </p>

      {/* Banner */}
      <div className="border-2 border-black bg-retro-cream p-3 mb-6 text-center">
        <p className="font-bold text-sm">✦ new drop online ✦</p>
        <p className="font-bold text-sm">✧ internet-core clothing ✧</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Link href="/catalogo">
          <RetroButton variant="yellow" className="w-full sm:w-auto">
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
  );
}
