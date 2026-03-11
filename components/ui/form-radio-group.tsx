import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Option = { value: string; label: string };

type FormRadioGroupProps<T extends FieldValues> = {
  legend: string;
  name: Path<T>;
  options: Option[];
  register: UseFormRegister<T>;
  error?: string;
};

export const FormRadioGroup = <T extends FieldValues,>({
  legend,
  name,
  options,
  register,
  error,
}: FormRadioGroupProps<T>) => (
    <fieldset>
      <legend className="block font-semibold mb-2">{legend}</legend>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="relative flex shrink-0">
              <input
                type="radio"
                value={opt.value}
                className="peer sr-only"
                {...register(name)}
              />
              <span
                className="block w-4 h-4 rounded-full border-2 border-[#9F9887] bg-transparent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#9F9887]"
                aria-hidden
              />
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100">
                <span className="w-2 h-2 rounded-full bg-darkBrown" />
              </span>
            </span>
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </fieldset>
);
