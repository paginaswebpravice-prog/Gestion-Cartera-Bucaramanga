import { Metadata } from "next";
import FlujoCajaContent from "./FlujoCajaContent";

export const metadata: Metadata = {
  title:
    "Cómo mejorar el flujo de caja en tu empresa en Bucaramanga (Guía 2026)",
  description:
    "Aprende cómo mejorar el flujo de caja en tu empresa en Bucaramanga. Estrategias prácticas para aumentar liquidez y recuperar cartera.",
  keywords: [
    "mejorar flujo de caja Bucaramanga",
    "liquidez empresa Colombia",
    "gestión de cartera empresas",
    "cómo aumentar flujo de caja",
    "clientes morosos solución",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/mejorar-flujo-caja-bucaramanga",
  },
  openGraph: {
    title: "Cómo mejorar el flujo de caja en tu empresa (Guía práctica)",
    description:
      "Estrategias reales para mejorar liquidez empresarial y recuperar cartera en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/mejorar-flujo-caja-bucaramanga",
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
        headline: "Cómo mejorar el flujo de caja en tu empresa en Bucaramanga",
        description:
          "Guía completa para aumentar la liquidez empresarial y reducir la cartera vencida.",
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
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/mejorar-flujo-caja-bucaramanga",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo mejorar el flujo de caja rápidamente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Reduciendo cartera vencida, mejorando la cobranza y optimizando los plazos de pago de clientes.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué mi empresa tiene problemas de liquidez?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Principalmente por clientes que no pagan a tiempo, mala gestión de cartera o falta de control financiero.",
            },
          },
          {
            "@type": "Question",
            name: "¿La cobranza mejora el flujo de caja?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Recuperar cartera es una de las formas más rápidas de aumentar liquidez en una empresa.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <FlujoCajaContent />
    </>
  );
}
