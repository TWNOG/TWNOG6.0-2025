"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { speakers, type Speaker } from "@/lib/speakers";
import { agenda, type Agenda } from "@/lib/agenda";
import { X, User2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type AgendaItem = Agenda & {
  speaker?: string;
  presentation?: string;
};

// Container variants for staggered children animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
      delayChildren: 0.2 // Delay before starting all children animations
    }
  }
};

// Item variants for individual elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  }
};

export default function AgendaDetailPage({ id }: { id: string }) {
  const { t } = useTranslation("agendaDetail");
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
    <AnimatePresence>
      {/* 整個畫面使用「固定定位 + 半透明背景」，模擬彈窗浮層 */}
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-60"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center h-screen p-4">
          {/* 白色內容區塊 */}
          <motion.div
            className="relative bg-white w-full max-w-screen-lg max-h-full overflow-y-auto rounded-lg shadow-lg p-6 md:p-8"
            onClick={stopPropagation}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.3
            }}
          >
            {/* 右上角關閉按鈕 */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {/* Container for sequentially animated content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* 議程類型 (如 "Presentation") */}
              {agendaItem.type && (
                <motion.h2
                  className="text-lg font-bold uppercase text-gray-500 mb-2"
                  variants={itemVariants}
                >
                  {agendaItem.type}
                </motion.h2>
              )}

              {/* 議程標題 */}
              <motion.h1
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                variants={itemVariants}
              >
                {agendaItem.name}
              </motion.h1>

              {/* 時間 + 地點 */}
              <motion.div
                className="text-sm text-gray-600 mb-6"
                variants={itemVariants}
              >
                {agendaItem.time}
                {agendaItem.location && (
                  <>
                    <span className="mx-2">|</span>
                    <span>{agendaItem.location}</span>
                  </>
                )}
              </motion.div>

              {/* 議程簡介 */}
              {agendaItem.description && (
                <motion.p
                  className="text-gray-800 leading-relaxed mb-8"
                  variants={itemVariants}
                >
                  {t(`sessions.${agendaItem.id}.description`)}
                </motion.p>
              )}

              {/* 講者介紹區塊 */}
              {sessionSpeakers.length > 0 && (
                <motion.div
                  className="mb-8"
                  variants={itemVariants}
                >
                  <motion.h2
                    className="text-xl md:text-2xl font-bold text-gray-900 mb-8"
                    variants={itemVariants}
                  >
                    {t("speaker")}
                  </motion.h2>
                  <ul className="list-none p-0 space-y-6">
                    {sessionSpeakers.map((speaker, index) => (
                      <motion.li
                        key={speaker.id}
                        className="flex flex-col md:flex-row gap-4 md:items-start border-b border-gray-200 pb-4 last:border-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.6 + (index * 0.2),
                          type: "spring",
                          damping: 20,
                          stiffness: 300
                        }}
                      >
                        {/* 左欄：人物照片 */}
                        <div className="md:w-1/4 flex flex-col items-center gap-2">
                          <h3 className="text-gray-700 text-xl text-center font-bold">
                            {speaker.name}
                          </h3>
                          <p className="text-gray-500 text-center mb-4">{speaker.org}</p>
                          {
                            speaker.img ? (
                              <Image
                                src={speaker.img}
                                alt={speaker.name}
                                width={40}
                                height={40}
                                className="w-40 h-40 rounded-lg object-cover"
                              />
                            ) : (
                              <User2 className="w-40 h-40 rounded-lg object-cover text-gray-400" />
                            )
                          }
                        </div>

                        {/* 右欄：文字介紹 */}
                        <div className="md:w-3/4">
                          {speaker.bio ? (
                            <p className="text-gray-700 mt-1 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: speaker.bio }}></p>
                          ) : (
                            <p className="text-gray-500 italic mt-1 leading-relaxed">{t("noBio")}</p>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* 其他按鈕 (簡報下載 / 更多資訊) */}
              <motion.div
                className="flex flex-wrap gap-3"
                variants={itemVariants}
              >
                {agendaItem.presentation && (
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    {t("presentation")}
                  </button>
                )}
                {/* 若需要返回列表連結，也可使用 Link */}
                <Link
                  href="/agenda"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
                  scroll={false}
                >
                  {t("backToList")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
