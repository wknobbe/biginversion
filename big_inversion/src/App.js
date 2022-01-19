import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName='John' lastName='Smith' age={45} hair='Brown' />
      <PersonCard firstName='Jane' lastName='Doe' age={88} hair='Black' />
      <PersonCard firstName='Millard' lastName='Fillmore' age={50} hair='White' />
      <PersonCard firstName='Maria' lastName='Smith' age={62} hair='Blonde' />
    </div>
  );
}

export default App;
