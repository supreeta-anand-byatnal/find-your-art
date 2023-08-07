import PropTypes from "prop-types";
import React from "react";
import "./ButtonUpload.css";

const Button = ({ hierarchy, state, className }) => {
  return (
    <div className={`button ${hierarchy} ${state} ${className}`}>
      <div className="div">
        {hierarchy === "primary" && <>Primary</>}

        {hierarchy === "secondary" && <>Secondary</>}

        {hierarchy === "tertiary" && <>Tertiary</>}
      </div>
    </div>
  );
};

Button.propTypes = {
  hierarchy: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  state: PropTypes.oneOf(["disabled", "pressed", "hover", "default"]),
};

export default Button;