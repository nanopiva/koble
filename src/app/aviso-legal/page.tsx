import AvisoLegalClient from "@/components/AvisoLegalClient";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Términos y condiciones de uso.",
  alternates: {
    canonical: "/aviso-legal",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function AvisoLegal() {
  return <AvisoLegalClient />;
}
