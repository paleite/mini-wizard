import "./App.css";
import Form from "./Form";
import { WizardMachineContext } from "./wizardMachine";

const App = () => {
  return (
    <WizardMachineContext.Provider>
      <Form />
    </WizardMachineContext.Provider>
  );
};

export default App;
