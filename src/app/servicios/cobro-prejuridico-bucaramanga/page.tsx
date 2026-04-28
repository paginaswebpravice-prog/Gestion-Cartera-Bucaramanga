import type { Metadata } from "next";
import CobroPrejuridicoBucaramangaContent from "./CobroPrejuridicoBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Cobro prejurídico en Bucaramanga (2026) | Recupere cartera sin demanda",
  description:
    "Recupere su dinero sin ir a juicio. Servicio de cobro prejurídico en Bucaramanga con estrategias efectivas de negociación y recuperación de cartera.",
  keywords: [
    "cobro prejurídico Bucaramanga",
    "recuperación de cartera sin demanda",
    "cobranza extrajudicial Bucaramanga",
    "negociación de deudas Bucaramanga",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/cobro-prejuridico-bucaramanga",
  },

  openGraph: {
    title: "Cobro prejurídico en Bucaramanga | Recupere su dinero sin demanda",
    description:
      "Estrategias efectivas de cobranza sin procesos judiciales. Recuperación rápida y profesional.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/cobro-prejuridico-bucaramanga",
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
            name: "Cobro prejurídico en Bucaramanga",
            description:
              "Servicio de recuperación de cartera sin necesidad de demanda judicial en Bucaramanga.",
            areaServed: "Bucaramanga, Colombia",
            serviceType: "Cobranza extrajudicial",
          }),
        }}
      />

      <CobroPrejuridicoBucaramangaContent />
    </>
  );
}
