import type { RootState } from "./hooks";

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectLogin = (state: RootState) => state.auth.login;
export const selectProfile = (state: RootState) => state.profile.data;
