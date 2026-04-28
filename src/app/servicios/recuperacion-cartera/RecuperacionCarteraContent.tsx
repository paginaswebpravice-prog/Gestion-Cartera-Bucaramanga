"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function RecuperacionCarteraContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Recuperación de cartera en Colombia: aumente su flujo de caja y
          reduzca la morosidad
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ofrecemos servicios especializados de recuperación de cartera en
          Colombia para empresas y personas que necesitan recuperar deudas de
          manera efectiva, rápida y legal.
        </p>

        <p>
          Implementamos estrategias de cobranza prejurídica, negociación y cobro
          jurídico para maximizar la recuperación y reducir el impacto de la
          cartera vencida en su negocio.
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
            Recuperamos deudas mediante negociación estratégica sin necesidad de
            demanda.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobro jurídico</h3>
          <p>
            Iniciamos procesos legales para exigir el pago cuando el deudor no
            responde.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión integral de cartera</h3>
          <p>
            Administramos todo el proceso de cobranza con seguimiento continuo.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación de deudas</h3>
          <p>
            Diseñamos acuerdos efectivos que facilitan la recuperación del
            dinero.
          </p>
        </div>
      </section>

      {/* DEFINICIÓN */}
      <section className={styles.section}>
        <h2>¿Qué es la recuperación de cartera?</h2>

        <p>
          La recuperación de cartera es el conjunto de estrategias utilizadas
          para recuperar dinero adeudado por clientes, ya sean empresas o
          personas, que han incumplido sus obligaciones de pago.
        </p>

        <p>
          Este proceso incluye diferentes etapas que van desde la gestión
          preventiva hasta acciones legales, dependiendo del comportamiento del
          deudor y del tiempo de mora.
        </p>

        <p>
          En Colombia, una adecuada gestión de cartera es fundamental para
          garantizar la estabilidad financiera de las empresas y evitar pérdidas
          económicas.
        </p>
      </section>

      {/* PROBLEMA */}
      <section className={styles.section}>
        <h2>El impacto de la cartera vencida en las empresas</h2>

        <p>
          La acumulación de cartera vencida es uno de los principales problemas
          financieros que enfrentan las empresas en Colombia.
        </p>

        <ul>
          <li>Disminución del flujo de caja</li>
          <li>Falta de liquidez para operar</li>
          <li>Incremento del riesgo financiero</li>
          <li>Pérdida de rentabilidad</li>
        </ul>

        <p>
          Sin una estrategia efectiva de cobranza, estos problemas pueden
          escalar rápidamente y afectar la sostenibilidad del negocio.
        </p>
      </section>

      {/* ETAPAS */}
      <section className={styles.section}>
        <h2>Etapas de la recuperación de cartera</h2>

        <p>
          El proceso de recuperación se divide en varias fases que aumentan el
          nivel de intervención:
        </p>

        <ul>
          <li>
            <strong>Cobro preventivo:</strong> recordatorios antes del
            vencimiento.
          </li>
          <li>
            <strong>Cobro prejurídico:</strong> negociación directa sin demanda.
          </li>
          <li>
            <strong>Cobro jurídico:</strong> acciones legales y embargos.
          </li>
        </ul>

        <p>
          Aplicar correctamente cada etapa permite aumentar la probabilidad de
          recuperación.
        </p>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de recuperación</h2>

        <p>
          Nuestro enfoque está diseñado para maximizar resultados mediante una
          metodología estructurada:
        </p>

        <ul>
          <li>Análisis detallado de la cartera</li>
          <li>Clasificación de deudas por riesgo</li>
          <li>Contactos estratégicos con deudores</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento constante</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>

        <p>
          Este proceso permite mejorar significativamente la tasa de
          recuperación.
        </p>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Cartera empresarial (B2B)</li>
          <li>Cartera comercial</li>
          <li>Cartera de servicios</li>
          <li>Cartera financiera</li>
          <li>Cartera personal</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios de una gestión profesional de cartera</h2>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Reducción de cartera vencida</li>
          <li>Mejor flujo de caja</li>
          <li>Optimización de recursos internos</li>
          <li>Mayor control financiero</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo iniciar la recuperación de cartera?</h2>

        <p>
          Lo recomendable es iniciar el proceso desde el primer incumplimiento
          de pago. Entre más tiempo pase, menor será la probabilidad de
          recuperar la deuda.
        </p>
      </section>

      {/* ERRORES */}
      <section className={styles.section}>
        <h2>Errores comunes en la gestión de cartera</h2>

        <ul>
          <li>No hacer seguimiento a clientes morosos</li>
          <li>Esperar demasiado tiempo para cobrar</li>
          <li>No contar con estrategias claras</li>
          <li>No utilizar respaldo legal cuando es necesario</li>
        </ul>
      </section>

      {/* DIFERENCIAL */}
      <section className={styles.section}>
        <h2>¿Por qué contratar un servicio especializado?</h2>

        <p>
          Contar con expertos en recuperación de cartera permite aumentar las
          probabilidades de éxito y reducir riesgos financieros.
        </p>

        <ul>
          <li>Estrategias profesionales de cobranza</li>
          <li>Mayor efectividad en negociación</li>
          <li>Respaldo legal en cada etapa</li>
          <li>Procesos estructurados y medibles</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes sobre recuperación de cartera</h2>

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

        <div className={styles.faqItem}>
          <h3>¿Qué tan efectiva es la recuperación?</h3>
          <p>
            Depende del caso, pero una estrategia profesional aumenta
            significativamente las probabilidades de éxito.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera y fortalezca su negocio</h2>
        <p>
          No permita que la morosidad afecte su empresa. Nuestro equipo está
          listo para ayudarle a recuperar su dinero de forma efectiva.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un experto
        </Link>
      </section>
    </main>
  );
}
