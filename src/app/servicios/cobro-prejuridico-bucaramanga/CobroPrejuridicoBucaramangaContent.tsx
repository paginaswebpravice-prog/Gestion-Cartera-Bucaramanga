"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobroPrejuridicoBucaramangaContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobro prejurídico en Bucaramanga: recupere su dinero sin demanda
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Recuperamos su cartera vencida en Bucaramanga mediante estrategias de
          negociación efectivas, evitando procesos judiciales y reduciendo
          costos.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría inmediata
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Gestión de cobranza extrajudicial</h3>
          <p>
            Contactamos a los deudores mediante estrategias profesionales para
            lograr acuerdos de pago rápidos.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación de deudas</h3>
          <p>
            Diseñamos acuerdos flexibles que facilitan el cumplimiento sin
            afectar la relación comercial.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Seguimiento continuo</h3>
          <p>
            Monitoreamos cada caso para asegurar el cumplimiento de los acuerdos
            pactados.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Prevención de procesos judiciales</h3>
          <p>
            Reducimos la necesidad de demandas mediante soluciones efectivas en
            etapa temprana.
          </p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>¿Qué es el cobro prejurídico?</h2>
        <p>
          El cobro prejurídico es una etapa previa a la demanda judicial en la
          cual se busca recuperar una deuda mediante negociación directa con el
          deudor...
        </p>
        <p>
          En Bucaramanga, muchas empresas prefieren este método debido a su
          rapidez y menor costo frente a procesos judiciales.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Ventajas del cobro prejurídico</h2>
        <ul>
          <li>Menor costo frente a procesos judiciales</li>
          <li>Mayor rapidez en recuperación</li>
          <li>Posibilidad de negociación flexible</li>
          <li>Conservación de relaciones comerciales</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso</h2>
        <p>
          Iniciamos con el análisis del caso, seguido de contacto directo con el
          deudor...
        </p>
        <p>
          Posteriormente, se establecen acuerdos de pago que se monitorean
          constantemente.
        </p>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo pasar a cobro jurídico?</h2>
        <p>
          Si el deudor no responde o incumple acuerdos, el siguiente paso es
          iniciar un proceso jurídico.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera sin ir a juicio</h2>
        <p>
          Nuestro equipo en Bucaramanga está listo para ayudarle a recuperar su
          dinero de forma rápida y efectiva.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un asesor
        </Link>
      </section>
    </main>
  );
}
