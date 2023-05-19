import { Route, Routes } from "@solidjs/router";
import HomeScreen from "../screens/Home";
import { lazy } from "solid-js";

const LoginScreen = lazy(() => import("../screens/Login"));
const RegisterScreen = lazy(() => import("../screens/Register"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Routes>
  );
};

export default AppRoutes;
