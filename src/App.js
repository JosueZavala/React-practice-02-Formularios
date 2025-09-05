import logo from "./logo.svg";
import "./App.css";
import { ControlledForm } from "./components/Forms/Controlled";
import UncontrolledForm from "./components/Forms/UnControlled";
import BasicReactHookForm from "./components/Forms/RHF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlledForm />
        <UncontrolledForm />
        <BasicReactHookForm />
      </header>
    </div>
  );
}

export default App;
