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
        h2: "Sign Up",
        h3: "Create a new account",
      },
    ],
    arrInput: [
      {
        id: 1,
        title: "email",
        type: "email",
        placeholder: "Email address",
      },
      {
        id: 2,
        title: "First name",
        type: "text",
        placeholder: "First name",
      },
      {
        id: 3,
        title: "LAST name",
        type: "text",
        placeholder: "Last name",
      },
      {
        id: 4,
        title: "new password",
        type: "password",
        placeholder: "Password",
      },
      {
        id: 5,
        title: "confirm new password",
        type: "password",
        placeholder: "Password",
      },
    ],
    submitButton: "Register",
    formHelp: { p: null, a: null },
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
            <Link to="/succes">
              <Button buttonName={arrForm.submitButton}></Button>
            </Link>
          )}
        </form>
        <p className="help">
          {arrForm.formHelp.p && arrForm.formHelp.p}
          <a href="#">{arrForm.formHelp.a && arrForm.formHelp.a}</a>
        </p>
      </div>
    </div>
  );
}

export default App;
