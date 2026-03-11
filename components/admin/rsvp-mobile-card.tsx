import { RsvpRow } from "@/lib/rsvp";
import { AttendanceBadge, TransferBadge } from "./badge";
import { formatDate } from "@/utils";

export const RsvpRowCard = ({ row }: { row: RsvpRow }) => {
  return (
    <article className="rounded-2xl border border-darkBrown/15 bg-cream/50 p-4 space-y-3">
      <p className="font-semibold text-darkBrown text-lg">{row.name}</p>
      <dl className="grid gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <dt className="text-brown/70 shrink-0">Участие:</dt>
          <dd>
            <AttendanceBadge value={row.attendance} />
          </dd>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <dt className="text-brown/70 shrink-0">Трансфер:</dt>
          <dd>
            <TransferBadge value={row.transfer} />
          </dd>
        </div>
        <div className="flex flex-wrap gap-2">
          <dt className="text-brown/70 shrink-0">Дата:</dt>
          <dd className="text-brown/80">{formatDate(row.created_at)}</dd>
        </div>
        <div>
          <dt className="text-brown/70 mb-0.5">Комментарий:</dt>
          <dd className="text-brown/90 break-words whitespace-normal">
            {row.comment || "—"}
          </dd>
        </div>
      </dl>
    </article>
  );
};
