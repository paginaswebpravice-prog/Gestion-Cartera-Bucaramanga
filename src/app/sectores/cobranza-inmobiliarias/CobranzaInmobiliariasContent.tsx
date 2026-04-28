"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaInmobiliariasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para inmobiliarias en Colombia: recupere arriendos vencidos
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a inmobiliarias, administradoras y propietarios a recuperar
          cartera de arriendos vencidos mediante estrategias de cobranza,
          negociación y procesos legales efectivos.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría ahora
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de arriendos vencidos</h3>
          <p>
            Recuperamos pagos pendientes de arrendatarios de forma efectiva.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación con arrendatarios</h3>
          <p>
            Establecemos acuerdos de pago para recuperar la deuda sin conflicto.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Procesos jurídicos de desalojo</h3>
          <p>Iniciamos acciones legales cuando el deudor no responde.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión de cartera inmobiliaria</h3>
          <p>Seguimiento y control de deudas en propiedades arrendadas.</p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>Problemas comunes en la cartera inmobiliaria</h2>

        <p>
          Las inmobiliarias y propietarios enfrentan frecuentemente retrasos en
          pagos de arriendo, incumplimientos contractuales y dificultades para
          recuperar deudas de arrendatarios.
        </p>

        <p>
          Estos problemas afectan directamente la rentabilidad de los inmuebles
          y generan pérdidas económicas importantes.
        </p>

        <p>
          Contar con un sistema de cobranza especializado permite reducir estos
          riesgos y mejorar el control financiero.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo recuperamos arriendos vencidos</h2>

        <p>
          Nuestro proceso inicia con la evaluación del caso y el análisis del
          contrato de arrendamiento.
        </p>

        <p>
          Posteriormente, se contacta al arrendatario para establecer acuerdos
          de pago o iniciar acciones legales si es necesario.
        </p>

        <ul>
          <li>Contacto directo con el deudor</li>
          <li>Negociación de pagos</li>
          <li>Seguimiento de acuerdos</li>
          <li>Escalamiento a procesos legales</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Beneficios para inmobiliarias y propietarios</h2>

        <ul>
          <li>Recuperación efectiva de ingresos</li>
          <li>Reducción de cartera vencida</li>
          <li>Mayor control sobre los contratos</li>
          <li>Disminución de riesgos legales</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Es recomendable actuar desde el primer incumplimiento de pago para
          evitar que la deuda aumente y se vuelva más difícil de recuperar.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué hacer si no me pagan el arriendo?</h3>
          <p>
            Se puede iniciar un proceso de cobranza y, si es necesario, acciones
            legales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede desalojar a un inquilino?</h3>
          <p>Sí, mediante un proceso legal cuando existe incumplimiento.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar la deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere sus arriendos hoy</h2>
        <p>
          No permita que los incumplimientos afecten su inversión inmobiliaria.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
