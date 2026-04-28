import type { Metadata } from "next";
import NegociacionDeudasContent from "./NegociacionDeudasContent";

export const metadata: Metadata = {
  title:
    "Negociación de deudas en Colombia (2026) | Pague menos y evite demandas",

  description:
    "Negocie sus deudas y evite procesos judiciales. Acuerdos de pago flexibles y soluciones efectivas en Colombia.",

  keywords: [
    "negociación de deudas Colombia",
    "acuerdo de pago de deudas",
    "reducir deudas Colombia",
    "negociar con acreedores",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/negociacion-deudas",
  },

  openGraph: {
    title: "Negociación de deudas en Colombia | Evite demandas y pague mejor",
    description:
      "Acuerdos de pago efectivos para reducir deudas y evitar procesos legales.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/negociacion-deudas",
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
            name: "Negociación de deudas en Colombia",
            description:
              "Servicio de negociación de deudas y acuerdos de pago con acreedores.",
            areaServed: "Colombia",
            serviceType: "Negociación de deudas",
          }),
        }}
      />

      <NegociacionDeudasContent />
    </>
  );
}
