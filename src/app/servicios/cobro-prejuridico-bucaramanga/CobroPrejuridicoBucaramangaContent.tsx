"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CobroPrejuridicoBucaramangaContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Cobro prejurídico en Bucaramanga: recupere su dinero sin necesidad de
          demandar
        </h1>

        <motion.div
          className={styles.heroLine}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p>
          Recuperamos su cartera vencida en Bucaramanga mediante estrategias
          profesionales de negociación, contacto estratégico y seguimiento
          constante, evitando procesos judiciales costosos y prolongados.
        </p>

        <p>
          Nuestro objetivo es lograr acuerdos de pago efectivos en el menor
          tiempo posible, optimizando su flujo de caja sin afectar la relación
          comercial con sus clientes.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría inmediata
        </Link>
      </motion.section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        {[
          {
            title: "Gestión de cobranza extrajudicial",
            text: "Contactamos a los deudores mediante canales estratégicos para lograr acuerdos de pago rápidos y efectivos.",
          },
          {
            title: "Negociación de deudas",
            text: "Diseñamos acuerdos flexibles adaptados a la capacidad de pago del deudor para aumentar la probabilidad de recuperación.",
          },
          {
            title: "Seguimiento continuo",
            text: "Monitoreamos cada caso para asegurar el cumplimiento de los acuerdos establecidos.",
          },
          {
            title: "Prevención de demandas",
            text: "Reducimos la necesidad de procesos judiciales mediante estrategias efectivas en etapa temprana.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* DEFINICIÓN */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es el cobro prejurídico y por qué es clave?</h2>

        <p>
          El cobro prejurídico es la etapa inicial del proceso de recuperación
          de cartera en la cual se busca obtener el pago de una deuda sin acudir
          a instancias judiciales. Se basa en la comunicación estratégica,
          negociación y acuerdos de pago entre las partes.
        </p>

        <p>
          En Bucaramanga, muchas empresas prefieren este método porque permite
          recuperar dinero de forma más rápida, con menores costos y sin afectar
          significativamente la relación comercial con el cliente.
        </p>

        <p>
          Implementar una estrategia adecuada en esta fase puede evitar procesos
          largos y costosos, aumentando la probabilidad de éxito.
        </p>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Problemas comunes que resuelve el cobro prejurídico</h2>

        <ul>
          <li>Clientes que retrasan pagos constantemente</li>
          <li>Facturas vencidas sin respuesta</li>
          <li>Deudores que evitan el contacto</li>
          <li>Acumulación de cartera difícil de recuperar</li>
          <li>Falta de procesos internos de cobranza</li>
        </ul>

        <p>
          Estos problemas pueden escalar rápidamente si no se gestionan de forma
          profesional desde etapas tempranas.
        </p>
      </motion.section>

      {/* VENTAJAS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ventajas del cobro prejurídico frente al cobro judicial</h2>

        <ul>
          <li>Menor costo operativo</li>
          <li>Mayor rapidez en la recuperación</li>
          <li>Flexibilidad en acuerdos de pago</li>
          <li>Menor desgaste legal</li>
          <li>Preservación de relaciones comerciales</li>
        </ul>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Cómo funciona nuestro proceso de cobro prejurídico</h2>

        <p>
          Nuestro servicio en Bucaramanga sigue un proceso estructurado enfocado
          en resultados:
        </p>

        <ul>
          <li>Análisis del estado de la deuda</li>
          <li>Clasificación de cartera por antigüedad y riesgo</li>
          <li>Contactos estratégicos con el deudor</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento constante de compromisos</li>
        </ul>

        <p>
          Este enfoque aumenta significativamente la probabilidad de
          recuperación frente a métodos tradicionales.
        </p>
      </motion.section>

      {/* DIFERENCIAL */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué contratar un servicio profesional de cobranza?</h2>

        <p>
          Muchas empresas intentan recuperar deudas por su cuenta sin éxito, lo
          que retrasa el proceso y reduce las probabilidades de cobro.
        </p>

        <ul>
          <li>Mayor efectividad en la recuperación</li>
          <li>Estrategias profesionales de negociación</li>
          <li>Mejor manejo de clientes difíciles</li>
          <li>Preparación para escalar a cobro jurídico si es necesario</li>
        </ul>
      </motion.section>

      {/* CUANDO ESCALAR */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo pasar de cobro prejurídico a cobro jurídico?</h2>

        <p>
          Si el deudor no responde, evita el contacto o incumple los acuerdos de
          pago, es recomendable escalar el caso a un proceso jurídico.
        </p>

        <p>
          Contar con un proceso estructurado permite hacer esta transición de
          manera efectiva sin perder tiempo.
        </p>
      </motion.section>

      {/* CASOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Casos donde el cobro prejurídico es más efectivo</h2>

        <ul>
          <li>Deudas recientes</li>
          <li>Clientes con historial de pago irregular</li>
          <li>Relaciones comerciales activas</li>
          <li>Facturas pendientes sin conflicto legal</li>
        </ul>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Preguntas frecuentes sobre cobro prejurídico</h2>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar una deuda?</h3>
          <p>
            Puede variar entre semanas y meses dependiendo del caso y la
            disposición del deudor.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar sin demandar?</h3>
          <p>
            Sí, muchos casos se resuelven completamente en etapa prejurídica.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no responde?</h3>
          <p>Se puede escalar a un proceso jurídico para exigir el pago.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se afecta la relación con el cliente?</h3>
          <p>
            No necesariamente, ya que se utilizan estrategias de negociación
            respetuosas.
          </p>
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
        <h2>Recupere su cartera sin ir a juicio</h2>
        <p>
          Optimice su flujo de caja con un servicio de cobranza efectivo en
          Bucaramanga.
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
