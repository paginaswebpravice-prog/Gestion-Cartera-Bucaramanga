import { Metadata } from "next";
import RecuperarCarteraVencidaContent from "./RecuperarCarteraVencidaContent";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera vencida en Bucaramanga paso a paso (Guía 2026)",
  description:
    "Aprende cómo recuperar cartera vencida en Bucaramanga con estrategias legales efectivas. Evita pérdidas y mejora el flujo de caja de tu empresa.",
  keywords: [
    "recuperar cartera Bucaramanga",
    "cartera vencida Bucaramanga",
    "cobro de deudas Bucaramanga",
    "clientes morosos Bucaramanga",
    "cobranza empresarial Bucaramanga",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/recuperar-cartera-vencida-bucaramanga",
  },
  openGraph: {
    title: "Cómo recuperar cartera vencida en Bucaramanga paso a paso",
    description:
      "Guía completa para empresas que necesitan recuperar deudas en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/recuperar-cartera-vencida-bucaramanga",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
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
            "@type": "Article",
            headline:
              "Cómo recuperar cartera vencida en Bucaramanga paso a paso",
            description:
              "Guía completa para recuperar deudas de clientes morosos en Bucaramanga.",
            author: {
              "@type": "Organization",
              name: "Pravice",
            },
            publisher: {
              "@type": "Organization",
              name: "Pravice",
            },
            mainEntityOfPage:
              "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/recuperar-cartera-vencida-bucaramanga",
          }),
        }}
      />

      <RecuperarCarteraVencidaContent />
    </>
  );
}
