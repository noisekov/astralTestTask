import type { FieldValue } from "../pages/Profile/typesProfile";

export type ProfileData = Record<string, FieldValue>;

export interface AuthState {
  isAuthenticated: boolean;
  login: string | null;
}

export interface ProfileState {
  data: ProfileData;
}

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
}

export interface LoginAction {
  type: "login";
  payload: string;
}

export interface LogoutAction {
  type: "logout";
}

export type AuthAction = LoginAction | LogoutAction;

export interface UpdateProfileAction {
  type: "profile/update";
  payload: ProfileData;
}
