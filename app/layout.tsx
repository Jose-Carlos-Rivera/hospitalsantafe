import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABar from "@/components/layout/CTABar";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hospital Santa Fe | Atención Médica de Calidad en Zapotlanejo, Jalisco",
  description: "Hospital Santa Fe ofrece atención médica personalizada desde 2003. Urgencias 24/7, paquetes de maternidad, cirugías, estudios de imagen y especialidades en Zapotlanejo, Jalisco.",
  keywords: ["hospital", "santa fe", "zapotlanejo", "jalisco", "maternidad", "urgencias", "cirugía", "especialidades"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CTABar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
