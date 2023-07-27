import React from 'react';
import './Account.css';

export default function Setup({ children }) {
  return (
    <div className="setup">
      <div className="setup-side-image" />
      <div className="setup-panel">{children}</div>
    </div>
  );
}
