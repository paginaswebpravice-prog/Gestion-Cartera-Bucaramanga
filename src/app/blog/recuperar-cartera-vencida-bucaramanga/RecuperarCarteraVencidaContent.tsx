"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecuperarCarteraVencidaContent() {
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
          Cómo recuperar cartera vencida en Bucaramanga paso a paso (Guía
          completa 2026)
        </h1>

        <p className={styles.subtitle}>
          Si tienes clientes morosos en Bucaramanga, aquí aprenderás cómo
          recuperar tu dinero de forma legal, efectiva y sin afectar la
          estabilidad de tu empresa.
        </p>

        <motion.div
          className={styles.badgeRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span>💰 Recuperación de cartera</span>
          <span>⚖️ Cobro legal</span>
          <span>📈 Flujo de caja</span>
        </motion.div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>¿Qué es la cartera vencida?</h2>

        <p>
          La cartera vencida es el conjunto de facturas o deudas que no han sido
          pagadas en el tiempo acordado. En Bucaramanga, este problema es
          frecuente en empresas de servicios, comercio y sector salud.
        </p>

        <p>
          Aunque muchas empresas siguen vendiendo, el dinero no entra, generando
          un desequilibrio financiero que puede afectar toda la operación.
        </p>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2>¿Por qué es urgente recuperar la cartera?</h2>

        <ul>
          <li>Reduce el flujo de caja</li>
          <li>Afecta el pago de proveedores</li>
          <li>Limita el crecimiento empresarial</li>
          <li>Genera pérdidas acumuladas</li>
        </ul>

        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          ⚠️ Entre más tiempo pasa, más difícil será recuperar la deuda.
        </motion.div>
      </motion.section>

      {/* PASOS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Cómo recuperar cartera vencida en Bucaramanga paso a paso</h2>

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
                <h3>1. Diagnóstico de la cartera</h3>
                <p>
                  Clasifica las deudas por antigüedad: 30, 60, 90 días o más.
                  Esto permite priorizar acciones.
                </p>
              </>
            )}
            {step === 2 && (
              <>
                <h3>2. Contacto inicial con el cliente</h3>
                <p>
                  Se realiza un acercamiento profesional para recordar la
                  obligación y buscar soluciones.
                </p>
              </>
            )}
            {step === 3 && (
              <>
                <h3>3. Cobro prejurídico</h3>
                <p>
                  En esta fase se envían comunicaciones formales que aumentan la
                  presión de pago sin demanda.
                </p>
              </>
            )}
            {step === 4 && (
              <>
                <h3>4. Negociación de acuerdos</h3>
                <p>
                  Se establecen planes de pago estructurados para facilitar la
                  recuperación del dinero.
                </p>
              </>
            )}
            {step === 5 && (
              <>
                <h3>5. Cobro jurídico</h3>
                <p>
                  Si el cliente no responde, se inicia un proceso legal para
                  exigir el pago.
                </p>
              </>
            )}
          </motion.div>
        ))}
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes al recuperar cartera</h2>

        <ul>
          <li>No hacer seguimiento constante</li>
          <li>No documentar acuerdos</li>
          <li>Esperar demasiado tiempo</li>
          <li>No escalar a procesos legales</li>
        </ul>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios de recuperar tu cartera a tiempo</h2>

        <ul>
          <li>Mejor flujo de caja</li>
          <li>Mayor estabilidad financiera</li>
          <li>Reducción de pérdidas</li>
          <li>Mayor control del negocio</li>
        </ul>
      </motion.section>

      {/* INTERLINKING */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>También te puede interesar</h2>

        <ul>
          <li>
            <Link href="/Blog/cobro-juridico-bucaramanga">
              Cobro jurídico en Bucaramanga
            </Link>
          </li>
          <li>
            <Link href="/Blog/cobro-prejuridico-bucaramanga">
              Cobro prejurídico en Bucaramanga
            </Link>
          </li>
          <li>
            <Link href="/Blog/cliente-no-paga-bucaramanga">
              Qué hacer si un cliente no paga
            </Link>
          </li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2>Recupera tu cartera en Bucaramanga hoy</h2>

        <p>
          No dejes que los clientes morosos afecten tu empresa. Actúa ahora y
          mejora tu flujo de caja con apoyo profesional.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría
        </Link>
      </motion.section>
    </motion.article>
  );
}
