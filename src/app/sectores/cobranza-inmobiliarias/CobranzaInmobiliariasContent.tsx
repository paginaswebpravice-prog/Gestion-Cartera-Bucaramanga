"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaInmobiliariasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para inmobiliarias en Colombia: recupere arriendos vencidos y
          cartera inmobiliaria
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Apoyamos a inmobiliarias, administradoras de propiedad raíz y
          propietarios en la recuperación de cartera por arriendos vencidos,
          cánones atrasados y contratos incumplidos, mediante estrategias de
          cobranza efectivas y respaldo legal.
        </p>

        <p>
          Optimizamos su flujo de caja, reducimos la morosidad y protegemos su
          inversión inmobiliaria con procesos estructurados y seguros.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría ahora
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Cobro de arriendos vencidos</h3>
          <p>
            Recuperación de cánones atrasados mediante gestión profesional con
            arrendatarios.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Negociación con arrendatarios</h3>
          <p>
            Acuerdos de pago estructurados para evitar conflictos y acelerar el
            recaudo.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Procesos de restitución de inmueble</h3>
          <p>
            Acciones legales para recuperar el inmueble en caso de
            incumplimiento.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Gestión integral de cartera inmobiliaria</h3>
          <p>
            Control, seguimiento y recuperación de deudas en propiedades
            arrendadas.
          </p>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className={styles.section}>
        <h2>Problemas comunes en la cartera inmobiliaria</h2>

        <p>
          En el sector inmobiliario, uno de los principales desafíos es la
          morosidad en el pago de arriendos, lo cual impacta directamente la
          rentabilidad de los inmuebles y la liquidez de propietarios e
          inmobiliarias.
        </p>

        <p>Es frecuente encontrar situaciones como:</p>

        <ul>
          <li>Arrendatarios con múltiples meses de mora</li>
          <li>Incumplimiento de contratos de arrendamiento</li>
          <li>Dificultades para desalojar inmuebles</li>
          <li>Falta de respuesta del deudor</li>
          <li>Problemas con codeudores o fiadores</li>
        </ul>

        <p>
          Sin una gestión adecuada, estas deudas pueden convertirse en pérdidas
          significativas.
        </p>
      </section>

      {/* TERMINOS CLAVE */}
      <section className={styles.section}>
        <h2>Conceptos clave en la cobranza inmobiliaria</h2>

        <p>
          Para una recuperación efectiva, es fundamental entender los elementos
          legales y financieros del contrato de arrendamiento:
        </p>

        <ul>
          <li>Canon de arrendamiento</li>
          <li>Cláusulas de incumplimiento</li>
          <li>Garantías y codeudores</li>
          <li>Intereses por mora</li>
          <li>Restitución del inmueble</li>
        </ul>

        <p>
          Una correcta interpretación de estos elementos permite ejecutar una
          estrategia de cobro más efectiva.
        </p>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo recuperamos arriendos vencidos</h2>

        <p>
          Implementamos un proceso estructurado que maximiza la recuperación:
        </p>

        <ul>
          <li>Análisis del contrato de arrendamiento</li>
          <li>Evaluación del estado de la deuda</li>
          <li>Contacto estratégico con el arrendatario</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento continuo</li>
          <li>Escalamiento a acciones legales si aplica</li>
        </ul>

        <p>
          Este enfoque permite recuperar el dinero en menor tiempo y con mayor
          efectividad.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios para inmobiliarias y propietarios</h2>

        <ul>
          <li>Recuperación efectiva de ingresos por arriendo</li>
          <li>Reducción de cartera vencida</li>
          <li>Mayor control sobre contratos</li>
          <li>Protección de la inversión inmobiliaria</li>
          <li>Optimización del flujo de caja</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera que gestionamos</h2>

        <ul>
          <li>Arriendos residenciales</li>
          <li>Locales comerciales</li>
          <li>Bodegas y oficinas</li>
          <li>Cartera con codeudores</li>
          <li>Contratos en mora prolongada</li>
        </ul>
      </section>

      {/* ERRORES */}
      <section className={styles.section}>
        <h2>Errores comunes en la cobranza inmobiliaria</h2>

        <ul>
          <li>No actuar desde el primer incumplimiento</li>
          <li>No validar correctamente los contratos</li>
          <li>Falta de seguimiento a la deuda</li>
          <li>No utilizar mecanismos legales a tiempo</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo iniciar un proceso de cobro?</h2>

        <p>
          Lo recomendable es iniciar acciones desde el primer retraso en el
          pago, evitando que la deuda crezca y se vuelva más difícil de
          recuperar.
        </p>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué hacer si no me pagan el arriendo?</h3>
          <p>
            Se debe iniciar un proceso de cobranza estructurado y, si es
            necesario, acciones legales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede desalojar a un arrendatario?</h3>
          <p>
            Sí, mediante un proceso de restitución de inmueble por
            incumplimiento.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Se puede cobrar al codeudor?</h3>
          <p>
            Sí, el codeudor responde legalmente por la obligación en caso de
            mora.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar la deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere sus arriendos y proteja su inversión</h2>
        <p>
          No permita que la morosidad afecte su rentabilidad. Le ayudamos a
          recuperar su dinero de forma efectiva y legal.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
