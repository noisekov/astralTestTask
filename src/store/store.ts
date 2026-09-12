import { createStore } from "redux";
import type { AuthState, LoginAction } from "./storeTypes";

const localStorageLogin = localStorage.getItem("login");

const initialState: AuthState = {
  isAuthenticated: Boolean(localStorageLogin),
  login: localStorageLogin,
};

function authenticatedReducer(
  state: AuthState = initialState,
  action: LoginAction,
) {
  switch (action.type) {
    case "login":
      localStorage.setItem("login", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        login: action.payload,
      };
    default:
      return state;
  }
}

export const store = createStore(authenticatedReducer);
