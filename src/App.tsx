import React, { useState } from "react";
import Login from "./pages/Registration/Login/Login";
import ForgotPass from "./pages/Registration/ForgotPass/ForgotPass";
import SuccesScreen from "./pages/Registration/SuccesScreen/SuccesScreen";
import ResetPassword from "./pages/Registration/ResetPassword/ResetPassword";
import SignUp from "./pages/Registration/SignUp/SignUp";
import Tickets from "./pages/General/Tickets/Tickets";
import Settings from "./pages/General/Settings/Settings";
import Overview from "./pages/General/Overview/Overview";
import Contacts from "./pages/General/Contacts/Contacts";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import AddUser from "./components/AddUser/AddUser";

function App() {
  const [hasAccess, setHasAccess] = useState(false);


  return (
    <>

      <main>


        <Aside />
        <div className="content">

          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPass />} />
            <Route path="/succes" element={<SuccesScreen />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
/*
 <Login />
      <ForgotPass />
      <SuccesScreen />
      <ResetPassword />
      <SignUp />

*/
