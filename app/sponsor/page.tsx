"use client";

import { useTranslation } from "react-i18next";
import { sponsors, Sponsor } from "@/lib/sponsors";
import Image from "next/image";

const sponsorLogoSize: { [level: string]: string } = {
  host:     "grid-cols-1 md:grid-cols-2",
  titanium: "grid-cols-1 md:grid-cols-2",
  platinum: "grid-cols-1 md:grid-cols-3",
  gold:     "grid-cols-1 md:grid-cols-3",
  silver:   "grid-cols-2 md:grid-cols-4",
  workshop: "grid-cols-2 md:grid-cols-4",
  internet: "grid-cols-2 md:grid-cols-4",
};

export default function SponsorPage() {
  const { t } = useTranslation("sponsor");
  const renderSponsorLevel = (level: string, sponsorList: Sponsor[]) => (
    <div key={level} className="mb-8">
      <h2 className="text-2xl font-bold capitalize mb-2">{t(`table.header.${level}`)}</h2>
      <div className={"grid gap-4 " + sponsorLogoSize[level]}>
        {sponsorList.map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-gray-300 bg-white rounded-lg aspect-[2/1]"
          >
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="h-[80%] w-[80%]">
              <Image
                src={sponsor.img}
                alt={sponsor.name}
                width={256}
                height={24}
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 pb-20">
      <section className="max-w-4xl mx-auto">

        {/* 贊助廠商們 */}
        <div className="mb-8">
          {Object.entries(sponsors).map(([level, sponsorList]) =>
            sponsorList.length === 0 ? null : renderSponsorLevel(level, sponsorList
            ))
          }
        </div>

        {/* 使用 t("pageTitle") 顯示主標題，如有需要可加上 h1 */}
        <h2 className="text-xl font-bold mb-2">{t("pageTitle")}</h2>

        {/* 贊助方案表格 */}
        <div className="overflow-x-auto mb-2">
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
          <h2 className="text-xl font-bold mb-2">{t("notice.rankingPrinciples.heading")}</h2>
          <p>
            <strong></strong>{t("notice.rankingPrinciples.description")}
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
