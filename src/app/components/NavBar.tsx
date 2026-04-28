"use client";

import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { useState } from "react";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/logo_pravice.png"
              alt="Pravice"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>

      {/* MENU DESKTOP */}
      <ul className={styles.center}>
        <li>
          <Link href="/">Inicio</Link>
        </li>

        {/* SERVICIOS */}
        <li className={styles.dropdown}>
          <span>Servicios ▾</span>

          <div className={styles.dropdownMenu}>
            <Link href="/servicios/cobro-juridico-bucaramanga">
              Cobro jurídico
            </Link>
            <Link href="/servicios/cobro-prejuridico-bucaramanga">
              Cobro prejurídico
            </Link>
            <Link href="/servicios/recuperacion-cartera">
              Recuperación de cartera
            </Link>
            <Link href="/servicios/cobranza-empresas">
              Cobranza para empresas
            </Link>
            <Link href="/servicios/negociacion-deudas">
              Negociación de deudas
            </Link>
          </div>
        </li>

        {/* SECTORES */}
        <li className={styles.dropdown}>
          <span>Sectores ▾</span>

          <div className={styles.dropdownMenu}>
            <Link href="/sectores/cobranza-clinicas">Clínicas y salud</Link>
            <Link href="/sectores/cobranza-inmobiliarias">Inmobiliarias</Link>
            <Link href="/sectores/cobranza-construccion">Construcción</Link>
            <Link href="/sectores/cobranza-pymes">PYMES</Link>
            <Link href="/sectores/cobranza-educacion">Educación</Link>
          </div>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>

      {/* RIGHT */}
      <div className={styles.right}>
        <button className={styles.cta} onClick={handleClick}>
          Recuperar cartera
        </button>

        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <p className={styles.mobileTitle}>Servicios</p>
          <Link href="/servicios/cobro-juridico-bucaramanga">
            Cobro jurídico
          </Link>
          <Link href="/servicios/cobro-prejuridico-bucaramanga">
            Cobro prejurídico
          </Link>
          <Link href="/servicios/recuperacion-cartera">
            Recuperación de cartera
          </Link>

          <p className={styles.mobileTitle}>Sectores</p>
          <Link href="/sectores/cobranza-clinicas">Clínicas</Link>
          <Link href="/sectores/cobranza-inmobiliarias">Inmobiliarias</Link>

          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>

          <button onClick={handleClick}>Solicitar asesoría</button>
        </div>
      )}
    </nav>
  );
}
