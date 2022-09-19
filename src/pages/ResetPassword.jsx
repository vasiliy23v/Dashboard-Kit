import logo from "../images/logo.svg";
import "../App.scss";
import Input from "../components/Input";
import Button from "../components/Button";
import Description from "../components/Descripton";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const arrForm = {
    headingForm: [
      {
        h2: "Reset Password",
        h3: "Enter new password",
      },
    ],
    arrInput: [
      {
        id: 1,
        title: "new password",
        type: "password",
        placeholder: "Password",
      },
      {
        id: 2,
        title: "confirm new password",
        type: "password",
        placeholder: "Password",
      },
    ],
    submitButton: "Send",
    formHelp: { p: "Don’t have an account?", a: "Sign up" },
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="logo-block">
          <img src={logo} alt="logo" className="logo" />
          <p>Dashboard Kit</p>
        </div>
        {arrForm.headingForm.map(
          (form) =>
            form && <Description key={form.h2} h2={form.h2} h3={form.h3} />
        )}
        <form className="form">
          {arrForm.arrInput.map(
            (input) =>
              input && (
                <Input
                  key={input.id}
                  title={input.title}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              )
          )}
          {arrForm.submitButton && (
            <Link to="/">
              <Button buttonName={arrForm.submitButton}></Button>
            </Link>
          )}
        </form>
        <p className="help">
          {arrForm.formHelp.p && arrForm.formHelp.p}
          <Link to="/signup">
            <a href="#">{arrForm.formHelp.a && arrForm.formHelp.a}</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
