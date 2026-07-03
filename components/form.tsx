"use client";

export const inputClass =
  "w-full rounded-[4px] border border-hairline bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-ink-secondary/50 transition-colors duration-[120ms] ease-signature focus:border-accent";

export function Field({
  label,
  htmlFor,
  optional = false,
  children,
}: {
  label: string;
  htmlFor?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary"
      >
        {label}
        {optional && <span className="text-ink-secondary/60"> · optional</span>}
      </label>
      {children}
    </div>
  );
}

export function PillGroup({
  options,
  selected,
  onToggle,
  label,
}: {
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  label: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            aria-pressed={active}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-[120ms] ease-signature ${
              active
                ? "border-accent text-accent"
                : "border-hairline text-ink-secondary hover:text-ink"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
