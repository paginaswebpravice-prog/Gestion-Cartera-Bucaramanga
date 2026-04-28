import type { Metadata } from "next";
import CobranzaEducacionContent from "./CobranzaEducacionContent";

export const metadata: Metadata = {
  title:
    "Cobranza para educación en Colombia (2026) | Recuperación de pensiones y matrículas",

  description:
    "Recupere cartera en colegios, universidades e institutos. Expertos en cobranza de pensiones, matrículas y servicios educativos en Colombia.",

  keywords: [
    "cobranza colegios Colombia",
    "recuperación cartera educación",
    "cobro pensiones escolares",
    "deudas universidades Colombia",
    "cobranza servicios educativos",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-educacion",
  },

  openGraph: {
    title: "Cobranza para educación | Recupere pensiones y matrículas",
    description:
      "Soluciones de cobranza para instituciones educativas en Colombia.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-educacion",
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
            name: "Cobranza para sector educación en Colombia",
            description:
              "Servicios de recuperación de cartera para colegios, universidades e institutos.",
            areaServed: "Colombia",
            serviceType: "Cobranza sector educación",
          }),
        }}
      />

      <CobranzaEducacionContent />
    </>
  );
}
