"use client";
import styles from "@/styles/PrivacidadClient.module.css";

export default function PrivacidadClient() {
  return (
    <div className={styles.mainContainer}>
      {/* Fondo igual que otras páginas */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Privacidad</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Cómo manejamos tu información en Koble
          </p>
        </section>

        {/* Contenido */}
        <section className={styles.textSection}>
          <div className={styles.textContent}>
            <h2>Política de Privacidad</h2>
            <p>
              En Koble valoramos tu privacidad. Esta política explica cómo
              manejamos la información que nos proporcionas.
            </p>

            <h3>Formulario de Contacto</h3>
            <p>
              Cuando completas nuestro formulario, los datos se envían
              directamente a nuestro correo electrónico a través del servicio{" "}
              <a
                href="https://formsubmit.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FormSubmit
              </a>
              . Este servicio no almacena tus datos de forma permanente.
            </p>

            <h3>Botones de Contacto Directo</h3>
            <p>
              Los botones de WhatsApp, correo electrónico y llamada telefónica
              redirigen a las aplicaciones respectivas. Koble no tiene acceso a
              información adicional a través de estos medios.
            </p>

            <h3>Cookies y Tracking</h3>
            <p>
              Actualmente no utilizamos cookies de seguimiento ni herramientas
              como Google Analytics en nuestro sitio web.
            </p>

            <div className={styles.emphasisBox}>
              <p>
                <strong>Última actualización:</strong> Enero 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
