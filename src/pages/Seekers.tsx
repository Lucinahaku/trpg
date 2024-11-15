import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRoute } from '../contexts/RouteContext';
import { ChevronLeft, ChevronRight, User, Briefcase, MapPin, Ruler, Book, Trophy } from 'lucide-react';

interface Seeker {
  id: number;
  name: string;
  gender: string;
  age: number;
  occupation: string;
  origin: string;
  height: string;
  stats: {
    STR: number;
    CON: number;
    POW: number;
    DEX: number;
    APP: number;
    SIZ: number;
    INT: number;
    EDU: number;
  };
  images: string[];
  completedScenarios: string[];
  background: string;
  characterSheetUrl: string;
}

const seekers: Seeker[] = [
  {
    id: 1,
    name: "柊木 彩",
    gender: "男性",
    age: 24,
    occupation: "検事",
    origin: "日本・東京",
    height: "172cm",
    stats: { STR: 13, CON: 8, POW: 10, DEX: 8, APP: 17, SIZ: 12, INT: 14, EDU: 20 },
    images: ["/images/1.png", "/images/2.png", "/images/3.png","/images/4.png"],
    completedScenarios: ["Xからの告白"],
    background: "自分が世界で二番目に可愛いと思っている愛妻家検事。妻に休みの日やデート行く時は服決めてもらっており、半分着せ替え人形状態。仕事は必ずやり遂げることを信念に置いている。見た目で判断されることが心底嫌いで、見た目でとやかく言ってきた人間を全て実力と才能と努力でねじ伏せてきた。",
    characterSheetUrl: "https://iachara.com/view/9276600"
  },
  {
    id: 2,
    name: "住良木 綾瀬",
    gender: "男性",
    age: 23,
    occupation: "探偵助手",
    origin: "No data",
    height: "197cm",
    stats: { STR: 12, CON: 10, POW: 12, DEX: 10, APP: 17, SIZ: 18, INT: 15, EDU: 19 },
    images: ["/images/character01.png", "/images/character02.png", "/images/character03.png","/images/character04.png"],
    completedScenarios: ["オルタナティヴ・ダブル"],
    background: "くず。ごみ。実質探偵の紐。平気で嘘つくし平気でヘラヘラ笑ってる。人の言うことは聞かないし聞く気すらない。探偵の言うことは聞く。聞くだけで従うかは別。探偵以外の名前は言いたがらない。自分の顔がいいことを自覚しており、昔は女遊びが酷かった。今は飽きたからやってない。",
    characterSheetUrl: "https://iachara.com/view/9011151"
  },
  {
    id: 3,
    name: "霜月 雪",
    gender: "男性",
    age: 22,
    occupation: "殺し屋",
    origin: "No data",
    height: "203cm",
    stats: { STR: 15, CON: 10, POW: 16, DEX: 9, APP: 12, SIZ: 18, INT: 18, EDU: 20 },
    images: ["/images/babu1.png","/images/babu2.png","/images/babu3.png","/images/babu4.png"],
    completedScenarios: ["四季送り","ちょっと心臓が早く動くだけ(KPC)","ちょっと心臓が早く動くだけ(KPC)","未完成"],
    background: "純粋無垢な22歳。中身の年齢が10歳から15歳くらいで止まっているくらいに甘えん坊のでっかいばぶ。一人がとても嫌い。何を考えてるのかが分かりずらいが、表情筋が豊かだからすぐ分かる。嫌なことは嫌ってちゃんと言う。無意識に甘えに行く癖がある。しかし、甘えるだけじゃなくて周りのことはちゃんと見てるため、しんどそうな仲間を見つけたら甘やかす。泣き虫ではないが泣くときはちゃんと泣く。",
    characterSheetUrl: "https://iachara.com/view/7721721"
  },
  {
    id: 4,
    name: "椎原 美佳",
    gender: "男性",
    age: 32,
    occupation: "刑事",
    origin: "東京",
    height: "205cm",
    stats: { STR: 12, CON: 10, POW: 12, DEX: 10, APP: 13, SIZ: 18, INT: 14, EDU: 14 },
    images: ["/images/01.png", "/images/02.png", "/images/03.png","/images/04.png"],
    completedScenarios: ["リバースリバースリバース","墓前にて"],
    background: "概念ばぶちゃん。表情はかなり豊か。喜怒哀楽が凄いわかりやすい。精神力はピヨピヨのため、怒られたりすると怯える。自分の体が大きいことがコンプレックスで周りの人と仲良くしたいのに怯えられたりすることもある。",
    characterSheetUrl: "https://iachara.com/view/7423418"
  },
  {
    id: 5,
    name: "ガブリエラ＝サンチェス",
    gender: "女性",
    age: 28,
    occupation: "FBI捜査官",
    origin: "アメリカ・サンフランシスコ州",
    height: "156cm",
    stats: { STR: 11, CON: 14, POW: 13, DEX: 16, APP: 17, SIZ: 14, INT: 13, EDU: 16 },
    images: ["/images/SSS.S.png", "/images/SSS.S-2.png", "/images/SSS.S-3.png","/images/SSS.S-4.png"],
    completedScenarios: ["SSS.S"],
    background: "元々民間軍事会社で傭兵活動を行っていたところ、FBIリクルーターから声がかかりアカデミーの成績からFBIに所属。根は良い奴なのだがかなり口足らずで、冷たい印象を受ける雰囲気があるため友達が少ない。正義感はかなり強い。",
    characterSheetUrl: "https://iachara.com/view/8345996"
  }
];

