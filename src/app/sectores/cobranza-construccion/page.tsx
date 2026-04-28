import type { Metadata } from "next";
import CobranzaConstruccionContent from "./CobranzaConstruccionContent";

export const metadata: Metadata = {
  title:
    "Cobranza para construcción en Colombia (2026) | Recuperación de cartera de obras",

  description:
    "Recupere cartera en el sector construcción. Cobro de facturas, contratos y pagos pendientes para constructoras y contratistas en Colombia.",

  keywords: [
    "cobranza construcción Colombia",
    "recuperación cartera construcción",
    "cobro facturas obras",
    "deudas contratistas Colombia",
    "cobro contratos construcción",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-construccion",
  },

  openGraph: {
    title: "Cobranza en construcción | Recupere pagos de obras y contratos",
    description:
      "Soluciones efectivas para recuperar cartera en el sector construcción.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-construccion",
    siteName: "Tu Empresa",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cobranza para sector construcción en Colombia",
            description:
              "Servicios de recuperación de cartera para constructoras, contratistas y proyectos de obra.",
            areaServed: "Colombia",
            serviceType: "Cobranza construcción",
          }),
        }}
      />

      <CobranzaConstruccionContent />
    </>
  );
}
