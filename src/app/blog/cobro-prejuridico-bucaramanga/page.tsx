import { Metadata } from "next";
import CobroPrejuridicoBucaramangaContent from "./CobroPrejuridicoBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Cobro prejurídico en Bucaramanga: cómo funciona y cuándo usarlo (2026)",
  description:
    "Aprende cómo funciona el cobro prejurídico en Bucaramanga y cómo recuperar deudas sin demandar. Guía completa para empresas.",
  keywords: [
    "cobro prejurídico Bucaramanga",
    "recuperar cartera sin demanda",
    "cobranza extrajudicial Colombia",
    "gestión de cartera Bucaramanga",
    "cómo cobrar deudas sin abogados",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobro-prejuridico-bucaramanga",
  },
  openGraph: {
    title: "Cobro prejurídico en Bucaramanga: cómo funciona",
    description:
      "Recupera deudas sin demanda con estrategias de cobro prejurídico en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobro-prejuridico-bucaramanga",
    siteName: "Pravice Bucaramanga",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA ARTICLE + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Cobro prejurídico en Bucaramanga: cómo funciona",
              description:
                "Guía completa para recuperar deudas sin iniciar un proceso judicial.",
              author: {
                "@type": "Organization",
                name: "Pravice",
              },
              publisher: {
                "@type": "Organization",
                name: "Pravice",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la etapa de cobranza previa a una demanda, donde se realizan gestiones formales para recuperar la deuda sin iniciar un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Funciona el cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, es una de las formas más efectivas de recuperar cartera, ya que muchas deudas se pagan antes de llegar a instancias legales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobroPrejuridicoBucaramangaContent />
    </>
  );
}
