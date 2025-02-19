"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { speakers, type Speaker } from "@/lib/speakers";
import { agenda, type Agenda } from "@/lib/agenda";

export const runtime = 'edge';

type AgendaItem = Agenda & {
  speaker?: string;
  presentation?: string;
};

export default function AgendaDetailPage() {
  const { t } = useTranslation("agenda");
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [agendaItem, setAgendaItem] = useState<AgendaItem | null>(null);

  useEffect(() => {
    const foundItem = agenda.find((item) => item.id === id);
    setAgendaItem(foundItem || null);
  }, [id]);

  // 如果找不到對應的議程，顯示載入或 404
  if (!agendaItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{t("loading")}</p>
      </div>
    );
  }

  // 依據當前議程 id 篩選出對應講者（若有）
  const sessionSpeakers: Speaker[] = speakers.filter((speaker) =>
    speaker.sessionIds.includes(agendaItem.id)
  );

  // 按下關閉按鈕或背景時，返回議程列表
  const handleClose = () => {
    router.push("/agenda");
  };

  return (
    // 整個畫面使用「固定定位 + 半透明背景」，模擬彈窗浮層
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 overflow-y-auto"
      onClick={handleClose}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* 白色內容區塊 */}
        <div className="relative bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 md:p-8">
          {/* 右上角關閉按鈕 */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 議程類型 (如 "Presentation") */}
          {agendaItem.type && (
            <h2 className="text-lg font-bold uppercase text-gray-500 mb-2">
              {agendaItem.type}
            </h2>
          )}

          {/* 議程標題 */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {agendaItem.name}
          </h1>

          {/* 時間 + 地點 */}
          <div className="text-sm text-gray-600 mb-6">
            {agendaItem.time}
            {agendaItem.location && (
              <>
                <span className="mx-2">|</span>
                <span>{agendaItem.location}</span>
              </>
            )}
          </div>

          {/* 議程簡介 */}
          {agendaItem.description && (
            <p className="text-gray-800 leading-relaxed mb-8">
              {agendaItem.description}
            </p>
          )}

          {/* 講者介紹區塊 */}
          {sessionSpeakers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-gray-700 text-xl font-bold mb-4">{t("speaker")}</h3>
              <ul className="space-y-6">
                {sessionSpeakers.map((speaker) => (
                  <li
                    key={speaker.id}
                    className="flex flex-col md:flex-row items-start md:items-center space-x-4"
                  >
                    {/* 講者照片 */}
                    {speaker.img && (
                      <img
                        src={speaker.img}
                        alt={speaker.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    )}
                    {/* 講者姓名與簡介 */}
                    <div className="mt-2 md:mt-0">
                      <h4 className="text-gray-700 text-lg font-semibold">{speaker.name}</h4>
                      {speaker.bio && (
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          {speaker.bio}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 其他按鈕 (簡報下載 / 更多資訊) */}
          <div className="flex flex-wrap gap-3">
            {agendaItem.presentation && (
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                {t("presentation")}
              </button>
            )}
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              onClick={() => alert("更多資訊...")}
            >
              {t("moreInfo")}
            </button>
            {/* 若需要返回列表連結，也可使用 Link */}
            <Link
              href="/agenda"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
            >
              {t("backToList")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
