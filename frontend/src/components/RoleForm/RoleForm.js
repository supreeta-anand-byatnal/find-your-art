import React from 'react'
import './RoleForm.css'

export default function RoleForm() {
  return (
    <div className="role-form">
      <h1 id="role-title">Welcome! What is your role?</h1>
      <form> 
        <button id="role-button" type="button" value="teacherEducator">Teacher/Educator</button>
        <button id="role-button" type="button" value="artOrganization">Art organization</button>
        <button id="role-button" value="teachingArtist">Teaching artist</button>
      </form>
    </div>
  )
}
