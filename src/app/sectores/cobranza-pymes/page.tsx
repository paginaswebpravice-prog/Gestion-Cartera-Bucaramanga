import type { Metadata } from "next";
import CobranzaPymesContent from "./CobranzaPymesContent";

export const metadata: Metadata = {
  title:
    "Cobranza para PYMES en Colombia (2026) | Recupere cartera y mejore su flujo de caja",

  description:
    "Servicio de cobranza para PYMES en Colombia. Recupere cartera vencida, mejore su flujo de caja y optimice la gestión de cobros.",

  keywords: [
    "cobranza pymes Colombia",
    "recuperación de cartera pequeñas empresas",
    "cobro de deudas pymes",
    "gestión de cartera negocios",
    "recuperar dinero clientes morosos",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-pymes",
  },

  openGraph: {
    title: "Cobranza para PYMES en Colombia | Recupere su dinero fácilmente",
    description: "Soluciones de cobranza para pequeñas y medianas empresas.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-pymes",
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
            name: "Cobranza para PYMES en Colombia",
            description:
              "Servicios de recuperación de cartera para pequeñas y medianas empresas.",
            areaServed: "Colombia",
            serviceType: "Cobranza para PYMES",
          }),
        }}
      />

      <CobranzaPymesContent />
    </>
  );
}
