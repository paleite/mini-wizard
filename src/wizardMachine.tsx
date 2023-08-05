import { createActorContext } from "@xstate/react";
import { assign, createMachine } from "xstate";
import type { WizardContext } from "./schemas";

const wizardMachine = createMachine<
  WizardContext,
  { type: "NEXT"; data: WizardContext }
>({
  id: "wizard",
  initial: "step1",
  context: {
    ApprovalPolicy: null,
    percentage: null,
    arraySelection: null,
  },
  states: {
    step1: {
      on: {
        NEXT: [
          {
            target: "step3",
            cond: (_context, event) =>
              event.data.ApprovalPolicy === "Any" ||
              event.data.ApprovalPolicy === "All",
            actions: assign({
              ApprovalPolicy: (_context, event) => event.data.ApprovalPolicy,
            }),
          },
          {
            target: "step2a",
            cond: (_context, event) =>
              event.data.ApprovalPolicy === "BoardPercentage",
            actions: assign({
              ApprovalPolicy: (_context, event) => event.data.ApprovalPolicy,
            }),
          },
          {
            target: "step2b",
            cond: (_context, event) =>
              event.data.ApprovalPolicy === "SpecificUsers",
            actions: assign({
              ApprovalPolicy: (_context, event) => event.data.ApprovalPolicy,
            }),
          },
        ],
      },
    },
    step2a: {
      on: {
        NEXT: {
          target: "step3",
          actions: assign({
            percentage: (_context, event) => event.data.percentage,
          }),
        },
      },
    },
    step2b: {
      on: {
        NEXT: {
          target: "step3",
          actions: assign({
            arraySelection: (_context, event) => event.data.arraySelection,
          }),
        },
      },
    },
    step3: {
      type: "final",
    },
  },
});

export const WizardMachineContext = createActorContext(wizardMachine);
