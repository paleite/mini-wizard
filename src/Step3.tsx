import { WizardMachineContext } from "./wizard-machine";

const Step3: React.FunctionComponent<{
  onSubmit: () => void;
}> = ({ onSubmit }) => {
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

export { Step3 };
