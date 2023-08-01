import './App.css';
import { Route, Routes } from "react-router-dom";
import Search from './pages/Search/Search';
import EventCard from './components/EventCard/EventCard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <Routes>
        <Route path="/eventcard" element={<EventCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
