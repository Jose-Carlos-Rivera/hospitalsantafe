export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios Médicos",
    href: "/servicios",
    children: [
      { label: "Todos los servicios", href: "/servicios" },
      { label: "Especialidades", href: "/servicios/especialidades" },
      { label: "Procedimientos Quirúrgicos", href: "/servicios/paquetes" },
      { label: "Estudios de Imagen", href: "/servicios/estudios-imagen" },
      { label: "Cuneros", href: "/servicios/cuneros" },
      { label: "Otros Servicios", href: "/servicios/estudios-imagen#otros-servicios" },
      { label: "Maternidad", href: "/maternidad" },
    ]
  },
  {
    label: "Instalaciones",
    href: "/instalaciones",
    children: [
      { label: "Todas las instalaciones", href: "/instalaciones" },
      { label: "Habitaciones", href: "/instalaciones/habitaciones" },
      { label: "Farmacia", href: "/instalaciones/farmacia" },
      { label: "Cafetería", href: "/instalaciones/cafeteria" },
      { label: "Galería", href: "/instalaciones/galeria" },
    ]
  },
  { label: "Contacto", href: "/contacto" },
];

export const WHATSAPP_NUMBER = "523331198625";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_WHATSAPP = "3331198625";
export const PHONE_WHATSAPP_DISPLAY = "333-119-8625";
export const PHONE_LANDLINE = "3737344205";
export const PHONE_LANDLINE_DISPLAY = "373-734-4205";
export const PHONE_MOBILE = "3731065183";
export const PHONE_MOBILE_DISPLAY = "373-106-5183";

export const HOSPITAL_ADDRESS = {
  street: "Calle Galeana No.22",
  colony: "Santa Fe",
  city: "Zapotlanejo",
  state: "Jalisco",
  full: "Calle Galeana No.22, Santa Fe, Zapotlanejo, Jalisco",
};

export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.0844!3d20.5257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMxJzMyLjUiTiAxMDPCsDA1JzAzLjgiVw!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx";

export const GOOGLE_MAPS_LINK = "https://www.google.com/maps?q=20.525694,-103.084389";

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
