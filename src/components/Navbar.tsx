"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/KobleLogoRenderedx2.png";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Verificar el tema guardado en localStorage al cargar
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="Koble - Consultoría Empresarial"
              width={200}
              height={90}
              priority
              quality={100}
              className={styles.logoImage}
            />
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className={`${styles.link} ${
              pathname === "/servicios" ? styles.active : ""
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className={`${styles.link} ${
              pathname === "/nosotros" ? styles.active : ""
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className={`${styles.link} ${
              pathname === "/contacto" ? styles.active : ""
            }`}
          >
            Contacto
          </Link>
        </nav>

        <div className={styles.contactIcons}>
          <a
            href="https://wa.me/5493424233751"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear por WhatsApp"
          >
            <FaWhatsapp className={styles.icon} />
            <span className={styles.iconText}>WhatsApp</span>
          </a>
          <a
            href="mailto:giovarosta14@gmail.com"
            className={styles.iconLink}
            aria-label="Enviar email"
          >
            <FaEnvelope className={styles.icon} />
            <span className={styles.iconText}>Email</span>
          </a>
          <a
            href="tel:+5493424233751"
            className={styles.iconLink}
            aria-label="Llamar por teléfono"
          >
            <FaPhoneAlt className={styles.icon} />
            <span className={styles.iconText}>Llamar</span>
          </a>

          {/* Switch de tema */}
          <label className={styles.themeSwitch}>
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <span className={styles.slider}>
              <div className={styles.sliderIcon}>
                <FiMoon />
                <FiSun />
              </div>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
}
