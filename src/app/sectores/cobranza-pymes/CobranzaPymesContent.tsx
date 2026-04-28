"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaPymesContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para PYMES en Colombia: recupere cartera vencida y mejore su
          flujo de caja
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a pequeñas y medianas empresas a recuperar cartera vencida,
          reducir la morosidad de clientes y mejorar su flujo de caja mediante
          estrategias de cobranza adaptadas a su modelo de negocio.
        </p>

        <p>
          Si su empresa vende a crédito y enfrenta clientes que no pagan,
          implementamos procesos efectivos para recuperar su dinero sin afectar
          sus relaciones comerciales.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría para mi negocio
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de clientes morosos</h3>
          <p>
            Recuperamos pagos pendientes de clientes que incumplen sus
            obligaciones.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión de cartera empresarial</h3>
          <p>
            Organización y optimización del proceso de recaudo para su PYME.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación de deudas</h3>
          <p>
            Acuerdos de pago flexibles que aumentan la probabilidad de
            recuperación.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobro jurídico</h3>
          <p>
            Acciones legales cuando el cliente no responde o incumple acuerdos.
          </p>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className={styles.section}>
        <h2>Problemas comunes de cartera en PYMES</h2>

        <p>
          En Colombia, muchas PYMES venden a crédito para aumentar sus ventas,
          pero enfrentan dificultades cuando los clientes no cumplen con los
          pagos.
        </p>

        <p>Esto genera problemas como:</p>

        <ul>
          <li>Falta de liquidez para operar</li>
          <li>Dificultades para pagar proveedores</li>
          <li>Acumulación de cartera vencida</li>
          <li>Dependencia de clientes morosos</li>
          <li>Desorden en procesos de cobranza</li>
        </ul>

        <p>
          Sin una estrategia clara, estas deudas pueden convertirse en pérdidas
          que afectan el crecimiento del negocio.
        </p>
      </section>

      {/* CONTEXTO REAL */}
      <section className={styles.section}>
        <h2>La importancia del flujo de caja en una PYME</h2>

        <p>
          Para una pequeña o mediana empresa, el flujo de caja es uno de los
          factores más importantes para su sostenibilidad.
        </p>

        <p>
          No importa cuánto venda su empresa, si no logra recaudar el dinero,
          tendrá problemas para operar.
        </p>

        <p>Una buena gestión de cobranza permite:</p>

        <ul>
          <li>Convertir ventas en dinero real</li>
          <li>Reducir dependencia de financiamiento</li>
          <li>Mejorar la estabilidad financiera</li>
          <li>Planificar el crecimiento del negocio</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de cobranza para PYMES</h2>

        <p>Diseñamos un proceso adaptado a la realidad de su empresa:</p>

        <ul>
          <li>Análisis de cartera y segmentación de clientes</li>
          <li>Identificación de deudores críticos</li>
          <li>Contacto estratégico multicanal</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento continuo</li>
          <li>Escalamiento a cobro jurídico cuando aplica</li>
        </ul>

        <p>
          Este modelo permite aumentar la tasa de recuperación y reducir los
          tiempos de cobro.
        </p>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Facturas vencidas</li>
          <li>Cartera comercial B2B</li>
          <li>Clientes con crédito directo</li>
          <li>Servicios prestados no pagados</li>
          <li>Ventas a crédito sin recaudo</li>
        </ul>
      </section>

      {/* ERRORES */}
      <section className={styles.section}>
        <h2>Errores comunes en la cobranza de PYMES</h2>

        <ul>
          <li>No hacer seguimiento a clientes morosos</li>
          <li>No tener políticas de crédito claras</li>
          <li>Retrasar el inicio del cobro</li>
          <li>No formalizar acuerdos de pago</li>
          <li>No escalar a acciones legales a tiempo</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios de implementar una cobranza profesional</h2>

        <ul>
          <li>Recuperación efectiva de dinero</li>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Ahorro de tiempo y recursos</li>
          <li>Mayor control financiero</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo contratar un servicio de cobranza?</h2>

        <p>Es recomendable cuando su empresa presenta alguno de estos casos:</p>

        <ul>
          <li>Clientes que no responden a los cobros</li>
          <li>Cartera vencida en crecimiento</li>
          <li>Falta de tiempo para gestionar pagos</li>
          <li>Problemas de liquidez</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Vale la pena para una empresa pequeña?</h3>
          <p>
            Sí, recuperar cartera puede marcar la diferencia entre crecer o
            tener problemas financieros.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar sin demandar?</h3>
          <p>Sí, muchos casos se resuelven mediante negociación efectiva.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el cliente no paga?</h3>
          <p>Se puede escalar a un proceso jurídico para exigir el pago.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cómo se cobra el servicio?</h3>
          <p>
            Generalmente bajo modelos basados en resultados (éxito en
            recuperación).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su dinero y fortalezca su empresa</h2>
        <p>
          No deje que los clientes morosos frenen su crecimiento. Le ayudamos a
          recuperar su cartera de forma efectiva.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un asesor
        </Link>
      </section>
    </main>
  );
}
