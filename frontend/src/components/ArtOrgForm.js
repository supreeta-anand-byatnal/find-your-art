import React from "react";
import "./Form.css";

export default function ArtOrgForm() {
  return (
    <div className="form">
      <h1>Let's set up your Arts Organization profile!</h1>
      <form>
        <label for="artorg-name">Organization name</label>
        <input id="artorg-name" type="text" placeholder="Organization name" />
        <label for="artorg-website">Website</label>
        <input
          id="artorg-website"
          type="text"
          placeholder="www.organization.com"
        />
        <label for="artorg-disciplines">Arts discipline(s)</label>
        <input
          id="artorg-disciplines"
          type="text"
          placeholder="Cinema, painting, etc."
        />
        <label for="artorg-city">City</label>
        <input id="artorg-city" type="text" placeholder="New York City" />
        <button className="form-submit">Next</button>
      </form>
    </div>
  );
}
