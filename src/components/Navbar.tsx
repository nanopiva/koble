"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/KobleLogoRenderedx2.png";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Menú Hamburguesa - Solo Mobile */}
        {isMobile && (
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Menú de navegación"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Menú Principal - Desktop */}
        {!isMobile && (
          <>
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
                className={`${styles.iconLink} ${styles.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chatear por WhatsApp"
              >
                <FaWhatsapp className={styles.icon} />
                <span className={styles.iconText}>WhatsApp</span>
              </a>
              <a
                href="mailto:giovarosta14@gmail.com"
                className={`${styles.iconLink} ${styles.email}`}
                aria-label="Enviar email"
              >
                <FaEnvelope className={styles.icon} />
                <span className={styles.iconText}>Email</span>
              </a>
              <a
                href="tel:+5493424233751"
                className={`${styles.iconLink} ${styles.phone}`}
                aria-label="Llamar por teléfono"
              >
                <FaPhoneAlt className={styles.icon} />
                <span className={styles.iconText}>Llamar</span>
              </a>

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
          </>
        )}

        {/* Menú Mobile - Solo se muestra cuando está abierto */}
        {isMobile && (
          <nav
            className={`${styles.navMobile} ${
              isMenuOpen ? styles.navOpen : ""
            }`}
          >
            <div className={styles.navLinks}>
              <Link
                href="/"
                className={`${styles.link} ${
                  pathname === "/" ? styles.active : ""
                }`}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className={`${styles.link} ${
                  pathname === "/servicios" ? styles.active : ""
                }`}
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className={`${styles.link} ${
                  pathname === "/nosotros" ? styles.active : ""
                }`}
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className={`${styles.link} ${
                  pathname === "/contacto" ? styles.active : ""
                }`}
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </div>

            <div className={styles.contactSection}>
              <h4 className={styles.contactTitle}>Contacto rápido</h4>
              <div className={styles.mobileContactIcons}>
                <a
                  href="https://wa.me/5493424233751"
                  className={`${styles.iconLink} ${styles.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chatear por WhatsApp"
                  onClick={toggleMenu}
                >
                  <FaWhatsapp className={styles.icon} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:giovarosta14@gmail.com"
                  className={`${styles.iconLink} ${styles.email}`}
                  aria-label="Enviar email"
                  onClick={toggleMenu}
                >
                  <FaEnvelope className={styles.icon} />
                  <span>Email</span>
                </a>
                <a
                  href="tel:+5493424233751"
                  className={`${styles.iconLink} ${styles.phone}`}
                  aria-label="Llamar por teléfono"
                  onClick={toggleMenu}
                >
                  <FaPhoneAlt className={styles.icon} />
                  <span>Llamar</span>
                </a>
              </div>
            </div>

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
          </nav>
        )}
      </div>
    </header>
  );
}
