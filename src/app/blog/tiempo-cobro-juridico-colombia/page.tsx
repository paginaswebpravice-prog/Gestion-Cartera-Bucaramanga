import { Metadata } from "next";
import TiempoCobroJuridicoContent from "./TiempoCobroJuridicoContent";

export const metadata: Metadata = {
  title: "Cuánto tiempo tarda un cobro jurídico en Colombia (2026) | Guía real",
  description:
    "Descubre cuánto tarda un cobro jurídico en Colombia, sus etapas y cómo acelerar la recuperación de cartera empresarial.",
  keywords: [
    "cuánto tarda cobro jurídico Colombia",
    "tiempo proceso ejecutivo Colombia",
    "duración demanda por deuda",
    "recuperación de cartera legal",
    "cobro jurídico Colombia tiempos",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/tiempo-cobro-juridico-colombia",
  },
  openGraph: {
    title: "Cuánto tiempo tarda un cobro jurídico en Colombia (Guía completa)",
    description:
      "Conoce los tiempos reales de un proceso de cobro jurídico en Colombia y cómo recuperar tu dinero más rápido.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/tiempo-cobro-juridico-colombia",
    siteName: "Pravice Bucaramanga",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Cuánto tiempo tarda un cobro jurídico en Colombia (Guía real)",
        description:
          "Explicación completa de los tiempos de un proceso de cobro jurídico en Colombia.",
        author: {
          "@type": "Organization",
          name: "Pravice",
        },
        publisher: {
          "@type": "Organization",
          name: "Pravice",
          logo: {
            "@type": "ImageObject",
            url: "https://gestion-cartera-bucaramanga-iota.vercel.app/logo_pravice.png",
          },
        },
        mainEntityOfPage:
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/tiempo-cobro-juridico-colombia",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuánto tarda un cobro jurídico en Colombia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un cobro jurídico en Colombia puede tardar entre 6 y 24 meses dependiendo del caso, el juzgado y la respuesta del deudor.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se puede recuperar la deuda antes de terminar el proceso?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Muchas deudas se recuperan antes mediante acuerdos de pago o presión legal durante el proceso.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué factores afectan el tiempo del cobro jurídico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El tipo de documento, la respuesta del deudor, la carga del juzgado y la existencia de bienes embargables influyen en la duración.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es obligatorio iniciar cobro jurídico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No siempre. Primero se recomienda el cobro prejurídico, pero si el deudor no paga, el proceso legal es la mejor opción.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <TiempoCobroJuridicoContent />
    </>
  );
}
