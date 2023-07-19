import React from 'react';
import './Forms.css';

export default function OrgForm() {
  return (
    <div className="form">
      <h1>Let's set up your Arts Organization profile!</h1>
      <form>
        <label for="org-name">Organization name</label>
        <input id="org-name" type="text" placeholder="Organization name" />
        <label for="org-website">Website</label>
        <input
          id="org-website"
          type="text"
          placeholder="www.organization.com"
        />
        <label for="org-disciplines">Arts discipline(s)</label>
        <input
          id="org-disciplines"
          type="text"
          placeholder="Cinema, painting, etc."
        />
        <label for="org-city">City</label>
        <input id="org-city" type="text" placeholder="New York City" />
        <button className="form-submit">Next</button>
      </form>
    </div>
  );
}
