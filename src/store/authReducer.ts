import type { AuthAction, AuthState } from "./storeTypes";

const localStorageLogin = localStorage.getItem("login");

const initialState: AuthState = {
  isAuthenticated: Boolean(localStorageLogin),
  login: localStorageLogin,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case "login":
      localStorage.setItem("login", action.payload);

      return {
        ...state,
        isAuthenticated: true,
        login: action.payload,
      };

    case "logout":
      localStorage.removeItem("login");

      return {
        ...state,
        isAuthenticated: false,
        login: null,
      };

    default:
      return state;
  }
};

export default authReducer;
