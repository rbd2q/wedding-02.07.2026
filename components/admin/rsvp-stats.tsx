import Link from "next/link";
import type { RsvpRow } from "@/lib/rsvp";

type RsvpStatsProps = {
  rows: RsvpRow[];
  attendanceFilter: "all" | "yes" | "no";
};

export const RsvpStats = ({ rows, attendanceFilter }: RsvpStatsProps) => {
  const total = rows.length;
  const goingCount = rows.filter((r) => r.attendance === "yes").length;
  const notGoingCount = rows.filter((r) => r.attendance === "no").length;
  const transferYesCount = rows.filter((r) => r.transfer === "yes").length;
  const transferNoCount = rows.filter((r) => r.transfer === "no").length;

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1 text-sm">
        <p className="text-brown/80">
          Всего ответов:{" "}
          <span className="font-semibold text-darkBrown">{total}</span>
        </p>
        <p className="text-brown/80">
          Придут:{" "}
          <span className="font-semibold text-darkBrown">{goingCount}</span>
          {" · "}
          Не придут:{" "}
          <span className="font-semibold text-darkBrown">{notGoingCount}</span>
        </p>
        <p className="text-brown/80">
          Нужен трансфер:{" "}
          <span className="font-semibold text-darkBrown">
            {transferYesCount}
          </span>
          {" · "}
          Не нужен:{" "}
          <span className="font-semibold text-darkBrown">
            {transferNoCount}
          </span>
        </p>
      </div>
      <div className="flex w-full sm:w-auto items-center gap-1 rounded-full bg-paperDark/60 p-1 text-xs sm:text-sm overflow-x-auto">
        <FilterChip
          label="Все"
          isActive={attendanceFilter === "all"}
          href="/admin/rsvp"
        />
        <FilterChip
          label="Придут"
          isActive={attendanceFilter === "yes"}
          href={{ pathname: "/admin/rsvp", query: { attendance: "yes" } }}
        />
        <FilterChip
          label="Не придут"
          isActive={attendanceFilter === "no"}
          href={{ pathname: "/admin/rsvp", query: { attendance: "no" } }}
        />
      </div>
    </div>
  );
};

type FilterChipProps = {
  label: string;
  isActive: boolean;
  href: string | { pathname: string; query?: Record<string, string> };
};

const FilterChip = ({ label, isActive, href }: FilterChipProps) => (
  <Link
    href={href}
    className={`flex-1 sm:flex-none text-center whitespace-nowrap px-3 sm:px-4 py-1 rounded-full border text-xs sm:text-sm transition-colors ${
      isActive
        ? "border-darkBrown bg-cream text-darkBrown font-medium"
        : "border-transparent text-brown/80 hover:border-brown/40 hover:bg-cream/60"
    }`}
  >
    {label}
  </Link>
);
