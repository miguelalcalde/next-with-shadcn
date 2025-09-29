import Link from "next/link"

import { ProductCard, ProductCardProps } from "@/components/product-card"
import { Button } from "@/components/ui/button"

const priceDropProducts: ProductCardProps[] = [
  {
    title: "Patatas",
    description: "Malla 5 kg",
    price: 4.75,
    previousPrice: 6.55,
    badge: "Oferta",
  },
  {
    title: "Cebollas",
    description: "Malla 2 kg",
    price: 2.95,
    previousPrice: 3.55,
    badge: "Oferta",
  },
  {
    title: "Relleno para kebab",
    description: "Carne de pollo asado 300 g",
    price: 3.25,
    previousPrice: 3.95,
    badge: "Oferta",
  },
  {
    title: "Cacao soluble instantáneo",
    description: "Nesquik 2.7 kg",
    price: 13,
    previousPrice: 15.49,
    badge: "Oferta",
  },
  {
    title: "Corn Flakes Kellogg's",
    description: "Caja 500 g",
    price: 2.65,
    previousPrice: 3.29,
    badge: "Oferta",
  },
]

export function PriceDropSection() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#2b2e30]">
            Bajadas de precio
          </h2>
          <p className="text-sm text-[#6b7075]">Échales un vistazo</p>
        </div>
        <Button
          asChild
          variant="link"
          className="h-auto p-0 text-[#008f39] hover:text-[#00702e]"
        >
          <Link href="#placeholder-ofertas">
            Ver todas las bajadas de precio
          </Link>
        </Button>
      </header>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {priceDropProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}
