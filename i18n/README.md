# Incorporar un idioma

La configuración de idiomas se concentra en `i18n/locales.ts`. El sitio usa
`es` como idioma predeterminado, por lo que sus URLs no llevan prefijo; los
otros idiomas usan `/{código}`.

## Checklist

1. Agrega el idioma y sus nombres en `localeConfig`.
2. Copia `messages/es` a `messages/{código}`, traduce todos los JSON y
   regístralos en `i18n/messages.ts`.
3. Cambia `translationLocale` por el propio código cuando los contenidos de
   tours, FAQs y blog estén revisados. Hasta entonces puede apuntar a `es`.
4. Agrega las traducciones editoriales en los registros de `data/` si el nuevo
   idioma tendrá contenido propio. Las fuentes sin traducción usan el idioma
   de respaldo de forma segura.
5. Si se requiere una URL distinta (como `/tours` en inglés), añade ese valor
   al `pathnames` de `i18n/routing.ts`. Si no, la ruta interna se reutiliza y
   next-intl añade automáticamente el prefijo del idioma.
6. Revisa títulos y descripciones SEO antes de habilitar la versión pública.

El selector, la ruta inicial estática, las URLs del asistente y el sitemap se
alimentan del registro de idiomas; no hay que modificar esos componentes para
añadir un nuevo código.
