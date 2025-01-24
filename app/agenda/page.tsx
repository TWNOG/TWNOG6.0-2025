"use client";

import { useTranslation } from "react-i18next";

export default function AgendaPage() {
  const { t } = useTranslation("agenda");

  const agendaItems = [
    { time: "09:00 - 09:20", name: "Welcome Remark" },
    { time: "09:30 - 10:50", name: "Session A" },
    { time: "10:50 - 11:10", name: "Coffee Break" },
    { time: "11:10 - 12:30", name: "Session B" },
    { time: "12:30 - 13:30", name: "Lunch Break" },
    { time: "13:30 - 15:00", name: "Session C" },
    { time: "15:00 - 15:20", name: "Coffee Break" },
    { time: "15:20 - 17:00", name: "Session D" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h2 className="text-2xl font-bold text-center">{t("pageTitle")}</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-blue-500">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase tracking-wider">
                    {t("sessions.time")}
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase tracking-wider">
                    {t("sessions.name")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {agendaItems.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                      hover:bg-blue-50 transition-colors duration-200
                      border-b last:border-b-0
                    `}
                  >
                    <td className="py-4 px-4 text-gray-800 font-medium">
                      {item.time}
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {item.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}