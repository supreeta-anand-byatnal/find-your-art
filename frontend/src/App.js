import './App.css';
import Footer from './components/Footer/Footer';
import Verification from './components/Verification/Agreement/agreement';
import Review from './components/Verification/Review/Review';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (  
    <div className="App">
        <Router>
      <Switch>
         <Route path="/verify" component={Verification} />
         <Route path="/under-review" component={Review} />
         </Switch>
      </Router>
     
      
      </div>
  );
}

export default App;
