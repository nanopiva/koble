"use client";
import styles from "../styles/ServiciosClient.module.css";
import {
  FaUsersCog,
  FaCogs,
  FaHandshake,
  FaChessKnight,
  FaChartLine,
  FaRobot,
  FaCheckCircle,
  FaHistory,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ServiciosClient() {
  // Referencias para las secciones que queremos animar
  const customSolutionRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Usar Intersection Observer para las animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === customSolutionRef.current) {
              entry.target.classList.add(styles.animateCustomSolution);
            } else if (entry.target === processRef.current) {
              entry.target.classList.add(styles.animateProcess);
            } else if (entry.target === solutionsRef.current) {
              entry.target.classList.add(styles.animateSolutions);
            } else if (entry.target === principlesRef.current) {
              entry.target.classList.add(styles.animatePrinciples);
            } else if (entry.target === ctaRef.current) {
              entry.target.classList.add(styles.animateCta);
            }
          }
        });
      },
      { threshold: 0.1 } // Activar cuando al menos el 10% de la sección sea visible
    );

    // Observar todas las secciones
    if (customSolutionRef.current) observer.observe(customSolutionRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (solutionsRef.current) observer.observe(solutionsRef.current);
    if (principlesRef.current) observer.observe(principlesRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* Fondo idéntico al inicio */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleLine1}>Servicios diseñados para</span>
          <span className={styles.titleLine2}>
            <span className={styles.highlight}>optimizar tu operación</span>
          </span>
        </h1>
        <p className={styles.heroSubtitle}>
          Soluciones personalizadas con resultados medibles
        </p>
      </section>

      {/* Soluciones a Medida - Ahora arriba */}
      <section
        ref={customSolutionRef}
        className={styles.customSolutionHighlight}
      >
        <div className={styles.customSolutionContent}>
          <h2>Soluciones a Medida</h2>
          <p className={styles.customSolutionText}>
            Cada empresa es única. Analizamos tus procesos específicos para
            ofrecerte la combinación óptima de estrategias, herramientas y
            tecnologías que maximicen tu productividad.
          </p>
          <div className={styles.solutionFeatures}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>Diseñadas específicamente para tu negocio</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>Integración perfecta con tus procesos actuales</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>Enfoque en tus objetivos estratégicos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section ref={processRef} className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Nuestra Metodología</h2>
        <p className={styles.sectionSubtitle}>
          Un proceso ordenado y simple para cumplir tus objetivos
        </p>

        <div className={styles.processSteps}>
          {/* Fase 1 */}
          <div className={styles.processCard}>
            <div className={styles.phaseIndicator}>1</div>
            <div className={styles.phaseContent}>
              <FaUsersCog className={styles.phaseIcon} />
              <h3>Fase de Diagnóstico</h3>
              <ul className={styles.phaseDetails}>
                <li>Reunión inicial para comprender objetivos</li>
                <li>Análisis de necesidades específicas</li>
                <li>Evaluación del estado actual</li>
              </ul>
            </div>
            <div className={styles.connectorLine}></div>
          </div>

          {/* Fase 2 */}
          <div className={styles.processCard}>
            <div className={styles.phaseIndicator}>2</div>
            <div className={styles.phaseContent}>
              <FaCogs className={styles.phaseIcon} />
              <h3>Diseño y Configuración</h3>
              <ul className={styles.phaseDetails}>
                <li>Soluciones personalizadas según tus necesidades</li>
                <li>Optimización de procesos y automatizaciones</li>
                <li>Configuración de herramientas a medida</li>
              </ul>
            </div>
            <div className={styles.connectorLine}></div>
          </div>

          {/* Fase 3 */}
          <div className={styles.processCard}>
            <div className={styles.phaseIndicator}>3</div>
            <div className={styles.phaseContent}>
              <FaHandshake className={styles.phaseIcon} />
              <h3>Soporte y Seguimiento</h3>
              <ul className={styles.phaseDetails}>
                <li>
                  Reuniones periódicas de análisis de resultados, con foco en
                  evolución real y oportunidades
                </li>
                <li>Identificación de mejoras continuas</li>
                <li>Ajustes personalizados según evolución</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section ref={solutionsRef} className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>Ámbitos de Solución</h2>
        <p className={styles.sectionSubtitle}>
          Tecnologías y enfoques adaptados a cada empresa
        </p>

        <div className={styles.solutionsGrid}>
          <div className={styles.solutionCard}>
            <FaChessKnight className={styles.solutionIcon} />
            <h3>Estrategia Comercial</h3>
            <p>
              Diseño de flujos comerciales personalizados según tu mercado,
              clientes y objetivos específicos.
            </p>
          </div>

          <div className={styles.solutionCard}>
            <FaRobot className={styles.solutionIcon} />
            <h3>Automatizaciones</h3>
            <p>
              Sistemas inteligentes adaptados a tus procesos para reducir
              trabajo manual y errores.
            </p>
          </div>

          <div className={styles.solutionCard}>
            <FaChartLine className={styles.solutionIcon} />
            <h3>Análisis de Datos</h3>
            <p>
              Métricas clave y dashboards personalizados para una toma de
              decisiones informada.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestra Esencia" modificada */}
      <section ref={principlesRef} className={styles.principlesSection}>
        <div className={styles.principlesHeader}>
          <h2 className={styles.sectionTitle}>Principios de Gestión</h2>
          <p className={styles.sectionSubtitle}>
            Nuestros pilares fundamentales
          </p>
        </div>

        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.philosophyIconContainer}>
                <FaCheckCircle className={styles.philosophyIcon} />
              </div>
              <h3>Ningún cliente queda sin respuesta</h3>
            </div>
            <p>
              Garantizamos seguimiento a cada interacción comercial. Sistemas
              automatizados con alertas para asegurar que ninguna oportunidad se
              pierda en el camino.
            </p>
          </div>

          <div className={styles.philosophyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.philosophyIconContainer}>
                <FaHistory className={styles.philosophyIcon} />
              </div>
              <h3>Conversaciones trazables</h3>
            </div>
            <p>
              Historial completo de cada interacción, disponible en cualquier
              etapa del proceso. Toda tu comunicación comercial centralizada y
              accesible.
            </p>
          </div>

          <div className={styles.philosophyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.philosophyIconContainer}>
                <FaChartLine className={styles.philosophyIcon} />
              </div>
              <h3>Decisiones basadas en datos</h3>
            </div>
            <p>
              Dejamos de lado las suposiciones. Nuestros dashboards te muestran
              métricas claras para tomar decisiones estratégicas con información
              concreta.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section ref={ctaRef} className={styles.ctaSection}>
        <h2>¿Cómo podemos optimizar tu operación?</h2>
        <p className={styles.ctaSubtitle}>
          Contanos sobre tu empresa y diseñaremos una solución personalizada
          para vos.
        </p>
        <Link href="/contacto" className={styles.ctaButton}>
          Conversemos sobre tus necesidades
        </Link>
      </section>
    </div>
  );
}
