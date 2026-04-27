"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FlujoCajaContent() {
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
          Cómo mejorar el flujo de caja en tu empresa en Bucaramanga (Guía 2026)
        </h1>

        <p className={styles.subtitle}>
          Si tu empresa vende pero no tiene liquidez, el problema no es la
          venta: es el flujo de caja. Aprende cómo solucionarlo.
        </p>

        <div className={styles.badgeRow}>
          <span>📈 Finanzas</span>
          <span>💼 Empresas</span>
          <span>💰 Liquidez</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2>¿Qué es el flujo de caja?</h2>

        <p>
          El flujo de caja es el dinero real que entra y sale de tu empresa. No
          se trata de cuánto vendes, sino de cuánto dinero tienes disponible.
        </p>

        <p>
          Muchas empresas en Bucaramanga venden bien, pero tienen problemas
          financieros porque sus clientes no pagan a tiempo.
        </p>
      </motion.section>

      {/* PROBLEMA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Por qué tu empresa tiene problemas de flujo de caja</h2>

        <ul>
          <li>Clientes morosos</li>
          <li>Falta de seguimiento a pagos</li>
          <li>Plazos de crédito muy largos</li>
          <li>Desorden financiero</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Tener ventas no significa tener dinero disponible.
        </div>
      </motion.section>

      {/* SOLUCIONES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>Cómo mejorar el flujo de caja en tu empresa</h2>

        {[
          {
            title: "1. Recuperar cartera vencida",
            text: "Es la forma más rápida de aumentar liquidez. Dinero que ya es tuyo.",
          },
          {
            title: "2. Reducir plazos de pago",
            text: "Evita dar créditos largos sin control.",
          },
          {
            title: "3. Implementar cobranza estructurada",
            text: "No basta con recordar pagos, se necesita estrategia.",
          },
          {
            title: "4. Hacer seguimiento constante",
            text: "La cobranza efectiva es continua, no reactiva.",
          },
          {
            title: "5. Escalar a cobro legal cuando sea necesario",
            text: "No todos los clientes pagan voluntariamente.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* REALIDAD */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>La clave: gestionar la cartera correctamente</h2>

        <p>
          La mayoría de problemas de flujo de caja no se resuelven vendiendo
          más, sino cobrando mejor.
        </p>

        <ul>
          <li>Dinero retenido en clientes</li>
          <li>Facturas sin cobrar</li>
          <li>Pagos atrasados</li>
        </ul>

        <p>Todo esto representa liquidez que tu empresa debería tener.</p>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Beneficios de mejorar el flujo de caja</h2>

        <ul>
          <li>Mayor estabilidad financiera</li>
          <li>Capacidad de inversión</li>
          <li>Pago oportuno a proveedores</li>
          <li>Crecimiento sostenible</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2>Mejora el flujo de caja de tu empresa hoy</h2>

        <p>
          Recupera tu dinero y mejora la liquidez de tu negocio con estrategias
          de cobranza efectivas.
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
