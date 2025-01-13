"use client";

import { useTranslation } from "react-i18next";

export default function CFPPage() {
  const { t } = useTranslation("cfp");

  return (
    <div className="p-6 pb-20">
      <section className="max-w-4xl mx-auto rounded shadow-sm">
        {/* 大標題 */}
        <h2 className="text-xl font-bold mb-2">{t("callForPapersTitle")}</h2>
        <p className="text-sm mb-4">
          {t("callForPapersDescription")}
        </p>

        {/* Conference Milestones */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t("conferenceMilestonesTitle")}</h2>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-sm text-center">
              <thead className="">
                <tr>
                  <th className="border border-gray-300 py-2 px-4">
                    {t("conferenceMilestones.open")}
                  </th>
                  <th className="border border-gray-300 py-2 px-4">
                    {t("conferenceMilestones.openTime")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 font-semibold">
                    {t("conferenceMilestones.draftProgram")}
                  </th>
                  <td className="border border-gray-300 py-2 px-4 whitespace-nowrap">
                    {t("conferenceMilestones.draftProgramTime")}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 font-semibold">
                    {t("conferenceMilestones.submissionDeadline")}
                  </th>
                  <td className="border border-gray-300 py-2 px-4">
                    {t("conferenceMilestones.submissionDeadlineTime")}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 font-semibold">
                    {t("conferenceMilestones.review")}
                  </th>
                  <td className="border border-gray-300 py-2 px-4">{t("conferenceMilestones.reviewTime")}</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 font-semibold">
                    {t("conferenceMilestones.finalProgram")}
                  </th>
                  <td className="border border-gray-300 py-2 px-4">{t("conferenceMilestones.finalProgramTime")}</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 font-semibold">
                    {t("conferenceMilestones.finalSlides")}
                  </th>
                  <td className="border border-gray-300 py-2 px-4">{t("conferenceMilestones.finalSlidesTime")}</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 font-semibold">
                    {t("conferenceMilestones.conferenceDate")}
                  </th>
                  <td className="border border-gray-300 py-2 px-4">
                    {t("conferenceMilestones.conferenceDateTime")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Program Content */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t("programContentTitle")}</h2>
          <p className="text-sm mb-4">
            {t("presentationTopicsTitle")}
          </p>
          <p className="text-sm mb-2">
            {t("recommendedTopicsIntro")}
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              {t("recommendedTopicsList.0")}
            </li>
            <li>
              {t("recommendedTopicsList.1")}
            </li>
            <li>
              {t("recommendedTopicsList.2")}
            </li>
            <li>
              {t("recommendedTopicsList.3")}
            </li>
            <li>
              {t("recommendedTopicsList.4")}
            </li>
            <li>
              {t("recommendedTopicsList.5")}
            </li>
            <li>
              {t("recommendedTopicsList.6")}
            </li>
            <li>
              {t("recommendedTopicsList.7")}
            </li>
          </ul>
        </div>

        {/* CFP Submission */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t("cfpSubmissionTitle")}</h2>
          <p className="text-sm mb-2">
            {t("cfpSubmissionDescription")}
          </p>
          <p className="text-sm mb-2">
            {t("contactInfo")}
          </p>
        </div>
      </section>
    </div>
  );
}
