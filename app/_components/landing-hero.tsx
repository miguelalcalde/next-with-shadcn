import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function LandingHero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src="/placeholders/hero-banner.jpg"
          alt="Campaña de Halloween"
          width={1440}
          height={420}
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/40 p-10 text-white">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c343]">
            Productos del momento
          </span>
          <h1 className="max-w-lg text-4xl font-bold drop-shadow-sm">
            ¿Truco o trato?
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-white/90">
            Descubre nuestra selección destacada para celebrar la temporada con
            dulces, snacks y sorpresas temáticas.
          </p>
          <div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#f6c343] px-8 text-base font-semibold text-[#2b2e30] hover:bg-[#ffce3d]"
            >
              <Link href="#productos-destacados">Ver productos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
