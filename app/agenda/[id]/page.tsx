import { agenda } from "@/lib/agenda";
import AgendaTable from "@/app/components/agendaTable";

export function generateStaticParams() {
  return agenda.filter((item) => item.type !== "Break").map((item) => ({
    id: item.id
  }));
}

export default function AgendaPage() {
  return <AgendaTable />;
}
