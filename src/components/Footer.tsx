import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logo from "../../public/KobleLogoRenderedx2.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridContainer}>
        {/* Columna 1 - Logo y descripción */}
        <div className={styles.brandSection}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              <Image
                src={logo || "/placeholder.svg"}
                alt="Koble - Consultoría Empresarial"
                width={180}
                height={80}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>
          <div className={styles.taglineWrapper}>
            <p className={styles.tagline}>
              Transformando negocios locales mediante estrategias de eficiencia
              operativa.
            </p>
          </div>
        </div>

        {/* Columna 2 - Enlaces */}
        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Navegación</h3>
          <ul>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Contacto */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contacto</h3>
          <address>
            <p>contacto@koble.com.ar</p>
            <p>+54 9 342 423-3751</p>
          </address>
        </div>

        {/* Columna 4 - CTA (mantenido en línea) */}
        <div className={styles.ctaSection}>
          <h3 className={styles.sectionTitle}>¿Consultas?</h3>
          <Link
            href="https://wa.me/5493424233751"
            className={styles.whatsappCta}
            target="_blank"
          >
            WhatsApp
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          © {new Date().getFullYear()} Koble. Todos los derechos reservados.
        </p>
        <div className={styles.legalLinks}>
          <Link
            href="https://www.linkedin.com/company/koble-ar" // <-- tu URL de LinkedIn real
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.linkedinIcon}
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761
        0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966
        0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785
        1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.869
        0-2.155 1.46-2.155 2.966v5.701h-3v-10h2.881v1.367h.041c.401-.761
        1.381-1.561 2.841-1.561 3.037 0 3.6 2.001 3.6 4.604v5.59z"
              />
            </svg>
          </Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
        </div>
      </div>
    </footer>
  );
}
