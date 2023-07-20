import './App.css';
import Footer from './components/Footer/Footer';
import SuggestionCard from './components/SuggestionCard/SuggestionCard';

function App() {
  // Sample data for suggestion cards
  const suggestionData = [
    {
      imageUrl: 'assets/sample_event_card1.jpeg',
      title: 'Event Title 1',
      description: 'Lorem ipsum dolor sit amet consectetur. Sed tincidunt...',
    },
    {
      imageUrl: 'assets/sample_event_card2.jpeg',
      title: 'Event Title 2',
      description: 'Lorem ipsum dolor sit amet consectetur. Sed tincidunt...',
    },
    {
      imageUrl: 'assets/sample_event_card3.jpeg',
      title: 'Event Title 3',
      description: 'Lorem ipsum dolor sit amet consectetur. Sed tincidunt...',
    },
  ];
  return (
    <div className="App">
      <div className="suggestion-section">
        <h1>Suggestions</h1>
        <div className="suggestion-list">
          {/* Map through the suggestionData and render SuggestionCard components */}
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
