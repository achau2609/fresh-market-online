import React from "react";

const Input = ({
  name,
  type,
  label,
  value,
  error,
  placeholder = "",
  isReadOnly,
  isDisable,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        id={name}
        name={name}
        readOnly={isReadOnly ? true : false}
        disabled={isDisable ? "disabled" : ""}
        placeholder={placeholder}
        autocomplete="off"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
