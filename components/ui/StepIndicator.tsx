/* ────────────────────────────────────────────────────────────────────────────
 * components/ui/StepIndicator.tsx
 *
 * Horizontal step/progress indicator for multi-step flows
 * (e.g. Checkout → Payment → Confirmation).
 * ──────────────────────────────────────────────────────────────────────────── */

interface Step {
  label: string;
  icon: string;
}

interface StepIndicatorProps {
  steps: Step[];
  /** 0-based index of the currently active step. */
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-6 flex items-center justify-center gap-0 sm:mb-8">
      {steps.map((step, i) => {
        const isCompleted = i < currentStep;
        const isActive = i === currentStep;
        const isLast = i === steps.length - 1;

        return (
          <div key={step.label} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors sm:h-10 sm:w-10 ${
                  isCompleted
                    ? "bg-primary text-slate-900"
                    : isActive
                      ? "bg-primary/15 text-primary ring-2 ring-primary"
                      : "bg-slate-100 text-slate-400"
                }`}
              >
                {isCompleted ? (
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    check
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    {step.icon}
                  </span>
                )}
              </div>
              <span
                className={`mt-1.5 text-[10px] font-semibold sm:text-xs ${
                  isActive ? "text-primary" : isCompleted ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {!isLast && (
              <div
                className={`mx-1.5 h-[2px] w-8 sm:mx-3 sm:w-16 ${
                  isCompleted ? "bg-primary" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
