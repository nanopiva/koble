"use client";
import styles from "../styles/NosotrosClient.module.css";
import Image from "next/image";
import Link from "next/link";
import avatarThina from "@/../public/female-avatar.jpg";
import avatarGiova from "@/../public/male-avatar.jpg";
import { useEffect, useRef } from "react";

export default function NosotrosClient() {
  // Referencias para las secciones que queremos animar
  const foundersRef = useRef<HTMLElement>(null);
  const historyRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Usar Intersection Observer para las animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === foundersRef.current) {
              entry.target.classList.add(styles.animateFounders);
            } else if (entry.target === historyRef.current) {
              entry.target.classList.add(styles.animateHistory);
            } else if (entry.target === ctaRef.current) {
              entry.target.classList.add(styles.animateCta);
            }
          }
        });
      },
      { threshold: 0.1 } // Activar cuando al menos el 10% de la sección sea visible
    );

    // Observar todas las secciones
    if (foundersRef.current) observer.observe(foundersRef.current);
    if (historyRef.current) observer.observe(historyRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* Fondo con elementos orgánicos */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.organicShape1}></div>
        <div className={styles.organicShape2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      {/* Hero Section - Más compacto */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleLine1}>Conoce al equipo detrás de</span>
          <span className={styles.titleLine2}>
            <span className={styles.highlight}>Koble</span>
          </span>
        </h1>
        <p className={styles.heroSubtitle}>
          Nos gusta escuchar, entender y acompañar cada proceso.
        </p>
      </section>

      {/* Sección Fundadores - Simplificada */}
      <section ref={foundersRef} className={styles.foundersSection}>
        <h2 className={styles.title}>¿Quiénes somos?</h2>
        <div className={styles.foundersContainer}>
          {/* Fundador 1 - Círculo perfecto */}
          <div className={`${styles.founderCard} ${styles.cardLeft}`}>
            <div className={styles.founderImageWrapper}>
              <div className={styles.imageBorder}></div>
              <Image
                src={avatarGiova || "/placeholder.svg"}
                alt="Giovanni Rostagno"
                width={240}
                height={240}
                className={`${styles.founderImage} ${styles.portrait}`} // Añadida clase portrait
                priority
              />
              <div className={styles.imageDeco}></div>
            </div>
            <div className={styles.founderContent}>
              <h3 className={styles.founderName}>Giovanni Rostagno</h3>
              <p className={styles.founderRole}>Co-Founder</p>
              <div className={styles.founderBio}>
                <p>
                  Soy Licenciado en Dirección de Negocios, con experiencia en
                  gestión comercial, procesos y transformación digital.
                  Cofundador de Koble, combino una mirada analítica con un
                  enfoque práctico para diseñar soluciones tecnológicas que
                  realmente funcionan y se adaptan a cada operación. En Koble
                  lidero la dimensión técnica y de producto, buscando siempre
                  que la tecnología esté al servicio del negocio, y no al revés.
                  Creo en el valor de lo simple, lo medible y lo que genera
                  impacto sostenible en el tiempo.
                </p>
              </div>
            </div>
          </div>

          {/* Fundador 2 - Círculo perfecto */}
          <div className={`${styles.founderCard} ${styles.cardRight}`}>
            <div className={styles.founderImageWrapper}>
              <div className={styles.imageBorder}></div>
              <Image
                src={avatarThina || "/placeholder.svg"}
                alt="Athina Ingaramo"
                width={240}
                height={240}
                className={`${styles.founderImage} ${styles.portrait}`} // Añadida clase portrait
                priority
              />
              <div className={styles.imageDeco}></div>
            </div>
            <div className={styles.founderContent}>
              <h3 className={styles.founderName}>Athina Ingaramo</h3>
              <p className={styles.founderRole}>Co-Founder</p>
              <div className={styles.founderBio}>
                <p>
                  Soy Licenciada en Dirección de Negocios y estoy cursando la
                  Maestría en Recursos Humanos en la Universidad de San Andrés.
                  Mi recorrido profesional me llevó por distintas industrias,
                  siempre con el foco puesto en las personas, los procesos y los
                  cambios que hacen la diferencia. En Koble conecto estrategia,
                  cultura y operación para acompañar transformaciones reales,
                  con una mirada humana, clara y accionable. Creo que la
                  tecnología es una herramienta, pero el verdadero cambio ocurre
                  cuando las personas entienden el para qué y se sienten parte
                  del proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={historyRef} className={styles.container}>
        <h2 className={styles.title}>Nuestra historia</h2>

        <div className={styles.textContent}>
          <p>
            Koble nació como un trabajo final universitario… y se transformó en
            una realidad que hoy acompaña a empresas en todo el país.
          </p>

          <p>
            Somos Athina y Giovanni, lo que comenzó como un proyecto académico
            pronto tomó forma propia, impulsado por las ganas de generar impacto
            real en organizaciones que buscan evolucionar en un mundo cada vez
            más conectado.
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
            ventas consultivas que generen valor, canales de contacto
            integrados, tecnología alineada con sus procesos reales, equipos
            formados y preparados para el cambio.
          </p>

          <p>
            Fue ahí cuando Koble encontró su verdadero propósito:{" "}
            <span className={styles.elegantHighlight}>
              acompañar procesos de transformación digital de punta a punta
            </span>
            , con estrategia, tecnología y una fuerte mirada humana.
          </p>

          <div className={styles.emphasis}>
            <strong>
              Hoy, en Koble diseñamos soluciones que parten del negocio y no de
              la herramienta.
            </strong>{" "}
            Trabajamos con entusiasmo, profesionalismo y una convicción clara:
            La transformación digital no se trata solo de sistemas, sino de
            decisiones que cambian la manera de trabajar, liderar y crecer.
          </div>
        </div>
      </section>

      {/* CTA Final - Con elemento orgánico */}
      <section ref={ctaRef} className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            ¿Listo para transformar tu empresa?
          </h2>
          <p className={styles.ctaSubtitle}>
            Conversemos sobre cómo podemos ayudarte a alcanzar tu próximo nivel
          </p>
          <Link href="/contacto" className={styles.ctaButton}>
            <span>Iniciar el Cambio</span>
          </Link>
        </div>
        <div className={styles.ctaDeco}></div>
      </section>
    </div>
  );
}
