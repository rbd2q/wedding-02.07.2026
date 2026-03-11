export const AttendanceBadge = ({ value }: { value: string | null }) => {
  if (value === "yes")
    return (
      <span className="inline-flex items-center rounded-full bg-olive/20 text-olive px-2.5 py-0.5 text-sm font-medium">
        Да
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center rounded-full bg-red-100 text-red-800 px-2.5 py-0.5 text-sm font-medium">
        Нет
      </span>
    );
  return <span className="text-brown/60 text-sm">—</span>;
};;

export const TransferBadge = ({ value }: { value: string | null }) => {
  if (value === "yes")
    return (
      <span className="inline-flex items-center rounded-full bg-olive/20 text-olive px-2.5 py-0.5 text-sm font-medium">
        Нужен
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center rounded-full bg-brown/15 text-brown px-2.5 py-0.5 text-sm font-medium">
        Не нужен
      </span>
    );
  return <span className="text-brown/60 text-sm">—</span>;
};
