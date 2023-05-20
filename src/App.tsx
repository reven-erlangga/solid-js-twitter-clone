import { Component } from "solid-js";

import AppRoutes from "./router";
import { useAuthState } from "./context/auth";

const App: Component = () => {
  const authState = useAuthState()!;

  return (
    <>
      <div id="popups" />
      <AppRoutes />
    </>
  );
};

export default App;
