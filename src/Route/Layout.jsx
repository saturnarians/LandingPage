import React from 'react';
import { Outlet, Link } from "react-router-dom";





const layout = () => {
  return (
  <>
  <div>
 
         {/*   <Link to="/">Home</Link> */}

        <Link to="/AuthPage"></Link>
        <Link to="/id-verification"> </Link>
        <Link to="/seed-phrase-verification"> </Link>
        <Link to="/camera-verification"> </Link>


      <Outlet />
         
  </div>
  </> 
  )
}

export default layout;