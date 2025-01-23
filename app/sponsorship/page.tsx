"use client";

import { useTranslation } from "react-i18next";

export default function SponsorshipPage() {
  // 假設此 namespace 叫 "sponsorship"
  // 確保對應到 public/locales/en/sponsorship.json（或 zh/sponsorship.json 等）
  const { t } = useTranslation("sponsorship");

  return (
    <div className="p-6 pb-20">
      <section className="max-w-4xl mx-auto">
        {/* 使用 t("pageTitle") 顯示主標題，如有需要可加上 h1 */}
        <h2 className="text-xl font-bold mb-2">{t("pageTitle")}</h2>

        {/* 贊助方案表格 */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-sm text-center">
            <thead className="">
              <tr>
                <th className="border border-gray-300 py-2 px-4">
                  {t("table.header.level")}
                </th>
                <th className="border border-gray-300 py-2 px-4">
                  {t("table.header.titanium")}
                </th>
                <th className="border border-gray-300 py-2 px-4">
                  {t("table.header.platinum")}
                </th>
                <th className="border border-gray-300 py-2 px-4">
                  {t("table.header.gold")}
                </th>
                <th className="border border-gray-300 py-2 px-4">
                  {t("table.header.silver")}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sponsor Amount */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.sponsorAmount")}
                </th>
                <td className="border border-gray-300 py-2 px-4 whitespace-nowrap">
                  NT 300,000 / USD 10,000
                </td>
                <td className="border border-gray-300 py-2 px-4 whitespace-nowrap">
                  NT 100,000 / USD 3,150
                </td>
                <td className="border border-gray-300 py-2 px-4 whitespace-nowrap">
                  NT 60,000 / USD 2,000
                </td>
                <td className="border border-gray-300 py-2 px-4 whitespace-nowrap">
                  NT 36,000 / USD 1,200
                </td>
              </tr>
              {/* Sponsor Session */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.sponsorSession")}
                </th>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.sessionKeynote")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.sessionNormal")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.sessionNone")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.sessionNone")}
                </td>
              </tr>
              {/* Logo on website & Hyperlink */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.logoWebsite")}
                </th>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
              </tr>
              {/* Logo on Signage */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.logoSignage")}
                </th>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
              </tr>
              {/* Event Backdrop Logo */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.backdropLogo")}
                </th>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
              </tr>
              {/* Free Ticket */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.freeTicket")}
                </th>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.freeTicket.titanium")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.freeTicket.platinum")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.freeTicket.gold")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.freeTicket.silver")}
                </td>
              </tr>
              {/* Dinner Quota */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.dinnerQuota")}
                </th>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.dinnerQuota.titanium")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.dinnerQuota.platinum")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.dinnerQuota.gold")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.numbers.dinnerQuota.silver")}
                </td>
              </tr>
              {/* Exhibition Desk */}
              <tr>
                <th className="border border-gray-300 py-2 px-4 font-semibold">
                  {t("table.rows.exhibitionDesk")}
                </th>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.deskTitanium")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.deskPlatinum")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.deskGold")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {t("table.rows.deskNone")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Introduction */}
        <p className="mt-4 text-sm">
          <strong>{t("introduction.title")}</strong>{t("introduction.content")}
        </p>

        {/* Notice */}
        <div className="mt-8 text-sm leading-relaxed">
        <h2 className="text-xl font-bold mb-2">{t("notice.title")}</h2>
          <p>
            <strong>{t("notice.rankingPrinciples.heading")}</strong>{t("notice.rankingPrinciples.description")}
          </p>
          <ol className="list-decimal list-inside mt-2 mb-2 pl-2">
            {(
              t("notice.rankingPrinciples.items", { returnObjects: true }) as string[]
            ).map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          <p>{t("notice.tableLocation")}</p>
        </div>
      </section>
    </div>
  );
}
