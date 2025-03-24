"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { speakers, type Speaker } from "@/lib/speakers";
import { agenda, type Agenda } from "@/lib/agenda";

type AgendaItem = Agenda & {
  speaker?: string;
  presentation?: string;
};

export default function AgendaDetailPage({ id }: { id: string }) {
  const { t } = useTranslation("agenda");
  const router = useRouter();

  const agendaItem: AgendaItem | undefined = agenda.find((item) => item.id === id);

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
    router.push("/agenda", { scroll: false });
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    // 整個畫面使用「固定定位 + 半透明背景」，模擬彈窗浮層
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60"
      onClick={handleClose}
    >
      <div className="flex items-center justify-center h-screen p-4">
        {/* 白色內容區塊 */}
        <div className="relative bg-white w-full max-w-screen-lg max-h-full overflow-y-auto rounded-lg shadow-lg p-6 md:p-8" onClick={stopPropagation}>
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
              <ul className="list-none p-0 space-y-6">
                {sessionSpeakers.map((speaker) => (
                  <li
                    key={speaker.id}
                    // 1) 改用 flex-col (小螢幕) + flex-row (中螢幕)
                    // 2) 調整 gap 或 space-x，讓左右空間更舒適
                    className="flex flex-col md:flex-row gap-2 md:items-start"
                  >
                    {/* 左欄：人物照片 */}
                    {speaker.img && (
                      <div className="md:w-1/4 flex justify-start">
                        <img
                          src={speaker.img}
                          alt={speaker.name}
                          // 可以調大一點，或用 max-w-xs / w-48 / h-48 等
                          className="w-40 h-40 rounded-lg object-cover"
                        />
                      </div>
                    )}

                    {/* 右欄：文字介紹 */}
                    <div className="md:w-3/4">
                      <h3 className="text-gray-700 text-xl font-bold mb-4">
                        {speaker.name}
                      </h3>
                      {speaker.bio && (
                        <p className="text-gray-700 mt-1 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: speaker.bio }}></p>
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
