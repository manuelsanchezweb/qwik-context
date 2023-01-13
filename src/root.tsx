import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";

// STEP 1: Creamos el contexto y lo tipamos correctamente.
// El nombre es un poco secundario, pero mejor que sigamos una convención

interface UserStore {
  name: string;
  isLogged: boolean;
}

export const UserInformationContext =
  createContext<UserStore>("user-information");

export default component$(() => {
  // STEP 2: Creamos el store con los valores iniciales.
  const userStore: UserStore = useStore({
    name: "Max Mustermann",
    isLogged: false,
  });

  useStyles$(globalStyles);

  // STEP 3: Publicaremos el valor al context y seguidamente lo haremos disponible en toda la aplicación. Y ya está. Ya puedes acceder a la info en toda la app.
  useContextProvider(UserInformationContext, userStore);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
