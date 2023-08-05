import Step1Form from "./Step1Form";
import Step2aForm from "./Step2aForm";
import Step2bForm from "./Step2bForm";
import Step3 from "./Step3";
import { WizardMachineContext } from "./wizardMachine";

const Form = () => {
  const [state, send] = WizardMachineContext.useActor();

  const handleSubmit = (event) => {
    send(event);
  };

  const submitFinal = () => {
    // Here you send the data to the server
    console.log(state.context);
  };

  console.log(state.context);

  return (
    <div>
      {/* This is what we currently have:
      <br />
      <pre>{JSON.stringify(state.context, null, 2)}</pre>
      <br /> */}
      {state.matches("step1") && <Step1Form onSubmit={handleSubmit} />}
      {state.matches("step2a") && <Step2aForm onSubmit={handleSubmit} />}
      {state.matches("step2b") && <Step2bForm onSubmit={handleSubmit} />}
      {state.matches("step3") && <Step3 onSubmit={submitFinal} />}
    </div>
  );
};

export default Form;
