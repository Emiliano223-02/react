import emiliano from "./assets/img/WhatsApp Image 2023-08-22 at 15.46.24.jpega";
//import logo from './emiliano.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={emiliano} className="App-logo" alt="logo" />
        <p>Bienvenido Emiliano 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Empezemos
        </a>
      </header>
    </div>
  );
}

export default App;
