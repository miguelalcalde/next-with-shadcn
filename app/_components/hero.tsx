"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingBag, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">New Collection</Badge>
              <span className="text-xs text-neutral-500">Fall/Winter 2025</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Elevate your everyday with modern essentials
            </h1>
            <p className="max-w-[48ch] text-base text-neutral-600 dark:text-neutral-400 md:text-lg">
              Premium materials. Thoughtful design. Built for comfort and durability. Discover our latest arrivals crafted for life on the move.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#featured">
                  <ShoppingBag className="h-4 w-4" />
                  Shop featured
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="#lookbook">
                  <Play className="h-4 w-4" />
                  View lookbook
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <div>Free shipping over $75</div>
              <div className="hidden sm:block h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div>30-day free returns</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-sm dark:bg-neutral-900">
              <Image
                src="/placeholder.svg"
                alt="Hero product"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="pointer-events-none absolute -left-10 -top-10 hidden size-[420px] rounded-full bg-gradient-to-tr from-primary/15 to-transparent blur-3xl sm:block" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </section>
  )
}

export default Hero

