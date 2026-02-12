import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABar from "@/components/layout/CTABar";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hospital Santa Fe | Atención Médica de Calidad en Zapotlanejo, Jalisco",
    template: "%s | Hospital Santa Fe",
  },
  description:
    "Hospital Santa Fe ofrece atención médica personalizada desde 2003. Urgencias 24/7, más de 20 especialidades, paquetes de maternidad desde $11,000, cirugías y estudios de imagen en Zapotlanejo, Jalisco.",
  keywords: [
    "hospital",
    "santa fe",
    "zapotlanejo",
    "jalisco",
    "maternidad",
    "urgencias",
    "cirugía",
    "especialidades",
    "pediatría",
    "ginecología",
    "hospital privado",
    "consulta médica",
  ],
  metadataBase: new URL("https://hospitalsantafe.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Hospital Santa Fe",
    title: "Hospital Santa Fe | Atención Médica de Calidad en Zapotlanejo",
    description:
      "Más de 20 años brindando atención médica integral. Urgencias 24/7, 20 especialidades, paquetes de maternidad y tecnología de vanguardia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hospitalsantafe.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Hospital Santa Fe",
  description:
    "Hospital privado con más de 20 años de experiencia brindando atención médica de calidad en Zapotlanejo, Jalisco. Urgencias 24/7, 20 especialidades médicas.",
  url: "https://hospitalsantafe.com",
  telephone: ["+52-373-734-4205", "+52-373-106-5183", "+52-333-119-8625"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Galeana No.22",
    addressLocality: "Zapotlanejo",
    addressRegion: "Jalisco",
    postalCode: "45430",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.525694,
    longitude: -103.084389,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  medicalSpecialty: [
    "Medicina General",
    "Ginecología y Obstetricia",
    "Pediatría y Neonatología",
    "Cardiología",
    "Traumatología y Ortopedia",
    "Cirugía General y Laparoscópica",
    "Medicina Interna",
    "Anestesiología",
    "Urología",
    "Otorrinolaringología",
    "Dermatología",
    "Gastroenterología",
    "Neurología y Neurocirugía",
    "Cirugía Plástica y Reconstructiva",
    "Cirugía Maxilofacial",
    "Nefrología",
    "Cirugía Pediátrica",
    "Angiología",
    "Cirugía de Tórax y Cardiovascular",
    "Odontología",
  ],
  priceRange: "$$",
  currenciesAccepted: "MXN",
  paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito",
  hasMap: "https://www.google.com/maps?q=20.525694,-103.084389",
  image: "/images/ultimologo.svg",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CTABar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
