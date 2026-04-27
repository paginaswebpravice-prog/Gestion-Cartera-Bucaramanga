"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EstrategiasCobranzaBucaramangaContent() {
  return (
    <motion.article
      className={styles.article}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Estrategias de cobranza efectiva en Bucaramanga (Guía profesional
          2026)
        </h1>

        <p className={styles.subtitle}>
          Mejora la recuperación de cartera en tu empresa con estrategias de
          cobranza estructuradas, legales y adaptadas al contexto empresarial de
          Bucaramanga.
        </p>

        <div className={styles.badgeRow}>
          <span>📈 Flujo de caja</span>
          <span>⚖️ Cobro legal</span>
          <span>💼 Empresas</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2>¿Qué es la cobranza efectiva?</h2>

        <p>
          La cobranza efectiva es el conjunto de estrategias, procesos y
          acciones que permiten recuperar deudas de manera rápida, organizada y
          con alta probabilidad de éxito.
        </p>

        <p>
          En Bucaramanga, muchas empresas pierden dinero no por falta de ventas,
          sino por no contar con un sistema de cobranza estructurado que
          garantice el pago oportuno de sus clientes.
        </p>

        <div className={styles.highlight}>
          💡 Vender sin cobrar no es negocio. La cobranza es parte clave del
          crecimiento empresarial.
        </div>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Problemas comunes en la cobranza empresarial</h2>

        <p>
          Antes de aplicar estrategias, es importante entender por qué falla la
          cobranza en muchas empresas:
        </p>

        <ul>
          <li>Falta de seguimiento a clientes</li>
          <li>No tener políticas de crédito definidas</li>
          <li>Uso de acuerdos verbales</li>
          <li>Retrasos en iniciar el cobro</li>
          <li>Evitar procesos legales por desconocimiento</li>
        </ul>

        <p>
          Estos errores hacen que las deudas se acumulen y se vuelvan cada vez
          más difíciles de recuperar.
        </p>
      </motion.section>

      {/* ESTRATEGIAS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>Principales estrategias de cobranza efectiva en Bucaramanga</h2>

        {[
          {
            title: "1. Segmentación de cartera",
            text: "Clasifica las deudas por antigüedad (30, 60, 90 días o más) y valor. Esto permite priorizar los casos más urgentes.",
          },
          {
            title: "2. Contacto temprano con el cliente",
            text: "Entre más rápido contactes al deudor, mayor será la probabilidad de pago. La cobranza temprana es clave.",
          },
          {
            title: "3. Comunicación profesional",
            text: "Mantener un tono claro, respetuoso y firme mejora la relación con el cliente y aumenta la efectividad del cobro.",
          },
          {
            title: "4. Cobro prejurídico",
            text: "Enviar comunicaciones formales con respaldo legal genera presión sin necesidad de demanda.",
          },
          {
            title: "5. Acuerdos de pago estructurados",
            text: "Facilitar el pago mediante cuotas aumenta la recuperación, siempre con condiciones claras y firmadas.",
          },
          {
            title: "6. Escalamiento a cobro jurídico",
            text: "Si el cliente no responde, iniciar un proceso legal permite exigir el pago de manera formal.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* PROCESO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>Proceso ideal de cobranza empresarial</h2>

        <p>
          Una estrategia efectiva combina diferentes etapas que deben ejecutarse
          de forma ordenada:
        </p>

        <ul>
          <li>Recordatorio de pago</li>
          <li>Contacto directo con el cliente</li>
          <li>Cobro prejurídico</li>
          <li>Negociación de deuda</li>
          <li>Cobro jurídico (si aplica)</li>
        </ul>

        <p>
          Este proceso permite aumentar significativamente la recuperación de
          cartera sin afectar la relación comercial.
        </p>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Errores que debes evitar</h2>

        <ul>
          <li>Esperar demasiado para cobrar</li>
          <li>No documentar acuerdos</li>
          <li>Ser demasiado flexible con los plazos</li>
          <li>No escalar a instancias legales</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ El tiempo es el mayor enemigo de la recuperación de cartera.
        </div>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2>Beneficios de implementar una buena estrategia de cobranza</h2>

        <p>
          Aplicar estrategias profesionales tiene un impacto directo en la
          estabilidad de tu empresa:
        </p>

        <ul>
          <li>Mejora el flujo de caja</li>
          <li>Reduce la cartera vencida</li>
          <li>Aumenta la rentabilidad</li>
          <li>Disminuye el riesgo financiero</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>Optimiza la cobranza en tu empresa</h2>

        <p>
          En Pravice te ayudamos a implementar estrategias de cobranza efectivas
          en Bucaramanga para recuperar tu dinero y mejorar tu flujo de caja.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría
        </Link>
      </motion.section>
    </motion.article>
  );
}
