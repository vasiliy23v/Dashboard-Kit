import React from "react";

import logo from "../images/logo.svg";
import "../../../App.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Description from "../../../components/Description/Descripton";
import { Routes, Route, Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import { SuccesScreen as arrForm } from "../modalConfig"

interface InputProps {
  title: string;
  id: number;
  type: string,
  placeholder: string,
  seectedArr: any
}



function SuccesScreen() {


  return (
    <div className="wrapper">
      <div className="container">
        <Logo />
        {arrForm.headingForm.map(
          (form) =>
            form && <Description key={form.h2} h2={form.h2} h3={form.h3} />
        )}
        <form className="form">
          {arrForm.arrInput.map(
            (input: InputProps) =>
              input && (
                <Input
                  key={input.id}
                  title={input.title}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={undefined}
                  seectedArr={input.seectedArr}
                />
              )
          )}
          {arrForm.submitButton && (
            <Link to="/login">
              <Button buttonName={arrForm.submitButton}></Button>
            </Link>
          )}
        </form>
        <p className="help">
          {arrForm.formHelp.p && arrForm.formHelp.p}
          <span>{arrForm.formHelp.a && arrForm.formHelp.a}</span>
        </p>
      </div>
    </div>
  );
}

export default SuccesScreen;
