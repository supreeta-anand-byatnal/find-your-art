import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Create from "./pages/Create/Create";
import SignupForm from "../src/components/SignupForm/SignupForm";
import RoleForm from "../src/components/RoleForm/RoleForm";
import ArtOrgForm from "../src/components/ArtOrgForm/ArtOrgForm";
import EducatorForm from "../src/components/EducatorForm/EducatorForm";
import ArtistForm from "../src/components/ArtistForm/ArtistForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/signup/artist"
          element={
            <Create>
              <ArtistForm />
            </Create>
          }
        ></Route>
        <Route
          path="/signup/organization"
          element={
            <Create>
              <ArtOrgForm />
            </Create>
          }
        ></Route>
        <Route
          path="/signup/educator"
          element={
            <Create>
              <EducatorForm />
            </Create>
          }
        ></Route>
        <Route
          path="/signup/role"
          element={
            <Create>
              <RoleForm />
            </Create>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Create>
              <SignupForm />
            </Create>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
