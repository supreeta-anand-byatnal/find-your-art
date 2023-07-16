import React from "react";
import "./Create.css";

export default function Create({ children }) {
  return (
    <div className="create">
      <div className="create-side-image" />
      <div className="create-panel">{children}</div>
    </div>
  );
}
