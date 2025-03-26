"use client";

import { useTranslation } from "react-i18next";
import { sponsors, Sponsor } from "@/lib/sponsors";
import Image from "next/image";

const sponsorLogoSize: { [level: string]: string } = {
  host: "grid-cols-1 md:grid-cols-2",
  cohost: "grid-cols-1 md:grid-cols-3",
  titanium: "grid-cols-1 md:grid-cols-2",
  platinum: "grid-cols-1 md:grid-cols-3",
  gold: "grid-cols-1 md:grid-cols-3",
  silver: "grid-cols-2 md:grid-cols-4",
  workshop: "grid-cols-2 md:grid-cols-4",
  internet: "grid-cols-2 md:grid-cols-4",
  special_thanks: "grid-cols-2 md:grid-cols-4",
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
      </section>
    </div>
  );
}
