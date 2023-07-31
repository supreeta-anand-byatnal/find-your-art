import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import LinksField from './LinksField/LinksField';
import TagField from './TagField/TagField';
import DoubleField from './DoubleField/DoubleField';

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
        <LinksField inputTitle="Social Media Link(s)" inputPH="www.yoursocialmedia.com"/>
        <TagField
          inputID="org-discipline"
          inputTitle="Art Disciplines(s)"
          inputPH="Cinema, painting, etc."
        />
        <DoubleField
          leftInputID="org-city"
          rightInputID="org-zip"
          leftInputTitle="City"
          rightInputTitle="Zip Code"
          inputType="text"
          leftInputPH="Atlanta, Seattle, etc."
          rightInputPH="000000"
        />
        <button className="form-submit">Next</button>
      </form>
    </div>
  );
}
