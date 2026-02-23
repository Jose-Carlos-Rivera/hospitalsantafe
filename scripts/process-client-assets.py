#!/usr/bin/env python3
"""Convert client assets (PNG/JPG) to WebP for the Hospital Santa Fe website."""

from PIL import Image
import os
import shutil

SRC = "/Users/josecarlosrivera/Desktop/Contenido Web hospital santa fe"
DST = "/Users/josecarlosrivera/hospitalsantafe/public/images/hospital"

def convert_to_webp(src_path, dst_path, max_width=1200, quality=82):
    """Convert an image to WebP with resizing."""
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    img = Image.open(src_path)
    # Fix orientation from EXIF
    try:
        from PIL import ExifTags
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        exif = img._getexif()
        if exif and orientation in exif:
            if exif[orientation] == 3:
                img = img.rotate(180, expand=True)
            elif exif[orientation] == 6:
                img = img.rotate(270, expand=True)
            elif exif[orientation] == 8:
                img = img.rotate(90, expand=True)
    except (AttributeError, KeyError, IndexError):
        pass
    # Convert to RGB if needed
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGBA')
    else:
        img = img.convert('RGB')
    # Resize if too large
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)
    img.save(dst_path, 'WebP', quality=quality)
    src_size = os.path.getsize(src_path)
    dst_size = os.path.getsize(dst_path)
    print(f"  {os.path.basename(src_path)}: {src_size//1024}KB -> {dst_size//1024}KB WebP")

def slugify(name):
    """Convert filename to URL-friendly slug."""
    import unicodedata
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    name = name.lower().strip()
    name = name.replace(' ', '-').replace('_', '-').replace('.', '-')
    # Remove multiple dashes
    while '--' in name:
        name = name.replace('--', '-')
    name = name.strip('-')
    return name

# ============================================================
# 1. ESPECIALIDADES
# ============================================================
print("\n=== ESPECIALIDADES ===")
esp_src = os.path.join(SRC, "Especialidades")
esp_dst = os.path.join(DST, "especialidades")
os.makedirs(esp_dst, exist_ok=True)

esp_mapping = {
    "Angiología.png": "angiologia.webp",
    "Cardiología.png": "cardiologia.webp",
    "Cirugia general.png": "cirugia-general.webp",
    "Cirugías plasticas.png": "cirugia-plastica.webp",
    "Fisioterapia.png": "fisioterapia.webp",
    "Geriatría.png": "geriatria.webp",
    "Ginecología.png": "ginecologia.webp",
    "Internista.png": "internista.webp",
    "MedicinaGeneral.png": "medicina-general.webp",
    "Neurología.png": "neurologia.webp",
    "nefrología.png": "nefrologia.webp",
    "Nutrición.png": "nutricion.webp",
    "Oftalmologo.png": "oftalmologia.webp",
    "Ortopedia.png": "ortopedia.webp",
    "Otorrino.png": "otorrino.webp",
    "Pediatría.png": "pediatria.webp",
    "Psicología.png": "psicologia.webp",
    "Reumatologó.png": "reumatologia.webp",
    "Urología.png": "urologia.webp",
}

for src_name, dst_name in esp_mapping.items():
    src_path = os.path.join(esp_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(esp_dst, dst_name))
    else:
        print(f"  WARNING: {src_name} not found")

# ============================================================
# 2. DOCTORES
# ============================================================
print("\n=== DOCTORES ===")
doc_src = os.path.join(SRC, "Fotografías médicos principales")
doc_dst = os.path.join(DST, "doctores")
os.makedirs(doc_dst, exist_ok=True)

doc_mapping = {
    "1. Dr. Juan Manuel Dávalos_ Director del Área Médica.png": "dr-juan-manuel-davalos.webp",
    "2. Dra. María González_Coordinadora de Médicos.png": "dra-maria-gonzalez.webp",
    "3. Dr. Javier Barajas_Cirujano General.png": "dr-javier-barajas.webp",
}

for src_name, dst_name in doc_mapping.items():
    src_path = os.path.join(doc_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(doc_dst, dst_name), max_width=800)
    else:
        print(f"  WARNING: {src_name} not found")

