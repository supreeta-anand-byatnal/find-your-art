import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';

export default function OrgForm() {
  return (
    <div className="form">
      <h1>Let's set up your Arts Organization profile!</h1>
      <form>
        <SingleField
          inputTitle="Organization name"
          inputID="org-name"
          inputType="text"
          inputPH="Organization name"
        />
        <SingleField
          inputTitle="Website"
          inputID="org-website"
          inputType="text"
          inputPH="www.organization.com"
        />
        <SingleField
          inputTitle="Arts discipline(s)"
          inputID="org-disciplines"
          inputType="text"
          inputPH="Cinema, painting, etc."
        />
        <SingleField
          inputTitle="City"
          inputID="org-city"
          inputType="text"
          inputPH="New York City"
        />
        <button className="form-submit">Next</button>
      </form>
    </div>
  );
}
