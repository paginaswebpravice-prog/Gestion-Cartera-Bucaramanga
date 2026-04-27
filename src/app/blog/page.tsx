import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog de recuperación de cartera en Bucaramanga | Cobranza y deudas",
  description:
    "Aprende cómo recuperar cartera vencida en Bucaramanga, cobrar deudas y mejorar el flujo de caja de tu empresa con estrategias legales efectivas.",
  keywords: [
    "recuperar cartera Bucaramanga",
    "cobro de deudas Bucaramanga",
    "cobranza empresarial Bucaramanga",
    "cartera vencida Bucaramanga",
    "cobro jurídico Bucaramanga",
  ],
  alternates: {
    canonical: "https://gestion-cartera-bucaramanga-iota.vercel.app/Blog",
  },
  openGraph: {
    title: "Blog de recuperación de cartera en Bucaramanga | Pravice",
    description:
      "Estrategias legales y efectivas para recuperar cartera vencida en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/Blog",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog de recuperación de cartera en Bucaramanga",
            description:
              "Artículos sobre cobro de deudas, cartera vencida y estrategias de cobranza en Bucaramanga.",
            url: "https://gestion-cartera-bucaramanga-iota.vercel.app/Blog",
            publisher: {
              "@type": "Organization",
              name: "Pravice",
            },
          }),
        }}
      />

      <BlogContent />
    </>
  );
}
