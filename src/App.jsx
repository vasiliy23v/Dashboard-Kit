import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import SuccesScreen from "./pages/SuccesScreen";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/succes" element={<SuccesScreen />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
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
