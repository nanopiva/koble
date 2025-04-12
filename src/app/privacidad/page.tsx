import PrivacidadClient from "@/components/PrivacidadClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo protegemos tus datos personales.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false, // Evita que la página sea indexada
    follow: true, // Permite seguir los enlaces
    nocache: true, // evita caché
    googleBot: {
      index: false,
      follow: true,
    },
  },
};
export default function Privacidad() {
  return <PrivacidadClient />;
}
