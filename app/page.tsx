import { Hero } from "./_components/hero"
import { FeaturesGrid } from "./_components/features-grid"
import { ProductShowcase } from "./_components/product-showcase"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesGrid />
      <ProductShowcase />
      <section id="lookbook" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Stay in the loop</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Join our newsletter for new releases, limited drops, and exclusive offers.
          </p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
