// import logo from "./logo.svg";
import "./App.css";
import MainArea from "./components/MainArea";

function App() {
  return (
    <div className="App">
      {/* TODO: CLEANUP */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MainArea />
    </div>
  );
}

export default App;
