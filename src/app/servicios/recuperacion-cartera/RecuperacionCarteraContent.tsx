"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function RecuperacionCarteraContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Recuperación de cartera en Colombia: soluciones efectivas para
          empresas
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a empresas y personas a recuperar cartera vencida mediante
          estrategias de cobranza prejurídica, negociación de deudas y procesos
          jurídicos efectivos en toda Colombia.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría ahora
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro prejurídico</h3>
          <p>
            Recuperamos deudas sin necesidad de demanda mediante negociación
            estratégica.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobro jurídico</h3>
          <p>
            Iniciamos procesos legales para recuperar cartera cuando el deudor
            no responde.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión de cartera</h3>
          <p>
            Administramos el proceso completo de cobranza con seguimiento
            constante.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación de deudas</h3>
          <p>
            Diseñamos acuerdos de pago efectivos para recuperar dinero
            rápidamente.
          </p>
        </div>
      </section>

      {/* CONTENIDO SEO FUERTE */}
      <section className={styles.section}>
        <h2>¿Qué es la recuperación de cartera?</h2>

        <p>
          La recuperación de cartera es el proceso mediante el cual una empresa
          o persona busca recuperar dinero adeudado por clientes morosos. Este
          proceso puede incluir diferentes etapas, desde la negociación directa
          hasta acciones legales.
        </p>

        <p>
          En Colombia, la gestión adecuada de cartera es clave para mantener la
          liquidez de las empresas y evitar problemas financieros derivados de
          pagos atrasados.
        </p>

        <p>
          Un proceso profesional permite no solo recuperar dinero, sino también
          optimizar la relación con los clientes y reducir riesgos futuros.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Etapas de la recuperación de cartera</h2>

        <p>
          La recuperación de cartera se divide en varias etapas que aumentan
          progresivamente el nivel de presión sobre el deudor.
        </p>

        <ul>
          <li>
            <strong>Cobro preventivo:</strong> recordatorios antes del
            vencimiento.
          </li>
          <li>
            <strong>Cobro prejurídico:</strong> negociación sin demanda.
          </li>
          <li>
            <strong>Cobro jurídico:</strong> procesos legales y embargos.
          </li>
        </ul>

        <p>
          Cada etapa se aplica dependiendo del comportamiento del deudor y del
          tiempo de mora.
        </p>
      </section>

      <section className={styles.section}>
        <h2>¿Por qué es importante recuperar cartera a tiempo?</h2>

        <p>
          La falta de recuperación de cartera puede afectar directamente el
          flujo de caja, limitar el crecimiento empresarial y generar pérdidas
          económicas importantes.
        </p>

        <p>
          Actuar a tiempo permite aumentar las probabilidades de éxito y reducir
          el riesgo de incobrabilidad.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Beneficios de trabajar con expertos</h2>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Estrategias legales efectivas</li>
          <li>Reducción de tiempos</li>
          <li>Seguimiento profesional</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Se recomienda iniciar acciones de cobranza inmediatamente después del
          incumplimiento del pago, evitando que la deuda se vuelva más difícil
          de recuperar.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar una deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar sin demandar?</h3>
          <p>Sí, muchos casos se resuelven en etapa prejurídica.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no paga?</h3>
          <p>Se puede iniciar un proceso jurídico para exigir el pago.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.ctaBox}>
        <h2>Recupere su dinero hoy</h2>
        <p>
          Nuestro equipo está listo para ayudarle a recuperar su cartera de
          forma rápida, efectiva y legal.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un experto
        </Link>
      </section>
    </main>
  );
}
