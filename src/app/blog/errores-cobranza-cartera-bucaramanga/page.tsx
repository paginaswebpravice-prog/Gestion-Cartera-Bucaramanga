import { Metadata } from "next";
import ErroresCobranzaBucaramangaContent from "./ErroresCobranzaBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Errores comunes en la cobranza de cartera en Bucaramanga (Evítalos en 2026)",
  description:
    "Descubre los errores más comunes en la cobranza de cartera en Bucaramanga y cómo evitarlos para mejorar la recuperación de deudas.",
  keywords: [
    "errores cobranza cartera Bucaramanga",
    "recuperar cartera Bucaramanga",
    "cobro prejurídico errores",
    "clientes morosos Bucaramanga",
    "gestión de cartera Colombia",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/errores-cobranza-cartera-bucaramanga",
  },
  openGraph: {
    title:
      "Errores en cobranza de cartera que están afectando tu empresa en Bucaramanga",
    description:
      "Aprende qué errores evitar para mejorar la recuperación de cartera y proteger tu flujo de caja.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/errores-cobranza-cartera-bucaramanga",
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
          "Errores comunes en la cobranza de cartera en Bucaramanga (y cómo evitarlos)",
        description:
          "Guía para identificar y corregir errores en la gestión de cartera en Bucaramanga.",
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
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/errores-cobranza-cartera-bucaramanga",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuál es el error más común en la cobranza de cartera?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El error más común es no hacer seguimiento oportuno a las deudas, lo que reduce significativamente la probabilidad de recuperación.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué pasa si no formalizo una deuda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sin documentos legales, es mucho más difícil exigir el pago o iniciar un proceso jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuándo debo iniciar cobro jurídico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cuando el cliente no responde a gestiones prejurídicas o incumple acuerdos de pago establecidos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se puede mejorar la cobranza sin abogados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, en etapas iniciales, pero el apoyo legal aumenta significativamente la recuperación en casos complejos.",
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

      {/* CONTENIDO */}
      <ErroresCobranzaBucaramangaContent />
    </>
  );
}
