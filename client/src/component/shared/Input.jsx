import React, { useEffect, useState } from "react";

const Input = ({ id, label, type, isRequired, value, onChange, ...extra }) => {
  const [inValid, setInvalid] = useState(false);

  const [opts, setOpts] = useState({
    id: id,
    type: type,
    className: extra.className ? extra.className : "form-control",
    placeholder: extra.placeholder,
    min: extra.min,
    max: extra.max,
    step: extra.step,
  });

  useEffect(() => {
    if (isRequired) {
      setOpts({ ...opts, required: "true" });
    }
  }, []);

  return (
    <div>
      {label ? (
        <label htmlFor={id} className={isRequired === true ? "required" : ""}>
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        {...opts}
        value={value}
        onInvalid={() => setInvalid(true)}
        onChange={(e) => {setInvalid(false); onChange(e)}}
      />
      {inValid ? (
        <span className="text-danger small">
          {document.getElementById(id).validationMessage}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
