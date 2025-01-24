"use client";

import { useTranslation } from "react-i18next";
import { staff, Staff } from "@/lib/staff";
import Image from "next/image";

export default function StaffPage() {
    const { t } = useTranslation("staff");
    const renderStaffLevel = (level: string, staffList: Staff[]) => (
        <div key={level} className="mb-8">
            <h2 className="text-xl font-bold capitalize mb-2">{t(`group.${level}`)}</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {staffList.map((staff, index) => (

                    <div key={index} className="text-center">
                        <Image
                            src={
                                staff.md5
                                    ? `https://www.gravatar.com/avatar/${staff.md5}?s=256`
                                    : staff.img
                            }
                            alt={staff.name}
                            width={256}
                            height={256}
                            className="h-24 w-24 object-cover rounded-full mx-auto border border-gray-300"
                        />
                        <p className="mt-2 text-sm font-medium">{staff.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="p-6 pb-20">
            <section className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-2">{t("pageTitle")}</h2>
                <p className="mb-8">{t("pageDescription")}</p>

                {/* 贊助廠商們 */}
                <div className="mb-8">
                    {Object.entries(staff).map(([level, staffList]) =>
                        staffList.length === 0 ? null : renderStaffLevel(level, staffList
                        ))
                    }
                </div>

                {/* 使用 t("pageTitle") 顯示主標題，如有需要可加上 h1 */}


            </section>
        </div>
    );
}
