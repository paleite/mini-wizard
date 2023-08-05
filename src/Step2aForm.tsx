import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { WizardMachineContext } from "./schemas";
import { Step2aFormSchema } from "./schemas";
import type { WizardMachineEvent } from "./wizard-machine";

const Step2aForm: React.FunctionComponent<{
  onSubmit: (event: WizardMachineEvent) => void;
}> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WizardMachineContext>({
    resolver: zodResolver(Step2aFormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit({ type: "NEXT", data });
      })}
    >
      <label>
        Percentage:
        <input
          type="number"
          {...register("percentage", { valueAsNumber: true })}
        />
        {errors.percentage?.message !== undefined && (
          <p>{errors.percentage.message.toString()}</p>
        )}
      </label>

      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export { Step2aForm };
