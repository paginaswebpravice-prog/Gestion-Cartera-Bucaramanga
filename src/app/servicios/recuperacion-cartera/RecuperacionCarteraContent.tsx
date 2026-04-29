"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecuperacionCarteraContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>
          Recuperación de cartera en Colombia: aumente su flujo de caja y
          reduzca la morosidad
        </h1>

        <div className={styles.heroLine}></div>

        <p>
          Ofrecemos servicios especializados de recuperación de cartera en
          Colombia para empresas y personas que necesitan recuperar deudas de
          manera efectiva, rápida y legal.
        </p>

        <p>
          Implementamos estrategias de cobranza prejurídica, negociación y cobro
          jurídico para maximizar la recuperación y reducir el impacto de la
          cartera vencida en su negocio.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría ahora
        </Link>
      </motion.section>

      {/* SERVICIOS */}
      <motion.section
        className={styles.servicesGrid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            title: "Cobro prejurídico",
            text: "Recuperamos deudas mediante negociación estratégica sin necesidad de demanda.",
          },
          {
            title: "Cobro jurídico",
            text: "Iniciamos procesos legales para exigir el pago cuando el deudor no responde.",
          },
          {
            title: "Gestión integral de cartera",
            text: "Administramos todo el proceso de cobranza con seguimiento continuo.",
          },
          {
            title: "Negociación de deudas",
            text: "Diseñamos acuerdos efectivos que facilitan la recuperación del dinero.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* DEFINICIÓN */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>¿Qué es la recuperación de cartera?</h2>

        <p>
          La recuperación de cartera es el conjunto de estrategias utilizadas
          para recuperar dinero adeudado por clientes, ya sean empresas o
          personas, que han incumplido sus obligaciones de pago.
        </p>

        <p>
          Este proceso incluye diferentes etapas que van desde la gestión
          preventiva hasta acciones legales, dependiendo del comportamiento del
          deudor y del tiempo de mora.
        </p>

        <p>
          En Colombia, una adecuada gestión de cartera es fundamental para
          garantizar la estabilidad financiera de las empresas y evitar pérdidas
          económicas.
        </p>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>El impacto de la cartera vencida en las empresas</h2>

        <ul>
          <li>Disminución del flujo de caja</li>
          <li>Falta de liquidez para operar</li>
          <li>Incremento del riesgo financiero</li>
          <li>Pérdida de rentabilidad</li>
        </ul>

        <p>
          Sin una estrategia efectiva de cobranza, estos problemas pueden
          escalar rápidamente y afectar la sostenibilidad del negocio.
        </p>
      </motion.section>

      {/* ETAPAS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Etapas de la recuperación de cartera</h2>

        <ul>
          <li>
            <strong>Cobro preventivo:</strong> recordatorios antes del
            vencimiento.
          </li>
          <li>
            <strong>Cobro prejurídico:</strong> negociación directa sin demanda.
          </li>
          <li>
            <strong>Cobro jurídico:</strong> acciones legales y embargos.
          </li>
        </ul>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Cómo funciona nuestro proceso de recuperación</h2>

        <ul>
          <li>Análisis detallado de la cartera</li>
          <li>Clasificación de deudas por riesgo</li>
          <li>Contactos estratégicos con deudores</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento constante</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>
      </motion.section>

      {/* TIPOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Cartera empresarial (B2B)</li>
          <li>Cartera comercial</li>
          <li>Cartera de servicios</li>
          <li>Cartera financiera</li>
          <li>Cartera personal</li>
        </ul>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Beneficios de una gestión profesional de cartera</h2>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Reducción de cartera vencida</li>
          <li>Mejor flujo de caja</li>
          <li>Optimización de recursos internos</li>
          <li>Mayor control financiero</li>
        </ul>
      </motion.section>

      {/* CUANDO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>¿Cuándo iniciar la recuperación de cartera?</h2>

        <p>
          Lo recomendable es iniciar el proceso desde el primer incumplimiento
          de pago. Entre más tiempo pase, menor será la probabilidad de
          recuperar la deuda.
        </p>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Preguntas frecuentes sobre recuperación de cartera</h2>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar una deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar sin demandar?</h3>
          <p>Sí, muchos casos se resuelven en etapa prejurídica.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no paga?</h3>
          <p>Se puede iniciar un proceso jurídico para exigir el pago.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué tan efectiva es la recuperación?</h3>
          <p>
            Depende del caso, pero una estrategia profesional aumenta
            significativamente las probabilidades de éxito.
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Recupere su cartera y fortalezca su negocio</h2>
        <p>
          No permita que la morosidad afecte su empresa. Nuestro equipo está
          listo para ayudarle a recuperar su dinero de forma efectiva.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar con un experto
        </Link>
      </motion.section>
    </main>
  );
}
