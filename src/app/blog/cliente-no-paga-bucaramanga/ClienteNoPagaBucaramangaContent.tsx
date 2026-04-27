"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClienteNoPagaBucaramangaContent() {
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>¿Qué hacer si un cliente no paga en Bucaramanga? (Guía 2026)</h1>

        <p className={styles.subtitle}>
          Aprende cómo actuar cuando un cliente no cumple sus pagos y cómo
          recuperar tu dinero de forma legal, efectiva y sin perder la relación
          comercial.
        </p>

        <div className={styles.badgeRow}>
          <span>💼 Empresas</span>
          <span>⚖️ Cobranza legal</span>
          <span>📈 Flujo de caja</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>El problema: clientes que no pagan</h2>

        <p>
          Uno de los mayores retos para las empresas en Bucaramanga es la
          morosidad. Tener clientes que no pagan afecta directamente el flujo de
          caja y puede poner en riesgo la operación del negocio.
        </p>

        <p>
          Muchas empresas siguen vendiendo, pero no recuperan el dinero, lo que
          genera un crecimiento ficticio mientras la liquidez se deteriora.
        </p>

        <div className={styles.highlight}>
          ⚠️ Un cliente que no paga a tiempo puede convertirse en una deuda
          incobrable si no se gestiona correctamente.
        </div>
      </motion.section>

      {/* CAUSAS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>¿Por qué los clientes no pagan?</h2>

        <ul>
          <li>Problemas financieros del cliente</li>
          <li>Falta de seguimiento por parte de la empresa</li>
          <li>Acuerdos informales sin respaldo legal</li>
          <li>Prioridad de pago a otros proveedores</li>
        </ul>

        <p>
          Entender la causa del incumplimiento es clave para definir la mejor
          estrategia de cobranza.
        </p>
      </motion.section>

      {/* QUE HACER */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <h2>Qué hacer paso a paso si un cliente no paga</h2>

        <div className={styles.step}>
          <h3>1. Contacto inmediato</h3>
          <p>
            Realiza un contacto directo, claro y profesional. Muchas deudas se
            recuperan en esta etapa.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Documentar la deuda</h3>
          <p>
            Asegúrate de tener facturas, contratos o soportes que respalden la
            obligación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Cobro prejurídico</h3>
          <p>
            Enviar comunicaciones formales aumenta la presión y mejora la tasa
            de recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Negociar acuerdos de pago</h3>
          <p>
            Ofrecer alternativas de pago puede facilitar la recuperación sin
            necesidad de demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>5. Iniciar cobro jurídico</h3>
          <p>
            Si el cliente no responde, se debe iniciar un proceso legal para
            exigir el pago.
          </p>
        </div>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>Errores que debes evitar</h2>

        <ul>
          <li>Esperar demasiado tiempo para cobrar</li>
          <li>No hacer seguimiento constante</li>
          <li>No formalizar acuerdos</li>
          <li>Evitar el uso de herramientas legales</li>
        </ul>

        <div className={styles.callout}>
          💡 El mayor error es no actuar a tiempo. Entre más rápido actúes,
          mayor probabilidad de recuperar el dinero.
        </div>
      </motion.section>

      {/* CUANDO ESCALAR */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo escalar el caso a cobro jurídico?</h2>

        <p>Debes considerar iniciar un proceso legal cuando:</p>

        <ul>
          <li>El cliente ignora todas las comunicaciones</li>
          <li>Incumple acuerdos de pago</li>
          <li>La deuda supera los 90 días</li>
          <li>Existe riesgo de no recuperación</li>
        </ul>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2>Ventajas de una cobranza profesional</h2>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Procesos estructurados</li>
          <li>Reducción de tiempo de cobro</li>
          <li>Soporte legal completo</li>
        </ul>

        <p>
          Externalizar la cobranza permite que tu empresa se enfoque en crecer
          mientras expertos gestionan la recuperación.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Recupera el dinero que te deben en Bucaramanga</h2>

        <p>
          No dejes que los clientes morosos afecten tu negocio. Actúa hoy y
          mejora tu flujo de caja con apoyo profesional.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría ahora
        </Link>
      </motion.section>
    </motion.article>
  );
}
