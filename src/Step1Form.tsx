import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { WizardMachineContext } from "./schemas";
import { Step1FormSchema } from "./schemas";
import type { WizardMachineEvent } from "./wizard-machine";

const Step1Form: React.FunctionComponent<{
  onSubmit: (event: WizardMachineEvent) => void;
}> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<WizardMachineContext>({
    resolver: zodResolver(Step1FormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(
        (data) => {
          onSubmit({ type: "NEXT", data });
        },
        (errors) => {
          console.error(errors);
        },
      )}
    >
      <select {...register("approvalPolicy")}>
        <option value="Any">Any</option>
        <option value="All">All</option>
        <option value="BoardPercentage">Percentage</option>
        <option value="SpecificUsers">SpecificUsers</option>
      </select>
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export { Step1Form };
