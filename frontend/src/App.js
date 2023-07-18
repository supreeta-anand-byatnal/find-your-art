import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Create from "./pages/Create/Create";
import SignupForm from "./components/SignupForm";
import RoleForm from "../src/components/RoleForm";
import OrgForm from "./components/OrgForm";
import EducatorForm from "../src/components/EducatorForm/EducatorForm";
import ArtistForm from "../src/components/ArtistForm";

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
              <OrgForm />
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
