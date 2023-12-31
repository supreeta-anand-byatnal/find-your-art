import './App.css';
import { Route, Routes } from "react-router-dom";
import EventCard from './components/EventCard/EventCard';
import SearchWithFilters from './pages/SearchWithFilters/SearchWithFilters';
import SearchWithoutFilters from './pages/SearchWithoutFilters/SearchWithoutFilters';
import SuggestionCard from './components/SuggestionCard/SuggestionCard';
import imgsrc1 from './assets/sample_event_card1.jpeg'
import imgsrc2 from './assets/sample_event_card2.jpeg'
import imgsrc3 from './assets/sample_event_card3.jpeg'
import AccountRoutes from "./routes/AccountRoutes";
import { useState } from "react";
import users from './modules/users'
import Verification from './components/Verification/Agreement/Agreement';
import Review from './components/Verification/Review/Review';
import Upload from './components/Verification/Upload/Upload';

import Event from './pages/Event/Event';

function App() {
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [signUpData, setSignUpData] = useState({
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirm: "",
    signUpRole: "",
    signUpFirstName: "",
    signUpLastName: "",
    signUpPronouns: "",
    signUpOrganization: "",
    signUpSubjects: [],
    signUpGroups: [],
    signUpCity: "",
    signUpZip: "",
    signUpWebsite: "",
    signUpLinks: [],
    signUpDisciplines: [],
    signUpAssociations: []
  })

  function handleLoginInput(data) {
    setLoginData({ ...loginData, ...data });
  }

  function handleSignUpInput(data) {
    setSignUpData({ ...signUpData, ...data });
  }

  function handleLoginRequest() {
    users.login(loginData);
  }

  function handleSignUpRequest() {
    users.signUp(signUpData);
  }

  // Sample data for suggestion cards
  const suggestionData = [
    {
      imageUrl: imgsrc1,
      title: 'Event Title 1',
      description: 'Lorem ipsum dolor sit amet consectetur. Sed tincidunt...',
    },
    {
      imageUrl: imgsrc2,
      title: 'Event Title 2',
      description: 'Lorem ipsum dolor sit amet consectetur. Sed tincidunt...',
    },
    {
      imageUrl: imgsrc3,
      title: 'Event Title 3',
      description: 'Lorem ipsum dolor sit amet consectetur. Sed tincidunt...',
    },
  ];
  
  return (
    <div className="App">
      <div className="suggestion-section">
        <h2>Suggestions</h2>
        <div className="suggestion-list">
          {suggestionData.map((data, index) => (
            <SuggestionCard
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <Routes>
        <Route path='/verify' Component={Verification}></Route>
        <Route path='/review' Component={Review}></Route>
        <Route path='/upload' Component={Upload}></Route>
        <Route path="/event" Component={Event}></Route>
      </Routes>
      <Routes>
        <Route path="/searchwithfilters" element={<SearchWithFilters />}></Route>
      </Routes>
      <Routes>
        <Route path="/searchwithoutfilters" element={<SearchWithoutFilters />}></Route>
      </Routes>
      <Routes>
        <Route path="/eventcard" element={<EventCard />}></Route>
      </Routes>
      <AccountRoutes
        loginData={loginData}
        handleLoginInput={handleLoginInput}
        handleLoginRequest={handleLoginRequest}
        signUpData={signUpData}
        handleSignUpRequest={handleSignUpRequest}
        handleSignUpInput={handleSignUpInput}
      />
    </div>
  );
}

export default App;
