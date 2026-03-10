"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitRsvp, type RsvpFormData } from "@/lib/submitRsvp";
import {
  Container,
  PaperSection,
  SectionTitle,
  PrimaryButton,
  SectionInfo,
  FormField,
  FormInput,
  FormTextarea,
  FormRadioGroup,
} from "@/components/ui";

const NAME_MIN = 2;

const ATTENDANCE_OPTIONS: { value: "yes" | "no"; label: string }[] = [
  { value: "yes", label: "Я приду / Мы придём" },
  { value: "no", label: "К сожалению, не сможем" },
];

export function RsvpForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormData>({
    defaultValues: { name: "", attendance: undefined, comment: "" },
  });

  const nameValue = watch("name");
  const isNameFilled = (nameValue?.trim() ?? "").length >= NAME_MIN;
  const isSubmitDisabled = !isNameFilled || isSubmitting;

  async function onSubmit(data: RsvpFormData) {
    setSubmitError("");
    const result = await submitRsvp(data);
    if (result.success) {
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
      setSubmitError(result.error);
    }
  }

  return (
    <PaperSection id="rsvp">
      <Container>
        <SectionTitle className="mb-8">Анкета</SectionTitle>
        <SectionInfo className="mb-8 md:mb-20">
          Ваши ответы очень помогут нам в организации праздника!
        </SectionInfo>

        {submitStatus === "success" ? (
          <p className="text-center font-medium py-8">
            Спасибо! Ваш ответ принят.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto space-y-6 text-left"
          >
            <FormField
              label="Введите ваше имя и фамилию"
              id="name"
              error={errors.name?.message}
            >
              <FormInput
                id="name"
                type="text"
                placeholder="Имя и фамилия"
                {...register("name", {
                  required: "Введите имя и фамилию",
                  minLength: {
                    value: NAME_MIN,
                    message: "Введите имя и фамилию",
                  },
                })}
              />
            </FormField>

            <FormRadioGroup<RsvpFormData>
              legend="Сможете ли вы присутствовать на торжестве?"
              name="attendance"
              options={ATTENDANCE_OPTIONS}
              register={register}
            />

            <FormField label="Дополнительная информация" id="comment">
              <FormTextarea
                id="comment"
                rows={4}
                placeholder="(например: сколько человек придет, предпочтения и т.д.)"
                {...register("comment")}
              />
            </FormField>

            {submitStatus === "error" && submitError && (
              <p className="text-sm text-red-700" role="alert">
                {submitError}
              </p>
            )}

            <div className="mt-10 text-center">
              <PrimaryButton type="submit" disabled={isSubmitDisabled}>
                {isSubmitting ? "Отправка…" : "Отправить"}
              </PrimaryButton>
            </div>
          </form>
        )}
      </Container>
    </PaperSection>
  );
}
