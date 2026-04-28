import type { Metadata } from "next";
import CobranzaClinicasContent from "./CobranzaClinicasContent";

export const metadata: Metadata = {
  title:
    "Cobranza para clínicas y sector salud en Colombia (2026) | Recuperación de cartera médica",

  description:
    "Recupere cartera en clínicas, hospitales y sector salud. Expertos en cobranza de servicios médicos, EPS y pacientes en Colombia.",

  keywords: [
    "cobranza clínicas Colombia",
    "recuperación cartera sector salud",
    "cobro EPS clínicas",
    "cartera hospitales Colombia",
    "cobranza servicios médicos",
  ],

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-clinicas",
  },

  openGraph: {
    title: "Cobranza para clínicas y sector salud | Recupere su cartera médica",
    description:
      "Soluciones de cobranza para clínicas, hospitales y servicios médicos en Colombia.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/sectores/cobranza-clinicas",
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
            name: "Cobranza para clínicas y sector salud",
            description:
              "Servicios de recuperación de cartera para clínicas, hospitales y sector salud en Colombia.",
            areaServed: "Colombia",
            serviceType: "Cobranza sector salud",
          }),
        }}
      />

      <CobranzaClinicasContent />
    </>
  );
}
