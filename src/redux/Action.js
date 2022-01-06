export const actionConstants = {
  REGISTER_USER: "REGISTER_USER",
  LOGIN_USER: "LOGIN_USER",
  GET_PROFILE: "GET_PROFILE",
  GET_USERS: "GET_USERS",
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

export const setProfile = (data) => {
  return {
    type: actionConstants.GET_PROFILE,
    payload: { profile: data },
  };
};

export const getUsers = (data) => {
  return {
    type: actionConstants.GET_USERS,
    payload: { users: data },
  };
};
