# Instructivo de Uso - Bienes Raíces

## 🏠 Bienvenido a Nuestra Plataforma Inmobiliaria

Esta guía te ayudará a navegar y aprovechar todas las funcionalidades de nuestra aplicación web de bienes raíces.

> **⚠️ IMPORTANTE**: Este es un sitio web de muestra/demostración. La información de contacto, números de teléfono y emails mostrados son ficticios y solo para propósitos de demostración. Para usar en producción, debes personalizar toda la información de contacto con los datos reales de tu empresa.

### **🔧 Tecnologías Utilizadas:**
- **Base de datos**: Firestore de Firebase (base de datos en la nube)
- **Autenticación**: Firebase Authentication (sistema de login seguro)
- **Almacenamiento de imágenes**: Cloudinary (servicio gratuito hasta ciertos límites)
- **Usuario de prueba**: admin@gmail.com / 123456

---

## 📱 **Navegación Principal**

### **Barra de Navegación**
En la parte superior de la página encontrarás:
- **Logo "Bienes Raíces"**: Click aquí para volver al inicio
- **Menú de navegación**: Diferentes opciones según tu estado de sesión
- **Botón WhatsApp**: Acceso directo para contactarnos (esquina inferior derecha)

### **En Dispositivos Móviles**
- **Menú hamburguesa**: En la esquina superior derecha
- **Navegación táctil**: Optimizada para pantallas táctiles

---

## 🏘️ **Para Visitantes (Sin Iniciar Sesión)**

### **🏠 Página de Inicio**
**¿Qué encontrarás?**
- Información general sobre nuestra empresa
- Propiedades destacadas en vista previa
- Enlaces rápidos a secciones importantes

**¿Cómo navegar?**
- Click en el logo para volver siempre al inicio
- Scroll para ver más contenido
- Click en "Ver más" en propiedades destacadas

### **🏘️ Propiedades Destacadas**
**¿Qué es?**
- Selección especial de nuestras mejores propiedades
- Propiedades con características únicas o ubicaciones privilegiadas

**¿Cómo usar?**
1. Click en "Propiedades Destacadas" en el menú
2. Explora las propiedades en formato de tarjetas
3. Click en cualquier propiedad para ver detalles completos

**Características de la vista:**
- ✅ Filtrado automático de propiedades destacadas
- ✅ Vista en grid que se adapta a tu pantalla
- ✅ Información básica visible: precio, ubicación, características principales

### **📞 Sección de Contacto**
**¿Qué incluye?**
- Formulario de contacto para consultas
- Información de nuestra oficina
- Datos de contacto directo

**¿Cómo contactarnos?**
1. **Formulario web**: Completa y envía desde la página
2. **WhatsApp**: Click en el botón flotante verde
3. **Teléfono directo**: +54 9 351 706-2293 *(número de muestra)*
4. **Email**: info@bienes_raíces.com *(email de muestra)*

**Información de la oficina:**
- 📍 **Dirección**: San Martín 123, Córdoba, Córdoba *(dirección de muestra)*
- 📞 **Teléfono**: +54 9 351 706-2293 *(número de muestra)*
- 📧 **Email**: info@bienes_raíces.com *(email de muestra)*

> **💡 Nota**: Todos los datos de contacto mostrados son ficticios para demostración. Reemplázalos con la información real de tu empresa antes de usar en producción.

### **🏢 Ver Propiedad Individual**
**¿Cómo acceder?**
- Click en cualquier propiedad desde las listas
- Click en "Ver detalles" en las tarjetas de propiedades

**¿Qué información verás?**
- 📸 **Galería de imágenes**: Múltiples fotos de la propiedad
- 💰 **Precio**: Precio actualizado y forma de pago
- 📍 **Ubicación**: Dirección exacta y mapa interactivo
- 📋 **Características detalladas**:
  - Cantidad de habitaciones y baños
  - Metros cuadrados
  - Tipo de propiedad (casa, departamento, etc.)
  - Servicios incluidos
  - Estado de la propiedad
- 📞 **Botones de contacto directo**

**Funcionalidades en la vista de propiedad:**
- 🔍 **Zoom en imágenes**: Click para ampliar
- 🗺️ **Mapa interactivo**: Ver ubicación exacta
- 📱 **Compartir**: Enlaces para compartir la propiedad
- 💬 **Contacto directo**: Botones para WhatsApp y teléfono

---

## 🔐 **Para Administradores (Con Sesión Iniciada)**

### **Iniciar Sesión**
**¿Cómo acceder?**
1. Click en "Iniciar Sesión" en el menú superior
2. Ingresa tu email y contraseña
3. Click en "Iniciar Sesión"

**Credenciales de prueba:**
- **Email**: admin@gmail.com
- **Contraseña**: 123456

**¿Qué cambia después del login?**
- Aparece el menú "Admin" en la navegación
- Opción "Cerrar Sesión" disponible
- Acceso completo al panel de administración

> **💡 Nota**: Estas credenciales son solo para demostración. En producción, deberás crear usuarios reales en Firebase Authentication.

### **⚙️ Panel de Administración**
**¿Qué puedes hacer aquí?**
- Ver todas las propiedades en formato de tabla
- Crear nuevas propiedades
- Editar propiedades existentes
- Eliminar propiedades
- Gestionar el estado "destacada" de las propiedades

**Navegación del panel:**
- **Vista de tabla**: Todas las propiedades con información básica
- **Botones de acción**: Editar, Eliminar, Ver detalles
- **Filtros**: Buscar y ordenar propiedades

