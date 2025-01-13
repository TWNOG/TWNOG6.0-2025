"use client";

import { useTranslation } from "react-i18next";

// app/agenda/page.tsx
export default function AgendaPage() {
    const { t } = useTranslation("agenda");
  
    return (
      <div className="p-6 pb-20">
        <section className="max-w-4xl mx-auto rounded shadow-sm">
          <h2 className="text-xl font-bold mb-2">{t("pageTitle")}</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-semibold">{t("sessions.time")}</th>
                <th className="text-left py-2 px-4 font-semibold">{t("sessions.name")}</th>
              </tr>
            </thead>
            <tbody>
            <tr className="border-b">
                <td className="py-2 px-4">09:00 - 09:20</td>
                <td className="py-2 px-4">Welcome Remark</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">09:30 - 10:50</td>
                <td className="py-2 px-4">Session A</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">10:50 - 11:10</td>
                <td className="py-2 px-4">Coffee Break</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">11:10 - 12:30</td>
                <td className="py-2 px-4">Session B</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">12:30 - 13:30</td>
                <td className="py-2 px-4">Lunch Break</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">13:30 - 15:00</td>
                <td className="py-2 px-4">Session C</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">15:00 - 15:20</td>
                <td className="py-2 px-4">Coffee Break</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">15:20 - 17:00</td>
                <td className="py-2 px-4">Session D</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
  