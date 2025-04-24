"use client";
import Link from "next/link";
import styles from "../styles/HomeClient.module.css";
import { useEffect, useRef } from "react";

import { Check, X } from "lucide-react";

export default function HomeClient() {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const strategicRef = useRef<HTMLDivElement>(null);
  const peaceOfMindRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mantener la animación original para benefitsRef
    const handleScroll = () => {
      if (benefitsRef.current) {
        const rect = benefitsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          benefitsRef.current.classList.add(styles.animateBenefits);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Usar Intersection Observer para las nuevas animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === strategicRef.current) {
              entry.target.classList.add(styles.animateStrategic);
            } else if (entry.target === peaceOfMindRef.current) {
              entry.target.classList.add(styles.animatePeaceOfMind);
            }
          }
        });
      },
      { threshold: 0.1 } // Activar cuando al menos el 10% de la sección sea visible
    );

    if (strategicRef.current) {
      observer.observe(strategicRef.current);
    }
    if (peaceOfMindRef.current) {
      observer.observe(peaceOfMindRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* Fondo con gradiente y elementos decorativos */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.titleWrapper}>
            <div className={styles.glowEffect} aria-hidden="true"></div>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>La tecnología</span>
              <span className={styles.titleLineAccent}>como excusa</span>
            </h1>
            {/* Sin elemento decorativo */}
          </div>
          <p className={styles.heroSubtitle}>
            Para transformar tu negocio, optimizar procesos y crear experiencias
            memorables que impulsen tu crecimiento.
          </p>
          <div className={styles.heroAccent} aria-hidden="true">
            <div className={styles.accentCircle}></div>
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <Link href="/servicios" className={styles.primaryButton}>
            <span>Descubrir soluciones</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/contacto" className={styles.secondaryButton}>
            <span>Consulta gratis</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H16C15.45 20.92 15 20.47 15 19.92V16.92C15 16.37 15.45 15.92 16 15.92H21C21.55 15.92 22 16.37 22 16.92Z"
                fill="currentColor"
              />
              <path
                d="M22 10V13C22 13.55 21.55 14 21 14H16C15.45 14 15 13.55 15 13V10C15 9.45 15.45 9 16 9H21C21.55 9 22 9.45 22 10Z"
                fill="currentColor"
              />
              <path
                d="M22 3V6C22 6.55 21.55 7 21 7H16C15.45 7 15 6.55 15 6V3C15 2.45 15.45 2 16 2H21C21.55 2 22 2.45 22 3Z"
                fill="currentColor"
              />
              <path
                d="M9 12H15M9 8H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        {/* Elemento decorativo de scroll */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span>Desplázate</span>
        </div>
      </section>

      {/* Sección de beneficios con animación (ya existente) */}
      <section ref={benefitsRef} className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>
          Transformamos tu operación comercial
        </h2>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⏱️</div>
            <h3>Optimización del tiempo</h3>
            <p>
              Automatizaciones inteligentes que eliminan tareas repetitivas y
              liberan tu equipo para lo importante.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>📈</div>
            <h3>Mayor conversión</h3>
            <p>
              Sistema de scoreo avanzado que identifica y prioriza las
              oportunidades con mayor potencial de cierre
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🎯</div>
            <h3>Estrategias personalizadas</h3>
            <p>
              Campañas diseñadas específicamente según el comportamiento y
              segmentación de tu audiencia
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>📊</div>
            <h3>Decisiones basadas en datos</h3>
            <p>
              Insights claros y accionables para ajustar tus estrategias de
              ventas y marketing en tiempo real
            </p>
          </div>
        </div>
      </section>

      {/* Sección estratégica mejorada - AÑADIDO REF PARA ANIMACIÓN */}
      <section ref={strategicRef} className={styles.strategicSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Enfoque diferenciador</span>
          <h2 className={styles.mainTitle}>Estrategia + Tecnología</h2>
          <p className={styles.mainSubtitle}>
            Una estrategia diseñada alrededor de tu negocio
          </p>
        </div>

        <div className={styles.comparisonContainer}>
          {/* Columna izquierda - Nuestro enfoque */}
          <div
            className={`${styles.comparisonColumn} ${styles.ourApproachColumn}`}
          >
            <div className={styles.columnHeader}>
              <div className={styles.columnBadge}>
                <Check className={styles.badgeIcon} size={16} />
                <span>Nuestro enfoque</span>
              </div>
              <h3 className={styles.columnTitle}>CRM moldeado a tu negocio</h3>
              <p className={styles.columnSubtitle}>
                Resultados transformadores
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Check className={styles.checkIcon} size={20} />
              </div>
              <div className={styles.featureContent}>
                <h4>Estrategias específicas</h4>
                <p>
                  Automatizaciones que reflejan{" "}
                  <strong>tu ciclo de ventas</strong>, no un modelo genérico.
                </p>
              </div>
            </div>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Check className={styles.checkIcon} size={20} />
                </div>
                <div className={styles.featureContent}>
                  <h4>Configuración adaptable</h4>
                  <p>
                    Desde paneles hasta campos de datos: todo se ajusta a{" "}
                    <strong>tus terminologías</strong> y flujos de trabajo.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Check className={styles.checkIcon} size={20} />
                </div>
                <div className={styles.featureContent}>
                  <h4>Escucha activa continua</h4>
                  <p>
                    Revisamos el CRM cada mes para{" "}
                    <strong>ajustarlo a tus cambios</strong> (mercado, equipo,
                    objetivos).
                  </p>
                </div>
              </div>
              <div className={styles.keyBenefit}>
                <div className={styles.keyBenefitIcon}>✨</div>
                <p>Tu operación comercial dicta la tecnología</p>
              </div>
            </div>
          </div>

          {/* Separador central */}
          <div className={styles.comparisonDivider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerCircle}>
              <span>VS</span>
            </div>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Columna derecha - Enfoque tradicional */}
          <div
            className={`${styles.comparisonColumn} ${styles.traditionalColumn}`}
          >
            <div className={styles.columnHeader}>
              <div className={styles.columnBadge}>
                <X className={styles.badgeIcon} size={16} />
                <span>Enfoque tradicional</span>
              </div>
              <h3 className={styles.columnTitle}>Software sin estrategia</h3>
              <p className={styles.columnSubtitle}>Resultados limitados</p>
            </div>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <X className={styles.xIcon} size={20} />
                </div>
                <div className={styles.featureContent}>
                  <h4>Plantillas rígidas</h4>
                  <p>
                    Fijan una única forma de operar, sin considerar cómo
                    evoluciona tu negocio.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <X className={styles.xIcon} size={20} />
                </div>
                <div className={styles.featureContent}>
                  <h4>Automatizaciones ciegas</h4>
                  <p>Flujos estándar que ignoran tus procesos únicos.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <X className={styles.xIcon} size={20} />
                </div>
                <div className={styles.featureContent}>
                  <h4>Datos sin contexto</h4>
                  <p>Métricas que no responden a tus objetivos reales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className={styles.decorativeElements}>
          <div className={styles.decorCircle}></div>
          <div className={styles.decorDots}></div>
        </div>
      </section>

      {/* Sección de capacitación - AÑADIDO REF PARA ANIMACIÓN */}
      <section ref={peaceOfMindRef} className={styles.peaceOfMindSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Implementación sin estrés</span>
          <h2 className={styles.mainTitle}>
            Capacitación que realmente funciona
          </h2>
          <p className={styles.mainSubtitle}>
            Nuestro acompañamiento garantiza que tu equipo adopte el CRM con
            confianza
          </p>
        </div>

        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <h3>
                ¿Cómo aseguramos que tu equipo realmente use el CRM como
                corresponde?
              </h3>
              <div className={styles.faqAnswer}>
                <p>
                  Implementamos un{" "}
                  <strong>programa de capacitación en 3 fases</strong>, pensado
                  para que el sistema no solo se entienda, sino que se incorpore
                  al trabajo diario:
                </p>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <Check className={styles.checkIcon} size={20} />
                    </div>
                    <div className={styles.featureContent}>
                      <h4>Formación inicial, práctica y a medida</h4>
                      <p>
                        Sesiones dinámicas donde el equipo aprende haciendo, con
                        ejemplos reales de tu operación. Nada de teoría
                        genérica:{" "}
                        <strong>
                          todo adaptado a lo que pasa en tu negocio
                        </strong>
                        .
                      </p>
                    </div>
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <Check className={styles.checkIcon} size={20} />
                    </div>
                    <div className={styles.featureContent}>
                      <h4>
                        Acompañamiento cercano durante las primeras semanas
                      </h4>
                      <p>
                        Contás con canales directos para evacuar dudas y hacer
                        ajustes a medida que el equipo comienza a usar la
                        herramienta.{" "}
                        <strong>
                          Estamos disponibles para acompañar el proceso sin
                          generar dependencia.{" "}
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <Check className={styles.checkIcon} size={20} />
                    </div>
                    <div className={styles.featureContent}>
                      <h4>Refuerzos mensuales para evolucionar juntos</h4>
                      <p>
                        Luego del proyecto, y como parte del servicio mensual,
                        en cada reunión{" "}
                        <strong>
                          analizamos dudas, corregimos desvíos y seguimos
                          optimizando el uso real del CRM.{" "}
                        </strong>
                        La mejora es constante
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2>Transformación sin complicaciones</h2>
          <p>
            Primera consulta estratégica{" "}
            <span className={styles.highlightText}>sin costo</span>
          </p>
          <div className={styles.particleContainer}>
            {[...Array(15)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        <Link href="/contacto" passHref legacyBehavior>
          <a className={styles.ctaButton}>
            <span>Iniciar diagnóstico gratuito</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Link>
      </section>
    </div>
  );
}
