import type { Metadata } from "next";
import CobranzaEmpresasContent from "./CobranzaEmpresasContent";

export const metadata: Metadata = {
  title: "Cobranza para empresas en Colombia (2026) | Mejore su flujo de caja",

  description:
    "Optimice la cobranza de su empresa y recupere cartera vencida. Servicios profesionales de cobranza para empresas en Colombia.",

  keywords: [
    "cobranza para empresas Colombia",
    "gestión de cartera empresarial",
    "recuperación de cartera empresas",
    "cobro de deudas empresas",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/cobranza-empresas",
  },

  openGraph: {
    title:
      "Cobranza para empresas en Colombia | Soluciones efectivas de cartera",
    description:
      "Mejore su flujo de caja con servicios profesionales de cobranza.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/cobranza-empresas",
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
            name: "Cobranza para empresas en Colombia",
            description:
              "Servicios de cobranza y recuperación de cartera para empresas.",
            areaServed: "Colombia",
            serviceType: "Cobranza empresarial",
          }),
        }}
      />

      <CobranzaEmpresasContent />
    </>
  );
}
