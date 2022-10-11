import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
interface InputProps {
  title: string;
  placeholder: string;
  type: string;
  value: any
  seectedArr: any
}
const Input = ({ title, placeholder, type, value, seectedArr }: InputProps) => {
  const [visibility, setVisibility] = useState(false);
  const visibilityToggleHandler = () => setVisibility((prev) => !prev);
  console.log("seectedArr", seectedArr);

  return (
    <label className="form-label">
      <span>{title}</span>
      {type !== "select"
        ?
        <div
          className={
            type === "password" ? "form-label-box active" : "form-label-box"
          }
        >
          <input
            type={visibility ? "text" : type}
            placeholder={placeholder}
            defaultValue={value}
          ></input>
          {type === "password" && (
            <span
              className={visibility ? "active" : ""}
              onClick={visibilityToggleHandler}
            >

              {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>

          )}

        </div>
        :
        (<select className="form-label-box-options" name="" id="cars" form="carform">
          {seectedArr.map((e: any) => <option key={e.name} value={e.name}>{e.name}</option>
          )}
          {/* <option key={e.name} value={e.name}>{e.name}</option> */}
        </select>)
      }


    </label>
  );
};

export default Input;
