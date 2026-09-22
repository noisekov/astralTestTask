import { combineReducers, createStore } from "redux";

import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("profile", JSON.stringify(state.profile.data));
});
