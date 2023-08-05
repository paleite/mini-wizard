import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step2bFormSchema } from "./schemas";

const Step2bForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Step2bFormSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ type: "NEXT", data }))}>
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
      {errors.arraySelection?.message && (
        <p>{errors.arraySelection.message.toString()}</p>
      )}
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2bForm;
