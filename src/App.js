import logo from "./logo.svg";
import "./App.css";
import Contdown from "./components/Contdown/Contdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="tarjeta-home">
          <img src={logo} className="App-logo" alt="logo" />
          <Contdown/>
        </div>
      </header>
    </div>
  );
}

export default App;
