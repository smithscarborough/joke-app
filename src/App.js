import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <h1>You want jokes? I got jokes.</h1>
      <Joke />
    </div>
  );
}

export default App;
