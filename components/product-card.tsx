"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ProductCardProduct = {
  id: string
  title: string
  subtitle?: string
  price: number
  originalPrice?: number
  rating?: number
  ratingCount?: number
  imageUrl: string
  href?: string
  badgeText?: string
}

export type ProductCardProps = {
  product: ProductCardProduct
  className?: string
  onAddToCart?: (productId: string) => void
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductCard({ product, className, onAddToCart }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const rating = Math.max(0, Math.min(5, Math.round(product.rating ?? 0)))

  const content = (
    <Card className={cn("group overflow-hidden", className)}>
      <div className="relative">
        <div className="relative aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover"
            priority={false}
          />
        </div>
        {product.badgeText ? (
          <div className="absolute left-3 top-3">
            <Badge>{product.badgeText}</Badge>
          </div>
        ) : null}
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-base leading-tight line-clamp-2">{product.title}</CardTitle>
        {product.subtitle ? (
          <div className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
            {product.subtitle}
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold">{formatCurrency(product.price)}</span>
            {hasDiscount ? (
              <span className="text-sm text-neutral-500 line-through">
                {formatCurrency(product.originalPrice as number)}
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className={cn("h-4 w-4", index < rating ? "fill-current" : "opacity-30")} />
            ))}
          </div>
        </div>
        {product.ratingCount ? (
          <div className="mt-1 text-xs text-neutral-500">{product.ratingCount} reviews</div>
        ) : null}
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex w-full items-center gap-2">
          <Button className="w-full" onClick={(e) => {
            e.preventDefault()
            onAddToCart?.(product.id)
          }}>Add to cart</Button>
          {product.href ? (
            <Button variant="secondary" asChild>
              <Link href={product.href}>View</Link>
            </Button>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  )

  if (product.href) {
    return (
      <Link href={product.href} className="block">
        {content}
      </Link>
    )
  }

  return content
}

export default ProductCard

