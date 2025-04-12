import type { Metadata } from "next";
import NosotrosClient from "@/components/NosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Athina y Giovanni, fundadores de Koble. Dedicados a la transformación digital con enfoque humano y soluciones personalizadas.",
  metadataBase: new URL("https://www.koble.com.ar"),
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "El equipo detrás de Koble | Experiencia y enfoque humano",
    description:
      "Implementando tecnología con sentido para empresas. Conoce nuestra historia y metodología.",
    url: "https://www.koble.com.ar/nosotros",
    type: "website",
    images: [
      {
        url: "/OpenGraphNosotros.png",
        width: 1200,
        height: 630,
        alt: "Equipo Koble - Consultores en transformación digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koble: Tecnología diseñada por humanos para humanos",
    description:
      "Conoce a nuestros fundadores y su enfoque único de consultoría",
    images: ["/OpenGraphNosotros.png"],
  },
  keywords: [
    "equipo Koble",
    "consultores tecnológicos",
    "transformación digital",
    "fundadores Koble",
    "asesoría empresarial",
  ],
};
export default function Nosotros() {
  return <NosotrosClient />;
}
