import { useHistory } from "react-router-dom";
import { getUserDtls } from "../redux/Api";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const isRegister = useSelector((state) => state.isRegister);
  const isLogin = useSelector((state) => state.isLogin);
  const userList = useSelector((state) => state.users.items);
  const [page, setPage] = useState(1);

  // if (!isRegister && !isLogin) {
  //   return <Redirect exact to="/"></Redirect>;
  // }

  useEffect(() => {
    if (userList && user) {
      dispatch(getUserDtls(user, page));
    }
  }, [page]);

  return (
    <div>
      {userList ? (
        <div>
          <div
            style={{
              display: "flex",
              width: "20%",
              margin: "1rem auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => {
                if (page === 1) {
                  setPage(1);
                } else setPage(page - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </div>
          {userList.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                border: "1px solid black",
                width: "20%",
                margin: "1rem auto",
                padding: "1rem",
                borderRadius: ".5rem",
              }}
            >
              <h2>{item.login}</h2>
              <img src={item.avatar_url} alt={item.id} width="30%" />
            </div>
          ))}
        </div>
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
            dispatch(getUserDtls(user));
          }}
        >
          <h2>Search for GITHUB Users</h2>
          <input
            type="text"
            required
            onChange={(e) => setUser(e.target.value)}
          />

          <input type="submit" value="SEARCH" />
        </form>
      )}
    </div>
  );
}
