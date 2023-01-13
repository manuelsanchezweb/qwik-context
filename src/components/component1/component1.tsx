import { component$, useContext } from "@builder.io/qwik";
import { UserInformationContext } from "~/root";

export const Component1 = component$(() => {
  const userStore: any = useContext(UserInformationContext);

  return (
    <section>
      <h2>
        Componente 1: <br /> El que cambia los estados en todos los componentes.
      </h2>
      <div>
        <div class="d-flex gap-2 my-2">
          <label for="name">Nombre:</label>
          <input
            name="name"
            id="name"
            value={userStore.name}
            onInput$={(ev) =>
              (userStore.name = (ev.target as HTMLInputElement).value)
            }
          />
        </div>
        <button onClick$={() => (userStore.isLogged = !userStore.isLogged)}>
          Cambiar estado del usuario
        </button>
      </div>
    </section>
  );
});
