export const actionConstants = {
  REGISTER_USER: "REGISTER_USER",
  LOGIN_USER: "LOGIN_USER",
};

export const registerUser = () => {
  return {
    type: actionConstants.REGISTER_USER,
    payload: { isRegister: true },
  };
};

export const loginUser = (token) => {
  return {
    type: actionConstants.LOGIN_USER,
    payload: { isLogin: true, token: token },
  };
};
