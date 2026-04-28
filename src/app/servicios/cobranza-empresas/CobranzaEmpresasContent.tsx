"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaEmpresasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Cobranza para empresas en Colombia: recupere cartera y mejore su flujo
          de caja
        </h1>
        <div className={styles.heroLine}></div>

        <p>
          Ayudamos a empresas a recuperar cartera vencida mediante estrategias
          de cobranza prejurídica y jurídica, optimizando su flujo de caja y
          reduciendo el impacto de clientes morosos en su operación.
        </p>

        <p>
          Nuestro enfoque combina gestión estratégica, seguimiento constante y
          respaldo legal para maximizar la recuperación de deudas empresariales
          en el menor tiempo posible.
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
            Administramos todo el ciclo de cobranza, desde la identificación de
            deudas hasta la recuperación efectiva del dinero.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobranza prejurídica</h3>
          <p>
            Recuperamos cartera mediante contacto estratégico y negociación,
            evitando procesos judiciales innecesarios.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Cobranza jurídica</h3>
          <p>
            Iniciamos procesos legales para exigir el pago cuando el deudor no
            responde a la gestión inicial.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Reportes y seguimiento</h3>
          <p>
            Información clara, periódica y detallada sobre el estado de cada
            caso.
          </p>
        </div>
      </section>

      {/* PROBLEMA REAL */}
      <section className={styles.section}>
        <h2>El impacto de la cartera vencida en las empresas</h2>

        <p>
          La cartera vencida es uno de los principales problemas financieros en
          las empresas en Colombia. Cuando los clientes no pagan a tiempo, se
          genera un efecto en cadena que afecta la liquidez, la operación y la
          capacidad de crecimiento del negocio.
        </p>

        <p>
          Muchas empresas continúan operando con altos niveles de morosidad sin
          implementar estrategias de recuperación efectivas, lo que termina
          afectando su rentabilidad.
        </p>

        <p>
          Una correcta gestión de cobranza permite convertir cuentas por cobrar
          en flujo de caja real, mejorando la estabilidad financiera.
        </p>
      </section>

      {/* COMO TRABAJAN */}
      <section className={styles.section}>
        <h2>Cómo funciona nuestro servicio de cobranza empresarial</h2>

        <p>
          Nuestro proceso está diseñado para maximizar la recuperación de
          cartera mediante un enfoque estructurado y estratégico.
        </p>

        <ul>
          <li>Análisis inicial de la cartera y clasificación de deudas</li>
          <li>Segmentación por nivel de riesgo y antigüedad</li>
          <li>Contactos estratégicos con los deudores</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Seguimiento constante de compromisos</li>
          <li>Escalamiento a cobro jurídico si es necesario</li>
        </ul>

        <p>
          Este enfoque permite aumentar significativamente la tasa de
          recuperación frente a métodos tradicionales.
        </p>
      </section>

      {/* DIFERENCIAL */}
      <section className={styles.section}>
        <h2>¿Qué nos diferencia de otras empresas de cobranza?</h2>

        <p>
          No solo gestionamos cobros, implementamos una estrategia completa
          enfocada en resultados.
        </p>

        <ul>
          <li>Enfoque en recuperación real, no solo gestión</li>
          <li>Comunicación efectiva con deudores</li>
          <li>Equipo con experiencia legal y financiera</li>
          <li>Procesos adaptados a cada empresa</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.section}>
        <h2>Beneficios de una cobranza profesional</h2>

        <p>
          Contar con un servicio especializado de cobranza genera ventajas
          competitivas importantes:
        </p>

        <ul>
          <li>Mejora inmediata del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
          <li>Optimización de recursos internos</li>
          <li>Mayor control financiero</li>
          <li>Disminución del riesgo de pérdidas</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section className={styles.section}>
        <h2>Tipos de cartera empresarial que gestionamos</h2>

        <p>
          Trabajamos con diferentes tipos de cartera según el sector y el tipo
          de cliente:
        </p>

        <ul>
          <li>Cartera comercial</li>
          <li>Cartera de servicios</li>
          <li>Cartera financiera</li>
          <li>Cartera B2B (empresa a empresa)</li>
          <li>Cartera de clientes recurrentes</li>
        </ul>
      </section>

      {/* CUANDO */}
      <section className={styles.section}>
        <h2>¿Cuándo es el momento ideal para iniciar la cobranza?</h2>

        <p>
          Muchas empresas cometen el error de esperar demasiado tiempo antes de
          iniciar la gestión de cobro.
        </p>

        <p>
          Lo recomendable es actuar desde el primer incumplimiento de pago, ya
          que esto aumenta significativamente las probabilidades de
          recuperación.
        </p>
      </section>

      {/* CASOS */}
      <section className={styles.section}>
        <h2>Casos comunes de cobranza empresarial</h2>

        <ul>
          <li>Clientes que retrasan pagos constantemente</li>
          <li>Empresas que incumplen contratos</li>
          <li>Facturas vencidas sin respuesta</li>
          <li>Deudas acumuladas difíciles de recuperar</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Preguntas frecuentes sobre cobranza empresarial</h2>

        <div className={styles.faqItem}>
          <h3>¿Se puede recuperar una deuda antigua?</h3>
          <p>
            Sí, aunque entre más tiempo pase, más difícil puede ser. Por eso es
            importante actuar rápidamente.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Siempre es necesario demandar?</h3>
          <p>
            No, muchos casos se resuelven en etapa prejurídica mediante
            negociación.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto tarda recuperar una deuda?</h3>
          <p>Depende del caso, pero puede variar entre semanas y meses.</p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué pasa si el deudor no responde?</h3>
          <p>Se procede con acciones legales para exigir el pago.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.ctaBox}>
        <h2>Recupere su cartera y fortalezca su empresa</h2>
        <p>
          No permita que los clientes morosos afecten su negocio. Optimice su
          cobranza con expertos y obtenga resultados reales.
        </p>

        <Link href="/contacto" className={styles.ctaButton}>
          Hablar con un especialista
        </Link>
      </section>
    </main>
  );
}
