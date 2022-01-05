import { actionConstants } from "./Action";

const initialState = {
  isRegister: false,
  isLogin: false,
  token: null,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.LOGIN_USER:
      return { ...state, isLogin: true, token: action.payload.token };
    case actionConstants.REGISTER_USER:
      return { ...state, isRegister: true };
    default:
      return state;
  }
}
