export type LoginAction = {
  type: "login";
  payload: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  login: string | null;
}
