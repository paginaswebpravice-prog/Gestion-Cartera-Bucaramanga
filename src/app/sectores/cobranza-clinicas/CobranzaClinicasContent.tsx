"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaClinicasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para clínicas y sector salud en Colombia: recupere cartera de
          EPS y pacientes
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a clínicas, hospitales, IPS y empresas del sector salud a
          recuperar cartera vencida con EPS, aseguradoras y pacientes mediante
          estrategias especializadas de cobranza, auditoría y procesos legales.
        </p>

        <p>
          Optimice su flujo de caja, reduzca glosas y mejore la recuperación de
          cuentas médicas con un enfoque profesional adaptado al sistema de
          salud colombiano.
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
            Gestión especializada de cuentas médicas pendientes con entidades
            promotoras de salud.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Recuperación de cartera hospitalaria</h3>
          <p>
            Estrategias para recuperar pagos de servicios médicos prestados y
            facturados.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión y levantamiento de glosas</h3>
          <p>
            Recuperación de valores rechazados mediante auditoría y sustentación
            técnica.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobranza a pacientes</h3>
          <p>
            Recuperación de pagos pendientes de usuarios particulares y copagos.
          </p>
        </div>
      </section>

      {/* PROBLEMA REAL */}
      <section className={styles.section}>
        <h2>El problema de cartera en el sector salud en Colombia</h2>

        <p>
          El sector salud es uno de los más afectados por la acumulación de
          cartera vencida debido a retrasos en pagos, procesos administrativos
          complejos y altos niveles de glosas por parte de las EPS.
        </p>

        <p>
          Las clínicas y hospitales enfrentan dificultades constantes para
          recuperar pagos de servicios ya prestados, lo que impacta directamente
          su liquidez y capacidad operativa.
        </p>

        <ul>
          <li>Retrasos en pagos por parte de EPS</li>
          <li>Alto volumen de glosas</li>
          <li>Procesos de auditoría complejos</li>
          <li>Facturación rechazada o pendiente</li>
          <li>Cartera acumulada difícil de gestionar internamente</li>
        </ul>

        <p>
          Sin una estrategia especializada, esta cartera puede volverse
          incobrable con el tiempo.
        </p>
      </section>

      {/* GLOSAS */}
      <section className={styles.section}>
        <h2>Gestión de glosas: clave para recuperar ingresos</h2>

        <p>
          Las glosas representan uno de los mayores obstáculos en la
          recuperación de cartera en salud. Muchas veces, valores importantes
          quedan retenidos por inconsistencias administrativas o auditorías.
        </p>

        <p>
          Nuestro servicio incluye la revisión, sustentación y gestión de glosas
          para lograr su levantamiento y recuperar los valores correspondientes.
        </p>

        <ul>
          <li>Revisión técnica de glosas</li>
          <li>Respuesta a auditorías</li>
          <li>Soporte documental</li>
          <li>Seguimiento hasta recuperación</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de cobranza en salud</h2>

        <p>
          Implementamos un proceso estructurado enfocado en maximizar la
          recuperación:
        </p>

        <ul>
          <li>Análisis de cartera y clasificación por riesgo</li>
          <li>Revisión de facturación y soportes</li>
          <li>Gestión directa con EPS y aseguradoras</li>
          <li>Negociación de pagos</li>
          <li>Seguimiento constante</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>

        <p>
          Este enfoque permite mejorar significativamente los tiempos y
          resultados.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios de una cobranza especializada en salud</h2>

        <ul>
          <li>Mejora del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Recuperación de glosas</li>
          <li>Optimización de procesos administrativos</li>
          <li>Mayor control financiero</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Cartera con EPS</li>
          <li>Cartera con aseguradoras</li>
          <li>Cartera de pacientes particulares</li>
          <li>Cartera hospitalaria</li>
          <li>Cartera de servicios médicos especializados</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo tercerizar la cobranza en clínicas?</h2>

        <p>
          Es recomendable cuando la cartera vencida comienza a afectar la
          operación o cuando los procesos internos no logran recuperar los
          pagos.
        </p>

        <p>
          Externalizar permite acceder a experiencia especializada y mejorar los
          resultados.
        </p>
      </section>

      {/* DIFERENCIAL */}
      <section className={styles.section}>
        <h2>¿Por qué elegir un servicio especializado en salud?</h2>

        <p>
          La cobranza en el sector salud requiere conocimiento técnico del
          sistema, normativas y procesos administrativos específicos.
        </p>

        <ul>
          <li>Conocimiento del sistema de salud colombiano</li>
          <li>Experiencia con EPS y auditorías</li>
          <li>Manejo de glosas y facturación</li>
          <li>Estrategias legales especializadas</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes sobre cobranza en clínicas</h2>

        <div className={styles.faqItem}>
          <h3>¿Se pueden recuperar glosas?</h3>
          <p>
            Sí, mediante procesos técnicos y administrativos adecuados se pueden
            recuperar valores rechazados.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda el proceso?</h3>
          <p>
            Depende del caso, pero puede variar según la entidad y el tipo de
            deuda.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede cobrar a EPS?</h3>
          <p>
            Sí, existen mecanismos administrativos y legales para exigir el
            pago.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si no pagan?</h3>
          <p>Se puede escalar a procesos jurídicos para recuperar la deuda.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Optimice la recuperación de cartera en su clínica</h2>
        <p>
          Mejore su liquidez y reduzca su cartera vencida con un servicio
          especializado en el sector salud.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
