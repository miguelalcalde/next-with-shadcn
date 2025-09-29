import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LandingNavbar() {
  return (
    <header className="border-b border-foreground/20 bg-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-6 px-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <span className="text-xl font-bold text-foreground">M</span>
          </div>
          <span className="text-xl font-semibold text-[#2b2e30]">
            Mercadona
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="relative w-full max-w-md">
            <Input
              placeholder="Buscar productos"
              className="h-12 rounded-full border-[#e5e8eb] bg-[#f5f7fa] pl-12 text-sm text-[#2b2e30] placeholder:text-[#9ca0a4]"
            />
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#9ca0a4]">
              🔍
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-4 text-sm font-semibold text-[#2b2e30] md:flex">
          <Link href="#categorias" className="hover:text-[#008f39]">
            Categorías
          </Link>
          <Link href="#listas" className="hover:text-[#008f39]">
            Listas
          </Link>
          <Link href="#identificate" className="hover:text-[#008f39]">
            Identifícate
          </Link>
          <Button className="rounded-full bg-[#f6c343] text-[#2b2e30] hover:bg-[#ffce3d]">
            <span className="mr-2">🛒</span> 1 · 4,50 €
          </Button>
        </div>
      </div>
    </header>
  )
}
