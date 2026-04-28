"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaClinicasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Cobranza para clínicas y sector salud en Colombia</h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a clínicas, hospitales y empresas del sector salud a
          recuperar cartera vencida de EPS, aseguradoras y pacientes mediante
          estrategias especializadas y procesos legales efectivos.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría especializada
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobranza a EPS</h3>
          <p>
            Gestión de cobro de cuentas médicas pendientes con entidades de
            salud.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Recuperación de cartera hospitalaria</h3>
          <p>
            Estrategias para recuperar pagos de servicios médicos prestados.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión de glosas</h3>
          <p>Apoyo en la recuperación de valores rechazados o pendientes.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobranza a pacientes</h3>
          <p>
            Recuperación de pagos pendientes de usuarios de servicios de salud.
          </p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>Problemas de cartera en el sector salud</h2>

        <p>
          El sector salud en Colombia enfrenta uno de los mayores niveles de
          cartera vencida, especialmente en relaciones con EPS, aseguradoras y
          pacientes.
        </p>

        <p>
          Los retrasos en pagos, glosas y procesos administrativos generan un
          impacto directo en la liquidez de clínicas y hospitales.
        </p>

        <p>
          Una gestión adecuada de cobranza permite recuperar recursos esenciales
          para la operación y crecimiento de las instituciones de salud.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo optimizamos la cobranza en clínicas</h2>

        <p>
          Nuestro enfoque combina conocimiento del sector salud con estrategias
          legales y financieras para maximizar la recuperación de cartera.
        </p>

        <ul>
          <li>Identificación de cuentas críticas</li>
          <li>Gestión especializada con EPS</li>
          <li>Recuperación de glosas</li>
          <li>Escalamiento a cobro jurídico</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Beneficios para clínicas y hospitales</h2>

        <ul>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Optimización de procesos internos</li>
          <li>Mayor control financiero</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Cartera con EPS</li>
          <li>Cartera de pacientes particulares</li>
          <li>Cartera con aseguradoras</li>
          <li>Cartera hospitalaria</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Se pueden recuperar glosas?</h3>
          <p>
            Sí, mediante procesos adecuados se pueden recuperar valores
            rechazados.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede cobrar a EPS?</h3>
          <p>
            Sí, existen mecanismos legales y administrativos para exigir pagos.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si no pagan?</h3>
          <p>Se puede escalar a procesos jurídicos para recuperar la deuda.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera en el sector salud</h2>
        <p>
          Optimice su flujo de caja y reduzca su cartera vencida con expertos en
          cobranza médica.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
