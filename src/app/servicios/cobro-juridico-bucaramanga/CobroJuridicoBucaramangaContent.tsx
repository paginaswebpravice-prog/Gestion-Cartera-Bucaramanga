"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
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
          Recuperación de cartera en Bucaramanga: servicios de cobranza para
          empresas y personas
        </h1>

        <motion.div
          className={styles.heroLine}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p>
          Ofrecemos servicios especializados de recuperación de cartera en
          Bucaramanga para empresas, negocios y personas que necesitan recuperar
          deudas de manera efectiva.
        </p>

        <p>
          Implementamos estrategias de cobranza prejurídica, negociación directa
          y procesos jurídicos, con el objetivo de maximizar la recuperación y
          mejorar su flujo de caja.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría en Bucaramanga
        </Link>
      </motion.section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        {[
          {
            title: "Recuperación de cartera en Bucaramanga",
            text: "Gestionamos la recuperación de deudas vencidas mediante estrategias adaptadas a cada caso, priorizando resultados rápidos.",
          },
          {
            title: "Gestión integral de cartera",
            text: "Administramos todo el proceso de cobranza desde el primer contacto hasta la recuperación efectiva.",
          },
          {
            title: "Cobranza empresarial",
            text: "Diseñamos procesos de cobranza para empresas que buscan mejorar su liquidez y reducir cartera vencida.",
          },
          {
            title: "Cobro prejurídico y jurídico",
            text: "Actuamos desde negociación hasta acciones legales para asegurar el pago de la deuda.",
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

      {/* CONTEXTO LOCAL SEO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Recuperación de cartera en Bucaramanga: una necesidad creciente</h2>

        <p>
          En Bucaramanga, cada vez más empresas enfrentan problemas relacionados
          con clientes morosos, pagos atrasados y deudas acumuladas. Esta
          situación impacta directamente el flujo de caja y la estabilidad
          financiera de los negocios.
        </p>

        <p>
          Sectores como comercio, servicios, construcción, salud y educación
          presentan altos niveles de cartera vencida, lo que hace necesario
          contar con soluciones especializadas en cobranza.
        </p>

        <p>
          La implementación de estrategias profesionales de recuperación de
          cartera permite reducir riesgos financieros y mejorar la
          sostenibilidad del negocio.
        </p>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Problemas comunes en la gestión de cartera</h2>

        <ul>
          <li>Clientes que no responden a los cobros</li>
          <li>Facturas vencidas acumuladas</li>
          <li>Falta de seguimiento en pagos</li>
          <li>Procesos internos ineficientes</li>
          <li>Desconocimiento de herramientas legales</li>
        </ul>

        <p>
          Estos problemas pueden generar pérdidas económicas importantes si no
          se gestionan a tiempo.
        </p>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Cómo funciona nuestro proceso de cobranza</h2>

        <p>
          Nuestro servicio de recuperación de cartera en Bucaramanga sigue un
          proceso estructurado orientado a resultados:
        </p>

        <ul>
          <li>Análisis detallado de la deuda</li>
          <li>Clasificación de cartera por nivel de riesgo</li>
          <li>Contacto estratégico con el deudor</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento continuo</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>

        <p>
          Este enfoque permite aumentar significativamente la tasa de
          recuperación.
        </p>
      </motion.section>

      {/* DIFERENCIAL */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué elegir un servicio profesional de cobranza?</h2>

        <p>
          Muchas empresas intentan gestionar la cobranza internamente sin
          obtener resultados efectivos. Contar con expertos permite:
        </p>

        <ul>
          <li>Mejorar la recuperación de cartera</li>
          <li>Reducir tiempos de cobro</li>
          <li>Evitar conflictos con clientes</li>
          <li>Acceder a respaldo legal</li>
        </ul>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios de recuperar cartera a tiempo</h2>

        <ul>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de pérdidas económicas</li>
          <li>Mayor estabilidad financiera</li>
          <li>Optimización de recursos empresariales</li>
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
          <li>Cartera empresarial (B2B)</li>
          <li>Cartera comercial</li>
          <li>Cartera de servicios</li>
          <li>Cartera personal</li>
        </ul>
      </motion.section>

      {/* CUANDO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo iniciar la recuperación de cartera?</h2>

        <p>
          Lo ideal es iniciar la gestión desde el primer incumplimiento de pago.
          Entre más tiempo pase, más difícil será recuperar la deuda.
        </p>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Preguntas frecuentes sobre cobranza en Bucaramanga</h2>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar una deuda antigua?</h3>
          <p>Sí, aunque depende del tiempo y las condiciones del caso.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Siempre es necesario demandar?</h3>
          <p>No, muchos casos se resuelven mediante negociación.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda el proceso?</h3>
          <p>Puede variar entre semanas y meses dependiendo del caso.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no paga?</h3>
          <p>Se puede iniciar un proceso jurídico para exigir el pago.</p>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        className={styles.ctaBox}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Recupere su cartera en Bucaramanga hoy</h2>
        <p>
          No permita que las deudas afecten su negocio. Nuestro equipo está
          listo para ayudarle a recuperar su dinero de forma efectiva.
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
