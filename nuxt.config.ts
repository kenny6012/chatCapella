// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        secretKey: "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", //Kenn's secret key (PROD)

        // Keys within public, will be also exposed to the client-side
        public: {
            baseURL: "https://api.openai.com/v1",
            secretKey: "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" //FOR TESTING ONLY
        }
    },    
    modules: [
        '@pinia/nuxt',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/mainstyles.scss" as *;'
                }
            }
        }
    },
    pinia: {
        autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        // automatically imports `defineStore` as `definePiniaStore`
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ]
    },
    app: {
        head: {
            title: 'chatCapella',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                // { src: 'https://awesome-lib.js' }
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
            ],
            // please note that this is an area that is likely to change
            style: [
                // <style type="text/css">:root { color: red }</style>
                // { children: ':root { color: red }', type: 'text/css' }
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                // { children: 'JavaScript is required' }
            ]
        }
    }
})
