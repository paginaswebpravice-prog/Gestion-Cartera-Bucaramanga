"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CobranzaEmpresasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Cobranza para empresas en Colombia: recupere cartera y mejore su flujo
          de caja
        </h1>

        <motion.div
          className={styles.heroLine}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p>
          Ayudamos a empresas a recuperar cartera vencida mediante estrategias
          de cobranza prejurídica y jurídica, optimizando su flujo de caja y
          reduciendo el impacto de clientes morosos en su operación.
        </p>

        <p>
          Nuestro enfoque combina gestión estratégica, seguimiento constante y
          respaldo legal para maximizar la recuperación de deudas empresariales
          en el menor tiempo posible.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría empresarial
        </Link>
      </motion.section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        {[
          {
            title: "Gestión integral de cartera",
            text: "Administramos todo el ciclo de cobranza, desde la identificación de deudas hasta la recuperación efectiva del dinero.",
          },
          {
            title: "Cobranza prejurídica",
            text: "Recuperamos cartera mediante contacto estratégico y negociación, evitando procesos judiciales innecesarios.",
          },
          {
            title: "Cobranza jurídica",
            text: "Iniciamos procesos legales para exigir el pago cuando el deudor no responde a la gestión inicial.",
          },
          {
            title: "Reportes y seguimiento",
            text: "Información clara, periódica y detallada sobre el estado de cada caso.",
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

      {/* PROBLEMA REAL */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>El impacto de la cartera vencida en las empresas</h2>

        <p>
          La cartera vencida es uno de los principales problemas financieros en
          las empresas en Colombia. Cuando los clientes no pagan a tiempo, se
          genera un efecto en cadena que afecta la liquidez, la operación y la
          capacidad de crecimiento del negocio.
        </p>

        <p>
          Muchas empresas continúan operando con altos niveles de morosidad sin
          implementar estrategias de recuperación efectivas, lo que termina
          afectando su rentabilidad.
        </p>

        <p>
          Una correcta gestión de cobranza permite convertir cuentas por cobrar
          en flujo de caja real, mejorando la estabilidad financiera.
        </p>
      </motion.section>

      {/* COMO TRABAJAN */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Cómo funciona nuestro servicio de cobranza empresarial</h2>

        <p>
          Nuestro proceso está diseñado para maximizar la recuperación de
          cartera mediante un enfoque estructurado y estratégico.
        </p>

        <ul>
          <li>Análisis inicial de la cartera y clasificación de deudas</li>
          <li>Segmentación por nivel de riesgo y antigüedad</li>
          <li>Contactos estratégicos con los deudores</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento constante de compromisos</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>

        <p>
          Este enfoque permite aumentar significativamente la tasa de
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
        <h2>¿Qué nos diferencia de otras empresas de cobranza?</h2>

        <p>
          No solo gestionamos cobros, implementamos una estrategia completa
          enfocada en resultados.
        </p>

        <ul>
          <li>Enfoque en recuperación real, no solo gestión</li>
          <li>Comunicación efectiva con deudores</li>
          <li>Equipo con experiencia legal y financiera</li>
          <li>Procesos adaptados a cada empresa</li>
        </ul>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios de una cobranza profesional</h2>

        <p>
          Contar con un servicio especializado de cobranza genera ventajas
          competitivas importantes:
        </p>

        <ul>
          <li>Mejora inmediata del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Optimización de recursos internos</li>
          <li>Mayor control financiero</li>
          <li>Disminución del riesgo de pérdidas</li>
        </ul>
      </motion.section>

      {/* TIPOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Tipos de cartera empresarial que gestionamos</h2>

        <p>
          Trabajamos con diferentes tipos de cartera según el sector y el tipo
          de cliente:
        </p>

        <ul>
          <li>Cartera comercial</li>
          <li>Cartera de servicios</li>
          <li>Cartera financiera</li>
          <li>Cartera B2B (empresa a empresa)</li>
          <li>Cartera de clientes recurrentes</li>
        </ul>
      </motion.section>

      {/* CUANDO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo es el momento ideal para iniciar la cobranza?</h2>

        <p>
          Muchas empresas cometen el error de esperar demasiado tiempo antes de
          iniciar la gestión de cobro.
        </p>

        <p>
          Lo recomendable es actuar desde el primer incumplimiento de pago, ya
          que esto aumenta significativamente las probabilidades de
          recuperación.
        </p>
      </motion.section>

      {/* CASOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Casos comunes de cobranza empresarial</h2>

        <ul>
          <li>Clientes que retrasan pagos constantemente</li>
          <li>Empresas que incumplen contratos</li>
          <li>Facturas vencidas sin respuesta</li>
          <li>Deudas acumuladas difíciles de recuperar</li>
        </ul>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Preguntas frecuentes sobre cobranza empresarial</h2>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar una deuda antigua?</h3>
          <p>
            Sí, aunque entre más tiempo pase, más difícil puede ser. Por eso es
            importante actuar rápidamente.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Siempre es necesario demandar?</h3>
          <p>
            No, muchos casos se resuelven en etapa prejurídica mediante
            negociación.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar una deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no responde?</h3>
          <p>Se procede con acciones legales para exigir el pago.</p>
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
        <h2>Recupere su cartera y fortalezca su empresa</h2>
        <p>
          No permita que los clientes morosos afecten su negocio. Optimice su
          cobranza con expertos y obtenga resultados reales.
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
