import type { Metadata } from "next";
import ServiciosClient from "../../components/ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "CRM personalizados y automatización inteligente para optimizar tu operación comercial. Soluciones hechas a la medida de tu negocio.",
  metadataBase: new URL("https://www.koble.com.ar"),
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios Koble: CRM que hablan tu idioma",
    description:
      "Configuramos la tecnología según tus procesos únicos, no plantillas rígidas",
    url: "https://www.koble.com.ar/servicios",
    type: "website",
    images: [
      {
        url: "/OpenGraphServicios.png",
        width: 1200,
        height: 630,
        alt: "Koble - Servicios de consultoría tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Koble: Tecnología que tu equipo sí usará",
    description: "Capacitación práctica + Acompañamiento permanente",
    images: ["/OpenGraphServicios.png"],
  },
  keywords: [
    "Soluciones a medida",
    "implementación CRM",
    "automatización comercial",
    "análisis de datos",
  ],
};

export default function Servicios() {
  return <ServiciosClient />;
}
