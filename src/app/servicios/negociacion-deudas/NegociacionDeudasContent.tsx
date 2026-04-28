"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function NegociacionDeudasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Negociación de deudas en Colombia: reduzca intereses y evite embargos
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Le ayudamos a negociar sus deudas con bancos, entidades financieras,
          empresas y acreedores para lograr acuerdos de pago justos, reducir el
          valor total y evitar procesos judiciales.
        </p>

        <p>
          Nuestro objetivo es que usted recupere el control de sus finanzas sin
          presiones excesivas, mediante estrategias reales de negociación y
          acompañamiento legal.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría confidencial
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Acuerdos de pago personalizados</h3>
          <p>
            Diseñamos planes de pago ajustados a su capacidad financiera real.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Reducción de intereses y mora</h3>
          <p>Negociamos con acreedores para disminuir intereses acumulados.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Evitar embargos y demandas</h3>
          <p>
            Buscamos soluciones antes de que el caso escale a instancias
            legales.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Acompañamiento legal y financiero</h3>
          <p>
            Lo guiamos durante todo el proceso para lograr un acuerdo viable.
          </p>
        </div>
      </section>

      {/* DEFINICIÓN */}
      <section className={styles.section}>
        <h2>¿Qué es la negociación de deudas?</h2>

        <p>
          La negociación de deudas es un proceso mediante el cual un deudor y un
          acreedor llegan a un acuerdo para modificar las condiciones de pago de
          una obligación financiera.
        </p>

        <p>
          Este proceso puede incluir reducción de intereses, ampliación de
          plazos, acuerdos de pago o incluso descuentos sobre el capital
          adeudado.
        </p>

        <p>
          En Colombia, esta alternativa se ha convertido en una de las mejores
          opciones para personas y empresas que buscan evitar procesos
          judiciales y recuperar estabilidad financiera.
        </p>
      </section>

      {/* PROBLEMA REAL */}
      <section className={styles.section}>
        <h2>Problemas comunes al tener deudas sin control</h2>

        <ul>
          <li>Incremento constante de intereses y mora</li>
          <li>Llamadas de cobranza constantes</li>
          <li>Riesgo de embargo de bienes o cuentas</li>
          <li>Reportes negativos en centrales de riesgo</li>
          <li>Estrés financiero y falta de liquidez</li>
        </ul>

        <p>
          Si no se actúa a tiempo, la deuda puede crecer rápidamente y volverse
          mucho más difícil de manejar.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios de negociar sus deudas a tiempo</h2>

        <ul>
          <li>Reducción del monto total a pagar</li>
          <li>Evitar procesos judiciales y embargos</li>
          <li>Mejorar su historial financiero a mediano plazo</li>
          <li>Mayor tranquilidad y control económico</li>
          <li>Posibilidad de acuerdos flexibles</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro proceso de negociación</h2>

        <p>
          Nuestro servicio sigue una metodología clara orientada a resultados:
        </p>

        <ul>
          <li>Análisis detallado de su situación financiera</li>
          <li>Revisión de condiciones de la deuda</li>
          <li>Definición de estrategia de negociación</li>
          <li>Contacto directo con el acreedor</li>
          <li>Propuesta de acuerdos de pago</li>
          <li>Formalización del acuerdo</li>
          <li>Seguimiento del cumplimiento</li>
        </ul>

        <p>
          Este enfoque permite aumentar significativamente la probabilidad de
          éxito en la negociación.
        </p>
      </section>

      {/* TIPOS DE DEUDA */}
      <section className={styles.section}>
        <h2>Tipos de deudas que se pueden negociar</h2>

        <ul>
          <li>Deudas con bancos (tarjetas de crédito, préstamos)</li>
          <li>Deudas con entidades financieras</li>
          <li>Deudas comerciales</li>
          <li>Deudas con proveedores</li>
          <li>Obligaciones personales</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo es el momento ideal para negociar una deuda?</h2>

        <p>
          Lo ideal es iniciar la negociación desde el primer momento en que se
          presentan dificultades para cumplir con los pagos.
        </p>

        <p>
          Esperar demasiado puede aumentar los intereses y el riesgo de acciones
          legales por parte del acreedor.
        </p>
      </section>

      {/* ERRORES */}
      <section className={styles.section}>
        <h2>Errores comunes al intentar negociar deudas</h2>

        <ul>
          <li>Ignorar llamadas o comunicaciones del acreedor</li>
          <li>No tener claridad sobre la deuda total</li>
          <li>Aceptar acuerdos imposibles de cumplir</li>
          <li>No dejar evidencia de los acuerdos</li>
        </ul>
      </section>

      {/* DIFERENCIAL */}
      <section className={styles.section}>
        <h2>¿Por qué buscar ayuda profesional?</h2>

        <p>
          Negociar una deuda requiere estrategia, conocimiento legal y
          experiencia en manejo de acreedores.
        </p>

        <ul>
          <li>Mayor capacidad de negociación</li>
          <li>Mejores condiciones de pago</li>
          <li>Reducción de presión por parte de acreedores</li>
          <li>Prevención de errores costosos</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes sobre negociación de deudas</h2>

        <div className={styles.faqItem}>
          <h3>¿Se puede reducir una deuda?</h3>
          <p>
            Sí, en muchos casos es posible negociar descuentos o condiciones más
            favorables.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Negociar afecta mi historial crediticio?</h3>
          <p>
            Puede tener impacto, pero es mejor que llegar a procesos judiciales
            o incumplimientos mayores.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Puedo negociar varias deudas al mismo tiempo?</h3>
          <p>
            Sí, es posible estructurar acuerdos para múltiples obligaciones.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si no pago?</h3>
          <p>
            El acreedor puede iniciar acciones legales como embargo o demanda.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Recupere el control de sus finanzas</h2>
        <p>
          Negocie sus deudas de forma inteligente y evite problemas legales.
          Estamos listos para ayudarle.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un asesor ahora
        </Link>
      </section>
    </main>
  );
}
