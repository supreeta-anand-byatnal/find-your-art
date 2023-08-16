import './App.css';
import { Route, Routes } from "react-router-dom";
import EventCard from './components/EventCard/EventCard';
import SearchWithFilters from './pages/SearchWithFilters/SearchWithFilters';
import SearchWithoutFilters from './pages/SearchWithoutFilters/SearchWithoutFilters';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/searchwithfilters" element={<SearchWithFilters />}></Route>
      </Routes>
      <Routes>
        <Route path="/searchwithoutfilters" element={<SearchWithoutFilters />}></Route>
      </Routes>
      <Routes>
        <Route path="/eventcard" element={<EventCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
