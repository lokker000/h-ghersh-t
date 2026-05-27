import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-retro-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">h!gher sh!t</h3>
            <p className="text-sm">spiritual clothes for internet souls</p>
            <p className="text-xs mt-2">✧ internet-core clothing ✧</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-2">links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:underline">
                  catálogo
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:underline">
                  nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Fake decorative links */}
          <div>
            <h4 className="font-bold mb-2">archive</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>web 2000 collection</li>
              <li>lost websites</li>
              <li>digital souls</li>
              <li>higher mind</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-black mt-6 pt-4 text-center text-xs">
          <p>© 2026 h!gher sh!t — official web store</p>
          <p className="mt-1">best viewed online ✦ internet souls only</p>
          <p className="mt-1">no cart, direct checkout</p>
        </div>
      </div>
    </footer>
  );
}
