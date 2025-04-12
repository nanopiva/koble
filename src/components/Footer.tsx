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
            <p>giovarosta14@gmail.com</p>
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
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
        </div>
      </div>
    </footer>
  );
}
