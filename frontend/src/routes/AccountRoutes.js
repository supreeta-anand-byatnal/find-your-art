import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account/Account";
import ArtistForm from "../components/Forms/ArtistForm";
import OrgForm from "../components/Forms/OrgForm";
import RoleForm from "../components/Forms/RoleForm";
import EducatorForm from "../components/Forms/EducatorForm";
import SignupForm from "../components/Forms/SignupForm";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import Verification from '../components/Verification/Agreement/Agreement';
import Review from '../components/Verification/Review/Review';
import Upload from '../components/Verification/Upload/Upload';

export default function AccountRoutes({
  loginData,
  handleLoginInput,
  handleLoginRequest,
  signUpData,
  handleSignUpInput,
  handleSignUpRequest,
}) {
  return (
    <Routes>
      <Route path="/verify" Component={Verification}></Route>
      <Route path="/review" Component={Review}></Route>
      <Route path="/upload" Component={Upload}></Route>
      <Route
        path="/login"
        element={
          <Account>
            <LoginForm
              loginData={loginData}
              handleLoginInput={handleLoginInput}
              handleLoginRequest={handleLoginRequest}
            />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/artist"
        element={
          <Account>
            <ArtistForm
              signUpData={signUpData}
              handleSignUpInput={handleSignUpInput}
              handleSignUpRequest={handleSignUpRequest}
            />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/organization"
        element={
          <Account>
            <OrgForm
              signUpData={signUpData}
              handleSignUpInput={handleSignUpInput}
              handleSignUpRequest={handleSignUpRequest}
            />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/educator"
        element={
          <Account>
            <EducatorForm
              signUpData={signUpData}
              handleSignUpInput={handleSignUpInput}
              handleSignUpRequest={handleSignUpRequest}
            />
          </Account>
        }
      ></Route>
      <Route
        path="/signup/role"
        element={
          <Account>
            <RoleForm
              signUpData={signUpData}
              handleSignUpInput={handleSignUpInput}
              handleSignUpRequest={handleSignUpRequest}
            />
          </Account>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <Account>
            <SignupForm
              signUpData={signUpData}
              handleSignUpInput={handleSignUpInput}
              handleSignUpRequest={handleSignUpRequest}
            />
          </Account>
        }
      ></Route>
    </Routes>
  );
}
