import { RsvpRow } from "@/lib/rsvp";
import { RsvpRowCard } from "./rsvp-mobile-card";
import { AttendanceBadge, TransferBadge } from "./badge";
import { formatDate } from "@/utils";

export const RsvpTable = async ({ rows }: { rows: RsvpRow[] }) => {
  if (rows.length === 0) {
    return (
      <p className="text-center text-brown/70 py-12 font-medium">
        Пока нет ответов
      </p>
    );
  }

  return (
    <>
      <div className="md:hidden space-y-4">
        {rows.map((row) => (
          <RsvpRowCard key={row.id} row={row} />
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-darkBrown/15 bg-cream/50">
        <table className="w-full min-w-[520px] text-left">
          <thead>
            <tr className="border-b border-darkBrown/15 bg-paperDark/80">
              <th className="px-4 py-3 font-semibold text-darkBrown">Имя</th>
              <th className="px-4 py-3 font-semibold text-darkBrown">
                Участие
              </th>
              <th className="px-4 py-3 font-semibold text-darkBrown min-w-[120px]">
                Трансфер
              </th>
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
                <td className="px-4 py-3 min-w-[120px]">
                  <TransferBadge value={row.transfer} />
                </td>
                <td className="px-4 py-3 text-brown/80 text-sm">
                  {formatDate(row.created_at)}
                </td>
                <td className="px-4 py-3 text-brown/90 text-sm min-w-[180px] break-words whitespace-normal align-top">
                  {row.comment || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
