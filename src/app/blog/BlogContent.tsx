"use client";

import styles from "./Blog.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Cómo recuperar cartera vencida en Bucaramanga paso a paso",
    slug: "recuperar-cartera-vencida-bucaramanga",
    description:
      "Guía completa para empresas en Bucaramanga que necesitan recuperar deudas de clientes morosos de forma legal y efectiva.",
    tag: "Guía",
  },
  {
    title: "Cobro jurídico en Bucaramanga: cuándo demandar una deuda",
    slug: "cobro-juridico-bucaramanga",
    description:
      "Descubre en qué momento iniciar un proceso legal para recuperar cartera en Bucaramanga y evitar pérdidas.",
    tag: "Legal",
  },
  {
    title: "Qué hacer si un cliente no paga en Bucaramanga",
    slug: "cliente-no-paga-bucaramanga",
    description:
      "Estrategias efectivas para empresas que enfrentan clientes morosos en Bucaramanga.",
    tag: "Estrategia",
  },
  {
    title: "Cobro prejurídico en Bucaramanga: cómo funciona",
    slug: "cobro-prejuridico-bucaramanga",
    description:
      "Aprende cómo recuperar deudas sin demandar mediante cobro prejurídico en Bucaramanga.",
    tag: "Cobranza",
  },
  {
    title: "Estrategias de cobranza efectiva en Bucaramanga",
    slug: "estrategias-cobranza-bucaramanga",
    description:
      "Técnicas profesionales para mejorar la recuperación de cartera empresarial.",
    tag: "Pro",
  },
  {
    title: "Cómo cobrar una deuda urgente en Bucaramanga",
    slug: "cobrar-deuda-urgente-bucaramanga",
    description:
      "Recupera dinero rápidamente con estrategias de cobro urgente en Bucaramanga.",
    tag: "Urgente",
  },

  /* ================= NUEVOS ================= */

  {
    title: "Cómo evitar la morosidad en clientes empresariales",
    slug: "evitar-morosidad-clientes-bucaramanga",
    description:
      "Estrategias preventivas para reducir clientes morosos en empresas de Bucaramanga.",
    tag: "Prevención",
  },
  {
    title: "Proceso de recuperación de cartera en Colombia explicado",
    slug: "proceso-recuperacion-cartera-colombia",
    description:
      "Paso a paso del proceso legal y extrajudicial para recuperar cartera vencida.",
    tag: "Legal",
  },
  {
    title: "Cómo redactar un acuerdo de pago efectivo (con ejemplo)",
    slug: "acuerdo-de-pago-ejemplo-bucaramanga",
    description:
      "Aprende a crear acuerdos de pago que realmente se cumplan y protejan tu empresa.",
    tag: "Guía",
  },
  {
    title: "Errores comunes en la cobranza de cartera en Bucaramanga",
    slug: "errores-cobranza-cartera-bucaramanga",
    description:
      "Evita los errores más frecuentes que afectan la recuperación de cartera.",
    tag: "Errores",
  },
  {
    title: "Recuperación de cartera para pymes en Bucaramanga",
    slug: "cartera-pymes-bucaramanga",
    description:
      "Soluciones adaptadas a pequeñas y medianas empresas para recuperar cartera.",
    tag: "PYMES",
  },
  {
    title: "Cuánto tiempo tarda un cobro jurídico en Colombia",
    slug: "tiempo-cobro-juridico-colombia",
    description:
      "Conoce los tiempos reales de un proceso judicial de cobro en Colombia.",
    tag: "Legal",
  },
  {
    title: "Cómo negociar deudas sin perder clientes",
    slug: "negociar-deudas-clientes-bucaramanga",
    description:
      "Recupera dinero sin dañar la relación comercial con tus clientes.",
    tag: "Negociación",
  },
  {
    title: "Recuperación de cartera sin abogados: ¿es posible?",
    slug: "recuperacion-cartera-sin-abogados-bucaramanga",
    description:
      "Descubre cuándo puedes cobrar sin apoyo legal y los riesgos que implica.",
    tag: "Análisis",
  },
  {
    title: "Cómo mejorar el flujo de caja en tu empresa en Bucaramanga",
    slug: "mejorar-flujo-caja-bucaramanga",
    description:
      "Estrategias financieras y de cobranza para mejorar la liquidez empresarial.",
    tag: "Finanzas",
  },
];

export default function BlogContent() {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Blog de recuperación de cartera en Bucaramanga
        </h1>

        <p className={styles.description}>
          Aprende estrategias legales y efectivas para recuperar cartera
          vencida, cobrar deudas y mejorar el flujo de caja de tu empresa en
          Bucaramanga.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${post.slug}`} className={styles.card}>
              {/* TAG */}
              <span className={styles.tag}>{post.tag}</span>

              {/* CONTENT */}
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDesc}>{post.description}</p>

              {/* FOOTER */}
              <div className={styles.cardFooter}>
                <span className={styles.readMore}>Leer artículo</span>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
