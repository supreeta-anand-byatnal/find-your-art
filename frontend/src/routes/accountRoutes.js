import { Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Setup from '../pages/Setup/Setup';
import ArtistForm from '../components/Forms/ArtistForm';
import OrgForm from '../components/Forms/OrgForm';
import RoleForm from '../components/Forms/RoleForm';
import EducatorForm from '../components/Forms/EducatorForm';
import SignupForm from '../components/Forms/SignupForm';

const accountRoutes = [
  <Route path="/login" element={<Login />}></Route>,
  <Route
    path="/signup/artist"
    element={
      <Setup>
        <ArtistForm />
      </Setup>
    }
  ></Route>,
  <Route
    path="/signup/organization"
    element={
      <Setup>
        <OrgForm />
      </Setup>
    }
  ></Route>,
  <Route
    path="/signup/educator"
    element={
      <Setup>
        <EducatorForm />
      </Setup>
    }
  ></Route>,
  <Route
    path="/signup/role"
    element={
      <Setup>
        <RoleForm />
      </Setup>
    }
  ></Route>,
  <Route
    path="/signup"
    element={
      <Setup>
        <SignupForm />
      </Setup>
    }
  ></Route>,
];

export default accountRoutes;
