import { createStore } from "redux";
import type { AuthState, LoginAction } from "./storeTypes";

const initialState: AuthState = {
  isAuthenticated: false,
  login: null,
};

function authenticatedReducer(
  state: AuthState = initialState,
  action: LoginAction,
) {
  switch (action.type) {
    case "login":
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
