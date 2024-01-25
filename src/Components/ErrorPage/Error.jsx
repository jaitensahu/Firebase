import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    let navigateTo = useNavigate()
    {
      setTimeout(() => {
        navigateTo("/login");
      }, 3000);
    }
  return (
    <div>
          <h1>UnAuthenticate User</h1>
          Returning to login page...

          
    </div>
  );
}

export default Error
