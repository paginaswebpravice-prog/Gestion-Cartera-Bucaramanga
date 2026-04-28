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
          obras, contratos y facturación
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Apoyamos a constructoras, contratistas y subcontratistas en la
          recuperación de cartera vencida derivada de proyectos de obra,
          contratos incumplidos y facturación pendiente, mediante estrategias de
          cobranza especializadas y respaldo legal.
        </p>

        <p>
          Optimizamos su flujo de caja y reducimos el impacto financiero de los
          retrasos en pagos, con un enfoque adaptado a la dinámica del sector
          construcción en Colombia.
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
            Recuperación de pagos pendientes por avances, cortes de obra y actas
            firmadas.
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
            Acuerdos de pago estructurados para evitar litigios prolongados.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Procesos jurídicos en construcción</h3>
          <p>
            Acciones legales para exigir el pago de obligaciones contractuales.
          </p>
        </div>
      </section>

      {/* PROBLEMA REAL */}
      <section className={styles.section}>
        <h2>Problemas de cartera en el sector construcción</h2>

        <p>
          El sector construcción en Colombia se caracteriza por una alta
          complejidad contractual y financiera, donde los retrasos en pagos son
          frecuentes y pueden afectar toda la cadena de valor.
        </p>

        <p>
          Es común que contratistas y subcontratistas enfrenten demoras en pagos
          por parte de empresas principales, consorcios o entidades
          contratantes, incluso cuando los trabajos ya han sido ejecutados y
          certificados.
        </p>

        <ul>
          <li>Pagos retenidos por interventoría</li>
          <li>Retrasos en cortes de obra</li>
          <li>Facturación pendiente o rechazada</li>
          <li>Incumplimientos contractuales</li>
          <li>Falta de liquidez en proyectos</li>
        </ul>

        <p>
          Sin una gestión profesional, estas deudas pueden escalar y volverse
          difíciles de recuperar.
        </p>
      </section>

      {/* DOCUMENTACIÓN */}
      <section className={styles.section}>
        <h2>Importancia de los soportes en la recuperación de cartera</h2>

        <p>
          En construcción, la recuperación de cartera depende en gran medida de
          la documentación que respalde la ejecución del proyecto.
        </p>

        <ul>
          <li>Contratos firmados</li>
          <li>Actas de obra</li>
          <li>Órdenes de servicio</li>
          <li>Facturas radicadas</li>
          <li>Informes de avance</li>
        </ul>

        <p>
          Un adecuado manejo documental aumenta significativamente la
          probabilidad de éxito en la cobranza.
        </p>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de cobranza en construcción</h2>

        <p>
          Implementamos una metodología enfocada en resultados y adaptada al
          sector:
        </p>

        <ul>
          <li>Análisis del contrato y condiciones de pago</li>
          <li>Revisión de soportes y facturación</li>
          <li>Clasificación de cartera por riesgo</li>
          <li>Contacto estratégico con el deudor</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento constante</li>
          <li>Escalamiento a acciones legales si es necesario</li>
        </ul>

        <p>
          Este proceso permite maximizar la recuperación y reducir los tiempos
          de cobro.
        </p>
      </section>

      {/* CASOS COMUNES */}
      <section className={styles.section}>
        <h2>Casos frecuentes en cobranza de construcción</h2>

        <ul>
          <li>Obras ejecutadas sin pago completo</li>
          <li>Contratos finalizados con saldos pendientes</li>
          <li>Pagos retenidos por disputas contractuales</li>
          <li>Subcontratistas sin recibir pago</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios para constructoras y contratistas</h2>

        <ul>
          <li>Recuperación de ingresos pendientes</li>
          <li>Mejora del flujo de caja</li>
          <li>Reducción del riesgo financiero</li>
          <li>Mayor control sobre la cartera</li>
          <li>Optimización de procesos administrativos</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Facturas de obra y avances</li>
          <li>Contratos de construcción</li>
          <li>Cartera entre empresas (B2B)</li>
          <li>Servicios subcontratados</li>
          <li>Pagos por interventoría y supervisión</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobranza?</h2>

        <p>
          Lo ideal es iniciar el proceso desde el primer incumplimiento de pago,
          evitando que la deuda aumente o se diluya en disputas contractuales.
        </p>
      </section>

      {/* ERRORES */}
      <section className={styles.section}>
        <h2>Errores comunes en la recuperación de cartera en construcción</h2>

        <ul>
          <li>No formalizar contratos adecuadamente</li>
          <li>No documentar avances de obra</li>
          <li>Retrasar la gestión de cobro</li>
          <li>No escalar a acciones legales a tiempo</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué hacer si no me pagan una obra?</h3>
          <p>
            Se debe iniciar un proceso de cobranza estructurado y, si es
            necesario, acudir a acciones legales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se pueden cobrar contratos incumplidos?</h3>
          <p>
            Sí, siempre que exista soporte contractual se puede exigir el pago.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué tan importante es el contrato?</h3>
          <p>
            Es fundamental, ya que define las condiciones legales para exigir el
            pago.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar una deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere los pagos de sus proyectos de construcción</h2>
        <p>
          No permita que los incumplimientos afecten su operación. Le ayudamos a
          recuperar su dinero de forma efectiva y legal.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
