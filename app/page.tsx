import { LandingNavbar } from "./_components/landing-navbar"
import { LandingTopBanner } from "./_components/landing-top-banner"
import { LandingHero } from "./_components/landing-hero"
import { PriceDropSection } from "./_components/price-drop-section"
import { FeatureBanner } from "./_components/feature-banner"
import { ProductCarouselSection } from "./_components/product-carousel-section"
import {
  cambioArmarioProducts,
  perfumeriaProducts,
  novedadesProducts,
} from "./_components/sections-data"

const puroAutentico = {
  eyebrow: "Puro y auténtico",
  title: "Cacao puro en polvo La Chocolatera",
  description: "Perfecto para bebidas y repostería",
  buttonLabel: "Añadir al carro",
  imageSrc: "/placeholders/cacao-puro.png",
}

const haVuelto = {
  eyebrow: "¡Ha vuelto!",
  title: "Barritas de barquillo Hacendado",
  description: "Relleno y cobertura de pistacho",
  buttonLabel: "Añadir al carro",
  imageSrc: "/placeholders/barritas-pistacho.png",
}

export default function Home() {
  return (
    <div className="bg-background pb-20">
      <LandingNavbar />
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pt-6 md:px-10">
        <LandingTopBanner />
        <LandingHero />

        <div className="grid gap-14" id="productos-destacados">
          <PriceDropSection />

          <FeatureBanner id="puro-autentico" {...puroAutentico} />

          <ProductCarouselSection
            id="cambio-armario"
            title="Cambio de armario"
            subtitle="Prepárate para la nueva temporada"
            products={cambioArmarioProducts}
          />

          <FeatureBanner id="ha-vuelto" {...haVuelto} />

          <ProductCarouselSection
            id="nuevo-perfumeria"
            title="Nuevo en Perfumería"
            subtitle="Selección de verano"
            products={perfumeriaProducts}
          />

          <ProductCarouselSection
            id="novedades"
            title="Novedades"
            subtitle="Productos recién añadidos o mejorados"
            products={novedadesProducts}
          />
        </div>
      </div>
    </div>
  )
}
