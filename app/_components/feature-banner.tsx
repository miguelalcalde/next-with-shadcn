import Image from "next/image"
import { Button } from "@/components/ui/button"

export type FeatureBannerProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  buttonLabel?: string
  imageSrc?: string
  imageAlt?: string
}

export function FeatureBanner({
  eyebrow,
  title,
  description,
  buttonLabel = "Añadir al carro",
  imageSrc = "/placeholders/product-feature.png",
  imageAlt,
}: FeatureBannerProps) {
  return (
    <section className="flex flex-col gap-6 overflow-hidden rounded-3xl border border-[#e5e8eb] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.04)] md:flex-row md:items-center">
      <div className="flex-1 p-8 md:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f39]">
          {eyebrow}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-[#2b2e30]">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm text-[#62686d]">{description}</p>
        ) : null}
        <Button className="mt-6 rounded-full bg-[#f6c343] px-7 text-sm font-semibold text-[#2b2e30] hover:bg-[#ffce3d]">
          {buttonLabel}
        </Button>
      </div>
      <div className="relative h-64 w-full flex-1 md:h-80">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-contain"
        />
      </div>
    </section>
  )
}