### **📝 Crear Nueva Propiedad**
**¿Cómo crear una propiedad?**
1. Desde el panel admin, click en "Nueva Propiedad"
2. Completa todos los campos requeridos:
   - **Título**: Nombre descriptivo de la propiedad
   - **Precio**: Valor en pesos argentinos
   - **Ubicación**: Dirección completa
   - **Descripción**: Detalles de la propiedad
   - **Imágenes**: Sube múltiples fotos (mínimo 1)
   - **Características**: Habitaciones, baños, metros cuadrados
   - **Tipo de propiedad**: Casa, departamento, terreno, etc.
   - **Estado**: Disponible, vendida, alquilada
   - **Destacada**: Marcar si es una propiedad especial

**Consejos para crear propiedades:**
- 📸 **Imágenes**: Usa fotos de buena calidad y diferentes ángulos
- 📝 **Descripción**: Sé detallado pero claro
- 💰 **Precio**: Mantén precios actualizados
- ⭐ **Destacadas**: Marca solo las mejores propiedades

### **✏️ Editar Propiedad**
**¿Cómo editar?**
1. Desde el panel admin, click en "Editar" en la propiedad deseada
2. Modifica los campos que necesites
3. Click en "Guardar cambios"

**¿Qué puedes editar?**
- ✅ Toda la información básica
- ✅ Precio y disponibilidad
- ✅ Imágenes (agregar o eliminar)
- ✅ Estado de "destacada"
- ✅ Descripción y características

### **🗑️ Eliminar Propiedad**
**¿Cómo eliminar?**
1. Desde el panel admin, click en "Eliminar"
2. Confirma la acción en el diálogo
3. La propiedad se eliminará permanentemente

**⚠️ Importante:**
- Esta acción es **irreversible**
- La propiedad desaparecerá completamente del sitio
- Asegúrate de que realmente quieres eliminarla

### **🚪 Cerrar Sesión**
**¿Cómo salir?**
- Click en "Cerrar Sesión" en el menú superior
- Volverás automáticamente al estado de visitante

---

## 🎯 **Funcionalidades Especiales**

### **🔍 Búsqueda y Filtros**
- **Búsqueda por texto**: Encuentra propiedades por ubicación o características
- **Filtros automáticos**: Las propiedades destacadas se filtran automáticamente
- **Ordenamiento**: Por precio, fecha, ubicación

### **📱 Diseño Responsivo**
- **Desktop**: Vista completa con navegación lateral
- **Tablet**: Adaptación automática del layout
- **Mobile**: Menú hamburguesa y navegación táctil

### **🔄 Actualizaciones en Tiempo Real**
- Los cambios se reflejan inmediatamente en el sitio
- No necesitas recargar la página
- Sincronización automática con la base de datos

---

## 📞 **Soporte y Ayuda**

### **¿Necesitas ayuda?**
- **WhatsApp directo**: +54 9 351 706-2293 *(número de muestra)*
- **Email**: info@bienes_raíces.com *(email de muestra)*
- **Oficina**: San Martín 123, Córdoba, Córdoba *(dirección de muestra)*

> **🔧 Personalización**: Para usar en producción, actualiza todos los datos de contacto en los archivos de configuración de la aplicación con la información real de tu empresa.

### **Problemas comunes:**
- **No puedo iniciar sesión**: Verifica email y contraseña (admin@gmail.com / 123456 para demo)
- **Imágenes no se cargan**: Revisa el tamaño y formato de archivo
- **Cambios no se guardan**: Verifica tu conexión a internet
- **Página no carga**: Intenta recargar o limpiar el caché
- **Error de Firebase**: Verifica la configuración en `src/config/firebase.js`
- **Error de Cloudinary**: Verifica las credenciales de Cloudinary

### **Recomendaciones:**
- 📱 Usa navegadores actualizados (Chrome, Firefox, Safari, Edge)
- 📶 Asegúrate de tener buena conexión a internet
- 💾 Guarda tu trabajo frecuentemente al crear/editar propiedades
- 📸 Optimiza las imágenes antes de subirlas

---

## 🏆 **Mejores Prácticas**

### **Para Administradores:**
- ✅ Mantén precios actualizados
- ✅ Sube fotos de buena calidad
- ✅ Marca como destacadas solo las mejores propiedades
- ✅ Completa toda la información disponible
- ✅ Revisa regularmente las propiedades eliminadas

### **Para Visitantes:**
- ✅ Usa los filtros para encontrar lo que buscas
- ✅ Contacta directamente para consultas específicas
- ✅ Guarda las propiedades que te interesan
- ✅ Comparte propiedades con familiares o amigos

---

**¡Gracias por usar nuestra plataforma de bienes raíces!**

---

## 🔧 **Personalización para Producción**

### **Información que debes cambiar:**
- ✅ **Datos de contacto**: Teléfonos, emails, direcciones
- ✅ **Información de la empresa**: Nombre, logo, descripción
- ✅ **Configuración de Firebase**: Credenciales reales de Firestore y Authentication
- ✅ **Configuración de Cloudinary**: Para gestión de imágenes (plan gratuito disponible)
- ✅ **Información legal**: Políticas, términos y condiciones
- ✅ **Redes sociales**: Enlaces a perfiles reales
- ✅ **Usuarios de administración**: Crear usuarios reales en Firebase Authentication

### **Servicios externos utilizados:**
- **Firebase Firestore**: Base de datos en la nube (plan gratuito disponible)
- **Firebase Authentication**: Sistema de autenticación de usuarios
- **Cloudinary**: Almacenamiento de imágenes (plan gratuito hasta 25GB/mes)

### **Archivos principales a editar:**
- `src/App.vue` - Información del footer y navbar
- `src/views/Contacto.vue` - Datos de contacto
- `src/views/HomeView.vue` - Información de la empresa
- `src/config/firebase.js` - Configuración de Firebase
- `README.md` - Documentación del proyecto

---

© 2025 Bienes Raices. Todos los derechos reservados. 