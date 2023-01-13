import { component$, useContext } from "@builder.io/qwik";
import { UserInformationContext } from "~/root";

export const Component2 = component$(() => {
  // STEP 4: Accede al contexto.
  const userStore: any = useContext(UserInformationContext);

  const renderIconBYState = (state: boolean) => (state === true ? "🟢" : "🔴");
  const renderUserName = (name: string) =>
    name.length === 0 ? "completo desconocido" : name;

  return (
    <section>
      <h2>
        Componente 2: <br /> Muestra el estado de las variables. El primer
        afectado.
      </h2>
      <div>
        <p>Nombre del usuario: {renderUserName(userStore.name)}</p>
        <p>Estado del usuario: {renderIconBYState(userStore.isLogged)} </p>
      </div>
    </section>
  );
});
