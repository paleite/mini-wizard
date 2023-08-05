import { WizardMachineContext } from "./wizardMachine";

const Step3 = ({ onSubmit }) => {
  const [state] = WizardMachineContext.useActor();

  return (
    <div>
      This is what we currently have:
      <br />
      <pre>{JSON.stringify(state.context, null, 2)}</pre>
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
