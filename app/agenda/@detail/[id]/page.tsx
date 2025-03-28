import { use } from "react"
import { agenda } from "@/lib/agenda";
import AgendaDetail from "@/app/components/agendaDetail";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agendaItem = agenda.find((item) => item.id === id);
  return {
    title: `${agendaItem?.name || id}`,
    description: `${agendaItem?.description}`
  };
}

export default function AgendaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AgendaDetail id={id} />
  );
}
