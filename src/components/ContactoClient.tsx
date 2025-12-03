"use client";
import { useState, useEffect, useRef } from "react";
import type React from "react";

import styles from "@/styles/ContactoClient.module.css";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGlobeAmericas,
  FaPaperPlane,
  FaExclamationCircle,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WorldMap from "@/components/WorldMap";

export default function ContactoClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Referencias para las secciones que queremos animar
  const heroRef = useRef<HTMLElement>(null);
  const contactCardsRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const coverageRef = useRef<HTMLElement>(null);

  // Detectar el tema actual
  useEffect(() => {
    const isDarkTheme =
      document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDarkTheme ? "dark" : "light");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme =
            document.documentElement.getAttribute("data-theme") === "dark"
              ? "dark"
              : "light";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Configurar las animaciones de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              entry.target.classList.add(styles.animateHero);
            } else if (entry.target === contactCardsRef.current) {
              entry.target.classList.add(styles.animateContactCards);
            } else if (entry.target === formRef.current) {
              entry.target.classList.add(styles.animateForm);
            } else if (entry.target === coverageRef.current) {
              entry.target.classList.add(styles.animateCoverage);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar todas las secciones
    if (heroRef.current) observer.observe(heroRef.current);
    if (contactCardsRef.current) observer.observe(contactCardsRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (coverageRef.current) observer.observe(coverageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Toast personalizado según el tema
  const showToast = (
    type: "success" | "error",
    message: string,
    options = {}
  ) => {
    const defaultOptions = {
      position: "bottom-center" as const,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: theme === "dark" ? styles.toastDark : styles.toastLight,
    };

    const toastOptions = { ...defaultOptions, ...options };

    if (type === "success") {
      toast.success(message, toastOptions);
    } else {
      toast.error(message, toastOptions);
    }
  };

  const handleCopy = (type: "whatsapp" | "phone" | "email", value: string) => {
    navigator.clipboard.writeText(value);
    showToast("success", `¡${type === "email" ? "Email" : "Número"} copiado!`, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Sacar error tipeando
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Nombre completo es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mensaje es requerido";
    }
    if (!formData.subject) {
      newErrors.subject = "Selecciona un asunto";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("error", "Por favor completa los campos requeridos", {
        position: "top-center",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mpiva24@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Nuevo mensaje: ${formData.subject}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al enviar el formulario. Intenta nuevamente."
        );
      }

      showToast(
        "success",
        "¡Mensaje enviado con éxito! Te contactaremos pronto.",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast(
        "error",
        error instanceof Error
          ? error.message
          : "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
        {
          position: "top-center",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* Fondo */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <section ref={heroRef} className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Conectemos para</span>
            <span className={styles.titleLine2}>
              <span className={styles.highlight}>transformar tu negocio</span>
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Contactanos por el medio que prefieras, estamos disponibles a nivel
            global
          </p>
        </section>

        {/* Sección de Contacto Directo */}
        <section ref={contactCardsRef} className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Medios de contacto directo</h2>
          <p className={styles.sectionSubtitle}>
            Selecciona cualquier opción para comunicarte inmediatamente
          </p>

          <div className={styles.contactGrid}>
            {/* WhatsApp Card */}
            <div
              className={`${styles.contactCard} ${styles.whatsappCard}`}
              tabIndex={0}
              role="button"
              aria-label="Contactar por WhatsApp"
              onClick={() => handleCopy("whatsapp", "+5493424233751")}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCopy("whatsapp", "+5493424233751")
              }
            >
              <div className={styles.cardHeader}>
                <FaWhatsapp className={styles.cardIcon} aria-hidden="true" />
                <h3>WhatsApp Business</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>
                  Ideal para consultas rápidas y comunicación inmediata
                </p>
                <div className={styles.contactInfo}>
                  <span className={styles.infoLabel}>Número:</span>
                  <span className={styles.infoValue}>+54 9 342 423-3751</span>
                  <div className={styles.copyFeedback}>
                    Haz click para copiar
                  </div>
                </div>

                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://wa.me/5493424233751", "_blank");
                  }}
                  aria-label="Abrir chat de WhatsApp"
                >
                  Abrir chat
                </button>
              </div>
            </div>

            {/* Teléfono */}
            <div
              className={`${styles.contactCard} ${styles.phoneCard}`}
              tabIndex={0}
              role="button"
              aria-label="Llamar por teléfono"
              onClick={() => handleCopy("phone", "+5493424233751")}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCopy("phone", "+5493424233751")
              }
            >
              <div className={styles.cardHeader}>
                <FaPhone className={styles.cardIcon} aria-hidden="true" />
                <h3>Llamada telefónica</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>
                  Para conversaciones más detalladas y personales
                </p>
                <div className={styles.contactInfo}>
                  <span className={styles.infoLabel}>Número:</span>
                  <span className={styles.infoValue}>+54 9 342 423-3751</span>
                  <div className={styles.copyFeedback}>
                    Haz click para copiar
                  </div>
                </div>
                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("tel:+5493424233751", "_blank");
                  }}
                  aria-label="Llamar ahora"
                >
                  Llamar ahora
                </button>
              </div>
            </div>

            {/* Email */}
            <div
              className={`${styles.contactCard} ${styles.emailCard}`}
              tabIndex={0}
              role="button"
              aria-label="Enviar correo electrónico"
              onClick={() => handleCopy("email", "contacto@koble.com.ar")}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                handleCopy("email", "contacto@koble.com.ar")
              }
            >
              <div className={styles.cardHeader}>
                <FaEnvelope className={styles.cardIcon} aria-hidden="true" />
                <h3>Correo electrónico</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>
                  Para consultas formales, presupuestos o documentación
                </p>
                <div className={styles.contactInfo}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span className={styles.infoValue}>
                    contacto@koble.com.ar
                  </span>
                  <div className={styles.copyFeedback}>
                    Haz click para copiar
                  </div>
                </div>

                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("mailto:contacto@koble.com.ar", "_blank");
                  }}
                  aria-label="Enviar email"
                >
                  Enviar email
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section ref={formRef} className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Envíanos un mensaje directo</h2>
            <p className={styles.formSubtitle}>
              Completa este formulario y te responderemos a la brevedad
            </p>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    Nombre completo*
                    {errors.name && (
                      <span className={styles.errorMessage}>
                        <FaExclamationCircle /> {errors.name}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ej: Juan Pérez"
                    required
                    aria-required="true"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? styles.inputError : ""}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    Correo electrónico*
                    {errors.email && (
                      <span className={styles.errorMessage}>
                        <FaExclamationCircle /> {errors.email}
                      </span>
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ej: juan@empresa.com"
                    required
                    aria-required="true"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? styles.inputError : ""}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Empresa (opcional)</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+54 9 XXX XXX-XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">
                  Asunto*
                  {errors.subject && (
                    <span className={styles.errorMessage}>
                      <FaExclamationCircle /> {errors.subject}
                    </span>
                  )}
                </label>
                <select
                  id="subject"
                  required
                  aria-required="true"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? styles.inputError : ""}
                >
                  <option value="">Selecciona un tema</option>
                  <option value="consult">Consulta general</option>
                  <option value="quote">Cotización de servicios</option>
                  <option value="support">Soporte técnico</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  Mensaje*
                  {errors.message && (
                    <span className={styles.errorMessage}>
                      <FaExclamationCircle /> {errors.message}
                    </span>
                  )}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe cómo podemos ayudarte..."
                  required
                  aria-required="true"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? styles.inputError : ""}
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.loadingText}>Enviando...</span>
                ) : (
                  <>
                    <FaPaperPlane className={styles.submitIcon} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Sección Alcance Global */}
        <section ref={coverageRef} className={styles.coverageSection}>
          <div className={styles.coverageContent}>
            <div className={styles.coverageText}>
              <FaGlobeAmericas
                className={styles.coverageIcon}
                aria-hidden="true"
              />
              <h2>Servicio global desde Argentina</h2>
              <p>
                Aunque nuestra base operativa está en Santa Fe, Argentina,
                brindamos servicios de consultoría y transformación digital a
                clientes en todo el mundo.
              </p>
            </div>
            <div className={styles.worldMap}>
              <WorldMap />
            </div>
          </div>
        </section>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}