# ============================================================
# 3. HABITACIONES
# ============================================================
print("\n=== HABITACIONES ===")
hab_src = os.path.join(SRC, "Habitaciones")
hab_dst = os.path.join(DST, "habitaciones")
os.makedirs(hab_dst, exist_ok=True)

hab_mapping = {
    "Habitacion Normal.jpg": "normal-1.webp",
    "Habitación Normal.jpg": "normal-2.webp",
    "Habitación Normal_1.jpg": "normal-3.webp",
    "Habitacion Suite_.jpg": "suite-1.webp",
    "Habitacion Suite_1.jpg": "suite-2.webp",
    "Habitacion Master Suite.jpg": "mastersuite-1.webp",
    "Habitacion Master Suite_1.jpg": "mastersuite-2.webp",
    "Habitación Master Suite_.jpg": "mastersuite-3.webp",
    "Habitación Master Suite_2.jpg": "mastersuite-4.webp",
    "Habitación Master Suite_3.jpg": "mastersuite-5.webp",
    "Habitación Master Suite_4.jpg": "mastersuite-6.webp",
    "Habitación Master Suite baño.jpg": "mastersuite-bano.webp",
}

for src_name, dst_name in hab_mapping.items():
    src_path = os.path.join(hab_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(hab_dst, dst_name))
    else:
        print(f"  WARNING: {src_name} not found")

# ============================================================
# 4. INSTALACIONES - Nuevas fotografías
# ============================================================
print("\n=== INSTALACIONES (Nuevas) ===")
inst_src = os.path.join(SRC, "Instalaciones", "Nuevas fotografias instalaciones")
inst_dst = os.path.join(DST, "instalaciones")
os.makedirs(inst_dst, exist_ok=True)

inst_mapping = {
    "Capilla.jpg": "capilla.webp",
    "Capilla_1.jpg": "capilla-1.webp",
    "Capilla_2.jpg": "capilla-2.webp",
    "Cuneros.jpg": "cuneros.webp",
    "Entrada estacionamiento(subir a apartado Nosotros).jpg": "entrada-estacionamiento-nosotros.webp",
    "Entrada estacionamiento_.jpg": "entrada-estacionamiento.webp",
    "Entrada estacionamiento_1.jpg": "entrada-estacionamiento-1.webp",
    "Entrada estacionamiento_2.jpg": "entrada-estacionamiento-2.webp",
    "Eslogan.jpg": "eslogan.webp",
    "Farmacia_.jpg": "farmacia-nueva.webp",
    "Pasillos.jpg": "pasillos.webp",
    "Pasillos_1.jpg": "pasillos-1.webp",
    "Recepcion 2.jpg": "recepcion-2.webp",
    "Recepcion principal Dr. Juan Manuel.jpg": "recepcion-dr-juan-manuel.webp",
    "Recepcion principal Dr. Juan Manuel_1.jpg": "recepcion-dr-juan-manuel-1.webp",
    "Recepcion principal.jpg": "recepcion-principal.webp",
    "Sala General.jpg": "sala-general.webp",
    "Servicios.jpg": "servicios.webp",
}

for src_name, dst_name in inst_mapping.items():
    src_path = os.path.join(inst_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(inst_dst, dst_name))
    else:
        print(f"  WARNING: {src_name} not found")

# ============================================================
# 4b. INSTALACIONES - Fotos originales
# ============================================================
print("\n=== INSTALACIONES (Fotos originales) ===")
inst_orig_src = os.path.join(SRC, "Instalaciones", "Fotos de instalaciones ")

