import React from "react";
import "./Button.scss"
interface ButtonProps {
  buttonName: string;

}
const Button = ({ buttonName }: ButtonProps) => {
  return <button className={"form-button" + (buttonName.toLocaleLowerCase() === "delete" ? " btn-active" : "")}>{buttonName}</button>;
};

export default Button;
