import { defineConfig } from 'vite' // Importamos la función de configuración de Vite, el empaquetador ultrarrápido (Vite significa 'rápido' en francés) / We import the configuration function from Vite, the ultra-fast bundler (Vite means 'fast' in French).
import react from '@vitejs/plugin-react' // Importamos el plugin oficial de React para que Vite entienda JSX y lo compile correctamente / We import the official React plugin so Vite understands JSX and compiles it properly.
import tailwindcss from '@tailwindcss/vite' // Plugin de Tailwind v4 para Vite.

// Exportamos la configuración por defecto de Vite / We export the default configuration for Vite.
// ¿Por qué? Para que al ejecutar 'pnpm run dev', Vite sepa qué hacer / Why? So when we run 'pnpm run dev', Vite knows what to do.
export default defineConfig({
  // Añadimos el plugin de React y Tailwind a los plugins de Vite / We add the React and Tailwind plugin to Vite's plugins.
  plugins: [react(), tailwindcss()],
})
