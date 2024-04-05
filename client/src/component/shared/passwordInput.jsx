import React from "react";
import InputIcon from "./InputIcon";

const PasswordInput = ({ name, type, value, placeholder, onChange, iconClassName, showPassword, passwordIconOnClick }) => {
  
  return (
    <div className="form-input-container">
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
      />
      <InputIcon
        className={iconClassName}
        onClick={passwordIconOnClick}
        showPassword={showPassword}
      />
    </div>
  );
};

export default PasswordInput;
