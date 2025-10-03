import ProductCard, { type ProductCardProduct } from "@/components/product-card"

const PLACEHOLDER_PRODUCTS: ProductCardProduct[] = [
  {
    id: "p1",
    title: "Everyday Canvas Tote",
    subtitle: "Durable carryall with interior pocket",
    price: 59,
    originalPrice: 79,
    rating: 5,
    ratingCount: 124,
    imageUrl: "/placeholder.svg",
    href: "/store/product/everyday-canvas-tote",
    badgeText: "Bestseller",
  },
  {
    id: "p2",
    title: "Merino Wool Crew",
    subtitle: "Temperature regulating knit",
    price: 89,
    rating: 4,
    ratingCount: 76,
    imageUrl: "/placeholder.svg",
    href: "/store/product/merino-wool-crew",
    badgeText: "New",
  },
  {
    id: "p3",
    title: "Modern Slim Chino",
    subtitle: "Stretch fabric with clean silhouette",
    price: 98,
    rating: 5,
    ratingCount: 210,
    imageUrl: "/placeholder.svg",
    href: "/store/product/modern-slim-chino",
  },
  {
    id: "p4",
    title: "Everyday Leather Sneaker",
    subtitle: "Italian leather, cushioned sole",
    price: 138,
    rating: 4,
    ratingCount: 58,
    imageUrl: "/placeholder.svg",
    href: "/store/product/everyday-leather-sneaker",
  },
]

export function ProductShowcase() {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Featured products</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Curated staples to start the season strong.</p>
        </div>
        {/* Placeholder for category filter / view all link */}
        <a href="#" className="text-sm text-primary hover:underline">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PLACEHOLDER_PRODUCTS.map((p) => (
          <div key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductShowcase

