import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// METADATOS PRINCIPALES
export const metadata: Metadata = {
  title: {
    default: "Koble - Asesoramiento Empresarial",
    template: "%s | Koble",
  },
  description:
    "Expertos en asesoramiento empresarial. Soluciones integrales para tu negocio.",
  keywords: ["asesoría", "empresas", "consultoría", "negocios"],
  metadataBase: new URL("https://www.koble.com.ar"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" }, // Favicon clásico
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" }, // Para navegadores
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // Para marcadores
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // Para usos generales
      { url: "/icons/favicon.svg", type: "image/svg+xml" }, // Versión vectorial
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" }, // Para dispositivos Apple
    ],
    shortcut: ["/icons/favicon.ico"], // Atajo para compatibilidad
  },
  manifest: "/icons/site.webmanifest", // Para PWA
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${inter.variable}`}>
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
