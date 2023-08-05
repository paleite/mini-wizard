import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step2aFormSchema } from "./schemas";

const Step2aForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Step2aFormSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ type: "NEXT", data }))}>
      <label>
        Percentage:
        <input
          type="number"
          {...register("percentage", { valueAsNumber: true })}
        />
        {errors.percentage?.message && (
          <p>{errors.percentage.message.toString()}</p>
        )}
      </label>

      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2aForm;
