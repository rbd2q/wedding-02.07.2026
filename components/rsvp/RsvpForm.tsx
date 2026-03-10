"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { rsvpSchema, type RsvpFormData } from "@/lib/validation";
import { submitRsvp } from "@/lib/submitRsvp";
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

const ATTENDANCE_OPTIONS: { value: string; label: string }[] = [
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
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attendance: undefined, comment: "" },
  });

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
                {...register("name")}
              />
            </FormField>

            <FormRadioGroup<RsvpFormData>
              legend="Сможете ли вы присутствовать на торжестве?"
              name="attendance"
              options={ATTENDANCE_OPTIONS}
              register={register}
              error={errors.attendance?.message}
            />

            <FormField
              label="Дополнительная информация"
              id="comment"
              error={errors.comment?.message}
            >
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
              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправка…" : "Отправить"}
              </PrimaryButton>
            </div>
          </form>
        )}
      </Container>
    </PaperSection>
  );
}
