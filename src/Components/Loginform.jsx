import React, { useRef } from "react";
import { useAuth } from "../Components/DataStore/AuthProvider";
import { useNavigate } from "react-router-dom";

function Loginform() {
  let userName = useRef();
  let pass = useRef();
  let authContext = useAuth();
  console.log(authContext);
  let navigateTo = useNavigate();
  
  async function getData(e) {
    e.preventDefault();
    console.log(userName.current.value, pass.current.value);
    let response = await authContext.loginIn(
      userName.current.value,
      pass.current.value
    );
    authContext.setCurrentUser({
      userName: userName.current.value,
      pass: pass.current.value,
    });
    console.log(response);
    navigateTo("/Dashboard");
  }

  return (
    <div className="" style={{ width: "300px" }}>
      <form
        action=""
        className="border border-primary p-4 rounded"
        style={{ width: "100%" }}
      >
        <h2 className="mb-4">Sign Up</h2>
        <div
          style={{ width: "100%" }}
          className="userName mb-4 d-flex flex-column align-items-start"
        >
          <label htmlFor="">Username</label>
          <input ref={userName} style={{ width: "100%" }} type="text" />
        </div>

        <div
          style={{ width: "100%" }}
          className="password mb-4 d-flex flex-column align-items-start"
        >
          <label htmlFor="">Password</label>
          <input ref={pass} style={{ width: "100%" }} type="password" />
        </div>
        <button onClick={getData}>getData</button>
      </form>
    </div>
  );
}

export default Loginform;
