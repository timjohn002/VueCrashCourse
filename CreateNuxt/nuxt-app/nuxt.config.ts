// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer:{
    port: 3200,
  },
  serverHandlers: [
    { route: '/api', handler: 'server/middleware/cors.ts'}
  ]
  // nitro: {
  //   devProxy: {
  //     '/api/*': {
  //       target: 'http://localhost:3200',
  //       changeOrigin: true,
  //       headers: {
  //         'Access-Control-Allow-Origin': '*'
  //       }
  //     }
  //   }
  // }
})
