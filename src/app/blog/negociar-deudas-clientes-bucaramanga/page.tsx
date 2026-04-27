import { Metadata } from "next";
import NegociarDeudasContent from "./NegociarDeudasContent";

export const metadata: Metadata = {
  title: "Cómo negociar deudas sin perder clientes en Bucaramanga (Guía 2026)",
  description:
    "Aprende a negociar deudas de forma efectiva sin dañar la relación comercial. Estrategias profesionales para empresas en Bucaramanga.",
  keywords: [
    "negociar deudas clientes",
    "cobranza sin perder clientes",
    "acuerdos de pago empresas",
    "negociación de cartera Bucaramanga",
    "cómo cobrar sin afectar relación comercial",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/negociar-deudas-clientes-bucaramanga",
  },
  openGraph: {
    title: "Cómo negociar deudas sin perder clientes (Guía práctica)",
    description:
      "Estrategias efectivas para recuperar dinero sin afectar relaciones comerciales.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/negociar-deudas-clientes-bucaramanga",
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
        headline: "Cómo negociar deudas sin perder clientes",
        description:
          "Guía completa para negociar deudas sin afectar relaciones comerciales.",
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
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/negociar-deudas-clientes-bucaramanga",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Se puede cobrar una deuda sin perder al cliente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Con una estrategia adecuada de comunicación y negociación es posible recuperar el dinero sin afectar la relación comercial.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué hacer si el cliente no quiere pagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se debe escalar el proceso a cobro prejurídico o jurídico si no hay voluntad de pago.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es recomendable hacer acuerdos de pago?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, siempre que estén bien estructurados y documentados legalmente.",
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

      <NegociarDeudasContent />
    </>
  );
}
