import './App.css';
import accountRoutes from './routes/accountRoutes';
import Verification from './components/Verification/Agreement/Agreement';
import Review from './components/Verification/Review/Review';
import Upload from './components/Verification/Upload/Upload';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
        {accountRoutes}
        <Route path='/verify' Component={Verification}></Route>
        <Route path='/review' Component={Review}></Route>
        <Route path='/upload' Component={Upload}></Route>
      </Routes>
      </div>
  );
}

export default App;
