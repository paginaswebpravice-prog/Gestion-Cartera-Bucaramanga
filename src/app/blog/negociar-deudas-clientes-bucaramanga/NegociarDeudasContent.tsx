"use client";

import styles from "../BlogPost.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NegociarDeudasContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Cómo negociar deudas sin perder clientes en Bucaramanga (Guía 2026)
        </h1>

        <p className={styles.subtitle}>
          Recupera tu dinero sin dañar relaciones comerciales. Aprende a
          negociar deudas de forma estratégica y profesional.
        </p>

        <div className={styles.badgeRow}>
          <span>🤝 Negociación</span>
          <span>💼 Empresas</span>
          <span>📈 Retención de clientes</span>
        </div>
      </motion.header>

      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Es posible cobrar sin perder al cliente?</h2>

        <p>
          Sí, es totalmente posible recuperar una deuda sin afectar la relación
          comercial. De hecho, muchas empresas en Bucaramanga logran mantener
          clientes a largo plazo gracias a una gestión de cobranza adecuada.
        </p>

        <p>
          El problema no es cobrar, sino <strong>cómo se cobra</strong>.
        </p>
      </motion.section>

      {/* ERROR */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>Error común al cobrar deudas</h2>

        <p>
          Muchas empresas cometen el error de ser demasiado agresivas o, por el
          contrario, demasiado flexibles.
        </p>

        <ul>
          <li>Presionar excesivamente al cliente</li>
          <li>Generar conflictos innecesarios</li>
          <li>No hacer seguimiento</li>
          <li>Aceptar acuerdos sin control</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Un mal manejo de cobranza puede hacerte perder tanto el dinero como
          el cliente.
        </div>
      </motion.section>

      {/* ESTRATEGIA */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Cómo negociar deudas de forma efectiva
        </motion.h2>

        {[
          {
            title: "1. Comunicación profesional",
            text: "Mantén un tono respetuoso y enfocado en soluciones, no en conflicto.",
          },
          {
            title: "2. Escuchar al cliente",
            text: "Entender su situación permite plantear soluciones realistas de pago.",
          },
          {
            title: "3. Proponer alternativas",
            text: "Ofrecer opciones como pagos parciales o plazos mejora la probabilidad de recuperación.",
          },
          {
            title: "4. Formalizar acuerdos",
            text: "Todo acuerdo debe quedar por escrito para evitar incumplimientos.",
          },
          {
            title: "5. Hacer seguimiento",
            text: "Un acuerdo sin seguimiento pierde efectividad.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* BENEFICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios de negociar correctamente</h2>

        <ul>
          <li>Recuperas el dinero</li>
          <li>Mantienes al cliente activo</li>
          <li>Fortaleces la relación comercial</li>
          <li>Evitas procesos judiciales</li>
        </ul>

        <p>
          En muchos casos, una buena negociación convierte un problema en una
          oportunidad de fidelización.
        </p>
      </motion.section>

      {/* CUANDO ESCALAR */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Cuándo dejar de negociar?</h2>

        <p>
          No todos los clientes responden a la negociación. Debes escalar el
          proceso cuando:
        </p>

        <ul>
          <li>No hay intención de pago</li>
          <li>Se incumplen acuerdos</li>
          <li>El cliente evita comunicación</li>
        </ul>

        <p>
          En estos casos, es necesario avanzar a cobro prejurídico o jurídico.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Recupera tu dinero sin perder clientes</h2>

        <p>
          Aplica estrategias de cobranza profesional que te permitan recuperar
          cartera sin afectar tus relaciones comerciales.
        </p>

        <Link
          href="/https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recibir asesoría en cobranza
        </Link>
      </motion.section>
    </article>
  );
}
