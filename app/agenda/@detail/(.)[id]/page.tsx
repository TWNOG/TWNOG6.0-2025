import { use } from "react"
import { agenda } from "@/lib/agenda";
import AgendaDetail from "@/app/components/agendaDetail";

export function generateStaticParams() {
  return agenda.filter((item) => !item.isBreak).map((item) => ({
    id: item.id
  }));
}

export default function AgendaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AgendaDetail id={id} />
  );
}
