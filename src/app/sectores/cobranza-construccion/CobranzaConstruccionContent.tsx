"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaConstruccionContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para el sector construcción en Colombia: recupere pagos de
          obras y contratos
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a constructoras, contratistas y subcontratistas a recuperar
          cartera vencida de proyectos de obra, facturas pendientes y contratos
          incumplidos mediante estrategias efectivas y procesos legales.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría especializada
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de facturas de obra</h3>
          <p>
            Recuperamos pagos pendientes por servicios prestados en proyectos de
            construcción.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Recuperación de cartera contractual</h3>
          <p>
            Gestión de cobro de contratos incumplidos entre empresas del sector.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación con empresas deudoras</h3>
          <p>
            Establecemos acuerdos de pago efectivos sin necesidad de litigios
            iniciales.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Procesos jurídicos</h3>
          <p>Iniciamos acciones legales cuando no se logra acuerdo de pago.</p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>Problemas de cartera en el sector construcción</h2>

        <p>
          El sector construcción en Colombia presenta altos niveles de cartera
          vencida debido a retrasos en pagos, incumplimientos contractuales y
          problemas financieros entre empresas.
        </p>

        <p>
          Es común que contratistas y subcontratistas enfrenten dificultades
          para recibir pagos por trabajos ejecutados, afectando su flujo de caja
          y continuidad operativa.
        </p>

        <p>
          Una gestión adecuada de cobranza permite recuperar estos recursos y
          reducir el impacto financiero.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo recuperamos cartera en construcción</h2>

        <p>
          Nuestro proceso inicia con el análisis del contrato, facturación y
          estado de la deuda.
        </p>

        <p>
          Posteriormente, se contacta a la empresa deudora para negociar el pago
          o iniciar acciones legales en caso de incumplimiento.
        </p>

        <ul>
          <li>Revisión de contratos y soportes</li>
          <li>Gestión de cobro empresarial</li>
          <li>Negociación de pagos</li>
          <li>Acciones legales cuando aplica</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Beneficios para constructoras y contratistas</h2>

        <ul>
          <li>Recuperación de ingresos pendientes</li>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de riesgos financieros</li>
          <li>Mayor control de cartera</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Facturas de obra</li>
          <li>Contratos de construcción</li>
          <li>Pagos entre empresas (B2B)</li>
          <li>Servicios subcontratados</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Se recomienda actuar desde el primer retraso en el pago para evitar
          que la deuda aumente y se vuelva más difícil de recuperar.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué hacer si no me pagan una obra?</h3>
          <p>
            Se puede iniciar un proceso de cobranza y escalar a acciones
            legales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se pueden cobrar contratos incumplidos?</h3>
          <p>Sí, existen mecanismos legales para exigir el pago.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar la deuda?</h3>
          <p>Depende del caso, pero puede variar según el proceso.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere pagos de sus proyectos</h2>
        <p>
          No permita que los incumplimientos afecten su operación en
          construcción.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
