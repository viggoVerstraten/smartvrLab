import logo from './vrbril.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="smallLogo" alt="logo" />
        <p>
          Het begin van het einde.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Set-up
        </a>
      </header>
    </div>
  );
}

export default App;
