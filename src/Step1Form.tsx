import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step1FormSchema } from "./schemas";

const Step1Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(Step1FormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(
        (data) => onSubmit({ type: "NEXT", data }),
        (errors) => {
          console.error(errors);
        }
      )}
    >
      <select {...register("ApprovalPolicy")}>
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

export default Step1Form;
