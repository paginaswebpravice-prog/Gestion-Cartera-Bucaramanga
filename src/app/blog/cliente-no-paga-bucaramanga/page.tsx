import { Metadata } from "next";
import ClienteNoPagaBucaramangaContent from "./ClienteNoPagaBucaramangaContent";

export const metadata: Metadata = {
  title: "Qué hacer si un cliente no paga en Bucaramanga (Guía completa 2026)",
  description:
    "Aprende qué hacer cuando un cliente no paga en Bucaramanga. Estrategias legales y efectivas para recuperar tu dinero sin perder clientes.",
  keywords: [
    "cliente no paga Bucaramanga",
    "cómo cobrar deudas Colombia",
    "recuperar cartera Bucaramanga",
    "cobranza empresarial Bucaramanga",
    "qué hacer si no me pagan",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cliente-no-paga-bucaramanga",
  },
  openGraph: {
    title: "Qué hacer si un cliente no paga en Bucaramanga",
    description:
      "Guía práctica para recuperar deudas de clientes morosos en Bucaramanga sin afectar tu negocio.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cliente-no-paga-bucaramanga",
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
              headline: "Qué hacer si un cliente no paga en Bucaramanga",
              description:
                "Guía para empresas que necesitan recuperar cartera de clientes morosos.",
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
                  name: "¿Qué hacer si un cliente no paga?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se recomienda iniciar con contacto formal, luego cobro prejurídico y finalmente cobro jurídico si no hay respuesta.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo demandar a un cliente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando existe incumplimiento reiterado, falta de respuesta o mora superior a 90 días.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ClienteNoPagaBucaramangaContent />
    </>
  );
}
