import type { Metadata } from "next";
import RecuperacionCarteraContent from "./RecuperacionCarteraContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en Colombia (2026) | Abogados expertos en cobro de deudas",

  description:
    "Recupere su dinero de forma rápida y efectiva. Expertos en recuperación de cartera en Colombia: cobranza prejurídica, jurídica y negociación de deudas.",

  keywords: [
    "recuperación de cartera Colombia",
    "cobro de deudas empresas",
    "recuperar cartera vencida",
    "abogados cobro cartera",
    "gestión de cartera empresas",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/recuperacion-cartera",
  },

  openGraph: {
    title:
      "Recuperación de cartera en Colombia | Soluciones efectivas para empresas",
    description:
      "Recupere cartera vencida con estrategias legales y negociación profesional.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/recuperacion-cartera",
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
            "@type": "LegalService",
            name: "Recuperación de cartera en Colombia",
            description:
              "Servicios de recuperación de cartera para empresas y personas en Colombia.",
            areaServed: "Colombia",
            serviceType: "Recuperación de cartera",
          }),
        }}
      />

      <RecuperacionCarteraContent />
    </>
  );
}
