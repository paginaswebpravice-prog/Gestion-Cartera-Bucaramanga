"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaEducacionContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para instituciones educativas en Colombia: recupere pensiones
          y matrículas
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a colegios, universidades e institutos a recuperar cartera
          vencida de pensiones, matrículas y servicios educativos mediante
          estrategias de cobranza efectivas y respetuosas.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría especializada
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de pensiones escolares</h3>
          <p>Recuperamos pagos pendientes de mensualidades educativas.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Recuperación de matrículas</h3>
          <p>Gestión de cobro de inscripciones y costos académicos.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación con acudientes</h3>
          <p>Establecemos acuerdos de pago ajustados a cada situación.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión de cartera educativa</h3>
          <p>Seguimiento y control de deudas en instituciones educativas.</p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>Problemas de cartera en el sector educación</h2>

        <p>
          Las instituciones educativas enfrentan altos niveles de morosidad en
          el pago de pensiones y matrículas, lo que afecta su sostenibilidad
          financiera y operación.
        </p>

        <p>
          La gestión inadecuada de cartera puede generar acumulación de deudas
          difíciles de recuperar.
        </p>

        <p>
          Contar con un sistema de cobranza profesional permite mejorar la
          recuperación y mantener la estabilidad económica de la institución.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo optimizamos la cobranza educativa</h2>

        <p>
          Nuestro enfoque combina estrategias de comunicación efectiva con
          negociación para lograr acuerdos de pago sin afectar la relación con
          los estudiantes y sus familias.
        </p>

        <ul>
          <li>Identificación de cartera vencida</li>
          <li>Contacto con acudientes</li>
          <li>Acuerdos de pago flexibles</li>
          <li>Seguimiento continuo</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Beneficios para instituciones educativas</h2>

        <ul>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de morosidad</li>
          <li>Mayor control financiero</li>
          <li>Relación equilibrada con familias</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Pensiones escolares</li>
          <li>Matrículas</li>
          <li>Servicios educativos adicionales</li>
          <li>Deudas universitarias</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Es recomendable actuar desde el primer retraso en el pago para evitar
          acumulación de deuda y facilitar la recuperación.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Se pueden recuperar pensiones atrasadas?</h3>
          <p>Sí, mediante procesos de cobranza adecuados.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cómo cobrar sin afectar la relación con familias?</h3>
          <p>A través de estrategias de negociación respetuosas.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si no pagan?</h3>
          <p>Se pueden iniciar acciones legales según el caso.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera educativa</h2>
        <p>Mejore la estabilidad financiera de su institución.</p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
