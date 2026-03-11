"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import type { Attendance } from "@/lib/submit-rsvp";
import { TELEGRAM_CHANNEL_INVITATION_URL } from "@/utils/consts";

const QR_SIZE = 300;

type RsvpSuccessProps = {
  attendance: Attendance | null;
};

export const RsvpSuccess = ({ attendance }: RsvpSuccessProps) => {
  const showTelegram = attendance === "yes";

  if (!showTelegram) {
    return (
      <p className="text-center font-cormorant text-2xl md:text-3xl text-brown font-medium tracking-wide py-8">
        Благодарим за ответ!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center text-center max-w-md mx-auto">
      <p className="font-cormorant text-2xl md:text-3xl text-brown font-medium tracking-wide mb-2">
        Благодарим за ответ!
      </p>
      <p className="font-comme font-light text-base md:text-lg text-brown/90 leading-snug mb-8">
        Вступайте в наш свадебный чат в Telegram — там будут новости,
        напоминания и полезная информация о празднике.
      </p>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="rounded-2xl bg-paperDark/60 p-5 shadow-sm border border-paperDark">
          <QRCodeSVG
            value={TELEGRAM_CHANNEL_INVITATION_URL}
            size={QR_SIZE}
            level="M"
            className="rounded-lg"
          />
        </div>
        <Link
          href={TELEGRAM_CHANNEL_INVITATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-[18px] bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold px-8 py-4 transition-colors"
        >
          Перейти в Telegram-канал
        </Link>
      </div>
    </div>
  );
};
