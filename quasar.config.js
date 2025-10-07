// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig((ctx) => {
  return {
    boot: ['axios'],

    css: ['app.scss'],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
       distDir: 'dist/spa',
      // ✅ เพิ่ม publicPath สำหรับ deploy
      publicPath: '/',
      // ✅ เปลี่ยน router mode เป็น history (URL สวย)
      vueRouterMode: 'history',

      esbuildTarget: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },

      // ✅ เพิ่มตัวอย่าง chainWebpack สำหรับสาธิตการแก้ไข
      chainWebpack(chain) {
        chain.plugin('define').tap((definitions) => {
          definitions[0]['process.env'].APP_VERSION = JSON.stringify('1.0.0')
          return definitions
        })
      }
    },

    devServer: {
      server: { type: 'http' },
      port: 8080,           // ✅ ระบุพอร์ตให้แน่นอน
      open: true            // เปิด browser อัตโนมัติ
    },

    framework: {
      config: {},
      plugins: ['Notify']
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false
    },

    pwa: {
      workboxMode: 'GenerateSW'
    },

    capacitor: { hideSplashscreen: true },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      builder: { appId: 'quasar-project' }
    },

    bex: { extraScripts: [] }
  }
})
