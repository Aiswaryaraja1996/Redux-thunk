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
      alert("Login Successful");
    })
    .catch((err) => alert(err.message));
};
