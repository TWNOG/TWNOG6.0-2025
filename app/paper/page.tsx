"use client";

import { useTranslation } from "react-i18next";

export default function CFPPage() {
  const { t } = useTranslation("cfp");
  
  return (
    <div className="p-6 pb-20">
      <section className="max-w-4xl mx-auto rounded shadow-sm">
        {/* 大標題 */}
        <h1 className="text-3xl font-bold mb-4">{t("callForPapersTitle")}</h1>
        <p className="text-sm mb-4">
          {t("callForPapersDescription")}
        </p>

        {/* Conference Milestones */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t("conferenceMilestonesTitle")}</h2>
          <ul className="list-none space-y-1 text-sm">
            <li>
              {t("conferenceMilestones.open")}
            </li>
            <li>
            {t("conferenceMilestones.draftProgram")}
            </li>
            <li>
            {t("conferenceMilestones.submissionDeadline")}
            </li>
            <li>
            {t("conferenceMilestones.review")}
            </li>
            <li>
            {t("conferenceMilestones.finalProgram")}
            </li>
            <li>
            {t("conferenceMilestones.finalSlides")}
            </li>
            <li>
            {t("conferenceMilestones.conferenceDate")}
            </li>
          </ul>
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

        {/* Ending */}
        <p className="text-sm">
          {t("closingRemark")}
          <br /><br />
          <strong>{t("committeeSignature")}</strong>
        </p>
      </section>
    </div>
  );
}
