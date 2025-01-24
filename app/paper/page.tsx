"use client";

import { useTranslation } from "react-i18next";
import { Clock, Calendar, FileText, ChevronRight } from 'lucide-react';

export default function CFPPage() {
  const { t } = useTranslation("cfp");

  const milestones = [
    { title: t("conferenceMilestones.open"), time: t("conferenceMilestones.openTime") },
    { title: t("conferenceMilestones.draftProgram"), time: t("conferenceMilestones.draftProgramTime") },
    { title: t("conferenceMilestones.submissionDeadline"), time: t("conferenceMilestones.submissionDeadlineTime") },
    { title: t("conferenceMilestones.review"), time: t("conferenceMilestones.reviewTime") },
    { title: t("conferenceMilestones.finalProgram"), time: t("conferenceMilestones.finalProgramTime") },
    { title: t("conferenceMilestones.finalSlides"), time: t("conferenceMilestones.finalSlidesTime") },
    { title: t("conferenceMilestones.conferenceDate"), time: t("conferenceMilestones.conferenceDateTime") },
  ];

  const recommendedTopics = [
    t("recommendedTopicsList.0"),
    t("recommendedTopicsList.1"),
    t("recommendedTopicsList.2"),
    t("recommendedTopicsList.3"),
    t("recommendedTopicsList.4"),
    t("recommendedTopicsList.5"),
    t("recommendedTopicsList.6"),
    t("recommendedTopicsList.7"),
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-600 text-white p-6">
            <h2 className="text-2xl font-bold text-center">{t("callForPapersTitle")}</h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Introduction */}
            <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded">
              <p className="text-gray-700 break-words">{t("callForPapersDescription")}</p>
              <p className="mt-2 text-gray-700 break-words">
                {t("callForPapersDescriptionSubmit.0")}
                <a 
                  href="https://submission.apnic.net/user/login.php?event=213" 
                  className="text-gray-600 hover:underline font-semibold"
                >
                  {t("callForPapersDescriptionSubmit.1")}
                </a>
              </p>
            </div>

            {/* Conference Milestones */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-600">
                <Calendar className="mr-2 text-gray-600" size={24} />
                {t("conferenceMilestonesTitle")}
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Clock className="mr-4 text-gray-600" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Content */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-600">
                <FileText className="mr-2 text-gray-600" size={24} />
                {t("programContentTitle")}
              </h3>
              <p className="text-gray-700 mb-4">{t("presentationTopicsTitle")}</p>
              <p className="text-gray-700 mb-4">{t("recommendedTopicsIntro")}</p>
              <ul className="grid md:grid-cols-2 gap-2 bg-gray-100 p-4 rounded-lg">
                {recommendedTopics.map((topic, index) => (
                    <li 
                    key={index} 
                    className="flex items-center text-gray-700"
                    >
                    <ChevronRight className="mr-2 text-gray-500 flex-shrink-0" size={24} />
                    {topic}
                    </li>
                ))}
              </ul>
            </div>

            {/* CFP Submission */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-600">
                <FileText className="mr-2 text-gray-600" size={24} />
                {t("cfpSubmissionTitle")}
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">{t("cfpSubmissionDescription.0")}</p>
                <p className="text-gray-700">{t("cfpSubmissionDescription.1")}</p>
                <p className="text-gray-700">{t("cfpSubmissionDescription.2")}</p>
                <p className="text-gray-700 font-semibold mt-2">{t("contactInfo")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}