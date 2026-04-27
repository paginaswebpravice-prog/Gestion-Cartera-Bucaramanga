import { Metadata } from "next";
import CobroJuridicoContent from "./CobroJuridicoContent";

export const metadata: Metadata = {
  title: "Cobro jurídico en Bucaramanga: cuándo demandar una deuda en 2026",
  description:
    "Descubre cuándo iniciar un cobro jurídico en Bucaramanga, cuánto tarda y cómo recuperar deudas legalmente en Colombia.",
  keywords: [
    "cobro jurídico Bucaramanga",
    "demandar deuda Colombia",
    "recuperar cartera Bucaramanga",
    "proceso judicial cobro Colombia",
    "abogados cobranza Bucaramanga",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobro-juridico-bucaramanga",
  },
  openGraph: {
    title: "Cobro jurídico en Bucaramanga: cuándo demandar una deuda",
    description:
      "Aprende cuándo iniciar un proceso legal para recuperar cartera en Bucaramanga y evitar pérdidas.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobro-juridico-bucaramanga",
    siteName: "Pravice Bucaramanga",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Cobro jurídico en Bucaramanga: cuándo demandar una deuda",
            description:
              "Guía completa para saber cuándo iniciar un proceso judicial de cobro en Bucaramanga.",
            author: {
              "@type": "Organization",
              name: "Pravice",
            },
            publisher: {
              "@type": "Organization",
              name: "Pravice",
            },
            mainEntityOfPage:
              "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobro-juridico-bucaramanga",
          }),
        }}
      />

      <CobroJuridicoContent />
    </>
  );
}
