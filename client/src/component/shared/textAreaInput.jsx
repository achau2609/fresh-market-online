import React from "react";

const TextAreaInput = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        className="form-control"
        id={name}
        name={name}
        placeholder={label}
        rows="3"
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
