"use client";

import AgendaTable from "@/app/components/agendaTable";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { agenda } from "@/lib/agenda";

export default function AgendaPage() {
  const router = useRouter();

  useEffect(() => {
    // prefetch agenda detail pages
    agenda.filter((item) => item.type !== "Break").map((item) => {
      router.prefetch(`/agenda/${item.id}`);
    });
  }, [router]);

  return <AgendaTable />;
}
