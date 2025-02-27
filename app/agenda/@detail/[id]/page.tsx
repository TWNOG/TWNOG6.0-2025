import { use } from "react"
import AgendaDetail from "@/app/components/agendaDetail";

export default function AgendaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AgendaDetail id={id} />
  );
}
