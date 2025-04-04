import { use } from "react"
import { agenda } from "@/lib/agenda";
import AgendaDetail from "@/app/components/agendaDetail";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agendaItem = agenda.find((item) => item.id === id);
  return {
    title: `${agendaItem?.name || id} - TWNOG 6`,
    description: `${agendaItem?.description?.replace(/\n/g, " ")}`,
    openGraph: {
      title: `${agendaItem?.name || id} - TWNOG 6`,
      description: `${agendaItem?.description?.replace(/\n/g, " ")}`,
      url: `https://2025.twnog.net/agenda/${id}`,
      type: "website",
      // images: ["https://2025.twnog.net/path-to-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${agendaItem?.name || id} - TWNOG 6`,
      description: `${agendaItem?.description?.replace(/\n/g, " ")}`,
      // images: ["https://2025.twnog.net/path-to-image.jpg"],
    },
  };
}

export default function AgendaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AgendaDetail id={id} />
  );
}
