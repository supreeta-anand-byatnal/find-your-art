import './App.css';
import Footer from './components/Footer/Footer';
import Verification from './components/Verification/agreement';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (  
    <div className="App">
        <Router>
      <Switch>
         <Route path="/verify" component={Verification} />
         </Switch>
      </Router>
     
      
      </div>
  );
}

export default App;
