import { Metadata } from "next";
import CarteraPymesBucaramangaContent from "./CarteraPymesBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para pymes en Bucaramanga (Guía completa 2026)",
  description:
    "Recupera cartera vencida en tu pyme en Bucaramanga con estrategias legales y efectivas. Mejora tu flujo de caja y evita pérdidas.",
  keywords: [
    "recuperar cartera pymes Bucaramanga",
    "cobranza para pymes Bucaramanga",
    "clientes morosos pymes",
    "gestión de cartera Colombia",
    "cobro prejurídico Bucaramanga",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cartera-pymes-bucaramanga",
  },
  openGraph: {
    title:
      "Recuperación de cartera para pymes en Bucaramanga (Mejora tu flujo de caja)",
    description:
      "Guía práctica para pequeñas y medianas empresas que necesitan recuperar deudas de clientes morosos.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cartera-pymes-bucaramanga",
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
          "Recuperación de cartera para pymes en Bucaramanga (Guía completa)",
        description:
          "Cómo recuperar cartera vencida en pequeñas y medianas empresas en Bucaramanga.",
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
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cartera-pymes-bucaramanga",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo recuperar cartera en una pyme?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Implementando procesos de cobranza, contacto oportuno con clientes y, si es necesario, cobro prejurídico o jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué las pymes tienen problemas de cartera?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Principalmente por falta de procesos de cobranza, acuerdos informales y poco seguimiento a los pagos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es necesario un abogado para recuperar cartera?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No siempre, pero en casos complejos o incumplimientos, el apoyo legal aumenta la probabilidad de recuperación.",
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

      <CarteraPymesBucaramangaContent />
    </>
  );
}
