"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const priceFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
})

export type ProductCardProps = {
  title: string
  description?: string
  unit?: string
  price: number
  previousPrice?: number
  imageSrc?: string
  imageAlt?: string
  badge?: string
  ctaLabel?: string
  className?: string
}

export function ProductCard({
  title,
  description,
  unit,
  price,
  previousPrice,
  imageSrc,
  imageAlt,
  badge,
  ctaLabel = "Añadir al carro",
  className,
}: ProductCardProps) {
  const hasDiscount = Boolean(previousPrice && previousPrice > price)

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border border-[#e5e8eb] bg-white transition-shadow duration-200 ease-out shadow-none hover:shadow-lg",
        className
      )}
    >
      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#f4f5f7]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Imagen
            </div>
          )}
          {badge ? (
            <span className="absolute left-4 top-4 rounded-full bg-[#008f39] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-[#2b2e30]">{title}</h3>
            {description ? (
              <p className="text-sm text-[#62686d]">{description}</p>
            ) : null}
            {unit ? <p className="text-xs text-[#8b9096]">{unit}</p> : null}
          </div>

          <div className="mt-auto flex flex-col gap-1 text-sm">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-[#2b2e30]">
                {priceFormatter.format(price)}
              </span>
              {unit ? (
                <span className="text-xs text-[#8b9096]">/ ud.</span>
              ) : null}
            </div>
            {hasDiscount ? (
              <span className="text-xs text-[#8b9096]">
                Antes {priceFormatter.format(previousPrice ?? 0)}
              </span>
            ) : null}
          </div>
        </div>

        <Button
          variant="outline"
          className="mt-3 h-10 rounded-full border-[#f6c343] bg-white font-semibold text-[#2b2e30] hover:bg-[#fdf7e7]"
        >
          {ctaLabel}
        </Button>
      </CardContent>
    </Card>
  )
}
