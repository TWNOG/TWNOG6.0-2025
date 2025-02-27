import { use } from "react"
import { agenda } from "@/lib/agenda";
import AgendaDetail from "./agendaDetail";

export function generateStaticParams() {
  return agenda.map((item) => ({
    id: item.id
  }));
}

export default function AgendaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AgendaDetail id={id} />
  );
}
