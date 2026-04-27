"use client";

import styles from "../Blog.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProcesoRecuperacionCarteraColombiaContent() {
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
          Proceso de recuperación de cartera en Colombia explicado (Guía 2026)
        </h1>

        <p className={styles.subtitle}>
          Conoce paso a paso cómo funciona la recuperación de cartera en
          Colombia, desde el cobro amistoso hasta el proceso jurídico.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Legal</span>
          <span>📈 Empresas</span>
          <span>💰 Recuperación</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es la recuperación de cartera?</h2>

        <p>
          La recuperación de cartera es el proceso mediante el cual una empresa
          gestiona el cobro de deudas pendientes para recuperar dinero que no ha
          sido pagado por sus clientes.
        </p>

        <p>
          En Colombia, este proceso se divide en varias etapas que van desde la
          gestión amistosa hasta acciones legales, dependiendo del
          comportamiento del deudor.
        </p>

        <div className={styles.highlight}>
          💡 No todas las deudas requieren demanda, pero todas deben gestionarse
          correctamente.
        </div>
      </motion.section>

      {/* IMPORTANCIA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué es importante un proceso estructurado?</h2>

        <p>
          Muchas empresas pierden dinero porque no siguen un proceso organizado
          de cobranza. Actuar sin estrategia reduce las probabilidades de
          recuperación.
        </p>

        <ul>
          <li>Mejora el flujo de caja</li>
          <li>Reduce cartera vencida</li>
          <li>Aumenta la recuperación de deudas</li>
          <li>Evita pérdidas financieras</li>
        </ul>
      </motion.section>

      {/* PROCESO */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Etapas del proceso de recuperación de cartera en Colombia
        </motion.h2>

        {[
          {
            title: "1. Cobro preventivo",
            text: "Se realizan recordatorios antes del vencimiento para evitar que el cliente entre en mora.",
          },
          {
            title: "2. Cobro amistoso",
            text: "Contacto directo con el cliente una vez vencida la deuda, buscando el pago sin generar conflicto.",
          },
          {
            title: "3. Cobro prejurídico",
            text: "Se envían comunicaciones formales con respaldo legal para aumentar la presión de pago sin acudir a la vía judicial.",
          },
          {
            title: "4. Negociación de acuerdos",
            text: "Se establecen acuerdos de pago que faciliten la recuperación de la deuda en plazos definidos.",
          },
          {
            title: "5. Cobro jurídico",
            text: "Si el deudor no responde, se inicia un proceso legal para exigir el pago mediante demanda.",
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

      {/* TIEMPOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuánto tiempo tarda recuperar una deuda?</h2>

        <p>El tiempo de recuperación depende de varios factores:</p>

        <ul>
          <li>Antigüedad de la deuda</li>
          <li>Capacidad de pago del deudor</li>
          <li>Tipo de contrato o soporte legal</li>
          <li>Rapidez en iniciar el proceso</li>
        </ul>

        <p>
          En muchos casos, las deudas se recuperan en etapa prejurídica si se
          actúa oportunamente.
        </p>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes en la recuperación de cartera</h2>

        <ul>
          <li>No iniciar el cobro a tiempo</li>
          <li>No documentar acuerdos</li>
          <li>Evitar procesos legales</li>
          <li>Falta de seguimiento al cliente</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ El mayor error es dejar pasar el tiempo sin actuar.
        </div>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios de aplicar un proceso profesional</h2>

        <ul>
          <li>Mayor recuperación de cartera</li>
          <li>Procesos legales seguros</li>
          <li>Reducción de pérdidas</li>
          <li>Mejor control financiero</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Recupera tu cartera con un proceso efectivo</h2>

        <p>
          En Pravice te ayudamos a implementar procesos de recuperación de
          cartera en Colombia que aumentan la probabilidad de pago y protegen tu
          empresa.
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
