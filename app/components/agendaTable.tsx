"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Construction } from 'lucide-react';
import { agenda } from "@/lib/agenda";

// 仍在開發中，暫時不公開議程
const isUnderConstruction = true;

export default function AgendaTable() {
  const { t } = useTranslation("agenda");
  const { t: dt } = useTranslation("agendaDetail");
  const router = useRouter();

  if (isUnderConstruction) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center"><Construction className="mb-2 inline-block text-yellow-600" size={128}/><br />{t("UnderConstruction")}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-gray-600 text-white p-6">
          <h2 className="text-2xl font-bold text-center">{t("pageTitle")}</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-500">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase tracking-wider">
                    {t("sessions.time")}
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase tracking-wider">
                    {t("sessions.name")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {agenda.map((item) => (
                  <tr
                    key={item.id}
                    onClick={(item.type !== "Break") ? () => router.push(`/agenda/${item.id}`, { scroll: false }) : undefined}
                    className={`${(item.type === "Break") ? "bg-gray-300" : "bg-white hover:bg-gray-100 cursor-pointer"} transition-colors duration-200 border-b last:border-b-0`}
                  >
                    <td className="py-4 px-4 text-gray-800 font-medium">{item.time}</td>
                    <td className="py-4 px-4 text-gray-600">{dt(`sessions.${item.id}.name`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}