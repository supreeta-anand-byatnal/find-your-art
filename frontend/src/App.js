import './App.css';
import Footer from './components/Footer/Footer';
import SuggestionCard from './components/SuggestionCard/SuggestionCard';

function App() {
  // Sample data for suggestion cards
  const suggestionData = [
    {
      imageUrl: 'src/assets/sample_event_card1.jpeg',
      title: 'Event Title 1',
      description: 'Description of Event 1',
    },
    {
      imageUrl: 'src/assets/sample_event_card2.jpeg',
      title: 'Event Title 2',
      description: 'Description of Event 2',
    },
    {
      imageUrl: 'src/assets/sample_event_card3.jpeg',
      title: 'Event Title 3',
      description: 'Description of Event 3',
    },
  ];
  return (
    <div className="App">
      <>
        <h1>Event Suggestions</h1>
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
      </>
      <Footer />
    </div>
  );
}

export default App;
