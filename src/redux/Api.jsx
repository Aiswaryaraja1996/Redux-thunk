import axios from "axios";
import * as actions from "./Action";

export const handleRegister = (userDetails) => (dispatch) => {
  console.log(userDetails);
  const payLoad = {
    name: userDetails.name,
    email: userDetails.email,
    password: userDetails.password,
    username: userDetails.username,
    mobile: userDetails.mobile,
    description: userDetails.description,
  };
  const config = {
    url: "http://localhost:8080/auth/register",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      console.log(res);
      const registerAction = actions.registerUser();
      dispatch(registerAction);
      alert("Registration successful. Login to continue");
    })
    .catch((err) => alert(err.message));
};

export const handleLogin = (loginDetails) => (dispatch) => {
  const payLoad = {
    username: loginDetails.username,
    password: loginDetails.password,
  };
  const config = {
    url: "http://localhost:8080/auth/login",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      console.log(res);
      const loginAction = actions.loginUser(res.data.token);
      dispatch(loginAction);
    })
    .catch((err) => alert(err.message));
};

export const getProfile = (userName, token) => (dispatch) => {
  const config = {
    url: `http://localhost:8080/user/${userName}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios(config)
    .then((res) => {
      const profileAction = actions.setProfile(res.data);
      dispatch(profileAction);
    })
    .catch((err) => alert(err.message));
};

export const getUserDtls = (user,page=1,perPage=5) => (dispatch) => {
  const config = {
    url: `https://api.github.com/search/users?q=${user}&page=${page}&per_page=${perPage}`,
    method: "GET",
  };
  return axios(config)
    .then((res) => {
      const userAction = actions.getUsers(res.data);
      dispatch(userAction);
    })
    .catch((err) => alert(err.message));
};
