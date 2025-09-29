import Link from "next/link"

import { ProductCard, ProductCardProps } from "@/components/product-card"

type ProductCarouselSectionProps = {
  id: string
  title: string
  subtitle?: string
  ctaLabel?: string
  products: ProductCardProps[]
}

export function ProductCarouselSection({
  id,
  title,
  subtitle,
  ctaLabel = "Ver todos los productos",
  products,
}: ProductCarouselSectionProps) {
  return (
    <section id={id} className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#2b2e30]">{title}</h2>
          {subtitle ? (
            <p className="text-sm text-[#6b7075]">{subtitle}</p>
          ) : null}
        </div>
        <Link
          href="#placeholder"
          className="text-sm font-semibold text-[#008f39] hover:text-[#00702e]"
        >
          {ctaLabel}
        </Link>
      </header>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}
