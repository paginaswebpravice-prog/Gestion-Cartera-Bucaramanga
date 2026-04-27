import { Metadata } from "next";
import CarteraSinAbogadosContent from "./CarteraSinAbogadosContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera sin abogados en Bucaramanga: ¿es posible? (2026)",
  description:
    "¿Se puede recuperar cartera sin abogados? Descubre cuándo sí, cuándo no y los riesgos para empresas en Bucaramanga.",
  keywords: [
    "recuperar cartera sin abogados",
    "cobranza sin abogado Colombia",
    "gestión de cartera empresas",
    "cobro prejurídico Bucaramanga",
    "recuperación de deudas sin demanda",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/recuperacion-cartera-sin-abogados-bucaramanga",
  },
  openGraph: {
    title: "Recuperación de cartera sin abogados: ¿realmente funciona?",
    description:
      "Conoce cuándo puedes recuperar deudas sin apoyo legal y cuándo necesitas un abogado.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/recuperacion-cartera-sin-abogados-bucaramanga",
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
        headline: "Recuperación de cartera sin abogados: ¿es posible?",
        description:
          "Análisis completo sobre si es viable recuperar deudas sin abogados en Colombia.",
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
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/recuperacion-cartera-sin-abogados-bucaramanga",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Se puede recuperar cartera sin abogados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, en etapas iniciales mediante cobro directo o prejurídico. Sin embargo, en casos complejos se requiere apoyo legal.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuándo es necesario un abogado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cuando el deudor no paga, incumple acuerdos o se requiere iniciar un proceso judicial.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué riesgos tiene cobrar sin asesoría legal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Errores en acuerdos, pérdida de tiempo, baja recuperación y posibles problemas legales.",
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

      <CarteraSinAbogadosContent />
    </>
  );
}
