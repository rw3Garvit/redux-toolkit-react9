import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user, post_user } from "./redux-toolkit/api/api";

const App = () => {
  let dispatch = useDispatch();

  let email = useRef();
  let password = useRef();

  let user = useSelector((state) => state.userSlice);
  console.log(user);

  function submit() {
    let user = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(user);

    dispatch(post_user(user));
  }

  useEffect(() => {
    dispatch(get_user());
  }, []);

  if (user.isLoading) <h1>loading</h1>;

  return (
    <div>
      {user.user.map((val, index) => (
        <h1>{val.email}</h1>
      ))}

      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default App;
