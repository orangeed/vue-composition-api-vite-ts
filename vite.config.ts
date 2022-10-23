import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { createVuePlugin } from "vite-plugin-vue2";
import viteCompression from "vite-plugin-compression";

const HOST = "0.0.0.0";

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "./",
    server: {
      host: HOST,
      // port: process.env.PORT,
      // port:import.meta.env.PROD
    },

    css: {
      postcss: {
        plugins: [
          require("tailwindcss"),
          require("autoprefixer"),
        ]
      }
    },

    plugins: [
      createVuePlugin(/* options */),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      viteCompression(),
    ],
  });
};
