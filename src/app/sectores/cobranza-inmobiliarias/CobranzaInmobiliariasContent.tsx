"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CobranzaInmobiliariasContent() {
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
          Cobranza para inmobiliarias en Colombia: recupere arriendos vencidos y
          cartera inmobiliaria
        </h1>

        <motion.div
          className={styles.heroLine}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p>
          Apoyamos a inmobiliarias, administradoras de propiedad raíz y
          propietarios en la recuperación de cartera por arriendos vencidos,
          cánones atrasados y contratos incumplidos, mediante estrategias de
          cobranza efectivas y respaldo legal.
        </p>

        <p>
          Optimizamos su flujo de caja, reducimos la morosidad y protegemos su
          inversión inmobiliaria con procesos estructurados y seguros.
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
      <section className={styles.servicesGrid}>
        {[
          {
            title: "Cobro de arriendos vencidos",
            text: "Recuperación de cánones atrasados mediante gestión profesional con arrendatarios.",
          },
          {
            title: "Negociación con arrendatarios",
            text: "Acuerdos de pago estructurados para evitar conflictos y acelerar el recaudo.",
          },
          {
            title: "Procesos de restitución de inmueble",
            text: "Acciones legales para recuperar el inmueble en caso de incumplimiento.",
          },
          {
            title: "Gestión integral de cartera inmobiliaria",
            text: "Control, seguimiento y recuperación de deudas en propiedades arrendadas.",
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

      {/* PROBLEMAS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Problemas comunes en la cartera inmobiliaria</h2>

        <p>
          En el sector inmobiliario, uno de los principales desafíos es la
          morosidad en el pago de arriendos, lo cual impacta directamente la
          rentabilidad de los inmuebles y la liquidez de propietarios e
          inmobiliarias.
        </p>

        <p>Es frecuente encontrar situaciones como:</p>

        <ul>
          <li>Arrendatarios con múltiples meses de mora</li>
          <li>Incumplimiento de contratos de arrendamiento</li>
          <li>Dificultades para desalojar inmuebles</li>
          <li>Falta de respuesta del deudor</li>
          <li>Problemas con codeudores o fiadores</li>
        </ul>

        <p>
          Sin una gestión adecuada, estas deudas pueden convertirse en pérdidas
          significativas.
        </p>
      </motion.section>

      {/* TERMINOS CLAVE */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Conceptos clave en la cobranza inmobiliaria</h2>

        <p>
          Para una recuperación efectiva, es fundamental entender los elementos
          legales y financieros del contrato de arrendamiento:
        </p>

        <ul>
          <li>Canon de arrendamiento</li>
          <li>Cláusulas de incumplimiento</li>
          <li>Garantías y codeudores</li>
          <li>Intereses por mora</li>
          <li>Restitución del inmueble</li>
        </ul>

        <p>
          Una correcta interpretación de estos elementos permite ejecutar una
          estrategia de cobro más efectiva.
        </p>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Cómo recuperamos arriendos vencidos</h2>

        <p>
          Implementamos un proceso estructurado que maximiza la recuperación:
        </p>

        <ul>
          <li>Análisis del contrato de arrendamiento</li>
          <li>Evaluación del estado de la deuda</li>
          <li>Contacto estratégico con el arrendatario</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento continuo</li>
          <li>Escalamiento a acciones legales si aplica</li>
        </ul>

        <p>
          Este enfoque permite recuperar el dinero en menor tiempo y con mayor
          efectividad.
        </p>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios para inmobiliarias y propietarios</h2>

        <ul>
          <li>Recuperación efectiva de ingresos por arriendo</li>
          <li>Reducción de cartera vencida</li>
          <li>Mayor control sobre contratos</li>
          <li>Protección de la inversión inmobiliaria</li>
          <li>Optimización del flujo de caja</li>
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
          <li>Arriendos residenciales</li>
          <li>Locales comerciales</li>
          <li>Bodegas y oficinas</li>
          <li>Cartera con codeudores</li>
          <li>Contratos en mora prolongada</li>
        </ul>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes en la cobranza inmobiliaria</h2>

        <ul>
          <li>No actuar desde el primer incumplimiento</li>
          <li>No validar correctamente los contratos</li>
          <li>Falta de seguimiento a la deuda</li>
          <li>No utilizar mecanismos legales a tiempo</li>
        </ul>
      </motion.section>

      {/* CUANDO */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Lo recomendable es iniciar acciones desde el primer retraso en el
          pago, evitando que la deuda crezca y se vuelva más difícil de
          recuperar.
        </p>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué hacer si no me pagan el arriendo?</h3>
          <p>
            Se debe iniciar un proceso de cobranza estructurado y, si es
            necesario, acciones legales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede desalojar a un arrendatario?</h3>
          <p>
            Sí, mediante un proceso de restitución de inmueble por
            incumplimiento.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede cobrar al codeudor?</h3>
          <p>
            Sí, el codeudor responde legalmente por la obligación en caso de
            mora.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar la deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
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
        <h2>Recupere sus arriendos y proteja su inversión</h2>
        <p>
          No permita que la morosidad afecte su rentabilidad. Le ayudamos a
          recuperar su dinero de forma efectiva y legal.
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
