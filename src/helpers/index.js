export const propertyPrice = (price, currency = 'USD') =>
    Number(price).toLocaleString(currency === 'ARS' ? 'es-AR' : 'en-US', {
        style: 'currency',
        currency: currency
    });
    

// Paleta de colores profesional y moderna para inmobiliaria
export const palette = {
  primary: '#223A5E',    // Azul oscuro (confianza, profesionalismo)
  secondary: '#F6C85F',  // Dorado suave (calidez, elegancia)
  accent: '#3CAEA3',     // Verde esmeralda (moderno, acción)
  info: '#F4F4F9',       // Gris claro (limpieza, contraste)
  error: '#E94F37',      // Rojo alerta
}
    
