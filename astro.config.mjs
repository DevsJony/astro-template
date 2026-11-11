// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare(),
    integrations: [react()],
    fonts: [{ provider: fontProviders.google(), name: "Geist", cssVariable: "--font-sans" }],
    vite: {
        plugins: [tailwindcss(), babel({ presets: [reactCompilerPreset()] })],
    },
});
