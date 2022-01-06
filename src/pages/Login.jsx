import { handleLogin, getProfile } from "../redux/Api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [loginDtls, setLoginDtls] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);
  const token = useSelector((state) => state.token);
  const profile = useSelector((state) => state.profile);
  return (
    <div>
      {isLogin ? (
        profile ? (
          <div
            style={{
              margin: "3rem auto",
              width: "30%",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>{profile.name}</h2>
            <p>Description:{profile.description}</p>
            <p>Email:{profile.email}</p>
            {setTimeout(() => {
              history.push("/dashboard");
            }, 5000)}
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button
              style={{
                textDecoration: "none",
                borderStyle: "none",
                outline: "none",
                backgroundColor: "skyBlue",
                borderRadius: "0.5rem",
                padding: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(getProfile(loginDtls.username, token));
              }}
            >
              View Profile
            </button>
          </div>
        )
      ) : (
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
      )}
    </div>
  );
}
