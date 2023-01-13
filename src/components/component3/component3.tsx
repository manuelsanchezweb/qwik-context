import { component$, useContext } from "@builder.io/qwik";
import { UserInformationContext } from "~/root";

export const Component3 = component$(() => {
  // STEP 4: Accede al contexto.

  const userStore: any = useContext(UserInformationContext);
  const renderUserName = (name: string) =>
    name.length === 0 ? "completo desconocido" : name;

  return (
    <section>
      <h2>
        Componente 3: <br />
        Otro afectado. Te muestra un mensajillo dependiendo del estado del
        usuario.
      </h2>
      <div>
        {userStore.isLogged ? (
          <p>
            Bienvenido a la aplicación,{" "}
            <strong>{renderUserName(userStore.name)}</strong>. Un placer tenerte
            aquí de vuelta como siempre.
          </p>
        ) : (
          <p>
            Por desgracia, todavía no tenemos ningún usuario que haya hecho
            login en esta aplicación... Prueba a pulsar el botón que tienes por
            ahí arriba...
          </p>
        )}
      </div>
    </section>
  );
});
