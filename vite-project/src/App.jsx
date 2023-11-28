import "./App.css";
import Images from "./components/Images/Images";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <Images />
      <Header headerText="Header 1" />
      <br />
      <Header headerText="Header 2" />

      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
