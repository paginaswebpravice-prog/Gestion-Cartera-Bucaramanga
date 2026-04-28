"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaEmpresasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Cobranza para empresas en Colombia: mejore su flujo de caja</h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a empresas a optimizar la gestión de cartera y recuperar
          deudas mediante estrategias de cobranza eficientes, seguimiento
          continuo y procesos legales cuando es necesario.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría empresarial
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Gestión integral de cartera</h3>
          <p>
            Administramos todo el proceso de cobranza para mejorar la
            recuperación.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobranza prejurídica</h3>
          <p>
            Recuperamos deudas mediante negociación sin necesidad de demanda.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobranza jurídica</h3>
          <p>Iniciamos procesos legales para asegurar el pago de la deuda.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Reportes y seguimiento</h3>
          <p>Información clara y constante sobre el estado de cada caso.</p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>¿Por qué es importante la cobranza para empresas?</h2>

        <p>
          La cobranza es un proceso clave para mantener la liquidez de cualquier
          empresa. Una mala gestión de cartera puede generar problemas de flujo
          de caja y limitar el crecimiento del negocio.
        </p>

        <p>
          En Colombia, muchas empresas enfrentan dificultades debido a clientes
          morosos. Contar con un sistema de cobranza eficiente permite reducir
          estos riesgos y mejorar la estabilidad financiera.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cómo optimizamos la cobranza empresarial</h2>

        <p>
          Nuestro enfoque combina tecnología, estrategia y experiencia legal
          para maximizar la recuperación de cartera.
        </p>

        <ul>
          <li>Segmentación de cartera por riesgo</li>
          <li>Estrategias de contacto efectivas</li>
          <li>Negociación personalizada</li>
          <li>Escalamiento a procesos legales</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Beneficios para su empresa</h2>

        <ul>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Mayor control financiero</li>
          <li>Ahorro de tiempo y recursos internos</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <p>
          Trabajamos con diferentes tipos de cartera según el sector y la
          naturaleza de la deuda:
        </p>

        <ul>
          <li>Cartera comercial</li>
          <li>Cartera financiera</li>
          <li>Cartera de servicios</li>
          <li>Cartera empresarial B2B</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo tercerizar la cobranza?</h2>

        <p>
          Muchas empresas deciden externalizar la cobranza cuando su equipo
          interno no logra recuperar deudas o cuando el volumen de cartera
          vencida crece.
        </p>

        <p>
          Externalizar permite acceder a experiencia especializada y mejorar
          resultados en menor tiempo.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué porcentaje de recuperación se puede lograr?</h3>
          <p>
            Depende del caso, pero una estrategia profesional aumenta
            significativamente la tasa de éxito.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar sin demandar?</h3>
          <p>Sí, muchos casos se resuelven en etapa prejurídica.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no paga?</h3>
          <p>Se puede escalar a un proceso jurídico para exigir el pago.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Optimice la cobranza de su empresa</h2>
        <p>
          Mejore su flujo de caja y reduzca su cartera vencida con un equipo
          experto en cobranza empresarial.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un asesor
        </Link>
      </section>
    </main>
  );
}