const Seekers: React.FC = () => {
  const [currentSeekerId, setCurrentSeekerId] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const { navigate } = useRoute();

  const currentSeeker = seekers.find(seeker => seeker.id === currentSeekerId) || seekers[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % currentSeeker.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSeeker]);

  const nextSeeker = () => {
    setCurrentSeekerId((prevId) => (prevId % seekers.length) + 1);
    setImageIndex(0);
  };

  const prevSeeker = () => {
    setCurrentSeekerId((prevId) => (prevId === 1 ? seekers.length : prevId - 1));
    setImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            探索者一覧
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            これが俺の自探だ！！！！！！！！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 lg:w-2/5 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageIndex}
                  src={currentSeeker.images[imageIndex]}
                  alt={`${currentSeeker.name}の立ち絵`}
                  className="w-full h-full object-cover object-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {currentSeeker.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === imageIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                    onClick={() => setImageIndex(index)}
                    aria-label={`画像 ${index + 1} に切り替え`}
                  />
                ))}
              </div>
            </div>
            <div className="p-8 md:w-1/2 lg:w-3/5">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">探索者プロフィール</div>
              <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">{currentSeeker.name}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{currentSeeker.gender} | {currentSeeker.age}歳</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{currentSeeker.occupation}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{currentSeeker.origin}</span>
                </div>
                <div className="flex items-center">
                  <Ruler className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{currentSeeker.height}</span>
                </div>
              </div>
              
              <h3 className="mt-6 text-xl font-semibold">ステータス</h3>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {Object.entries(currentSeeker.stats).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-center bg-gray-100 rounded-lg p-2">
                    <span className="font-medium text-sm text-gray-600">{key}</span>
                    <span className="text-lg font-bold">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-6 text-xl font-semibold flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-indigo-500" />
                通過済みシナリオ
              </h3>
              <ul className="list-disc list-inside mt-2">
                {currentSeeker.completedScenarios.map((scenario, index) => (
                  <li key={index} className="text-gray-700">{scenario}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-xl font-semibold flex items-center">
                <Book className="w-5 h-5 mr-2 text-indigo-500" />
                設定
              </h3>
              <p className="mt-2 text-gray-700">{currentSeeker.background}</p>

              <div className="mt-6">
                <a
                  href={currentSeeker.characterSheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  キャラクターシートを見る →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={prevSeeker}
            className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-full shadow hover:bg-indigo-100 transition duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            ホームに戻る
          </button>
          <button
            onClick={nextSeeker}
            className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-full shadow hover:bg-indigo-100 transition duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seekers;