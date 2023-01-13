import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        name="Jane"
        surname="Doe"
        age={45}
        hairColor="Black"
      />
      <PersonCard 
        name="John"
        surname="Smith"
        age={88}
        hairColor="Brown"
      />
      <PersonCard 
        name="Millard"
        surname="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <PersonCard 
        name="Maria"
        surname="Smith"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
