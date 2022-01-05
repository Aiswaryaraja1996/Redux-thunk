import { handleLogin } from "../redux/Api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";

export default function Login() {
  const [loginDtls, setLoginDtls] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "40px auto",
          gap: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleLogin(loginDtls));
          history.push("/dashboard");
        }}
      >
        <label>USERNAME</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setLoginDtls({ ...loginDtls, username: e.target.value })
          }
        />
        <label>PASSWORD</label>
        <input
          type="password"
          required
          onChange={(e) =>
            setLoginDtls({ ...loginDtls, password: e.target.value })
          }
        />

        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}
