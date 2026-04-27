"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CobroPrejuridicoBucaramangaContent() {
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
        <h1>Cobro prejurídico en Bucaramanga: cómo funciona (Guía 2026)</h1>

        <p className={styles.subtitle}>
          Aprende cómo recuperar deudas sin necesidad de demandar mediante
          estrategias de cobro prejurídico efectivas en Bucaramanga.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Cobranza legal</span>
          <span>💼 Empresas</span>
          <span>📈 Recuperación rápida</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es el cobro prejurídico?</h2>

        <p>
          El cobro prejurídico es la etapa de cobranza previa a una demanda
          judicial. Consiste en aplicar estrategias formales y legales para
          recuperar una deuda sin necesidad de iniciar un proceso en juzgados.
        </p>

        <p>
          En Bucaramanga, este tipo de gestión es clave porque permite recuperar
          cartera de forma más rápida, económica y efectiva que un proceso
          judicial.
        </p>

        <div className={styles.highlight}>
          💡 La mayoría de las deudas se recuperan en etapa prejurídica si se
          gestionan correctamente.
        </div>
      </motion.section>

      {/* IMPORTANCIA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué es tan importante el cobro prejurídico?</h2>

        <p>
          Muchas empresas cometen el error de ir directamente a demanda o, por
          el contrario, no hacer nada. El cobro prejurídico es el punto medio
          ideal.
        </p>

        <ul>
          <li>Reduce costos legales</li>
          <li>Evita procesos largos</li>
          <li>Aumenta la probabilidad de pago</li>
          <li>Permite mantener la relación comercial</li>
        </ul>
      </motion.section>

      {/* COMO FUNCIONA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Cómo funciona el cobro prejurídico en Bucaramanga</h2>

        {[
          {
            title: "1. Análisis de la deuda",
            text: "Se revisa la documentación y el estado de la cartera para definir la mejor estrategia.",
          },
          {
            title: "2. Contacto formal",
            text: "Se inicia comunicación profesional con el deudor mediante llamadas, correos o notificaciones.",
          },
          {
            title: "3. Notificación legal",
            text: "Se envían comunicaciones con respaldo jurídico que aumentan la presión de pago.",
          },
          {
            title: "4. Negociación",
            text: "Se estructuran acuerdos de pago que faciliten la recuperación del dinero.",
          },
          {
            title: "5. Escalamiento",
            text: "Si el deudor no responde, se prepara el caso para cobro jurídico.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* CUANDO USAR */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo usar el cobro prejurídico?</h2>

        <p>Este tipo de cobranza es ideal cuando:</p>

        <ul>
          <li>La deuda tiene entre 30 y 120 días de mora</li>
          <li>El cliente aún tiene capacidad de pago</li>
          <li>No quieres iniciar un proceso judicial inmediato</li>
          <li>Buscas recuperar el dinero rápidamente</li>
        </ul>

        <div className={styles.callout}>
          ⚠️ Entre más temprano se aplique el cobro prejurídico, mayor será la
          probabilidad de recuperación.
        </div>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes en el cobro prejurídico</h2>

        <ul>
          <li>Hacer cobros informales sin respaldo</li>
          <li>No hacer seguimiento constante</li>
          <li>No documentar acuerdos</li>
          <li>Esperar demasiado tiempo para actuar</li>
        </ul>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Ventajas del cobro prejurídico</h2>

        <ul>
          <li>Recuperación más rápida de cartera</li>
          <li>Menor costo que procesos judiciales</li>
          <li>Mayor tasa de éxito</li>
          <li>Presión legal sin demanda</li>
        </ul>

        <p>
          Es la estrategia más eficiente para empresas que buscan recuperar su
          dinero sin entrar en procesos largos.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Recupera tu cartera sin necesidad de demandar</h2>

        <p>
          En Pravice aplicamos estrategias de cobro prejurídico efectivas en
          Bucaramanga para maximizar la recuperación de tu cartera.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar cobro prejurídico
        </Link>
      </motion.section>
    </motion.article>
  );
}
