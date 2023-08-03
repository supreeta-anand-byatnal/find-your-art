import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account/Account";
import ArtistForm from "../components/Forms/ArtistForm";
import OrgForm from "../components/Forms/OrgForm";
import RoleForm from "../components/Forms/RoleForm";
import EducatorForm from "../components/Forms/EducatorForm";
import SignupForm from "../components/Forms/SignupForm";
import LoginForm from "../components/Forms/LoginForm/LoginForm";

export default function AccountRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Account>
            <LoginForm />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/artist"
        element={
          <Account>
            <ArtistForm />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/organization"
        element={
          <Account>
            <OrgForm />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/educator"
        element={
          <Account>
            <EducatorForm />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/role"
        element={
          <Account>
            <RoleForm />
          </Account>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <Account>
            <SignupForm />
          </Account>
        }
      ></Route>
    </Routes>
  );
}
