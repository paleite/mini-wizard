import "./App.css";
import { Form } from "./Form";
import { WizardMachineContext } from "./wizard-machine";

const App: React.FunctionComponent = () => (
  <WizardMachineContext.Provider>
    <Form />
  </WizardMachineContext.Provider>
);

export default App;
