import {
  createContext,
  onCleanup,
  onMount,
  ParentComponent,
  Setter,
  Show,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import Loader from "../utils/Loader";

type AuthStateContextValues = {
  isAuthenticated: boolean;
  loading: boolean;
};

const initialState = () => ({
  isAuthenticated: false,
  loading: true,
});

const AuthStateContext = createContext<AuthStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore(initialState());

  onMount(async () => {
    try {
      await authenticateUser();
      setStore("isAuthenticated", true);
    } catch (error: any) {
      console.log(error);
      setStore("isAuthenticated", false);
    } finally {
      setStore("loading", false);
    }
  });

  onCleanup(() => {
    console.log("Cleaning-up AuthProvider!");
  });

  const authenticateUser = async () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // res(true);
        rej("Ooopsie we got some problem here");
      }, 1000);
    });
  };

  return (
    <AuthStateContext.Provider value={store}>
      <Show when={store.loading} fallback={props.children}>
        <Loader size={100} />
      </Show>
      {props.children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
