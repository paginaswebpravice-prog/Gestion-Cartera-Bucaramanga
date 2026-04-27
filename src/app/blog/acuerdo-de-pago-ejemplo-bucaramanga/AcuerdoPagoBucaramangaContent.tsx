"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AcuerdoPagoBucaramangaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Cómo redactar un acuerdo de pago efectivo en Bucaramanga (Guía +
          ejemplo 2026)
        </h1>

        <p className={styles.subtitle}>
          Aprende a crear acuerdos de pago legales, claros y ejecutables que te
          permitan recuperar cartera sin necesidad de procesos judiciales.
        </p>

        <div className={styles.badgeRow}>
          <span>📄 Modelo incluido</span>
          <span>⚖️ Legal</span>
          <span>💼 Empresas</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>¿Qué es un acuerdo de pago?</h2>

        <p>
          Un acuerdo de pago es un documento legal mediante el cual un deudor se
          compromete a pagar una obligación bajo condiciones específicas como
          fechas, cuotas y montos definidos.
        </p>

        <p>
          En Bucaramanga, este tipo de acuerdos es una herramienta clave dentro
          del cobro prejurídico, ya que permite recuperar dinero sin necesidad
          de iniciar una demanda.
        </p>
      </motion.section>

      {/* IMPORTANCIA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2>¿Por qué es tan importante un acuerdo bien redactado?</h2>

        <ul>
          <li>Formaliza la deuda de manera legal</li>
          <li>Reduce el riesgo de incumplimiento</li>
          <li>Facilita el cobro jurídico si es necesario</li>
          <li>Evita procesos largos y costosos</li>
        </ul>

        <div className={styles.highlight}>
          💡 Un acuerdo mal hecho puede ser imposible de ejecutar legalmente.
        </div>
      </motion.section>

      {/* ESTRUCTURA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h2>Estructura de un acuerdo de pago efectivo</h2>

        {[
          {
            title: "1. Identificación de las partes",
            text: "Datos completos del acreedor y del deudor.",
          },
          {
            title: "2. Descripción de la deuda",
            text: "Monto, origen y soportes (facturas, contratos, etc.).",
          },
          {
            title: "3. Plan de pagos",
            text: "Fechas exactas, cuotas y condiciones claras.",
          },
          {
            title: "4. Cláusula de incumplimiento",
            text: "Debe indicar que el incumplimiento habilita el cobro jurídico inmediato.",
          },
          {
            title: "5. Firma de las partes",
            text: "Sin firma, el documento pierde valor legal.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* EJEMPLO VISUAL */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ejemplo de acuerdo de pago (modelo básico)</h2>

        <motion.div
          className={styles.documentBox}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3>ACUERDO DE PAGO</h3>

          <p>
            Entre las partes: [Nombre del acreedor] y [Nombre del deudor], se
            acuerda lo siguiente:
          </p>

          <p>
            El deudor reconoce una deuda por valor de <strong>$X</strong>,
            correspondiente a [concepto].
          </p>

          <p>
            Se compromete a pagar en <strong>X cuotas</strong> de{" "}
            <strong>$X</strong>, iniciando el día <strong>XX/XX/2026</strong>.
          </p>

          <p>
            En caso de incumplimiento, el acreedor podrá iniciar acciones
            legales sin previo aviso.
          </p>

          <p>
            Firmado en Bucaramanga el día <strong>XX/XX/2026</strong>.
          </p>

          <div className={styles.signature}>
            <span>______________________</span>
            <span>______________________</span>
          </div>
        </motion.div>
      </motion.section>

      {/* ERRORES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes al redactar acuerdos de pago</h2>

        <ul>
          <li>No definir fechas exactas</li>
          <li>Dejar condiciones ambiguas</li>
          <li>No incluir cláusula de incumplimiento</li>
          <li>No firmar el documento</li>
          <li>Hacer acuerdos verbales</li>
        </ul>
      </motion.section>

      {/* CONSEJO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Consejo profesional</h2>

        <p>
          Un acuerdo de pago debe redactarse como un documento legal, no como un
          simple compromiso informal.
        </p>

        <p>
          Si está bien estructurado, puede convertirse en una herramienta clave
          para recuperar cartera rápidamente y con respaldo jurídico.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>¿Necesitas crear acuerdos de pago efectivos?</h2>

        <p>
          En Pravice Bucaramanga diseñamos acuerdos legales que aumentan la
          probabilidad de pago y protegen tu empresa.
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Crear acuerdo de pago
          </Link>
        </motion.div>
      </motion.section>
    </article>
  );
}
