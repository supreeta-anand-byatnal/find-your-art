import React from 'react';
import './Account.css';

export default function Account({ children }) {
  return (
    <div className="account">
      <div className="account-side-image" />
      <div className="account-form">{children}</div>
    </div>
  );
}
