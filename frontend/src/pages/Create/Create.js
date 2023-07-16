import React from "react";
import "./Create.css";
import SignupForm from "../../components/SignupForm/SignupForm";
import RoleForm from '../../components/RoleForm/RoleForm'
import ArtOrgForm from "../../components/ArtOrgForm/ArtOrgForm";
import EducatorForm from "../../components/EducatorForm/EducatorForm";
import ArtistForm from "../../components/ArtistForm/ArtistForm";

export default function Create() {
  return (
    <div className="create">
      <div className="create-side-image" />
      <div className="create-panel"><ArtOrgForm></ArtOrgForm></div>
    </div>
  );
}
