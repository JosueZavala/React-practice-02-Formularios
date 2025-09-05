import "./App.css";
import { ControlledForm } from "./components/Forms/Controlled";
import UncontrolledForm from "./components/Forms/UnControlled";
import BasicReactHookForm from "./components/Forms/RHF";
import ReactHookFormLiveValidation from "./components/Forms/RHF/liveValidation";
import { SelectForm } from "./components/Forms/RHF/control";
import { NestedForm } from "./components/Forms/RHF/nestedObjects";
import { EmailsForm } from "./components/Forms/RHF/useFieldArray";
import ReactHookFormAsyncValidation from "./components/Forms/RHF/asyncValidation";
import ReactHookFormReset from "./components/Forms/RHF/resetForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* // ? Form Controlado */}
        {/* <ControlledForm /> */}
        {/* // ? Form No Controlado */}
        {/* <UncontrolledForm /> */}
        {/* // ? Form Basico con RHF */}
        {/* <BasicReactHookForm /> */}
        {/* // ? Form con RHF y validacion "en vivo"*/}
        <ReactHookFormLiveValidation />
        {/* // ? Form con RHF y control */}
        <SelectForm />
        {/* // ? Form con RHF y nested Form */}
        <NestedForm />
        {/* // ? Form con RHF y useFieldArray */}
        <EmailsForm />
        {/* // ? Form con RHF y Async Validation */}
        <ReactHookFormAsyncValidation />
        {/* // ? Form con RHF con Reset y watch */}
        <ReactHookFormReset />
      </header>
    </div>
  );
}

export default App;
