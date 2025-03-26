import { agenda } from "@/lib/agenda";
import AgendaTable from "@/app/components/agendaTable";

export function generateStaticParams() {
  return agenda.filter((item) => !item.isBreak).map((item) => ({
    id: item.id
  }));
}

export default function AgendaPage() {
  return <AgendaTable />;
}
