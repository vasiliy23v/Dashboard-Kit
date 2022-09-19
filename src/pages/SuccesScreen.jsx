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
        h2: "Forgot password?",
        h3: "Link to change your password has been sent to provided email if we have it inside our system",
      },
    ],
    arrInput: [],
    submitButton: "Back to Login",
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
            <Link to="/">
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
