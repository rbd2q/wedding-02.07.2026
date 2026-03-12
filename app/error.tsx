"use client";

import type { ReactElement } from "react";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
};

const ErrorPage = ({ error }: ErrorPageProps): ReactElement => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center space-y-6">
        <p className="text-sm tracking-[0.3em] uppercase text-brown/70">
          Что-то пошло не так
        </p>
        <h1 className="text-4xl sm:text-5xl font-cormorant text-darkBrown">
          Произошла ошибка
        </h1>
        <p className="text-sm sm:text-base text-brown/80 leading-relaxed">
          Попробуйте обновить страницу или вернуться на главную — возможно, всё
          уже исправилось.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.location.assign("/")}
            className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-2.5 text-sm font-medium text-brown/80 hover:text-darkBrown hover:border-brown/20 transition-colors"
          >
            На главную
          </button>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
