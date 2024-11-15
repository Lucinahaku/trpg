import React from 'react';
import { motion } from 'framer-motion';
import { useRoute } from '../contexts/RouteContext';
import { Users, Clock, Shield, Zap } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  system: string;
  playerCount: string;
  duration: string;
  difficulty: '低' | '中' | '高';
  lossRate: '低' | '中' | '高' | '秘匿';
  thumbnailUrl: string;
}

const scenarios: Scenario[] = [
  {
    id: '1',
    name: 'ヴェヒター達の独白',
    system: 'クトゥルフ神話TRPG',
    playerCount: '4人固定',
    duration: '4-6時間',
    difficulty: '中',
    lossRate: '中',
    thumbnailUrl: '/images/20240128_105552_0000.png',
  },
  {
    id: '2',
    name: 'Cross iv',
    system: 'クトゥルフ神話TRPG',
    playerCount: '4人固定',
    duration: '30時間以上',
    difficulty: '高',
    lossRate: '高',
    thumbnailUrl: '/images/Civ1.png',
  },
  {
    id: '3',
    name: 'rEpl∀λ',
    system: 'クトゥルフ神話TRPG',
    playerCount: '4人固定',
    duration: '20時間～22時間',
    difficulty: '高',
    lossRate: '高',
    thumbnailUrl: '/images/rEpl∀λ1.jpg',
  },
  {
    id: '4',
    name: 'Fake Unsolved File',
    system: 'クトゥルフ神話TRPG',
    playerCount: '4人固定',
    duration: '20時間～',
    difficulty: '中',
    lossRate: '中',
    thumbnailUrl: '/images/20240302_005601.jpg',
  },
  {
    id: '5',
    name: 'Angel Found 404',
    system: 'クトゥルフ神話TRPG',
    playerCount: '2人',
    duration: '6～8時間',
    difficulty: '高',
    lossRate: '秘匿',
    thumbnailUrl: '/images/Call_of_Cthulu_20240607_083159_0000.png',
  },
  {
    id: '6',
    name: 'RESCUE HEROS',
    system: 'クトゥルフ神話TRPG',
    playerCount: '4人固定',
    duration: '30時間～',
    difficulty: '中',
    lossRate: '高',
    thumbnailUrl: '/images/RH1.png',
  },
];

const DifficultyBadge: React.FC<{ difficulty: Scenario['difficulty'] }> = ({ difficulty }) => {
  const colorClass = {
    '低': 'bg-green-100 text-green-800',
    '中': 'bg-yellow-100 text-yellow-800',
    '高': 'bg-red-100 text-red-800',
  }[difficulty];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
      {difficulty}
    </span>
  );
};

const LossRateBadge: React.FC<{ lossRate: Scenario['lossRate'] }> = ({ lossRate }) => {
  const colorClass = {
    '低': 'bg-blue-100 text-blue-800',
    '中': 'bg-purple-100 text-purple-800',
    '高': 'bg-pink-100 text-pink-800',
    '秘匿': 'bg-gray-100 text-gray-800',
  }[lossRate];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
      ロスト率: {lossRate}
    </span>
  );
};

const ScenarioList: React.FC = () => {
  const { navigate } = useRoute();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">シナリオ一覧</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white overflow-hidden shadow-lg rounded-xl"
            >
              <div className="relative pb-2/3">
                <img
                  className="absolute h-full w-full object-cover"
                  src={scenario.thumbnailUrl}
                  alt={scenario.name}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{scenario.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{scenario.system}</p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-indigo-500" />
                    {scenario.playerCount}
                  </p>
                  <p className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                    {scenario.duration}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-indigo-500" />
                    <DifficultyBadge difficulty={scenario.difficulty} />
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-indigo-500" />
                    <LossRateBadge lossRate={scenario.lossRate} />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => navigate(`/scenario/${scenario.id}`)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                  >
                    詳細を見る
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
          >
            ホームに戻る
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ScenarioList;