import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

const inputClasses =
  "w-full border-0 border-b-2 border-b-[#4D4637] bg-cream/50 px-0 py-3 placeholder:text-brown/50 focus:border-b-[#4D4637] focus:outline-none focus:ring-0 rounded-none";

const textareaClasses =
  "w-full rounded-lg border border-[#4D4637] bg-cream/50 px-4 py-3 placeholder:text-brown/50 focus:border-[#4D4637] focus:outline-none focus:ring-1 focus:ring-[#4D4637] resize-y";

type FormFieldProps = {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
};

export const FormField = ({ label, id, error, children }: FormFieldProps) => (
    <div>
      <label htmlFor={id} className="block font-semibold mb-1">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
);

export const FormInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function FormInput({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`${inputClasses} ${className}`.trim()}
      {...props}
    />
  );
});

export const FormTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function FormTextarea({ className = "", ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={`${textareaClasses} ${className}`.trim()}
      {...props}
    />
  );
});
