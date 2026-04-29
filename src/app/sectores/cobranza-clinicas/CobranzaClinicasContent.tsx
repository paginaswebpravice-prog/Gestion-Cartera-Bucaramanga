"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CobranzaClinicasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Cobranza para clínicas y sector salud en Colombia: recupere cartera de
          EPS y pacientes
        </h1>

        <motion.div
          className={styles.heroLine}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p>
          Ayudamos a clínicas, hospitales, IPS y empresas del sector salud a
          recuperar cartera vencida con EPS, aseguradoras y pacientes mediante
          estrategias especializadas de cobranza, auditoría y procesos legales.
        </p>

        <p>
          Optimice su flujo de caja, reduzca glosas y mejore la recuperación de
          cuentas médicas con un enfoque profesional adaptado al sistema de
          salud colombiano.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría especializada
        </Link>
      </motion.section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        {[
          {
            title: "Cobranza a EPS",
            text: "Gestión especializada de cuentas médicas pendientes con entidades promotoras de salud.",
          },
          {
            title: "Recuperación de cartera hospitalaria",
            text: "Estrategias para recuperar pagos de servicios médicos prestados y facturados.",
          },
          {
            title: "Gestión y levantamiento de glosas",
            text: "Recuperación de valores rechazados mediante auditoría y sustentación técnica.",
          },
          {
            title: "Cobranza a pacientes",
            text: "Recuperación de pagos pendientes de usuarios particulares y copagos.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* PROBLEMA REAL */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>El problema de cartera en el sector salud en Colombia</h2>

        <p>
          El sector salud es uno de los más afectados por la acumulación de
          cartera vencida debido a retrasos en pagos, procesos administrativos
          complejos y altos niveles de glosas por parte de las EPS.
        </p>

        <p>
          Las clínicas y hospitales enfrentan dificultades constantes para
          recuperar pagos de servicios ya prestados, lo que impacta directamente
          su liquidez y capacidad operativa.
        </p>

        <ul>
          <li>Retrasos en pagos por parte de EPS</li>
          <li>Alto volumen de glosas</li>
          <li>Procesos de auditoría complejos</li>
          <li>Facturación rechazada o pendiente</li>
          <li>Cartera acumulada difícil de gestionar internamente</li>
        </ul>

        <p>
          Sin una estrategia especializada, esta cartera puede volverse
          incobrable con el tiempo.
        </p>
      </motion.section>

      {/* GLOSAS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Gestión de glosas: clave para recuperar ingresos</h2>

        <p>
          Las glosas representan uno de los mayores obstáculos en la
          recuperación de cartera en salud. Muchas veces, valores importantes
          quedan retenidos por inconsistencias administrativas o auditorías.
        </p>

        <p>
          Nuestro servicio incluye la revisión, sustentación y gestión de glosas
          para lograr su levantamiento y recuperar los valores correspondientes.
        </p>

        <ul>
          <li>Revisión técnica de glosas</li>
          <li>Respuesta a auditorías</li>
          <li>Soporte documental</li>
          <li>Seguimiento hasta recuperación</li>
        </ul>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Cómo funciona nuestro proceso de cobranza en salud</h2>

        <p>
          Implementamos un proceso estructurado enfocado en maximizar la
          recuperación:
        </p>

        <ul>
          <li>Análisis de cartera y clasificación por riesgo</li>
          <li>Revisión de facturación y soportes</li>
          <li>Gestión directa con EPS y aseguradoras</li>
          <li>Negociación de pagos</li>
          <li>Seguimiento constante</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>

        <p>
          Este enfoque permite mejorar significativamente los tiempos y
          resultados.
        </p>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios de una cobranza especializada en salud</h2>

        <ul>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Recuperación de glosas</li>
          <li>Optimización de procesos administrativos</li>
          <li>Mayor control financiero</li>
        </ul>
      </motion.section>

      {/* TIPOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Cartera con EPS</li>
          <li>Cartera con aseguradoras</li>
          <li>Cartera de pacientes particulares</li>
          <li>Cartera hospitalaria</li>
          <li>Cartera de servicios médicos especializados</li>
        </ul>
      </motion.section>

      {/* CUANDO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo tercerizar la cobranza en clínicas?</h2>

        <p>
          Es recomendable cuando la cartera vencida comienza a afectar la
          operación o cuando los procesos internos no logran recuperar los
          pagos.
        </p>

        <p>
          Externalizar permite acceder a experiencia especializada y mejorar los
          resultados.
        </p>
      </motion.section>

      {/* DIFERENCIAL */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué elegir un servicio especializado en salud?</h2>

        <p>
          La cobranza en el sector salud requiere conocimiento técnico del
          sistema, normativas y procesos administrativos específicos.
        </p>

        <ul>
          <li>Conocimiento del sistema de salud colombiano</li>
          <li>Experiencia con EPS y auditorías</li>
          <li>Manejo de glosas y facturación</li>
          <li>Estrategias legales especializadas</li>
        </ul>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Preguntas frecuentes sobre cobranza en clínicas</h2>

        <div className={styles.faqItem}>
          <h3>¿Se pueden recuperar glosas?</h3>
          <p>
            Sí, mediante procesos técnicos y administrativos adecuados se pueden
            recuperar valores rechazados.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda el proceso?</h3>
          <p>
            Depende del caso, pero puede variar según la entidad y el tipo de
            deuda.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede cobrar a EPS?</h3>
          <p>
            Sí, existen mecanismos administrativos y legales para exigir el
            pago.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si no pagan?</h3>
          <p>Se puede escalar a procesos jurídicos para recuperar la deuda.</p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.ctaBox}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Optimice la recuperación de cartera en su clínica</h2>
        <p>
          Mejore su liquidez y reduzca su cartera vencida con un servicio
          especializado en el sector salud.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar con un especialista
        </Link>
      </motion.section>
    </main>
  );
}
