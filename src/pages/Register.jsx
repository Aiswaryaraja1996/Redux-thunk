import { handleRegister } from "../redux/Api";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerDtls, setregisterDtls] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    mobile: "",
    description: "",
  });
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
          dispatch(handleRegister(registerDtls));
          history.push("/login");
        }}
      >
        <label>NAME</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setregisterDtls({ ...registerDtls, name: e.target.value })
          }
        />
        <label>EMAIL</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setregisterDtls({ ...registerDtls, email: e.target.value })
          }
        />
        <label>USERNAME</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setregisterDtls({ ...registerDtls, username: e.target.value })
          }
        />
        <label>PASSWORD</label>
        <input
          type="password"
          required
          onChange={(e) =>
            setregisterDtls({ ...registerDtls, password: e.target.value })
          }
        />
        <label>MOBILE</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setregisterDtls({ ...registerDtls, mobile: e.target.value })
          }
        />
        <label>DESCRIPTION</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setregisterDtls({ ...registerDtls, description: e.target.value })
          }
        />
        <input type="submit" value="REGISTER" />
      </form>
    </div>
  );
}
