// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'es',
        locales: ['es','en'],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: true
        }
    },
    site: "https://emiliodevesa.com"
});
