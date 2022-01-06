import { actionConstants } from "./Action";

const initialState = {
  isRegister: false,
  isLogin: false,
  token: null,
  profile: null,
  users: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.LOGIN_USER:
      return { ...state, isLogin: true, token: action.payload.token };
    case actionConstants.REGISTER_USER:
      return { ...state, isRegister: true };
    case actionConstants.GET_PROFILE:
      return { ...state, profile: action.payload.profile };
    case actionConstants.GET_USERS:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}
