"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TiempoCobroJuridicoContent() {
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
        <h1>
          ¿Cuánto tiempo tarda un cobro jurídico en Colombia? (Guía real 2026)
        </h1>

        <p className={styles.subtitle}>
          Conoce los tiempos reales de un proceso de cobro jurídico en Colombia,
          sus etapas y cómo acelerar la recuperación de cartera.
        </p>

        <motion.div
          className={styles.badgeRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span>⚖️ Legal</span>
          <span>⏱️ Tiempos reales</span>
          <span>💼 Empresas</span>
        </motion.div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es un cobro jurídico?</h2>

        <p>
          El cobro jurídico es el proceso legal mediante el cual una empresa o
          persona inicia una demanda para recuperar una deuda cuando el deudor
          no paga de forma voluntaria.
        </p>

        <p>
          En Colombia, este proceso generalmente se realiza a través de un{" "}
          <strong>proceso ejecutivo</strong>, que permite exigir el pago con
          base en documentos como facturas, contratos o pagarés.
        </p>
      </motion.section>

      {/* RESPUESTA DIRECTA SEO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h2>¿Cuánto tiempo tarda un cobro jurídico en Colombia?</h2>

        <p>
          En promedio, un cobro jurídico en Colombia puede tardar entre{" "}
          <strong>6 meses y 24 meses</strong>, dependiendo de múltiples
          factores.
        </p>

        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          ⏱️ En casos simples: 6 a 12 meses <br />
          ⚖️ Casos complejos: 12 a 24 meses o más
        </motion.div>

        <p>
          Sin embargo, en algunos casos bien gestionados, se pueden obtener
          pagos parciales o acuerdos incluso antes de finalizar el proceso.
        </p>
      </motion.section>

      {/* FACTORES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Factores que afectan el tiempo del proceso</h2>

        <ul>
          <li>Tipo de documento que respalda la deuda</li>
          <li>Respuesta del deudor</li>
          <li>Carga laboral del juzgado</li>
          <li>Ubicación (ciudad o región)</li>
          <li>Existencia de bienes embargables</li>
        </ul>

        <p>
          No todos los procesos tienen la misma duración. Una estrategia legal
          adecuada puede reducir significativamente los tiempos.
        </p>
      </motion.section>

      {/* ETAPAS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Etapas del cobro jurídico en Colombia</h2>

        {[1, 2, 3, 4, 5].map((step, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {step === 1 && (
              <>
                <h3>1. Presentación de la demanda</h3>
                <p>
                  Se radica la demanda ante el juzgado con los soportes de la
                  deuda.
                </p>
              </>
            )}
            {step === 2 && (
              <>
                <h3>2. Admisión y notificación</h3>
                <p>
                  El juez admite la demanda y se notifica al deudor para que
                  responda.
                </p>
              </>
            )}
            {step === 3 && (
              <>
                <h3>3. Medidas cautelares</h3>
                <p>
                  Se pueden embargar cuentas, salarios o bienes para garantizar
                  el pago.
                </p>
              </>
            )}
            {step === 4 && (
              <>
                <h3>4. Sentencia</h3>
                <p>
                  El juez ordena el pago de la deuda si se comprueba la
                  obligación.
                </p>
              </>
            )}
            {step === 5 && (
              <>
                <h3>5. Ejecución del pago</h3>
                <p>
                  Se hace efectivo el pago mediante embargo o acuerdo con el
                  deudor.
                </p>
              </>
            )}
          </motion.div>
        ))}
      </motion.section>

      {/* REALIDAD */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>La realidad del cobro jurídico</h2>

        <p>
          Aunque el proceso puede parecer largo, muchas deudas se recuperan
          antes de finalizar el proceso judicial.
        </p>

        <ul>
          <li>El deudor suele pagar al ser demandado</li>
          <li>Se generan acuerdos de pago durante el proceso</li>
          <li>Las medidas legales aumentan la presión</li>
        </ul>

        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          💡 En muchos casos, el cobro jurídico funciona como una herramienta de
          presión efectiva para recuperar el dinero más rápido.
        </motion.div>
      </motion.section>

      {/* CÓMO ACELERAR */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Cómo acelerar un cobro jurídico</h2>

        <p>
          Aunque no se puede controlar completamente el tiempo del proceso, sí
          existen formas de hacerlo más eficiente:
        </p>

        <ul>
          <li>Contar con documentos legales bien estructurados</li>
          <li>Actuar rápidamente ante el incumplimiento</li>
          <li>Aplicar cobro prejurídico antes de demandar</li>
          <li>Trabajar con profesionales especializados</li>
        </ul>
      </motion.section>

      {/* CUÁNDO USAR */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo iniciar un cobro jurídico?</h2>

        <p>Se recomienda iniciar un proceso legal cuando:</p>

        <ul>
          <li>El deudor no responde a cobros previos</li>
          <li>La deuda tiene soporte legal</li>
          <li>El monto justifica el proceso</li>
          <li>Han fallado acuerdos de pago</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>Recupera tu dinero con respaldo legal</h2>

        <p>
          No dejes que una deuda siga afectando tu empresa. Inicia un proceso de
          cobro jurídico con acompañamiento profesional y aumenta tus
          probabilidades de recuperación.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar cobro jurídico
        </Link>
      </motion.section>
    </motion.article>
  );
}
