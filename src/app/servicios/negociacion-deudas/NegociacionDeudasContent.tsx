"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function NegociacionDeudasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Negociación de deudas en Colombia: pague menos y evite problemas
          legales
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Le ayudamos a negociar sus deudas con bancos, empresas y acreedores
          para lograr acuerdos de pago justos, reducir intereses y evitar
          procesos judiciales.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Solicitar asesoría confidencial
        </Link>
      </section>

      {/* SERVICIOS */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Acuerdos de pago personalizados</h3>
          <p>Diseñamos planes de pago ajustados a su capacidad financiera.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Reducción de intereses</h3>
          <p>Negociamos condiciones más favorables para disminuir su deuda.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Evitar procesos judiciales</h3>
          <p>Buscamos soluciones antes de llegar a demandas o embargos.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Asesoría financiera y legal</h3>
          <p>Acompañamiento completo durante todo el proceso.</p>
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className={styles.section}>
        <h2>¿Qué es la negociación de deudas?</h2>

        <p>
          La negociación de deudas es un proceso mediante el cual se busca
          llegar a un acuerdo entre el deudor y el acreedor para facilitar el
          pago de una obligación.
        </p>

        <p>
          Este proceso puede incluir la reducción de intereses, ampliación de
          plazos o incluso descuentos sobre el valor total de la deuda.
        </p>

        <p>
          En Colombia, esta alternativa es cada vez más utilizada para evitar
          procesos judiciales y encontrar soluciones más rápidas y viables.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Beneficios de negociar sus deudas</h2>

        <ul>
          <li>Reducción del valor total a pagar</li>
          <li>Evitar demandas y embargos</li>
          <li>Mejorar su situación financiera</li>
          <li>Tranquilidad y control sobre sus finanzas</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>¿Cómo funciona el proceso?</h2>

        <p>
          El proceso inicia con un análisis detallado de su situación financiera
          y de las condiciones de la deuda.
        </p>

        <p>
          Posteriormente, se negocia directamente con el acreedor para lograr un
          acuerdo que beneficie ambas partes.
        </p>

        <p>
          Finalmente, se formaliza el acuerdo y se realiza seguimiento para
          garantizar su cumplimiento.
        </p>
      </section>

      <section className={styles.section}>
        <h2>¿Cuándo es recomendable negociar una deuda?</h2>

        <p>
          Es recomendable cuando existen dificultades para cumplir con los
          pagos, cuando la deuda ha aumentado por intereses o cuando existe
          riesgo de acciones legales.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3>¿Se puede reducir una deuda?</h3>
          <p>
            Sí, dependiendo del caso es posible negociar descuentos o mejores
            condiciones.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Negociar afecta mi historial crediticio?</h3>
          <p>
            Puede tener impacto, pero es mejor que llegar a un proceso judicial.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Es obligatorio aceptar un acuerdo?</h3>
          <p>
            No, los acuerdos se negocian y se aceptan solo si son convenientes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2>Negocie sus deudas hoy</h2>
        <p>
          Evite problemas legales y encuentre una solución real para sus deudas.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un asesor ahora
        </Link>
      </section>
    </main>
  );
}
