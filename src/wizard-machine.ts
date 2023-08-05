import { createActorContext } from "@xstate/react";
import { assign, createMachine } from "xstate";
import type { WizardMachineContext } from "./schemas";

type WizardMachineEvent = {
  type: "NEXT";
  data: WizardMachineContext;
};

const wizardMachine = createMachine<WizardMachineContext, WizardMachineEvent>({
  id: "wizard",
  initial: "step1",
  context: {
    approvalPolicy: null,
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
              event.data.approvalPolicy === "Any" ||
              event.data.approvalPolicy === "All",
            actions: assign({
              approvalPolicy: (_context, event) => event.data.approvalPolicy,
            }),
          },
          {
            target: "step2a",
            cond: (_context, event) =>
              event.data.approvalPolicy === "BoardPercentage",
            actions: assign({
              approvalPolicy: (_context, event) => event.data.approvalPolicy,
            }),
          },
          {
            target: "step2b",
            cond: (_context, event) =>
              event.data.approvalPolicy === "SpecificUsers",
            actions: assign({
              approvalPolicy: (_context, event) => event.data.approvalPolicy,
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

const WizardMachineActorContext = createActorContext(wizardMachine);

export { wizardMachine, WizardMachineActorContext as WizardMachineContext };
export type { WizardMachineEvent };
