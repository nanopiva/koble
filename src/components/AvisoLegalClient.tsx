"use client";
import styles from "@/styles/AvisoLegal.module.css";

export default function AvisoLegalClient() {
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
            <span className={styles.highlight}>Aviso Legal</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Términos de uso del sitio web de Koble
          </p>
        </section>

        {/* Contenido */}
        <section className={styles.textSection}>
          <div className={styles.textContent}>
            <h2>Aviso Legal</h2>
            <p>
              Este aviso legal establece las condiciones de uso del sitio web de
              Koble.
            </p>

            <h3>Propiedad Intelectual</h3>
            <p>
              Todo el contenido de este sitio (textos, imágenes, diseños,
              logotipos) es propiedad exclusiva de Koble y está protegido por
              las leyes de propiedad intelectual.
            </p>

            <h3>Uso del Sitio</h3>
            <p>
              El contenido de este sitio tiene únicamente fines informativos
              sobre nuestros servicios. Para información precisa y actualizada,
              te recomendamos contactarnos directamente.
            </p>

            <h3>Limitación de Responsabilidad</h3>
            <p>
              Koble no se hace responsable del uso que terceros puedan hacer de
              la información publicada en este sitio.
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
