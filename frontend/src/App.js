import './App.css';
import { Routes } from 'react-router-dom';
import accountRoutes from './routes/accountRoutes';

function App() {
  return (
    <div>
      <Routes>
        {accountRoutes}
      </Routes>
    </div>
  );
}

export default App;
