"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EvitarMorosidadClientesBucaramangaContent() {
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
          Cómo evitar la morosidad en clientes empresariales en Bucaramanga
          (Guía 2026)
        </h1>

        <p className={styles.subtitle}>
          Reduce el riesgo de clientes morosos en tu empresa con estrategias
          preventivas de cobranza y mejora tu flujo de caja desde el inicio.
        </p>

        <div className={styles.badgeRow}>
          <span>📉 Menos morosidad</span>
          <span>💼 Empresas</span>
          <span>📈 Flujo de caja</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2>¿Por qué es importante prevenir la morosidad?</h2>

        <p>
          La morosidad es uno de los principales problemas financieros en
          empresas de Bucaramanga. No se trata solo de recuperar dinero, sino de
          evitar que los clientes lleguen a incumplir sus pagos.
        </p>

        <p>
          Prevenir la mora permite mantener estabilidad financiera, mejorar la
          liquidez y evitar procesos de cobranza largos y costosos.
        </p>

        <div className={styles.highlight}>
          💡 La mejor cobranza es la que no necesitas hacer.
        </div>
      </motion.section>

      {/* CAUSAS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Principales causas de morosidad en clientes</h2>

        <p>
          Entender por qué los clientes no pagan es clave para prevenir el
          problema:
        </p>

        <ul>
          <li>Falta de políticas de crédito claras</li>
          <li>Evaluación deficiente del cliente</li>
          <li>Acuerdos informales o verbales</li>
          <li>Falta de seguimiento en pagos</li>
          <li>Problemas financieros del cliente</li>
        </ul>
      </motion.section>

      {/* ESTRATEGIAS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>Cómo evitar la morosidad en clientes empresariales</h2>

        {[
          {
            title: "1. Evaluar el riesgo del cliente",
            text: "Antes de otorgar crédito, analiza la capacidad de pago, historial y comportamiento financiero del cliente.",
          },
          {
            title: "2. Definir políticas de crédito",
            text: "Establece condiciones claras: plazos, montos, intereses y consecuencias por incumplimiento.",
          },
          {
            title: "3. Formalizar acuerdos por escrito",
            text: "Todo acuerdo debe quedar documentado para tener respaldo legal en caso de incumplimiento.",
          },
          {
            title: "4. Facturación clara y oportuna",
            text: "Emitir facturas correctamente y a tiempo evita excusas y retrasos en el pago.",
          },
          {
            title: "5. Seguimiento constante",
            text: "Realiza recordatorios antes del vencimiento para evitar retrasos.",
          },
          {
            title: "6. Actuar rápidamente ante retrasos",
            text: "Si un cliente se atrasa, inicia gestión de cobranza de inmediato para evitar que la deuda crezca.",
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
        <h2>Proceso preventivo de cobranza</h2>

        <p>
          Implementar un sistema preventivo reduce significativamente la
          morosidad:
        </p>

        <ul>
          <li>Evaluación del cliente</li>
          <li>Definición de condiciones de pago</li>
          <li>Documentación del acuerdo</li>
          <li>Seguimiento antes del vencimiento</li>
          <li>Gestión inmediata ante mora</li>
        </ul>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Errores que aumentan la morosidad</h2>

        <ul>
          <li>Confiar sin validar al cliente</li>
          <li>No hacer seguimiento a pagos</li>
          <li>Permitir retrasos sin consecuencias</li>
          <li>No documentar acuerdos</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ La falta de control es la principal causa de clientes morosos.
        </div>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2>Beneficios de prevenir la morosidad</h2>

        <ul>
          <li>Mejor flujo de caja</li>
          <li>Menor riesgo financiero</li>
          <li>Mayor estabilidad empresarial</li>
          <li>Menos necesidad de cobro jurídico</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>Reduce la morosidad en tu empresa</h2>

        <p>
          En Pravice te ayudamos a implementar estrategias preventivas para
          evitar clientes morosos en Bucaramanga y proteger tu flujo de caja.
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
