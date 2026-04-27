"use client";

import styles from "../Blog.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CarteraSinAbogadosContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Recuperación de cartera sin abogados: ¿es posible? (Guía 2026)</h1>

        <p className={styles.subtitle}>
          Descubre cuándo puedes recuperar deudas por tu cuenta y cuándo
          necesitas apoyo legal para no perder dinero.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Legal</span>
          <span>💼 Empresas</span>
          <span>📊 Estrategia</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Se puede recuperar cartera sin abogados?</h2>

        <p>
          Sí, es posible recuperar cartera sin abogados en ciertas etapas,
          especialmente cuando el cliente aún tiene disposición de pago.
        </p>

        <p>
          Sin embargo, no todos los casos son iguales. Intentar gestionar una
          deuda sin estrategia puede hacerte perder tiempo y dinero.
        </p>
      </motion.section>

      {/* CUANDO SI */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>Cuándo sí puedes cobrar sin abogado</h2>

        <ul>
          <li>Deudas recientes</li>
          <li>Clientes que responden</li>
          <li>Relación comercial activa</li>
          <li>Montos bajos o controlables</li>
        </ul>

        <p>
          En estos casos, una buena gestión de cobranza puede ser suficiente
          para recuperar el dinero.
        </p>
      </motion.section>

      {/* CUANDO NO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Cuándo necesitas apoyo legal</h2>

        <ul>
          <li>El cliente no responde</li>
          <li>Incumple acuerdos de pago</li>
          <li>La deuda es alta</li>
          <li>Se requiere demanda judicial</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Si esperas demasiado, la deuda puede volverse incobrable.
        </div>
      </motion.section>

      {/* RIESGOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Riesgos de cobrar sin asesoría profesional</h2>

        <p>
          Muchas empresas intentan ahorrar costos evitando apoyo legal, pero
          esto puede salir más caro a largo plazo.
        </p>

        <ul>
          <li>Acuerdos mal redactados</li>
          <li>Pérdida de evidencia legal</li>
          <li>Falta de presión efectiva</li>
          <li>Baja tasa de recuperación</li>
        </ul>
      </motion.section>

      {/* PROCESO IDEAL */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          El enfoque correcto para recuperar cartera
        </motion.h2>

        {[
          {
            title: "1. Cobro directo",
            text: "Primer contacto con el cliente.",
          },
          {
            title: "2. Cobro prejurídico",
            text: "Gestión formal con mayor presión.",
          },
          {
            title: "3. Cobro jurídico",
            text: "Proceso legal si no hay pago.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* CONCLUSION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>

        <p>
          Recuperar cartera sin abogados es posible en ciertos casos, pero no es
          una solución universal.
        </p>

        <p>
          La clave está en saber cuándo escalar el proceso y contar con apoyo
          profesional en el momento adecuado.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Recupera tu cartera de forma efectiva</h2>

        <p>
          Evita perder dinero y tiempo. Aplica estrategias de cobranza
          profesionales adaptadas a tu empresa.
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
    </article>
  );
}
