import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Setup from "./pages/Setup/Setup";
import SignupForm from "./components/SignupForm";
import RoleForm from "../src/components/RoleForm";
import OrgForm from "./components/OrgForm";
import EducatorForm from "./components/EducatorForm";
import ArtistForm from "../src/components/ArtistForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/signup/artist"
          element={
            <Setup>
              <ArtistForm />
            </Setup>
          }
        ></Route>
        <Route
          path="/signup/organization"
          element={
            <Setup>
              <OrgForm />
            </Setup>
          }
        ></Route>
        <Route
          path="/signup/educator"
          element={
            <Setup>
              <EducatorForm />
            </Setup>
          }
        ></Route>
        <Route
          path="/signup/role"
          element={
            <Setup>
              <RoleForm />
            </Setup>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Setup>
              <SignupForm />
            </Setup>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
