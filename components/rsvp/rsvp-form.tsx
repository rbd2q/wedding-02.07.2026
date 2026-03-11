"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitRsvp, type Attendance, type RsvpFormData } from "@/lib/submit-rsvp";
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
import { NAME_MIN } from "@/utils/consts";
import { SubmitStatus } from "./enums";
import { RsvpSuccess } from "./rsvp-success";

const ATTENDANCE_OPTIONS: { value: Attendance; label: string }[] = [
  { value: "yes", label: "Я приду / Мы придём" },
  { value: "no", label: "К сожалению, не сможем" },
];

const TRANSFER_OPTIONS: { value: Attendance; label: string }[] = [
  { value: "yes", label: "Да" },
  { value: "no", label: "Нет" },
];

export const RsvpForm = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
    SubmitStatus.IDLE,
  );
  const [submitError, setSubmitError] = useState("");
  const [submittedAttendance, setSubmittedAttendance] = useState<
    Attendance | null
  >(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormData>({
    defaultValues: {
      name: "",
      attendance: null,
      transfer: null,
      comment: "",
    },
  });

  const nameValue = watch("name");
  const attendanceValue = watch("attendance");
  const transferValue = watch("transfer");
  const isNameFilled = (nameValue?.trim() ?? "").length >= NAME_MIN;
  const isSubmitDisabled =
    !isNameFilled ||
    isSubmitting ||
    !attendanceValue ||
    (attendanceValue === "yes" && !transferValue);
  const isTransferVisible = attendanceValue === "yes";

  const onSubmit = async (data: RsvpFormData) => {
    setSubmitError("");
    const result = await submitRsvp(data);
    if (result.success) {
      setSubmittedAttendance(data.attendance);
      setSubmitStatus(SubmitStatus.SUCCESS);
    } else {
      setSubmitStatus(SubmitStatus.ERROR);
      setSubmitError(result.error);
    }
  };

  return (
    <PaperSection id="rsvp">
      <Container>
        <SectionTitle className="mb-8">Анкета</SectionTitle>
        <SectionInfo className="mb-8 md:mb-20">
          Ваши ответы очень помогут нам в организации праздника!
        </SectionInfo>

        {submitStatus === SubmitStatus.SUCCESS ? (
          <RsvpSuccess attendance={submittedAttendance} />
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

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                isTransferVisible
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              aria-hidden={!isTransferVisible}
            >
              <FormRadioGroup<RsvpFormData>
                legend="Нужен ли вам трансфер? (от ст. м. «Каменная Горка»)"
                name="transfer"
                options={TRANSFER_OPTIONS}
                register={register}
              />
            </div>

            <FormField label="Дополнительная информация" id="comment">
              <FormTextarea
                id="comment"
                rows={4}
                placeholder="(например: сколько человек придет, предпочтения и т.д.)"
                {...register("comment")}
              />
            </FormField>

            {submitStatus === SubmitStatus.ERROR && submitError && (
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
};
