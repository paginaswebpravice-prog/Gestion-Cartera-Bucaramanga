import type { Metadata } from "next";
import CobranzaInmobiliariasContent from "./CobranzaInmobiliariasContent";

export const metadata: Metadata = {
  title:
    "Cobranza para inmobiliarias en Colombia (2026) | Recuperación de arriendos y cartera",

  description:
    "Recupere arriendos vencidos y cartera inmobiliaria. Expertos en cobranza para inmobiliarias, propietarios y administradoras en Colombia.",

  keywords: [
    "cobranza inmobiliarias Colombia",
    "recuperar arriendos vencidos",
    "cobro de alquiler Colombia",
    "cartera inmobiliaria",
    "deudores de arriendo",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-inmobiliarias",
  },

  openGraph: {
    title: "Cobranza para inmobiliarias | Recupere arriendos vencidos",
    description:
      "Soluciones efectivas para recuperar cartera inmobiliaria en Colombia.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-inmobiliarias",
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
            name: "Cobranza para inmobiliarias en Colombia",
            description:
              "Servicios de recuperación de cartera inmobiliaria y arriendos vencidos.",
            areaServed: "Colombia",
            serviceType: "Cobranza inmobiliaria",
          }),
        }}
      />

      <CobranzaInmobiliariasContent />
    </>
  );
}
