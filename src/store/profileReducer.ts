import type { ProfileState, UpdateProfileAction } from "./storeTypes";

const getInitialProfile = (): ProfileState => {
  const savedProfile = localStorage.getItem("profile");

  if (!savedProfile) {
    return {
      data: {},
    };
  }

  try {
    return {
      data: JSON.parse(savedProfile),
    };
  } catch {
    return {
      data: {},
    };
  }
};

const initialState = getInitialProfile();

const profileReducer = (
  state: ProfileState = initialState,
  action: UpdateProfileAction,
): ProfileState => {
  switch (action.type) {
    case "profile/update":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
