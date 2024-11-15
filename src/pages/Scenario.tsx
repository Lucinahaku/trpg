import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRoute } from '../contexts/RouteContext';
import { ChevronLeft, ChevronRight, Clock, Users, BookOpen, Zap, Shield } from 'lucide-react';

export interface ScenarioData {
  id: string;
  name: string;
  system: string;
  format: string;
  supplements: string[];
  playerCount: string;
  duration: string;
  lossRate: '低' | '中' | '高'| '秘匿';
  difficulty: '低' | '中' | '高' ;
  tendency: string[];
  recommendedSkills: string[];
  elements: string[];
  warnings: string[];
  publicHandouts: string[];
  publicNPCs?: string[];
  synopsis?: string;
  trailerImages: string[];
}

export const scenarios: ScenarioData[] = [
  {
    id: '1',
    name: 'ヴェヒター達の独白',
    system: 'クトゥルフ神話TRPG',
    format: '秘匿HO、新規限定、シティシナリオ',
    supplements: ['クトゥルフ神話TRPG6版', '2010','2015','マレモン'],
    playerCount: '4人固定',
    duration: '6～8時間',
    lossRate: '中',
    difficulty: '中',
    tendency: ['RP重視', '戦闘あり', 'ハリウッド'],
    recommendedSkills: ['三大技能', '戦闘技能', '交渉系技能','HO補正技能'],
    elements: ['グロゴア / 神話生物や呪文に対する独自解釈 / オリジナルカルト集団 / PvPの可能性 / 探索者に対する設定の付与 / 特殊な探索者の作成方法 / 猟奇的な殺人事件並びに残酷な事件の描写 / 人為的な爆破並びに火災の描写 / 実在する場所の記載'],
    warnings: ['今回の探索者は母国語のほかにEDU×5の値を英語もしくは日本語に付与する', '探索者や人間は基本的に酷い目に会います。動物は安心してください。','作者はFBIと日本警察についてやんわりしか理解していないため、半分ファンタジーのように捉えてもらえるとありがたいです。','本シナリオの秘匿はあくまで探索者作成にあたる指標的な意味合いしか持ちません。そのため、自分がどのような秘匿であるかは任意のタイミングで発言してもらって構いません。それに伴うデメリット等は殆どありません。','フィクションの話をフィクションと割り切れる人向け','シナリオ中に登場する事件・人名・組織等は実際に起こった物とは一切関係しておりません。また、本シナリオは殺人や特定の思想、犯罪等を助長するような意図は一切ありません。','実在する場所が出てきますが、現実のものとは一切関係がありません。'],
    publicHandouts: ['HO1：Nova(25歳固定)貴方は新人特別捜査官だ。迷宮入りとされた未解決事件を解決した天才である。', 'HO2：Joker(26歳固定)貴方は新人刑事だ。今回の事件を誰よりも先に気づくことが出来た秀才である。','HO3：Michael貴方は敏腕特別捜査官だ。救いを求める人は手を差し伸べ、犯罪者を裁いてきた。','HO4：Themis貴方は敏腕刑事だ。正義感が誰よりも強く何度もその天秤を傾けてきた。'],
    publicNPCs: ['聖山 修(ひじりやま おさむ)/42歳/男/警視庁刑事部捜査一課 警部『それは私が決めることではなく、君たちが決めることだ』『分かった。君たちの好きなようにやればいい』警視庁刑事部捜査一課の警部。HO2&HO4の上司に当たる人。厳格な雰囲気ではあるが、基本放任主義である。部下からの信頼も厚く、探索者を信頼してる。', 'ケヴィン・ヴァンチャット/38歳/男 /FBI『なんか困ったことあれば言えよ？力になれるかわかんねぇけど』『俺はお前たちを信用してんだぜ？』FBIの特別捜査官であり、HO1&HO3の上司に当たる人。全体的に緩い性格をしているがやる時はやる。23歳からFBIとして活動している。得意武器はスナイパーライフル。','A/？？歳/？？/黄昏のボス『始めようか。世界の救済を』アメリカの無差別殺人事件の主犯である黄昏のボス。自らをAと名乗っている。','H/？？歳/？？/トワイライトのボス『ボス、仰せの通りに』日本の無差別殺人事件の主犯であるトワイライトのボス。自らをHと名乗っている。'],
    synopsis: '2023年。アメリカ、バージニア州にて『黄昏』と名乗るカルト集団による無差別殺人事件が発生、時を同じくして日本の東京都にて『トワイライト』と名乗るカルト集団による無差別殺人事件が発生した。両政府はこの事件を同一組織による犯行と見なし、日本警察とFBIの合同チームによる捜査を行うことを決定した。',
    trailerImages: ['/images/20240128_105552_0000.png', '/images/ヴェヒ独3.png', '/images/ヴェヒ独4.png','/images/ヴェヒ独5.png','/images/ヴェヒ独6.png','/images/ヴェヒ独7.png','/images/ヴェヒ独8.png','/images/ヴェヒ独9.png'],
  },
  {
    id: '2',
    name: 'Cross iv',
    system: 'クトゥルフ神話TRPG',
    format: '秘匿HO、新規限定、シティシナリオ、4話CP',
    supplements: ['クトゥルフ神話TRPG6版', '2010','2015','マレモン'],
    playerCount: '4人固定',
    duration: '30時間',
    lossRate: '高',
    difficulty: '高',
    tendency: ['RP重視','戦闘・探索多','群像劇'],
    recommendedSkills: ['HO記載技能','探索技能'],
    elements: ['グロゴア / 救いのないエンド / バッドエンド多数 / 高難易度 / メタフィクション / 感情の指定 / NPCとの関係性(恋愛を含む)の付与の可能性 / NPCからの感情 / 妖怪、事象、神話生物、呪文に対する超独自解釈 / 探索者の存在を問われる描写 / 神話生物多数 / その他ネタバレの地雷 / オリジナル呪文・AF・教団 ・妖怪/ 途中ロストの可能性 /選択によるロスト / 出目によるロスト / 途中蘇生の可能性 / 現実とはかけはなれすぎている世界観 / マルチバースに関する独自解釈 / 探索者に対する重大な設定の付与 / 特殊な探索者の作成 / NPCのロスト / NPCを含めた群像劇であるため、NPCが主役のような描写あり'],
    warnings: ['各HOに事前導入シナリオがあります', '本シナリオは神話的事象、神話生物、妖怪に対しての独自解釈、オリジナルAFや呪文を含みます。','探索者に対して何かしらの重大な設定が付きます。','シナリオの自作発言、無断転載、盗作、ネタバレ、シナリオの大幅な改変は禁止です。','NPCはルートによってはロストする可能性があります','ネタバレになる地雷が含まれているかもしれません。KPをする場合、ヒアリングを必ず行ってください。','一部メタフィクションを含む描写があります。','NPCからPCに対する何かしらの感情','本シナリオは非常に地雷が多いシナリオとなります。','途中ロストが有り得るシナリオです。','NPCを含めた群像劇であるため、NPCにも見せ場があります。'],
    publicHandouts: ['共通HO：あなたたちは主人公だ。','HO1：アンドロイドーー技術の結晶或いは叡智','HO2：妖怪ーー伝承上或いは架空の存在','HO3：高校生(15～18固定)ーー平穏或いは■■■','HO4：魔法少女(女性固定)ーー救世主或いは■■■'],
    publicNPCs: ['？？？/男性 シルクハットをかぶった男性。劇場の管理人をしている。『この世界は劇場のようなものさ。喜劇もあれば悲劇もある』', '南沢千夏/女性 ミステリアスな雰囲気の少女。普段何を考えているかがよく分からない。『……アイス、美味しい』', '相沢 菜月/男性 全体的にゆるい雰囲気の男性。いつもどこか抜けている節がある。『…砂糖じゃなくて塩だこれ』', 'シズク/女性 純粋無垢で元気な少女。妹のような雰囲気があり周りから可愛がられている。『見てください！猫ちゃんです！』', '白鳳/男性 万年和服を着ている青年。口が悪く怒らせたら怖い厳格な雰囲気がある。『うるせぇな……。ちったぁ静かにしろ』'],
    synopsis: 'この物語にあらすじは存在しない。あなたたちそれぞれ自身があらすじだ。',
    trailerImages: ['/images/Civ1.png', '/images/Civ2.png', '/images/Civ3.png','/images/Civ4.png','/images/Civ5.png','/images/Civ6.png','/images/Civ7.png','/images/Civ8.png'],
  },
  {
    id: '3',
    name: 'rEpl∀λ',
    system: 'クトゥルフ神話TRPG',
    format: '2045年アメリカ合衆国、秘匿HO、新規限定、シティシナリオ',
    supplements: ['クトゥルフ神話TRPG6版', '2010','2015','マレモン'],
    playerCount: '4人',
    duration: '20～22時間',
    lossRate: '高',
    difficulty: '高',
    tendency: ['FBI','近未来','特殊能力','アンドロイド','■■'],
    recommendedSkills: ['三大探索技能', '戦闘技能'],
    elements: ['グロゴア / 現代とは似て似つかない世界観 / オーバーテクノロジー / 神話生物、神話的事象、呪文に対する独自解釈/救いの無いエンド / 高難易度 / 感情の指定 / NPCとの関係性付与(恋愛は含まれない) / NPCに感情を抱く・抱かれる / 選択によるロスト / 出目によるロスト / 選択によるロスト / ロスト率の偏り / PCに重大な設定が付与 / PCの過去設定付与の可能性 / 途中ロスト / 特殊戦闘 / 特殊設定 / オリジナルAF、呪文、教団 / PvPの可能性 / 思考実験 / 感情の指定'],
    warnings: ['本シナリオは神話的事象、神話生物に対しての独自解釈、オリジナルAFや呪文を含みます。','探索者に対して何かしらの重大な設定が付きます。','シナリオの自作発言、無断転載、盗作、ネタバレ、シナリオの大幅な改変は禁止です。','NPCはルートによってはロストする可能性があります','ネタバレになる地雷が含まれているかもしれません。KPをする場合、ヒアリングを必ず行ってください。','NPCからPCに対する何かしらの感情。','本シナリオは非常に地雷が多いシナリオとなります。','途中ロストが有り得るシナリオです。','展開や考え方によってはPvPになる可能性があります。','本シナリオの戦闘はかなり特殊なものとなっています。'],
    publicHandouts: ['共通HO・貴方達は連邦捜査局【FBI】の中で特に優秀な人間が集められる【特異科】に所属している捜査官である。','HO1：Normal貴方は人間である。','HO2：EyEs貴方は片目が義眼である。','HO3：Human貴方はアンドロイドである。','HO4：Error貴方は■■ではない。'],
    publicNPCs: ['フロイド・クロスフィールド/男性 最近、特異科に転属になった捜査官。体の機械化を行っていない。『なんだ、腹減ったのか？仕方ねぇな』『お前らのサポートぐらいさせてくれ』','エバン・コーディ/男性 特異科のリーダーを任されている捜査官。謎が多く、堅物で曲がったことを嫌う。『仕事に集中しろ、いいな』『お前のできることをしろ。それだけでいい』','ニール・サンクレッド/男性 最近アンドロイド化した捜査官。若々しく、良くも悪くもお調子もの。『頑張らないといけないからな！置いてけぼりは嫌だし』『ちょ！早いっす！！』','アリシア・ワトソン/女性 24歳で特異科に所属した捜査官。電脳化を行っており、電脳空間にも移動できる。『で、出来ます！』『解析なら、任せてください！』'],
    synopsis: '2045年、人類は選んだ。人類は人でないことを選んだ。科学技術の革新的な発展により人類は新たな選択肢を得ることになった。アンドロイド化や電脳化など、次々に人類は人であることを捨てていった。そんなある日、アメリカ国内にて怪奇的な連続殺人事件が発生した。その被害者の特徴は【人間の形を捨てた人々】であり、事件現場には『我々が新人類である』という置き手紙だけが残されていた。.',
    trailerImages: ['/images/rEpl∀λ1.png', '/images/rEpl∀λ2.png', '/images/rEpl∀λ3.png', '/images/rEpl∀λ4.png'],
  },
  {
    id: '4',
    name: 'Fake Unsolved File',
    system: 'クトゥルフ神話TRPG',
    format: '2028年・日本、新規4PL秘匿HO',
    supplements: ['クトゥルフ神話TRPG6版', '2010','2015','マレモン'],
    playerCount: '4人',
    duration: '20時間～',
    lossRate: '中',
    difficulty: '中',
    tendency: ['RP','戦闘重視','三話CP','超能力'],
    recommendedSkills: ['戦闘系技能', '芸術技能(HO)', '三大探索技能'],
    elements: ['記載中'],
    warnings: ['記載中'],
    publicHandouts: ['共通HO・貴方達は警視庁特殊課第零係通称【芸術課】と呼ばれている刑事だ', 'HO1小説家','HO2画家','HO3音楽家','HO4演劇家'],
    publicNPCs: ['記載中'],
    synopsis: '芸術を関する特殊な能力を持つ刑事たち。通称【芸術課】。貴方達はその芸術課で数々の奇妙な事件を解決してきた刑事である。',
    trailerImages: ['/images/FuF1.png', '/images/FuF2.png', '/images/FuF3.png','/images/FuF2.png'],
  },
  {
    id: '5',
    name: 'Angel Found 404',
    system: 'クトゥルフ神話TRPG',
    format: '秘匿HO、新規限定、シティシナリオ',
    supplements: ['クトゥルフ神話TRPG6版', '2010','2015','マレモン'],
    playerCount: '2人',
    duration: '6時間～',
    lossRate: '秘匿',
    difficulty: '高',
    tendency: ['RP重視','天使','高校生'],
    recommendedSkills: ['秘匿'],
    elements: ['オリジナル呪文・AF・神話生物の可能性 / グロゴア / 神話生物や呪文・クトゥルフ的事象等に対する独自解釈 / PvPの可能性 / 探索者に対する設定の付与 / 特殊な探索者の作成方法 / いじめ / 探索者が知らないうちに加害者、被害者になる可能性 / 報われない可能性大 / RP重視 / 感情指定 / 探索者に対してかなり厳しい世界 / 虐待などの非人道的行為の描写 / 選択、出目によるロスト / ロスト率の偏り'],
    warnings: ['手放しにハッピーエンドだと思えるようなエンドはありません。救われない可能性が非常に高いです。所謂何でも許せる人向けのシナリオになるので仲のいい人同士で回ってください','行動方針や意見の食い違いによる対立の可能性が起こる可能性があります','その他、記載していない地雷要素を含みます。KPの方は必ずヒアリングを行ってください。','両生還出来たとしても継続が出来ない可能性があります。','本シナリオは諸都合によりIF処理不可、ロスト救済不可となる。ロストした場合は肉体的ロストとも精神的ロストともならない、確定ロストとなる。'],
    publicHandouts: ['HO：天使 貴方は地上に降り立った天使だ。路上で倒れていた所を高校生に拾われた。貴方には使命がある。','HO：高校生 貴方は学校に通う高校生だ。最近、路上に倒れていた天使を拾った。貴方には夢がある。'],
    publicNPCs: ['無し'],
    synopsis: 'HO高校生はある日、路地裏に倒れていた天使を拾った。',
    trailerImages: ['/images/Call_of_Cthulu_20240607_083159_0000.png', '/images/AF404 2.png', '/images/AF404 3.png', '/images/AF404 4.png'],
  },
  {
    id: '6',
    name: 'RESCUE HEROS',
    system: 'クトゥルフ神話TRPG',
    format: '秘匿HO、新規限定、全3話CP、現代日本、シティ',
    supplements: ['クトゥルフ神話TRPG6版', '2010','2015','マレモン'],
    playerCount: '4人',
    duration: '23時間',
    lossRate: '高',
    difficulty: '中',
    tendency: ['RP重視', '探索あり', '協力'],
    recommendedSkills: ['応急手当', '医学', '回避','低すぎないHP','CON','DEX'],
    elements: ['記載中'],
    warnings: ['記載中'],
    publicHandouts: ['共通HO：貴方達はRescueに所属している隊員だ。', 'HO1：山岳救助隊員','HO2：海難救助隊員','HO3：特別救助隊員','HO4：対神救助隊員'],
    publicNPCs: ['記載中'],
    synopsis: '神話的事象による災害はもはや常識となった。世界各地で年間約2000万人にも及ぶ人々が超常災害により命を落としている現代、世界は超常災害から人々を守る抗神組織【HEROS】を設立した。貴方達はその中でも人命救助に特化した部隊【Rescue】に所属している。',
    trailerImages: ['/images/RH1.png', '/images/RH2.png', '/images/RH3.png','/images/RH4.png'],
  },
];