inst_orig_mapping = {
    "Area de hospitalizacion.jpg": "area-hospitalizacion.webp",
    "Area de hospitalizacion_1.jpg": "area-hospitalizacion-1.webp",
    "Area de hospitalizacion_3.jpg": "area-hospitalizacion-3.webp",
    "Area de hospitalizacion_4.jpg": "area-hospitalizacion-4.webp",
    "Area de hospitalizacion_5.jpg": "area-hospitalizacion-5.webp",
    "Cafeteria.jpg": "cafeteria.webp",
    "Cafeteria_1.jpg": "cafeteria-1.webp",
    "Consultorios.jpg": "consultorios.webp",
    "Consultorios_1.jpg": "consultorios-1.webp",
    "Estacionamiento_1.jpg": "estacionamiento-1.webp",
    "Estacionamiento_2.jpg": "estacionamiento-2.webp",
    "Estacionamiento_3.jpg": "estacionamiento-3.webp",
    "Quirofanos.jpg": "quirofanos.webp",
    "Quirofanos_1.jpg": "quirofanos-1.webp",
    "Quirofanos_2.jpg": "quirofanos-2.webp",
    "Quirofanos_3.jpg": "quirofanos-3.webp",
    "Quirofanos_4.jpg": "quirofanos-4.webp",
    "Quirofanos_5.jpg": "quirofanos-5.webp",
    "Quirofanos_6.jpg": "quirofanos-6.webp",
    "Quirofanos_7.jpg": "quirofanos-7.webp",
    "Recepcion.jpg": "recepcion.webp",
}

for src_name, dst_name in inst_orig_mapping.items():
    src_path = os.path.join(inst_orig_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(inst_dst, dst_name))
    else:
        print(f"  WARNING: {src_name} not found")

# ============================================================
# 5. LOGOTIPO
# ============================================================
print("\n=== LOGOTIPO ===")
logo_src = os.path.join(SRC, "Logotipo ")
logo_dst = os.path.join(DST, "..")  # public/images/
os.makedirs(logo_dst, exist_ok=True)

logo_mapping = {
    "Logotipo fondo blanco.png": "logo-nuevo.webp",
    "logo hospital santa fe.png": "logo-hospital.webp",
}

for src_name, dst_name in logo_mapping.items():
    src_path = os.path.join(logo_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(logo_dst, dst_name), max_width=600, quality=90)
    else:
        print(f"  WARNING: {src_name} not found")

# Also keep PNG versions for logo (better quality for small icons)
for src_name, dst_name in [("Logotipo fondo blanco.png", "logo-nuevo.png"), ("logo hospital santa fe.png", "logo-hospital.png")]:
    src_path = os.path.join(logo_src, src_name)
    if os.path.exists(src_path):
        img = Image.open(src_path)
        if img.width > 600:
            ratio = 600 / img.width
            img = img.resize((600, int(img.height * ratio)), Image.LANCZOS)
        img.save(os.path.join(logo_dst, dst_name), quality=95)
        print(f"  {src_name} -> {dst_name} (PNG copy)")

# ============================================================
# 6. SERVICIOS (imágenes)
# ============================================================
print("\n=== SERVICIOS ===")
svc_src = os.path.join(SRC, "Servicios")
svc_dst = os.path.join(DST, "servicios")
os.makedirs(svc_dst, exist_ok=True)

svc_mapping = {
    "Electrocardiograma.png": "electrocardiograma.webp",
    "RetiroDeVerrugas.png": "retiro-verrugas.webp",
    "UñasEnterradas.png": "unas-enterradas.webp",
}

for src_name, dst_name in svc_mapping.items():
    src_path = os.path.join(svc_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(svc_dst, dst_name))
    else:
        print(f"  WARNING: {src_name} not found")

# ============================================================
# 7. PAQUETES DE MATERNIDAD
# ============================================================
print("\n=== PAQUETES DE MATERNIDAD ===")
mat_src = os.path.join(SRC, "Paquetes de maternidad")
mat_dst = os.path.join(DST, "maternidad")
os.makedirs(mat_dst, exist_ok=True)

mat_mapping = {
    "Paquete cesárea.png": "paquete-cesarea.webp",
    "Paquete parto.png": "paquete-parto.webp",
    "Paquetes de maternidad.png": "paquetes-maternidad.webp",
}

for src_name, dst_name in mat_mapping.items():
    src_path = os.path.join(mat_src, src_name)
    if os.path.exists(src_path):
        convert_to_webp(src_path, os.path.join(mat_dst, dst_name))
    else:
        print(f"  WARNING: {src_name} not found")

print("\n=== DONE ===")
print(f"\nTotal WebP files created:")
for root, dirs, files in os.walk(DST):
    webp_files = [f for f in files if f.endswith('.webp')]
    if webp_files:
        rel = os.path.relpath(root, DST)
        print(f"  {rel}: {len(webp_files)} files")
