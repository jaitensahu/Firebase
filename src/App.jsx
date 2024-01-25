import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputForm from "./Components/InputForm";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Components/DataStore/AuthProvider";
import Loginform from "./Components/Loginform";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element:<InputForm />
    },
    {
      path: '/login',
      element:<Loginform />
    },
    {
      path: '/Dashboard',
      element:<Dashboard />
    }
  ])
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2024, 2, 17);
//     }
//   }
// }
