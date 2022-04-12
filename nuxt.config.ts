import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    target: "static",
    app: {
        head: { 
            viewport: "width=device-width, initial-scale=1",
            meta: [
                { charset: 'utf-8' },
                { http_equiv: 'X-UA-Compatible', content: 'IE=edge' }
            ],
            link: [
                { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
                { rel: "icon", href: "/favicon/favicon.ico" },
                { rel: "manifest", href: "/site.webmanifest" },
            ]
        }
    }
})
