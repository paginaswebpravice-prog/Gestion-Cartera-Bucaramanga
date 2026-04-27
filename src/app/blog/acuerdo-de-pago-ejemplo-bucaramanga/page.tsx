import { Metadata } from "next";
import AcuerdoPagoBucaramangaContent from "./AcuerdoPagoBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Cómo redactar un acuerdo de pago efectivo en Bucaramanga (Ejemplo 2026)",
  description:
    "Aprende a crear acuerdos de pago legales y efectivos en Bucaramanga. Incluye ejemplo práctico para recuperar cartera sin demanda judicial.",
  keywords: [
    "acuerdo de pago Bucaramanga",
    "modelo acuerdo de pago Colombia",
    "recuperar cartera Bucaramanga",
    "cobro prejurídico Bucaramanga",
    "acuerdo de pago ejemplo",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/acuerdo-de-pago-ejemplo-bucaramanga",
  },
  openGraph: {
    title:
      "Cómo hacer un acuerdo de pago efectivo en Bucaramanga (con ejemplo)",
    description:
      "Guía completa para redactar acuerdos de pago que sí funcionan y recuperar cartera empresarial.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/acuerdo-de-pago-ejemplo-bucaramanga",
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
        headline: "Cómo redactar un acuerdo de pago efectivo en Bucaramanga",
        description:
          "Guía completa con ejemplo para crear acuerdos de pago legales y efectivos en Colombia.",
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
          "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/acuerdo-de-pago-ejemplo-bucaramanga",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué debe tener un acuerdo de pago?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Debe incluir identificación de las partes, valor de la deuda, fechas de pago, condiciones y consecuencias por incumplimiento.",
            },
          },
          {
            "@type": "Question",
            name: "¿Un acuerdo de pago tiene validez legal en Colombia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, siempre que esté firmado por ambas partes y contenga condiciones claras, puede ser usado como soporte en un proceso jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué pasa si el deudor incumple el acuerdo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El acreedor puede iniciar un proceso de cobro jurídico basado en el acuerdo firmado.",
            },
          },
        ],
      },

      {
        "@type": "HowTo",
        name: "Cómo redactar un acuerdo de pago",
        description:
          "Pasos para crear un acuerdo de pago efectivo y legal en Colombia.",
        step: [
          {
            "@type": "HowToStep",
            name: "Identificar las partes",
            text: "Incluye datos completos del acreedor y del deudor.",
          },
          {
            "@type": "HowToStep",
            name: "Definir la deuda",
            text: "Especifica el valor total, origen y soportes de la obligación.",
          },
          {
            "@type": "HowToStep",
            name: "Establecer el plan de pagos",
            text: "Define fechas exactas, montos y forma de pago.",
          },
          {
            "@type": "HowToStep",
            name: "Agregar consecuencias",
            text: "Indica qué ocurre en caso de incumplimiento.",
          },
          {
            "@type": "HowToStep",
            name: "Firmar el acuerdo",
            text: "Debe ser firmado por ambas partes para tener validez legal.",
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

      <AcuerdoPagoBucaramangaContent />
    </>
  );
}
