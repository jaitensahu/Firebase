import React from 'react'
import { useAuth } from '../DataStore/AuthProvider'
import Loginform from '../Loginform';
import Error from '../ErrorPage/Error';
import { Button } from 'bootstrap';

const Dashboard = () => {
  let authContext = useAuth();
  console.log(authContext);
  if (Object.keys(authContext.currentUser).length == 0) {
      <h1>UnAuthenticate User Please Logi</h1>;
      return <Error />
  }
  function onLogout() {
      console.log(authContext);
      authContext.logOut();
  
    }
  return (
    <div>
      <h1>DASHBOARD</h1>
      <button type="button" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard
