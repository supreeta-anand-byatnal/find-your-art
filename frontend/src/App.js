import './App.css';
import { Routes } from 'react-router-dom';
import accountRoutes from './routes/accountRoutes';
import Footer from './components/Footer/Footer';
import SuggestionCard from './components/SuggestionCard/SuggestionCard';
import imgsrc1 from './assets/sample_event_card1.jpeg'
import imgsrc2 from './assets/sample_event_card2.jpeg'
import imgsrc3 from './assets/sample_event_card3.jpeg'

function App() {
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
        {accountRoutes}
      </Routes>
    </div>
  );
}

export default App;
