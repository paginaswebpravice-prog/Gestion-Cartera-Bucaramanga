"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CobroJuridicoContent() {
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
        <h1>
          Cobro jurídico en Bucaramanga: cuándo demandar una deuda (Guía 2026)
        </h1>

        <p className={styles.subtitle}>
          Descubre en qué momento iniciar un proceso judicial para recuperar una
          deuda en Bucaramanga y cómo hacerlo de forma efectiva.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Proceso legal</span>
          <span>💼 Empresas</span>
          <span>📈 Recuperación de cartera</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es el cobro jurídico?</h2>

        <p>
          El cobro jurídico es el proceso legal mediante el cual un acreedor
          inicia una demanda para exigir el pago de una deuda cuando el deudor
          no cumple voluntariamente.
        </p>

        <p>
          En Bucaramanga, este proceso se realiza ante jueces civiles y permite
          recuperar el dinero a través de mecanismos legales como embargos,
          medidas cautelares o acuerdos judiciales.
        </p>

        <div className={styles.callout}>
          💡 El cobro jurídico es la última etapa de la cobranza, pero también
          la más efectiva cuando el deudor no responde.
        </div>
      </motion.section>

      {/* CUANDO DEMANDAR */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo demandar una deuda en Bucaramanga?</h2>

        <p>
          No todas las deudas deben llevarse inmediatamente a cobro jurídico.
          Sin embargo, hay señales claras que indican que es momento de iniciar
          una demanda.
        </p>

        <ul>
          <li>El cliente no responde a llamadas ni mensajes</li>
          <li>Incumple acuerdos de pago previamente establecidos</li>
          <li>La deuda tiene más de 90 días de mora</li>
          <li>Existe intención clara de no pagar</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Esperar demasiado tiempo puede hacer que la deuda sea más difícil
          de recuperar o incluso incobrable.
        </div>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes antes de iniciar cobro jurídico</h2>

        <p>
          Muchas empresas en Bucaramanga cometen errores que reducen las
          probabilidades de éxito en un proceso judicial.
        </p>

        <ul>
          <li>No documentar correctamente la deuda</li>
          <li>No tener contratos o soportes firmados</li>
          <li>Dejar pasar demasiado tiempo sin actuar</li>
          <li>No realizar cobro prejurídico previo</li>
        </ul>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>Cómo funciona el cobro jurídico en Colombia</h2>

        <div className={styles.step}>
          <h3>1. Revisión del caso</h3>
          <p>
            Se analiza la documentación para verificar que la deuda sea exigible
            legalmente.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Presentación de la demanda</h3>
          <p>Se inicia el proceso ante un juez competente en Bucaramanga.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Medidas cautelares</h3>
          <p>Se pueden solicitar embargos de cuentas o bienes del deudor.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Proceso judicial</h3>
          <p>El juez evalúa el caso y determina la obligación de pago.</p>
        </div>

        <div className={styles.step}>
          <h3>5. Recuperación del dinero</h3>
          <p>
            Se ejecutan las medidas necesarias para lograr el pago de la deuda.
          </p>
        </div>
      </motion.section>

      {/* TIEMPO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuánto tarda un cobro jurídico?</h2>

        <p>
          El tiempo puede variar dependiendo del caso, pero generalmente en
          Colombia un proceso de cobro jurídico puede tardar entre:
        </p>

        <ul>
          <li>6 meses a 1 año (casos rápidos)</li>
          <li>1 a 3 años (casos complejos)</li>
        </ul>

        <p>
          Sin embargo, en muchos casos el pago se logra antes mediante acuerdos
          durante el proceso.
        </p>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2>Ventajas del cobro jurídico</h2>

        <ul>
          <li>Permite exigir el pago de forma legal</li>
          <li>Aumenta la presión sobre el deudor</li>
          <li>Posibilidad de embargo de bienes</li>
          <li>Mayor probabilidad de recuperación</li>
        </ul>
      </motion.section>

      {/* CONSEJO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
      >
        <h2>Consejo profesional</h2>

        <p>
          Antes de iniciar un cobro jurídico, es fundamental agotar la etapa
          prejurídica. Esto no solo aumenta las probabilidades de recuperación,
          sino que también reduce costos y tiempos.
        </p>

        <p>
          Un proceso bien estructurado puede marcar la diferencia entre
          recuperar el dinero o perderlo definitivamente.
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
        <h2>¿Necesitas demandar una deuda en Bucaramanga?</h2>

        <p>
          En Pravice te ayudamos a iniciar procesos de cobro jurídico de forma
          estratégica y efectiva para maximizar la recuperación de tu cartera.
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Iniciar cobro jurídico
          </Link>
        </motion.div>
      </motion.section>
    </motion.article>
  );
}
