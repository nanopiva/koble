import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koble - Transformación Digital para Empresas",
  description:
    "Soluciones tecnológicas personalizadas que optimizan procesos, aumentan ventas y mejoran la toma de decisiones",
  metadataBase: new URL("https://www.koble.com.ar"), // Reemplaza con tu dominio
  alternates: {
    canonical: "/", // URL canónica para la home
  },
  openGraph: {
    title: "Koble - Tecnología con Propósito Empresarial",
    description:
      "CRM y automatización diseñados específicamente para tu modelo de negocio",
    url: "https://www.koble.com.ar",
    type: "website",
    images: [
      {
        url: "/OpenGraphInicio.png",
        width: 1200,
        height: 630,
        alt: "Koble - Soluciones empresariales tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OpenGraphInicio.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
