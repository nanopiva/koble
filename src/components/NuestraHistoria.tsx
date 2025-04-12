import styles from "../styles/NuestraHistoria.module.css";

const NuestraHistoria = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nuestra historia</h2>

      <div className={styles.textContent}>
        <p>
          Koble nació como un trabajo final universitario… y se transformó en
          una realidad que hoy acompaña a empresas en todo el país.
        </p>

        <p>
          Somos Athina y Giovanni, lo que comenzó como un proyecto académico
          pronto tomó forma propia, impulsado por las ganas de generar impacto
          real en organizaciones que buscan evolucionar en un mundo cada vez más
          conectado.
        </p>

        <p>
          En nuestros primeros pasos, nos presentamos como brókers de CRM:
          intermediarios entre las múltiples soluciones del mercado y las
          empresas que necesitaban implementarlas. Pero rápidamente entendimos
          que la verdadera necesidad iba mucho más allá de la herramienta.
        </p>

        <p>
          Las compañías con las que trabajábamos no solo buscaban un sistema,
          buscaban una transformación: una atención al cliente más eficiente,
          ventas consultivas que generen valor, canales de contacto integrados,
          tecnología alineada con sus procesos reales, equipos formados y
          preparados para el cambio.
        </p>

        <p>
          Fue ahí cuando Koble encontró su verdadero propósito:{" "}
          <span className={styles.highlight}>
            acompañar procesos de transformación digital de punta a punta
          </span>
          , con estrategia, tecnología y una fuerte mirada humana.
        </p>

        <div className={styles.emphasis}>
          <strong>
            Hoy, en Koble diseñamos soluciones que parten del negocio y no de la
            herramienta.
          </strong>
          Trabajamos con entusiasmo, profesionalismo y una convicción clara: La
          transformación digital no se trata solo de sistemas, sino de
          decisiones que cambian la manera de trabajar, liderar y crecer.
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
