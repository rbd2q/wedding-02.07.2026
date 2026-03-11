"use client";

import { useState } from "react";
import { loginAdmin } from "@/lib/admin-actions";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function AdminLoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    const result = await loginAdmin(formData);
    if (result?.error) setError(result.error);
  }

  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center px-4">
      <Container className="max-w-sm">
        <h1 className="font-cormorant font-semibold text-3xl text-darkBrown text-center mb-2">
          Админ-панель
        </h1>
        <p className="text-brown/80 text-sm text-center mb-8">
          Введите код доступа
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            name="secret"
            autoComplete="current-password"
            placeholder="Код"
            className="w-full border-2 border-darkBrown/30 rounded-[18px] bg-cream px-4 py-3 text-darkBrown placeholder:text-brown/50 focus:border-darkBrown focus:outline-none focus:ring-2 focus:ring-darkBrown/20"
            required
          />
          {error && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {error}
            </p>
          )}
          <PrimaryButton type="submit" className="w-full">
            Войти
          </PrimaryButton>
        </form>
      </Container>
    </div>
  );
}
