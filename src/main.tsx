import React from 'react' // Imagina que 'React' es la caja de herramientas de un físico; la importamos para tener a la mano las leyes del universo (nuestros componentes) y poder construir la interfaz.
import ReactDOM from 'react-dom/client' // Y aquí traemos al 'constructor' del DOM, el motor termodinámico que toma nuestras ideas teóricas (componentes React) y las plasma en el mundo real del navegador (el DOM), para que el usuario pueda interactuar con ellas.
import App from './App' // Importamos la 'App', que es el átomo principal, el contenedor que engloba toda nuestra aplicación Chronos y los tres flujos críticos que hemos diseñado.
import './index.css' // Finalmente, importamos las leyes de la estética y la física visual; sin esto, nuestro universo sería un caos de texto sin formato, pero con esto, le damos forma orgánica y colores armónicos.

// A continuación, vamos a inicializar el sistema. Usamos ReactDOM.createRoot para establecer el punto de origen de nuestro universo React, buscando el elemento con id 'root' en el HTML. El signo de exclamación es como decirle a TypeScript: "Confía en mí, sé por las leyes del cosmos que este elemento existe".
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Envolvemos todo en React.StrictMode. Es como un entorno de laboratorio riguroso: ejecuta nuestro código dos veces en desarrollo para detectar anomalías cuánticas (bugs ocultos) antes de que lleguen a producción.
  <React.StrictMode>
    <App />
    {/* Lista de Integrantes Minimalista */}
    <div className="fixed bottom-6 left-6 text-left opacity-80 text-gray-200 futuristic-text-subtle text-sm pointer-events-none hover:opacity-100 transition-opacity z-50 drop-shadow-md">
      <p className="mb-2 text-[var(--color-dawn)] font-bold">NODO DE INNOVACIÓN</p>
      <p>Juan Henriquez - 27913162</p>
      <p>Frederick Durán - 30346056</p>
      <p>Diossmer Villamizar - 21310567</p>
      <p>Yesmir Guzman - 20130682</p>
      <p>Jasmar Chirino - 15165088</p>
      <p>Eliezer González - 30667160</p>
    </div>
  </React.StrictMode>, // Cerramos el laboratorio estricto, dejando que nuestro átomo principal 'App' comience a emitir su luz (renderizarse) hacia el usuario.
)
