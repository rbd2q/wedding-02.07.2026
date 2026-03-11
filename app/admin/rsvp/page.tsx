import Link from "next/link";
import { assertAdmin } from "@/lib/admin-auth";
import { logoutAdmin } from "@/lib/admin-actions";
import { getRsvpList } from "@/lib/rsvp";
import { Container } from "@/components/ui";
import { AdminLoginForm, RsvpStats, RsvpTable } from "@/components/admin";

type AdminPageProps = {
  searchParams: Promise<{ attendance?: "all" | "yes" | "no" }>;
};

const AdminRsvpPage = async ({ searchParams }: AdminPageProps) => {
  const isAdmin = await assertAdmin();
  if (!isAdmin) {
    return <AdminLoginForm />;
  }

  const rows = await getRsvpList();
  const { attendance } = await searchParams;
  const attendanceFilter = attendance ?? "all";
  const filteredRows =
    attendanceFilter === "yes"
      ? rows.filter((r) => r.attendance === "yes")
      : attendanceFilter === "no"
        ? rows.filter((r) => r.attendance === "no")
        : rows;

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
          <RsvpStats rows={rows} attendanceFilter={attendanceFilter} />
          <RsvpTable rows={filteredRows} />
        </Container>
      </main>
    </div>
  );
};

export default AdminRsvpPage;
