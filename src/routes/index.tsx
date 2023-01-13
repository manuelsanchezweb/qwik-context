import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Component1 } from "~/components/component1/component1";
import { Component2 } from "~/components/component2/component2";
import { Component3 } from "~/components/component3/component3";

export default component$(() => {
  return (
    <>
      <section>
        <h1>
          Bienvenido al tutorial de useContext con Qwik{" "}
          <span class="lightning">⚡️</span>
        </h1>
      </section>
      <div class="my-4">
        <h2>Qué vamos a hacer</h2>
        <p>
          Vamos a aprender a utilizar los tres métodos más importantes de la
          context API de Qwik. Más información{" "}
          <a
            title="Documentación oficial de Context API de Qwik"
            target="_blank"
            rel="nofollow noopener"
            href="https://qwik.builder.io/docs/components/context/"
          >
            aquí
          </a>{" "}
          y{" "}
          <a
            title="Entorno de prácticas de Context API de Qwik"
            target="_blank"
            rel="nofollow noopener"
            href="https://qwik.builder.io/tutorial/context/basic/"
          >
            aquí
          </a>
          .
        </p>
        <ul>
          <li>
            <code>createContext(contextName: string): Context</code>
          </li>
          <li>
            <code>useContextProvider(ctx: Context, value: VALUE): Context</code>
          </li>
          <li>
            <code>useContext(ctx: Context): VALUE</code>
          </li>
        </ul>

        <ol>
          <li>
            Con <code>createContext</code> lo que vamos a hacer es crear el
            context de por sí. Necesitamos darle un nombre como argumento, así
            que procura seguir algún tipo de convención.
          </li>
          <li>
            Con <code>useContextProvider</code> pasaremos como primer argumento
            el context que acabamos de crear y como segundo argumento el estado
            inicial del context (que hemos creado previamente usando useStore).
          </li>
          <li>
            Finalmente, con <code>useContext</code> accederemos en cualquier
            componente de nuestra aplicación a toda la información que habíamos
            pasado en el provider.
          </li>
        </ol>
        <p>
          Te explico los pasos detalladamente en el código que encontrarás{" "}
          <a
            title="Repositorio de Manuel Sanchez sobre la Context API de Qwik"
            target="_blank"
            rel="nofollow noopener"
            href="https://github.com/manuelsanchezweb/qwik-context"
          >
            en el repositorio de este proyecto.
          </a>{" "}
          Así podrás ver cómo he realizado el context que tienes justo debajo.
        </p>
      </div>
      <div class="grid-combo gap-4">
        <Component1 />
        <Component2 />
      </div>
      <Component3 />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
