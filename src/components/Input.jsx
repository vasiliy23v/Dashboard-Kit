import React from "react";
const Input = ({ title, placeholder, type }) => {
  //const [Visibility, setVisibility] = useState(second);

  return (
    <label className="form-label">
      <span>{title}</span>
      <div
        className={
          type === "password" ? "form-label-box active" : "form-label-box"
        }
      >
        <input type={type} placeholder={placeholder} />
      </div>
    </label>
  );
};

export default Input;
