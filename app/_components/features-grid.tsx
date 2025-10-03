import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Truck, Recycle, Sparkles } from "lucide-react"

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "Premium quality",
    description: "Crafted from long-lasting, sustainable materials with meticulous attention to detail.",
  },
  {
    icon: Truck,
    title: "Fast shipping",
    description: "Free shipping over $75 and expedited options available at checkout.",
  },
  {
    icon: ShieldCheck,
    title: "2-year warranty",
    description: "Coverage for manufacturing defects and free repairs on eligible items.",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description: "Responsibly sourced materials and recyclable packaging across our line.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <Card key={f.title} className="border-neutral-200/70 dark:border-neutral-800/70">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-md bg-neutral-100 p-2 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="font-medium">{f.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{f.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturesGrid

