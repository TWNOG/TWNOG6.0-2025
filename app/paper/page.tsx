"use client";

import { useTranslation } from "react-i18next";

export default function CFPPage() {
  const { t } = useTranslation("cfp");

  return (
    <div className="p-6 pb-20">
      <section className="max-w-4xl mx-auto rounded shadow-sm">
        {/* 大標題 */}
        <h2 className="text-xl font-bold mb-2">{t("callForPapersTitle")}</h2>
        <p className="text-sm mb-4">{t("callForPapersDescription")}</p></br>
        <p className="text-sm mb-4">{t("callForPapersDescriptionSubmit.0")}<a href="https://submission.apnic.net/user/login.php?event=213">{t("callForPapersDescriptionSubmit.1")}</a></p>

        {/* Conference Milestones - Timeline */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {t("conferenceMilestonesTitle")}
          </h2>
          <div className="relative border-l border-gray-300 ml-4">
            <TimelineItem
              title={t("conferenceMilestones.open")}
              time={t("conferenceMilestones.openTime")}
            />
            <TimelineItem
              title={t("conferenceMilestones.draftProgram")}
              time={t("conferenceMilestones.draftProgramTime")}
            />
            <TimelineItem
              title={t("conferenceMilestones.submissionDeadline")}
              time={t("conferenceMilestones.submissionDeadlineTime")}
            />
            <TimelineItem
              title={t("conferenceMilestones.review")}
              time={t("conferenceMilestones.reviewTime")}
            />
            <TimelineItem
              title={t("conferenceMilestones.finalProgram")}
              time={t("conferenceMilestones.finalProgramTime")}
            />
            <TimelineItem
              title={t("conferenceMilestones.finalSlides")}
              time={t("conferenceMilestones.finalSlidesTime")}
            />
            <TimelineItem
              title={t("conferenceMilestones.conferenceDate")}
              time={t("conferenceMilestones.conferenceDateTime")}
            />
          </div>
        </div>

        {/* Program Content */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {t("programContentTitle")}
          </h2>
          <p className="text-sm mb-4">{t("presentationTopicsTitle")}</p>
          <p className="text-sm mb-2">{t("recommendedTopicsIntro")}</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>{t("recommendedTopicsList.0")}</li>
            <li>{t("recommendedTopicsList.1")}</li>
            <li>{t("recommendedTopicsList.2")}</li>
            <li>{t("recommendedTopicsList.3")}</li>
            <li>{t("recommendedTopicsList.4")}</li>
            <li>{t("recommendedTopicsList.5")}</li>
            <li>{t("recommendedTopicsList.6")}</li>
            <li>{t("recommendedTopicsList.7")}</li>
          </ul>
        </div>

        {/* CFP Submission */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {t("cfpSubmissionTitle")}
          </h2>
          <p className="text-sm mb-2">{t("cfpSubmissionDescription")}</p>
          <p className="text-sm mb-2">{t("contactInfo")}</p>
        </div>
      </section>
    </div>
  );
}

/**
 * TimelineItem 組件：
 * 利用絕對定位與 border-left (或其它 CSS 手法) 在左側畫出縱向線條，
 * 並在每個里程碑節點放置圓點與標題、日期資訊。
 */
function TimelineItem({ title, time }: { title: string; time: string }) {
  return (
    <div className="relative mb-8 ml-8">
      {/* Timeline node 圓點 */}
      <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full border  " />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{time}</p>
    </div>
  );
}
