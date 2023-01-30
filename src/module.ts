import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {
  publishableKey: string
  apiVersion: string
  locale?: string
  stripeAccount: string
  successUrl: string
  cancelUrl: string
  mode: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "strapi-connect",
    configKey: "strapiConnect",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    publishableKey: "",
    apiVersion: "",
    locale: "en",
    stripeAccount: "",
    successUrl: "",
    cancelUrl: "",
    mode: "payment",
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

    nuxt.hook("listen", async () => {});
  },
});
