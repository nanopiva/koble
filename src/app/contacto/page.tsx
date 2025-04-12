import ContactoClient from "@/components/ContactoClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para transformar tu negocio. WhatsApp, teléfono, email o formulario. Servicios globales desde Argentina.",
  metadataBase: new URL("https://www.koble.com.ar"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacta al equipo Koble | Consultoría en transformación digital",
    description:
      "Obtén tu diagnóstico gratuito. Soluciones CRM y automatización para empresas en todo el mundo.",
    url: "https://www.koble.com.ar/contacto",
    type: "website",
    images: [
      {
        url: "/OpenGraphContacto.png",
        width: 1200,
        height: 630,
        alt: "Contacta a Koble - Consultoría tecnológica global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Listo para transformar tu empresa? | Contacto Koble",
    description: "Conversemos sobre cómo optimizar tus procesos comerciales",
    images: ["/OpenGraphContacto.png"],
  },
  keywords: [
    "contacto Koble",
    "consultoría tecnológica",
    "implementación CRM",
    "soporte empresarial",
    "asesoría digital",
  ],
};
export default function Contacto() {
  return <ContactoClient />;
}
