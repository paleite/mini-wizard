import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { WizardMachineContext } from "./schemas";
import { Step2bFormSchema } from "./schemas";
import type { WizardMachineEvent } from "./wizard-machine";

const Step2bForm: React.FunctionComponent<{
  onSubmit: (event: WizardMachineEvent) => void;
}> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WizardMachineContext>({
    resolver: zodResolver(Step2bFormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit({ type: "NEXT", data });
      })}
    >
      {/* Replace with your array */}
      {["option1", "option2", "option3"].map((option) => (
        <label key={option}>
          <input
            {...register("arraySelection")}
            type="checkbox"
            value={option}
          />
          {option}
        </label>
      ))}
      {errors.arraySelection?.message !== undefined && (
        <p>{errors.arraySelection.message.toString()}</p>
      )}
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export { Step2bForm };
