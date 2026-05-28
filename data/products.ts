export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
  checkoutUrl?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "polera-aura-digital",
    name: "Polera Aura Digital",
    price: 19990,
    category: "Poleras",
    description: "Energía digital capturada en tela. Diseño minimalista con estética de archivos perdidos.",
    image: "/products/aura-digital.jpg",
    badge: "new",
  },
  {
    id: "2",
    slug: "hoodie-internet-angel",
    name: "Hoodie Internet Angel",
    price: 34990,
    category: "Hoodies",
    description: "Protección espiritual para tus navegaciones. Comodidad angelical para almas digitales.",
    image: "/products/internet-angel.jpg",
    badge: "limited",
  },
  {
    id: "3",
    slug: "polera-web-2000",
    name: "Polera Web 2000",
    price: 21990,
    category: "Poleras",
    description: "Nostalgia pura de la web primitiva. Cuando cada sitio tenía alma propia.",
    image: "/products/web-2000.jpg",
    badge: "drop",
  },
  {
    id: "4",
    slug: "pantalon-star-archive",
    name: "Pantalón Star Archive",
    price: 29990,
    category: "Pantalones",
    description: "Archivos estelares cosechados de servidores olvidados. Corte cómodo y retro.",
    image: "/products/star-archive.jpg",
    badge: "online only",
  },
  {
    id: "5",
    slug: "beanie-higher-mind",
    name: "Beanie Higher Mind",
    price: 12990,
    category: "Accesorios",
    description: "Eleva tu consciencia digital. Calidez para mentes conectadas.",
    image: "/products/higher-mind.jpg",
    badge: "new",
  },
  {
    id: "6",
    slug: "polera-lost-website",
    name: "Polera Lost Website",
    price: 22990,
    category: "Poleras",
    description: "Fragmentos de sitios que ya no existen. Memoria web tejida en algodón.",
    image: "/products/lost-website.jpg",
    badge: "limited",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
