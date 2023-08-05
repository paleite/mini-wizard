import { z } from "zod";

const ApprovalPolicySchema = z.enum([
  "Any",
  "All",
  "BoardPercentage",
  "SpecificUsers",
]);
const Step1FormSchema = z.object({
  approvalPolicy: ApprovalPolicySchema,
});

const PercentageSchema = z.number().min(0).max(100);
const Step2aFormSchema = z.object({
  percentage: PercentageSchema,
});

const ArraySelectionSchema = z.array(z.string()).nonempty();
const Step2bFormSchema = z.object({
  arraySelection: ArraySelectionSchema,
});

const WizardContextSchema = z.object({
  approvalPolicy: ApprovalPolicySchema.nullable(),
  percentage: PercentageSchema.nullable(),
  arraySelection: ArraySelectionSchema.nullable(),
});

type WizardContextType = z.infer<typeof WizardContextSchema>;

/// ^ For the wizard
/// v For the submitted form

const AnySchema = z.object({
  approvalPolicy: z.literal("Any"),
});

const AllSchema = z.object({
  approvalPolicy: z.literal("All"),
});

const BoardPercentageSchema = z
  .object({
    approvalPolicy: z.literal("BoardPercentage"),
  })
  .and(Step2aFormSchema);

const SpecificUsersSchema = z
  .object({
    approvalPolicy: z.literal("SpecificUsers"),
  })
  .and(Step2bFormSchema);

const SubmittedSchema = z.union([
  AnySchema,
  AllSchema,
  BoardPercentageSchema,
  SpecificUsersSchema,
]);

type Submitted = z.infer<typeof SubmittedSchema>;

export {
  WizardContextSchema,
  AllSchema,
  AnySchema,
  BoardPercentageSchema,
  SpecificUsersSchema,
  Step1FormSchema,
  Step2aFormSchema,
  Step2bFormSchema,
  SubmittedSchema,
};
export type { Submitted, WizardContextType as WizardMachineContext };
