"use client";

import { useTranslation } from "react-i18next";
import { staff, Staff } from "@/lib/staff";
import Profile from "@/app/components/profile";

export default function StaffPage() {
    const { t } = useTranslation("staff");

    // 將所有 staff 依據 groups 分組
    const groupedStaff: { [key: string]: Staff[] } = {};
    staff.forEach((member) => {
        member.groups.forEach((group) => {
            if (!groupedStaff[group]) {
                groupedStaff[group] = [];
            }
            groupedStaff[group].push(member);
        });
    });

    const renderStaffLevel = (level: string, staffList: Staff[]) => (
        <div key={level} className="mb-8">
            <h2 className="text-xl font-bold capitalize mb-2">{t(`group.${level}`)}</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {staffList.map((staffMember, index) => (
                    <div key={index} className="text-center">
                        {staffMember.link ? (
                            <a href={staffMember.link} target="_blank" rel="noopener noreferrer">
                                <Profile staff={staffMember} />
                            </a>
                        ) : (
                            <Profile staff={staffMember} />
                        )}
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

                {/* 根據分組 render staff */}
                <div className="mb-8">
                    {Object.entries(groupedStaff).map(([level, staffList]) =>
                        staffList.length === 0 ? null : renderStaffLevel(level, staffList)
                    )}
                </div>
            </section>
        </div>
    );
}
