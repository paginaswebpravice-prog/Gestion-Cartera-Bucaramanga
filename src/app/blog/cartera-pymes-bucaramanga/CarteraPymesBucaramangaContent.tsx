"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CarteraPymesBucaramangaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Recuperación de cartera para pymes en Bucaramanga (Guía completa 2026)
        </h1>

        <p className={styles.subtitle}>
          Si tu empresa tiene clientes que no pagan, estás perdiendo dinero sin
          darte cuenta. Aprende cómo recuperar cartera vencida y mejorar tu
          flujo de caja.
        </p>

        <div className={styles.badgeRow}>
          <span>💼 PYMES</span>
          <span>⚖️ Cobro legal</span>
          <span>📈 Flujo de caja</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>El problema de cartera en las pymes</h2>

        <p>
          En Bucaramanga, muchas pequeñas y medianas empresas venden bien, pero
          tienen problemas de liquidez porque sus clientes no pagan a tiempo.
        </p>

        <p>
          Esto genera un efecto negativo: hay ingresos en papel, pero no dinero
          real disponible para operar.
        </p>
      </motion.section>

      {/* CAUSAS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2>¿Por qué las pymes tienen problemas de cartera?</h2>

        <ul>
          <li>Falta de procesos de cobranza</li>
          <li>Acuerdos verbales sin respaldo</li>
          <li>Poco seguimiento a pagos</li>
          <li>Clientes con problemas financieros</li>
        </ul>

        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          ⚠️ Muchas pymes pierden dinero no por falta de ventas, sino por mala
          gestión de cartera.
        </motion.div>
      </motion.section>

      {/* IMPACTO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Cómo afecta la cartera vencida a tu pyme</h2>

        <p>
          La falta de pago impacta directamente la estabilidad de tu negocio.
        </p>

        <ul>
          <li>Problemas de flujo de caja</li>
          <li>Dificultad para pagar proveedores</li>
          <li>Limitación en crecimiento</li>
          <li>Riesgo de endeudamiento</li>
        </ul>
      </motion.section>

      {/* SOLUCIÓN */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Cómo recuperar cartera en una pyme</h2>

        {[
          {
            title: "1. Diagnóstico de cartera",
            text: "Identifica qué clientes deben, cuánto deben y desde cuándo.",
          },
          {
            title: "2. Contacto oportuno",
            text: "Comunícate con el cliente de forma profesional y estructurada.",
          },
          {
            title: "3. Cobro prejurídico",
            text: "Envía comunicaciones formales que aumenten la presión de pago.",
          },
          {
            title: "4. Acuerdos de pago",
            text: "Facilita el pago mediante cuotas estructuradas.",
          },
          {
            title: "5. Cobro jurídico",
            text: "Si el cliente no responde, inicia proceso legal.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* DIFERENCIAL */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué las pymes deben profesionalizar la cobranza?</h2>

        <p>
          Intentar cobrar sin estrategia suele generar desgaste, pérdida de
          tiempo y baja recuperación.
        </p>

        <ul>
          <li>Mayor probabilidad de recuperar dinero</li>
          <li>Procesos más rápidos</li>
          <li>Mejor relación con clientes</li>
          <li>Menor riesgo legal</li>
        </ul>
      </motion.section>

      {/* CONSEJOS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Consejos clave para mejorar tu cartera</h2>

        <ul>
          <li>Define políticas de crédito claras</li>
          <li>Haz seguimiento constante</li>
          <li>Documenta todas las operaciones</li>
          <li>Actúa rápido ante mora</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Recupera la cartera de tu pyme hoy</h2>

        <p>
          En Pravice Bucaramanga ayudamos a empresas a recuperar deudas de forma
          efectiva y mejorar su estabilidad financiera.
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Recuperar mi cartera
          </Link>
        </motion.div>
      </motion.section>
    </article>
  );
}
