"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";

export default function ErroresCobranzaBucaramangaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Errores comunes en la cobranza de cartera en Bucaramanga (y cómo
          evitarlos en 2026)
        </h1>

        <p className={styles.subtitle}>
          Muchos negocios pierden dinero no porque no vendan, sino porque
          cometen errores al cobrar. Aprende a evitarlos y mejora tu
          recuperación de cartera.
        </p>

        <div className={styles.badgeRow}>
          <span>⚠️ Errores críticos</span>
          <span>💼 Empresas</span>
          <span>📈 Mejora flujo de caja</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Por qué fallan las empresas al cobrar cartera?</h2>

        <p>
          En Bucaramanga, muchas empresas tienen ventas constantes pero
          problemas de liquidez. La razón principal no es la falta de ingresos,
          sino una mala gestión de cobranza.
        </p>

        <p>
          La mayoría de los errores en cobranza son evitables, pero terminan
          generando pérdidas importantes cuando no se corrigen a tiempo.
        </p>
      </section>

      {/* ERROR 1 */}
      <section>
        <h2>1. No hacer seguimiento oportuno</h2>

        <p>
          Uno de los errores más comunes es esperar demasiado tiempo para
          cobrar. Muchas empresas dejan pasar semanas o meses antes de contactar
          al cliente.
        </p>

        <div className={styles.highlight}>
          ⚠️ Entre más tiempo pasa, menor es la probabilidad de recuperar la
          deuda.
        </div>

        <p>
          <strong>Solución:</strong> Implementar recordatorios y seguimiento
          desde el primer día de mora.
        </p>
      </section>

      {/* ERROR 2 */}
      <section>
        <h2>2. No formalizar las deudas</h2>

        <p>
          Trabajar con acuerdos verbales o sin documentos claros hace que la
          deuda sea difícil de exigir legalmente.
        </p>

        <p>
          <strong>Solución:</strong> Siempre respaldar la deuda con facturas,
          contratos o acuerdos firmados.
        </p>
      </section>

      {/* ERROR 3 */}
      <section>
        <h2>3. Falta de procesos de cobranza estructurados</h2>

        <p>
          Muchas empresas cobran de forma improvisada, sin estrategia ni etapas
          definidas.
        </p>

        <ul>
          <li>No hay protocolo de contacto</li>
          <li>No existen tiempos definidos</li>
          <li>No se mide la efectividad</li>
        </ul>

        <p>
          <strong>Solución:</strong> Implementar un proceso con etapas como
          cobro preventivo, prejurídico y jurídico.
        </p>
      </section>

      {/* ERROR 4 */}
      <section>
        <h2>4. Evitar el cobro jurídico</h2>

        <p>
          Muchas empresas temen iniciar procesos legales y prefieren esperar
          indefinidamente.
        </p>

        <p>
          Esto genera acumulación de cartera incobrable y pérdida de dinero.
        </p>

        <p>
          <strong>Solución:</strong> Escalar a cobro jurídico cuando el cliente
          no responde.
        </p>
      </section>

      {/* ERROR 5 */}
      <section>
        <h2>5. Mala comunicación con el cliente</h2>

        <p>
          Un tono agresivo o poco profesional puede empeorar la situación y
          dificultar el pago.
        </p>

        <p>
          <strong>Solución:</strong> Mantener una comunicación clara, firme y
          profesional.
        </p>
      </section>

      {/* ERROR 6 */}
      <section>
        <h2>6. No negociar acuerdos de pago</h2>

        <p>
          Algunos clientes no pagan porque no pueden hacerlo de inmediato, pero
          sí estarían dispuestos a pagar en cuotas.
        </p>

        <p>
          <strong>Solución:</strong> Ofrecer acuerdos de pago estructurados y
          realistas.
        </p>
      </section>

      {/* ERROR 7 */}
      <section>
        <h2>7. No medir resultados de cobranza</h2>

        <p>Si no se mide la efectividad, no se puede mejorar el proceso.</p>

        <ul>
          <li>Tasa de recuperación</li>
          <li>Tiempo promedio de pago</li>
          <li>Porcentaje de cartera vencida</li>
        </ul>

        <p>
          <strong>Solución:</strong> Implementar indicadores de gestión (KPIs).
        </p>
      </section>

      {/* IMPACTO */}
      <section>
        <h2>Impacto de estos errores en tu empresa</h2>

        <p>
          Estos errores no solo afectan una factura puntual, sino que pueden
          comprometer toda la estabilidad financiera del negocio.
        </p>

        <ul>
          <li>Pérdidas económicas acumuladas</li>
          <li>Problemas de liquidez</li>
          <li>Dificultad para crecer</li>
          <li>Riesgo de cierre</li>
        </ul>
      </section>

      {/* SOLUCIÓN */}
      <section>
        <h2>Cómo mejorar tu proceso de cobranza en Bucaramanga</h2>

        <div className={styles.step}>
          <h3>1. Implementar procesos claros</h3>
          <p>Define etapas y tiempos para cada acción de cobranza.</p>
        </div>

        <div className={styles.step}>
          <h3>2. Formalizar todas las deudas</h3>
          <p>Asegura respaldo legal en cada operación.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Actuar rápido</h3>
          <p>No dejes que la deuda envejezca.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Apoyarte en expertos</h3>
          <p>Aumenta la probabilidad de recuperación.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Evita errores y recupera tu cartera</h2>

        <p>
          En Pravice Bucaramanga ayudamos a empresas a optimizar su cobranza y
          recuperar deudas de forma efectiva y legal.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mejorar mi cobranza
        </Link>
      </section>
    </article>
  );
}
