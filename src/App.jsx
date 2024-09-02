import React from "react";
import IndexPage from "./pages/IndexPage";
import AuthPage from "./pages/AuthPage";
import Layout from "./Route/Layout";
import ErrorPage from "./ErrorHandling/Error";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (

<Routes>
<Route index element={<IndexPage />}  errorElement= {<ErrorPage />} /> 
 <Route path="/" element={<Layout />}>
<Route path="AuthPage" element={<AuthPage/>} />
 </Route>
</Routes>

  );
};

export default App;
