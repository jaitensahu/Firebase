import React, { useRef } from "react";
import { useContext } from "react";
import { useAuth } from "../Components/DataStore/AuthProvider";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

// import { getAuth, sendEmailVerification } from "firebase/auth";

function InputForm() {
  let userName = useRef();
  let pass = useRef();
  let confirmPass = useRef();
  let authfromdataStore = useAuth();
  console.log(authfromdataStore.signup);
  const auth = getAuth();

  async function handleClick(e) {
    e.preventDefault();
    if (confirmPass.current.value == pass.current.value) {
      try {
        let response = await authfromdataStore.signup(
          userName.current.value,
          pass.current.value
        );
        console.log(response.user);

        const auth = getAuth();
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
          console.log("Email verification sent!");
        });
        const actionCodeSettings = {
          url: "https://www.example.com/?email=user@example.com",
          iOS: {
            bundleId: "com.example.ios",
          },
          handleCodeInApp: true,
        };
        let xyz = await sendEmailVerification(
          response.user,
          actionCodeSettings
        );

        console.log(xyz);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(error);
    }
  }

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
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
        <div
          style={{ width: "100%" }}
          className="confirmPassword mb-4 d-flex flex-column align-items-start"
        >
          <label htmlFor="">Confirm Password</label>
          <input ref={confirmPass} style={{ width: "100%" }} type="password" />
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Sign Up
        </button>
      </form>

      <Link to="/login">Login</Link>
    </div>
  );
}

export default InputForm;
