import React from "react";
import "./ArtOrgForm.css";

export default function ArtOrgForm() {
  return (
    <div id="artorg-form">
      <h1 id="artorg-title">Let's set up your Arts Organization profile!</h1>
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
        <button id="artorg-button">Next</button>
        <p id="artorg-later">Set up profile details later &#8594;</p>
      </form>
    </div>
  );
}
