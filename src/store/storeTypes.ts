import type { store } from "./store";

export type LoginAction = {
  type: "login";
  payload: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  login: string | null;
}

export type RootState = ReturnType<typeof store.getState>;
