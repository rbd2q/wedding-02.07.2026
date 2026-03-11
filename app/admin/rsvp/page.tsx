import Link from "next/link";
import { assertAdmin } from "@/lib/admin-auth";
import { logoutAdmin } from "@/lib/admin-actions";
import { getRsvpList } from "@/lib/rsvp";
import { Container } from "@/components/ui/Container";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import type { RsvpRow } from "@/lib/rsvp";
import { AttendanceBadge, TransferBadge } from "@/components/admin/Badge";
import { formatDate } from "@/utils";

async function RsvpTable({ rows }: { rows: RsvpRow[] }) {
  if (rows.length === 0) {
    return (
      <p className="text-center text-brown/70 py-12 font-medium">
        Пока нет ответов
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-darkBrown/15 bg-cream/50">
      <table className="w-full min-w-[520px] text-left">
        <thead>
          <tr className="border-b border-darkBrown/15 bg-paperDark/80">
            <th className="px-4 py-3 font-semibold text-darkBrown">Имя</th>
            <th className="px-4 py-3 font-semibold text-darkBrown">Участие</th>
            <th className="px-4 py-3 font-semibold text-darkBrown">Трансфер</th>
            <th className="px-4 py-3 font-semibold text-darkBrown">Дата</th>
            <th className="px-4 py-3 font-semibold text-darkBrown">
              Комментарий
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-darkBrown/10 last:border-0 hover:bg-paperDark/30 transition-colors"
            >
              <td className="px-4 py-3 font-medium text-darkBrown">
                {row.name}
              </td>
              <td className="px-4 py-3">
                <AttendanceBadge value={row.attendance} />
              </td>
              <td className="px-4 py-3">
                <TransferBadge value={row.transfer} />
              </td>
              <td className="px-4 py-3 text-brown/80 text-sm">
                {formatDate(row.created_at)}
              </td>
              <td className="px-4 py-3 text-brown/90 text-sm min-w-[180px] max-w-[400px] break-words whitespace-normal align-top">
                {row.comment || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function AdminRsvpPage() {
  const isAdmin = await assertAdmin();
  if (!isAdmin) {
    return <AdminLoginForm />;
  }

  const rows = await getRsvpList();

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-darkBrown/10 bg-cream/30 sticky top-0 z-10">
        <Container className="py-4 flex items-center justify-between bg-paper">
          <h1 className="font-cormorant font-semibold text-2xl text-darkBrown">
            Ответы гостей
          </h1>
          <div className="flex items-center gap-4">
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="text-sm font-medium text-brown/80 hover:text-darkBrown transition-colors"
              >
                Выйти
              </button>
            </form>
            <Link
              href="/"
              className="text-sm font-medium text-darkBrown/80 hover:text-darkBrown transition-colors"
            >
              ← На главную
            </Link>
          </div>
        </Container>
      </header>
      <main className="py-8 sm:py-12">
        <Container className="max-w-full">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-brown/80 text-sm">
              Всего:{" "}
              <span className="font-semibold text-darkBrown">
                {rows.length}
              </span>
            </p>
          </div>
          <RsvpTable rows={rows} />
        </Container>
      </main>
    </div>
  );
}
