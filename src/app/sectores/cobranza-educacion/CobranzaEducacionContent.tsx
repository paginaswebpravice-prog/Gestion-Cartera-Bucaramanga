"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaEducacionContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para instituciones educativas en Colombia: recupere
          pensiones, matrículas y cartera vencida
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a colegios, universidades, jardines infantiles e institutos
          educativos a recuperar cartera vencida por pensiones, matrículas y
          servicios académicos, mediante estrategias de cobranza efectivas,
          respetuosas y legalmente seguras.
        </p>

        <p>
          Nuestro enfoque está diseñado para proteger la relación con
          estudiantes y acudientes, mientras se optimiza el flujo de caja y se
          reduce la morosidad.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría especializada
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de pensiones escolares</h3>
          <p>
            Recuperación de mensualidades vencidas mediante contacto estratégico
            con acudientes.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Recuperación de matrículas</h3>
          <p>
            Gestión de cobro de inscripciones, renovaciones y costos académicos
            pendientes.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación con acudientes</h3>
          <p>
            Diseño de acuerdos de pago flexibles ajustados a la realidad
            económica familiar.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión integral de cartera educativa</h3>
          <p>
            Control, seguimiento y recuperación de cartera en todos los niveles
            educativos.
          </p>
        </div>
      </section>

      {/* PROBLEMA REAL */}
      <section className={styles.section}>
        <h2>Problemas de cartera en el sector educativo</h2>

        <p>
          Las instituciones educativas en Colombia enfrentan altos niveles de
          morosidad en el pago de pensiones y matrículas, especialmente en
          contextos económicos complejos donde las familias presentan
          dificultades financieras.
        </p>

        <p>
          Esta situación genera un impacto directo en la operación de colegios y
          universidades, afectando la capacidad de pago de nómina, inversión en
          infraestructura y calidad educativa.
        </p>

        <ul>
          <li>Retrasos constantes en pagos de pensiones</li>
          <li>Acumulación de deuda durante el año escolar</li>
          <li>Incumplimiento de acuerdos de pago</li>
          <li>Falta de seguimiento a cartera vencida</li>
          <li>Procesos internos poco estructurados</li>
        </ul>

        <p>
          Sin una estrategia clara de cobranza, estas deudas pueden convertirse
          en cartera incobrable.
        </p>
      </section>

      {/* ENFOQUE HUMANO */}
      <section className={styles.section}>
        <h2>
          Cobranza educativa: equilibrio entre recuperación y relación humana
        </h2>

        <p>
          A diferencia de otros sectores, la cobranza en educación requiere un
          enfoque sensible y estratégico, ya que involucra a estudiantes y sus
          familias.
        </p>

        <p>
          Una gestión agresiva puede generar deserción escolar o afectar la
          reputación de la institución, mientras que una gestión pasiva puede
          aumentar la morosidad.
        </p>

        <p>Por eso, implementamos estrategias que equilibran:</p>

        <ul>
          <li>Recuperación efectiva de cartera</li>
          <li>Comunicación empática con acudientes</li>
          <li>Protección de la imagen institucional</li>
          <li>Continuidad educativa del estudiante</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de cobranza educativa</h2>

        <p>
          Aplicamos un proceso estructurado que permite mejorar los resultados
          de recuperación sin afectar la relación con las familias:
        </p>

        <ul>
          <li>Identificación y segmentación de cartera vencida</li>
          <li>Clasificación por nivel de mora</li>
          <li>Contacto estratégico con acudientes</li>
          <li>Propuesta de acuerdos de pago personalizados</li>
          <li>Seguimiento continuo de compromisos</li>
          <li>Escalamiento a cobro jurídico en casos críticos</li>
        </ul>

        <p>
          Este modelo permite reducir significativamente la cartera vencida y
          mejorar el recaudo mensual.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios para instituciones educativas</h2>

        <ul>
          <li>Mejora del flujo de caja institucional</li>
          <li>Reducción de morosidad acumulada</li>
          <li>Mayor control y visibilidad de cartera</li>
          <li>Optimización de procesos administrativos</li>
          <li>Disminución de cartera castigada</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Pensiones escolares vencidas</li>
          <li>Matrículas y renovaciones</li>
          <li>Servicios educativos adicionales</li>
          <li>Deudas universitarias</li>
          <li>Cartera acumulada de años anteriores</li>
        </ul>
      </section>

      {/* ERRORES */}
      <section className={styles.section}>
        <h2>Errores comunes en la cobranza educativa</h2>

        <ul>
          <li>No actuar desde el primer retraso</li>
          <li>No formalizar acuerdos de pago</li>
          <li>Falta de seguimiento a compromisos</li>
          <li>Comunicación inadecuada con acudientes</li>
          <li>No escalar a procesos legales a tiempo</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Lo recomendable es iniciar la gestión de cobranza desde el primer
          incumplimiento de pago, evitando la acumulación de deuda y facilitando
          acuerdos tempranos.
        </p>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Se pueden recuperar pensiones atrasadas?</h3>
          <p>
            Sí, mediante estrategias adecuadas de cobranza y negociación se
            pueden recuperar.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cómo cobrar sin afectar la relación con las familias?</h3>
          <p>
            A través de comunicación empática, acuerdos flexibles y seguimiento
            profesional.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el acudiente no paga?</h3>
          <p>
            Se puede escalar el caso a cobro jurídico dependiendo de la
            situación.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se pueden hacer acuerdos de pago?</h3>
          <p>
            Sí, son una de las estrategias más efectivas para recuperar cartera.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera educativa sin afectar su institución</h2>
        <p>
          Mejore su flujo de caja y reduzca la morosidad con un equipo experto
          en cobranza para el sector educativo.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
