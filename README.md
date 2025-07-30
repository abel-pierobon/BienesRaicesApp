# Bienes Raíces - Aplicación Web

Una aplicación web moderna para gestión y visualización de propiedades inmobiliarias, desarrollada con Vue 3, Vuetify y Firebase.

## 🏠 Características Principales

- **Catálogo de Propiedades**: Visualización completa de todas las propiedades disponibles
- **Propiedades Destacadas**: Sección especial para propiedades destacadas
- **Sistema de Autenticación**: Login seguro para administradores
- **Panel de Administración**: Gestión completa de propiedades (crear, editar, eliminar)
- **Diseño Responsivo**: Interfaz adaptada para dispositivos móviles y desktop
- **Integración con Mapas**: Visualización de ubicaciones con Leaflet
- **Sistema de Imágenes**: Gestión de imágenes con Cloudinary

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase
- Cuenta de Cloudinary (opcional, para gestión de imágenes)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd VMP
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Habilitar Authentication (Email/Password)
   - Copiar las credenciales de configuración
   - Actualizar el archivo `src/config/firebase.js` con tus credenciales

4. **Configurar Cloudinary (opcional)**
   - Crear una cuenta en [Cloudinary](https://cloudinary.com/)
   - Actualizar las credenciales en el backend si es necesario

5. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

6. **Construir para producción**
   ```bash
   npm run build
   ```

## 📱 Cómo Usar la Aplicación

### Para Visitantes (Usuarios No Autenticados)

#### 🏠 Página de Inicio
- **Acceso**: Click en el logo "Bienes Raíces" o en "Inicio"
- **Funcionalidad**: Vista general de la empresa y propiedades destacadas

#### 🏘️ Propiedades Destacadas
- **Acceso**: Click en "Propiedades Destacadas" en el navbar
- **Funcionalidad**: Ver solo las propiedades marcadas como destacadas
- **Características**:
  - Filtrado automático de propiedades destacadas
  - Vista en grid responsive
  - Información básica de cada propiedad

#### 📞 Contacto
- **Acceso**: Click en "Contactanos" en el navbar
- **Funcionalidad**: Formulario de contacto y información de la empresa
- **Características**:
  - Formulario de contacto con validación
  - Información de ubicación y contacto
  - Integración con WhatsApp

#### 🏢 Ver Propiedad Individual
- **Acceso**: Click en cualquier propiedad desde las listas
- **Funcionalidad**: Vista detallada de una propiedad específica
- **Características**:
  - Galería de imágenes
  - Información completa (precio, ubicación, características)
  - Mapa de ubicación
  - Botón de contacto directo

### Para Administradores (Usuarios Autenticados)

#### 🔐 Iniciar Sesión
- **Acceso**: Click en "Iniciar Sesión" en el navbar
- **Funcionalidad**: Formulario de login para administradores
- **Nota**: Las credenciales deben estar configuradas en Firebase Authentication

#### ⚙️ Panel de Administración
- **Acceso**: Click en "Admin" en el navbar (solo visible para usuarios autenticados)
- **Funcionalidad**: Gestión completa de propiedades

##### 📝 Crear Nueva Propiedad
- **Acceso**: Desde el panel admin, click en "Nueva Propiedad"
- **Funcionalidad**: Formulario completo para agregar propiedades
- **Campos requeridos**:
  - Título de la propiedad
  - Precio
  - Ubicación
  - Descripción
  - Imágenes (múltiples)
  - Características (habitaciones, baños, etc.)
  - Marcar como destacada (opcional)

##### ✏️ Editar Propiedad
- **Acceso**: Desde el panel admin, click en "Editar" en cualquier propiedad
- **Funcionalidad**: Modificar información existente de propiedades
- **Características**:
  - Edición de todos los campos
  - Gestión de imágenes (agregar/eliminar)
  - Cambiar estado de destacada

##### 🗑️ Eliminar Propiedad
- **Acceso**: Desde el panel admin, click en "Eliminar" en cualquier propiedad
- **Funcionalidad**: Eliminar propiedades del catálogo
- **Nota**: Acción irreversible, requiere confirmación

#### 🚪 Cerrar Sesión
- **Acceso**: Click en "Cerrar Sesión" en el navbar
- **Funcionalidad**: Cerrar sesión y volver al estado de visitante

## 🎨 Características de la Interfaz

### Diseño Responsivo
- **Desktop**: Navegación completa en la barra superior
- **Mobile**: Menú hamburguesa en la esquina superior derecha
- **Adaptación automática**: Todos los elementos se adaptan al tamaño de pantalla

### Navegación
- **Navbar fijo**: Siempre visible en la parte superior
- **Breadcrumbs**: Navegación clara entre secciones
- **Botón WhatsApp**: Acceso directo al contacto vía WhatsApp

### Colores y Temas
- **Paleta de colores**: Azul profesional con acentos
- **Variables CSS**: Fácil personalización de colores
- **Consistencia visual**: Diseño uniforme en toda la aplicación

## 🔧 Tecnologías Utilizadas

- **Frontend**: Vue 3, Vuetify 3, Vue Router
- **Estado**: Pinia
- **Backend**: Firebase (Firestore, Authentication)
- **Imágenes**: Cloudinary
- **Mapas**: Leaflet
- **Validación**: Vee-validate
- **Build Tool**: Vite

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── views/              # Páginas principales
│   ├── admin/          # Vistas de administración
│   └── ...             # Otras vistas
├── stores/             # Estado global (Pinia)
├── composables/        # Lógica reutilizable
├── config/             # Configuraciones (Firebase)
├── helpers/            # Funciones auxiliares
├── validation/         # Esquemas de validación
└── assets/             # Recursos estáticos
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno para Firebase
3. Desplegar automáticamente

### Otros Servicios
- **Netlify**: Similar a Vercel
- **Firebase Hosting**: Integración nativa con Firebase
- **VPS**: Construir con `npm run build` y servir archivos estáticos

## 🔒 Seguridad

- **Autenticación**: Firebase Authentication
- **Reglas de Firestore**: Configuradas para proteger datos
- **Validación**: Formularios con validación del lado cliente
- **Autorización**: Acceso restringido a funciones administrativas

## 📞 Soporte

- **WhatsApp**: +54 9 351 706-2293
- **Email**: info@bienes_raíces.com
- **Ubicación**: San Martín 123, Córdoba, Córdoba

## 📄 Licencia

© 2024 Bienes Raices. Todos los derechos reservados.
