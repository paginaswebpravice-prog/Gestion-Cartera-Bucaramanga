"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaPymesContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para PYMES en Colombia: recupere su dinero sin complicaciones
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a pequeñas y medianas empresas a recuperar cartera vencida,
          mejorar su flujo de caja y reducir clientes morosos mediante procesos
          de cobranza efectivos y adaptados a su negocio.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría para mi negocio
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de clientes morosos</h3>
          <p>Recuperamos pagos pendientes de clientes que no han cumplido.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión de cartera</h3>
          <p>Organizamos y optimizamos el proceso de cobranza en su empresa.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación de deudas</h3>
          <p>
            Logramos acuerdos de pago efectivos sin necesidad de procesos
            judiciales.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobro jurídico</h3>
          <p>Iniciamos acciones legales cuando el cliente no responde.</p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>Problemas comunes de cartera en PYMES</h2>

        <p>
          Muchas pequeñas y medianas empresas enfrentan dificultades para
          recuperar pagos de clientes, lo que afecta directamente su liquidez y
          operación diaria.
        </p>

        <p>
          La falta de tiempo, recursos o experiencia en cobranza hace que las
          deudas se acumulen y se vuelvan difíciles de recuperar.
        </p>

        <p>
          Implementar una estrategia de cobranza profesional permite reducir
          estos problemas y mejorar la estabilidad del negocio.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo ayudamos a su empresa</h2>

        <p>
          Analizamos su cartera y diseñamos una estrategia de cobranza adaptada
          a su tipo de negocio.
        </p>

        <ul>
          <li>Identificación de clientes morosos</li>
          <li>Contactos estratégicos</li>
          <li>Negociación de pagos</li>
          <li>Seguimiento constante</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Beneficios para su PYME</h2>

        <ul>
          <li>Recuperación de dinero pendiente</li>
          <li>Mejora del flujo de caja</li>
          <li>Ahorro de tiempo</li>
          <li>Mayor control financiero</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo contratar un servicio de cobranza?</h2>

        <p>
          Cuando los clientes dejan de pagar, cuando la cartera vencida crece o
          cuando su empresa no tiene tiempo para gestionar cobros.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Vale la pena para una empresa pequeña?</h3>
          <p>
            Sí, recuperar cartera puede marcar la diferencia en la estabilidad
            del negocio.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto cuesta el servicio?</h3>
          <p>Depende del caso, pero generalmente se basa en resultados.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar sin demandar?</h3>
          <p>Sí, muchos casos se resuelven mediante negociación.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su dinero y haga crecer su negocio</h2>
        <p>No deje que los clientes morosos afecten su empresa.</p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un asesor
        </Link>
      </section>
    </main>
  );
}
