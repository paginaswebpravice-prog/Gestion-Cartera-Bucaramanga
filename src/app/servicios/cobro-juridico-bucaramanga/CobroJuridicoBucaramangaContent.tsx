"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Servicios de gestión y recuperación de cartera en Bucaramanga</h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a empresas y personas a recuperar deudas de manera efectiva
          mediante estrategias legales, negociación y procesos jurídicos en
          Bucaramanga.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Recuperación de cartera en Bucaramanga</h3>
          <p>
            Implementamos estrategias efectivas para recuperar cartera vencida,
            priorizando acuerdos y soluciones rápidas.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión integral de cartera</h3>
          <p>
            Administramos todo el proceso de cobro con seguimiento constante y
            reportes.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Recaudo de cartera empresarial</h3>
          <p>
            Diseñamos procesos adaptados a cada empresa para mejorar flujo de
            caja.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobro prejurídico y jurídico</h3>
          <p>
            Actuamos desde negociación hasta demanda legal con respaldo jurídico
            completo.
          </p>
        </div>
      </section>

      {/* CONTENIDO SEO FUERTE */}
      <section className={styles.section}>
        <h2>¿Por qué es importante recuperar cartera a tiempo?</h2>

        <p>
          La recuperación de cartera es un proceso fundamental para mantener la
          estabilidad financiera de cualquier empresa...
        </p>

        <p>
          En Bucaramanga, muchas empresas enfrentan problemas de liquidez debido
          a clientes morosos...
        </p>

        <p>
          Un proceso adecuado permite reducir riesgos, mejorar el flujo de caja
          y evitar pérdidas económicas significativas...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de recuperación</h2>

        <p>Nuestro proceso inicia con un análisis detallado del caso...</p>

        <p>
          Posteriormente, se definen estrategias de contacto, negociación y en
          caso necesario, acciones legales...
        </p>

        <p>Este enfoque permite maximizar la probabilidad de recuperación...</p>
      </section>

      <section className={styles.section}>
        <h2>Beneficios de trabajar con expertos</h2>

        <p>
          Contar con un equipo especializado en recuperación de cartera permite
          aumentar significativamente las probabilidades de éxito...
        </p>

        <p>
          Además, se optimizan los tiempos y se evitan errores legales que
          podrían afectar el proceso...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes sobre recuperación de cartera</h2>

        <p>
          <strong>¿Cuánto tarda recuperar una deuda?</strong>
        </p>
        <p>Depende del caso, pero puede variar entre semanas y meses.</p>

        <p>
          <strong>¿Es necesario demandar?</strong>
        </p>
        <p>No siempre, muchos casos se resuelven en etapa prejurídica.</p>

        <p>
          <strong>¿Se puede negociar la deuda?</strong>
        </p>
        <p>Sí, es una de las estrategias más efectivas.</p>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera hoy mismo</h2>
        <p>
          No deje que las deudas afecten su negocio. Nuestro equipo está listo
          para ayudarle.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría
        </Link>
      </section>
    </main>
  );
}
