import logo from "./logo.svg";
import "./App.css";
import {
  ClassApp,
  ClassComponentWithCounter,
  FunctionalComponentWithCounter,
  FunctionalApp,
} from "./components/FunctionalApp";
import "./components/Counter";

function App() {
  return (
    <div className="App">
      <FunctionalApp />

      <ClassApp />
      {/* <ClassComponentWithCounter foo={"foo"} />
      <FunctionalComponentWithCounter /> */}
    </div>
  );
}

export default App;