const DifficultyBadge: React.FC<{ difficulty: ScenarioData['difficulty'] }> = ({ difficulty }) => {
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

const LossRateBadge: React.FC<{ lossRate: ScenarioData['lossRate'] }> = ({ lossRate }) => {
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

const Scenario: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { navigate, currentPath } = useRoute();
  const scenarioId = currentPath.split('/').pop() || '';
  const scenarioData = scenarios.find(s => s.id === scenarioId);

  useEffect(() => {
    if (!scenarioData) {
      navigate('/scenarios');
    }
  }, [scenarioData, navigate]);

  useEffect(() => {
    if (scenarioData) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % scenarioData.trailerImages.length
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [scenarioData]);

  if (!scenarioData) {
    return <div>Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % scenarioData.trailerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + scenarioData.trailerImages.length) % scenarioData.trailerImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={scenarioData.trailerImages[currentImageIndex]}
                alt={`シナリオトレーラー ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{scenarioData.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-indigo-700">基本情報</h2>
                <div className="space-y-2">
                  <p className="flex items-center"><BookOpen className="mr-2 text-indigo-500" /> <span className="font-semibold">システム:</span> {scenarioData.system}</p>
                  <p className="flex items-center"><Users className="mr-2 text-indigo-500" /> <span className="font-semibold">人数:</span> {scenarioData.playerCount}</p>
                  <p className="flex items-center"><Clock className="mr-2 text-indigo-500" /> <span className="font-semibold">時間:</span> {scenarioData.duration}</p>
                  <p className="flex items-center"><Shield className="mr-2 text-indigo-500" /> <span className="font-semibold">難易度:</span> <DifficultyBadge difficulty={scenarioData.difficulty} /></p>
                  <p className="flex items-center"><Zap className="mr-2 text-indigo-500" /> <span className="font-semibold">ロスト率:</span> <LossRateBadge lossRate={scenarioData.lossRate} /></p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-indigo-700">シナリオ特性</h2>
                <p><span className="font-semibold">形式:</span> {scenarioData.format}</p>
                <p><span className="font-semibold">使用サプリ:</span> {scenarioData.supplements.join(', ')}</p>
                <p><span className="font-semibold">傾向:</span> {scenarioData.tendency.join(', ')}</p>
                <p><span className="font-semibold">推奨技能:</span> {scenarioData.recommendedSkills.join(', ')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">含まれる要素</h2>
          <div className="flex flex-wrap gap-2">
            {scenarioData.elements.map((element, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {element}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">注意事項</h2>
          <ul className="list-disc list-inside space-y-2">
            {scenarioData.warnings.map((warning, index) => (
              <li key={index} className="text-gray-700">{warning}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">公開HO</h2>
          <ul className="list-disc list-inside space-y-2">
            {scenarioData.publicHandouts.map((handout, index) => (
              <li key={index} className="text-gray-700">{handout}</li>
            ))}
          </ul>
        </motion.div>

        {scenarioData.publicNPCs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">公開NPC</h2>
            <ul className="list-disc list-inside space-y-2">
              {scenarioData.publicNPCs.map((npc, index) => (
                <li key={index} className="text-gray-700">{npc}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {scenarioData.synopsis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">シナリオのあらすじ</h2>
            <p className="text-gray-700 leading-relaxed">{scenarioData.synopsis}</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => navigate('/scenarios')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            シナリオ一覧に戻る
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Scenario;