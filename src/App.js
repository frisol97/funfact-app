import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hei Emma</h1>
        <a
          className="App-link"
          href="https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trykk på meg
        </a>
      </header>
    </div>
  );
}

export default App;
