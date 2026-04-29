"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NegociacionDeudasContent() {
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
          Negociación de deudas en Colombia: reduzca intereses y evite embargos
        </h1>

        <div className={styles.heroLine}></div>

        <p>
          Le ayudamos a negociar sus deudas con bancos, entidades financieras,
          empresas y acreedores para lograr acuerdos de pago justos, reducir el
          valor total y evitar procesos judiciales.
        </p>

        <p>
          Nuestro objetivo es que usted recupere el control de sus finanzas sin
          presiones excesivas, mediante estrategias reales de negociación y
          acompañamiento legal.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría confidencial
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
            title: "Acuerdos de pago personalizados",
            text: "Diseñamos planes de pago ajustados a su capacidad financiera real.",
          },
          {
            title: "Reducción de intereses y mora",
            text: "Negociamos con acreedores para disminuir intereses acumulados.",
          },
          {
            title: "Evitar embargos y demandas",
            text: "Buscamos soluciones antes de que el caso escale a instancias legales.",
          },
          {
            title: "Acompañamiento legal y financiero",
            text: "Lo guiamos durante todo el proceso para lograr un acuerdo viable.",
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
        <h2>¿Qué es la negociación de deudas?</h2>

        <p>
          La negociación de deudas es un proceso mediante el cual un deudor y un
          acreedor llegan a un acuerdo para modificar las condiciones de pago de
          una obligación financiera.
        </p>

        <p>
          Este proceso puede incluir reducción de intereses, ampliación de
          plazos, acuerdos de pago o incluso descuentos sobre el capital
          adeudado.
        </p>

        <p>
          En Colombia, esta alternativa se ha convertido en una de las mejores
          opciones para personas y empresas que buscan evitar procesos
          judiciales y recuperar estabilidad financiera.
        </p>
      </motion.section>

      {/* PROBLEMA REAL */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Problemas comunes al tener deudas sin control</h2>

        <ul>
          <li>Incremento constante de intereses y mora</li>
          <li>Llamadas de cobranza constantes</li>
          <li>Riesgo de embargo de bienes o cuentas</li>
          <li>Reportes negativos en centrales de riesgo</li>
          <li>Estrés financiero y falta de liquidez</li>
        </ul>

        <p>
          Si no se actúa a tiempo, la deuda puede crecer rápidamente y volverse
          mucho más difícil de manejar.
        </p>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Beneficios de negociar sus deudas a tiempo</h2>

        <ul>
          <li>Reducción del monto total a pagar</li>
          <li>Evitar procesos judiciales y embargos</li>
          <li>Mejorar su historial financiero a mediano plazo</li>
          <li>Mayor tranquilidad y control económico</li>
          <li>Posibilidad de acuerdos flexibles</li>
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
        <h2>Cómo funciona nuestro proceso de negociación</h2>

        <p>
          Nuestro servicio sigue una metodología clara orientada a resultados:
        </p>

        <ul>
          <li>Análisis detallado de su situación financiera</li>
          <li>Revisión de condiciones de la deuda</li>
          <li>Definición de estrategia de negociación</li>
          <li>Contacto directo con el acreedor</li>
          <li>Propuesta de acuerdos de pago</li>
          <li>Formalización del acuerdo</li>
          <li>Seguimiento del cumplimiento</li>
        </ul>

        <p>
          Este enfoque permite aumentar significativamente la probabilidad de
          éxito en la negociación.
        </p>
      </motion.section>

      {/* TIPOS */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Tipos de deudas que se pueden negociar</h2>

        <ul>
          <li>Deudas con bancos (tarjetas de crédito, préstamos)</li>
          <li>Deudas con entidades financieras</li>
          <li>Deudas comerciales</li>
          <li>Deudas con proveedores</li>
          <li>Obligaciones personales</li>
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
        <h2>¿Cuándo es el momento ideal para negociar una deuda?</h2>

        <p>
          Lo ideal es iniciar la negociación desde el primer momento en que se
          presentan dificultades para cumplir con los pagos.
        </p>

        <p>
          Esperar demasiado puede aumentar los intereses y el riesgo de acciones
          legales por parte del acreedor.
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
        <h2>Preguntas frecuentes sobre negociación de deudas</h2>

        <div className={styles.faqItem}>
          <h3>¿Se puede reducir una deuda?</h3>
          <p>
            Sí, en muchos casos es posible negociar descuentos o condiciones más
            favorables.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Negociar afecta mi historial crediticio?</h3>
          <p>
            Puede tener impacto, pero es mejor que llegar a procesos judiciales
            o incumplimientos mayores.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Puedo negociar varias deudas al mismo tiempo?</h3>
          <p>
            Sí, es posible estructurar acuerdos para múltiples obligaciones.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si no pago?</h3>
          <p>
            El acreedor puede iniciar acciones legales como embargo o demanda.
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
        <h2>Recupere el control de sus finanzas</h2>
        <p>
          Negocie sus deudas de forma inteligente y evite problemas legales.
          Estamos listos para ayudarle.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar con un asesor ahora
        </Link>
      </motion.section>
    </main>
  );
}
