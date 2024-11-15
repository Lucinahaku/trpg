import React from 'react';
import { motion } from 'framer-motion';
import { useRoute } from '../contexts/RouteContext';
import { Book, Heart, Play, Pen, User, Bookmark, CalendarCheck, } from 'lucide-react';

interface ProfileData {
  name: string;
  image: string;
  memo: string;
  ownedRulebooks: string[];
  gender: string;
  favoriteHandouts: string[];
  favoriteScenarios: string[];
  wantToPlayScenarios: string[];
  canRunScenarios: string[];
  introduction: string;
  playingScenarios: string[];
}

const profileData: ProfileData = {
  name: "そふぃ",
  image: "/images/Icon.png",
  memo: "天使と強い人間が好きで漆黒のヴィランズに狂ってる人",
  ownedRulebooks: ["クトゥルフ神話TRPG六版", "2010","2015","マレモン","ストリテラ"],
  gender: "成人済み男性",
  favoriteHandouts: ["SSS.S HO4", "オルタナティヴ・ダブルHO助手", "リバースリバースリバースHO天使","忘れがたき天使・HO天使","四季送りHO冬"],
  favoriteScenarios: ["SSS.S", "オルタナティヴ・ダブル", "忘れがたき天使","Paranormal Crime","リバースリバースリバース","新生ジャンヌの猟犬","野狗子と薬師","初恋性ストックホルム症候群","SEVEN STARS＆PEACE"],
  wantToPlayScenarios: ["AE", "MAGGY889", "ミノタウロスの証人","MOON GIFTED","レモンキャンディーと硝煙","メルトアイリス"],
  canRunScenarios: [
    "問：死の定義を教えてください。", "シトラスに眩む", "この愛をきみが知るころに", "愛して！！",
    "色は匂えどちりぬるを、後生の頼みと聞き入るる", "だからこれはプロポーズだ", "ルアルべインの賢愚",
    "初恋性ストックホルム症候群", "無色透明の真夏", "暑と寒", "伽圉", "お、捨てKPCだ。かわいそうに",
    "天使の七日", "はじめまして、マスター", "カタシロ", "その世界は、きっと幸福だ", "甘に宿鳥",
    "犀片", "やさしい朝を、くださいね", "心臓がちょっと早く動くだけ", "桐と枸櫞", "浮気するにも早すぎる",
    "だから嫌いなあんたでいてくれよ", "ふたりで温泉に行こう", "拝啓、愛しの『』へ",
    "君の唾液で中毒になりたい", "やさしい世界と呼吸法", "漣を手繰る", "幸せの在り処", "汝の僕はかく語りき",
    "青に溺れてキスをする", "愛憎冷めやらず", "クロッカスはリナリアを見ない", "灰かぶりハーバリウム",
    "アンアンリ・ファンタスマゴリア", "覆水、盆にかえらず", "乱春とセレナーデ", "My-dearH", "原罪の国",
    "静かの船より", "失楽園でセレナーデを", "世界線の中庭", "メーデー、電子の戦場より", "拝啓、花棺の『』へ",
    "機械仕掛けの一ページ", "虚構二律のファシネイト", "アルカディアは密室", "秒速300メートルのワールドエンド",
    "逃避行", "天使異端", "死ぬより早く埋めて", "サンドリヨン・アンハッピーエンド", "イデア、或いは盲目",
    "しんでなんかないよ", "さよならだけが愛じゃない", "青い鳥がないた", "怖いお兄さんは好きですか？(R-18)",
    "dear my orange", "ハーメルンは省みない", "αからΩまで", "自明及海", "蝶よりも花よりもお前がいい",
    "おじさんは私が買います", "悪鬼羅刹と夜を駆けて", "mrアンラッキー＆msグッドラック", "ox-xo",
    "曇天に啼け、ルスキニア", "花冷えに亡く季節", "副題：世界の終焉を覆す奇跡的魔術XXX-Ⅱ", "ENCORE AND ENDCALL",
    "月に叢雲君に花", "お兄さんとわたし", "野狗子と薬師", "天隠", "静謐たる光陰旅行", "dash",
    "あなたはわたしの殺人鬼(かいいぬ)", "ロトカ・ヴォルテラの愛堕討ち", "俺だけ見ててよ", "ワルプルギスは踊らない",
    "お兄さんと僕", "タナトスは死に何を想う", "姚桃樹(R18)", "水天一碧を朝凪でのぞむ", "レゾンデートル",
    "刹夏", "キルキルイキル", "レポニム", "壊胎", "海も枯れるまで", "Namekess Story", "鰯と柊",
    "片鱗", "犬猫戦争は終わらせない", "辜月のN", "嘲笑う、冥々", "六畳半の夏", "negligence tot.",
    "ロスト・テクノロジーと微睡む中庭", "狗肉忌譚", "UMILITÀ", "青解", "アイラスの双眼", "同居人(R-18)",
    "オルタナティヴ・ダブル(R-18)", "星の神話、エンドロール", "空蝉の如く", "悪役不在の物語",
    "ぼくらのロクス・アマエヌス", "B'ASH", "序列祓魔ー神を殺す祈禱術ー", "神はすべて君に任せたのである",
    "神はすべてきみに任せたのである。爾", "K県警K課", "異能警察は英雄じゃない", "VOID", "蹂躙するは我が手にて",
    "烏が群れては極彩色 / 無彩色", "天使たちの黙示録", "魔法少女は死を唄え", "1st-Game-捜査一課は英雄じゃない",
    "ARCANA", "永虹灰帰のポリス", "アレスの証明", "彼方からの君に捧ぐ", "魔法少女希望譚",
    "ぼくらのシャングリラ、あの子のひこうぼし", "カノヨ街", "かいぶつたちとマホラカルト", "Liebbing",
    "誰がロックを殺すのか", "Good Night Judas", "ワンルーム・ディスコ", "ソープスクール",
    "ジャンクパーツ・フルセッション", "とある幸せな家族の話", "嗤う人間師", "LAST-0", "ByeByeSummerDays",
    "梟の断罪", "邪神のクオリア", "それは誰かの幸福論", "シリウスの篝火", "AreAy", "紡命論とシンギュラリティー",
    "魔が時に鵺の鳴く", "風雲児たちへ", "サマーリトルヒーロー", "会心の一撃", "SCAT.CHAOS.PARTNER",
    "CosmosƆREatiOnv", "静なるテロリスタ", "rosmare", "Ry-06", "大正隠鬼譚", "El Colgado Avatara",
    "怪籠ノ刻", "夜明けを求めた者たち", "バロック・カンタービレ", "ワンルーム・ディスコン",
    "MAM-FBI神話分析対策課", "MAM-ＦＢＩ神話分析対策課- Season2：Life", "Good Morning Dear",
    "昭和怪談地獄巡り", "Erzählung・Das・Ende", "リバースリバースリバース", "傀儡怪儡", "悪辣",
    "宵闇神凵", "天啓劫火", "FRaTRlCiDE", "REGlCiDE", "Q4U", "偶像は四季に祈る", "私立天柱学園神話自衛委員会",
    "正偽のイデア", "四季送り", "Rℯ∤Aby", "誰がロックを殺すのか", "サイレン清掃会社", "銀蝋と怪盗団",
    "四鬼祀るは人、故に罪業", "シビュラ(R18)", "主人公が捨てた世界(R18G・全年齢対応版あり)", "イドラの約束(R18)",
    "町葬儀屋怪異譚(R18)", "AkH(R18G)", "Hello world, shut down.", "トブ老人", "名も無き英雄の詩",
    "The Backrooms", "いい大人がドッジボールをするだけのシナリオ", "PanaceaCrySentence",
    "ParanormalCrime(R15)", "ParanormalCrimeDLC『魔女は笑わない』(R15・パラクラ外伝)",
    "Paranormal Crime2～Love and Destroy～(R15・パラクラ続編)",
    "Paranormal Crime2トランペッターは祈らない(R15・パラクラ外伝)", "頭夢児島殺人事件", "Zodiac school",
    "ヴェヒター達の独白", "ヴァ―ルハイトの証明(随筆中)", "僕らの青春日記(随筆中)", "Angel Found404(随筆中)",
    "Cross iv(随筆中)", "rEpl∀λ(随筆中)"
  ],
  introduction: "3LOK,むしろBLよりのデザイナーでもないのにデザインをしたり、シナリオライターでもないのにシナリオを書いたりしているプログラマー。基本形式はボイセで最近半テキの練習もしてます。傾向としてはKPをよくやるのでほとんどKP専門です。生きた！！って感じがする高ロスとクトゥルフ！！って感じがするクラシックが好きなのおすすめとかあれば教えてくださると飛んでいきます。RPが好きすぎる節があるのでしすぎだなと思ったら止めてください。KP専ではありますが、PLのほうも徐々にやっていきたいなと考えてます。",
  playingScenarios: ['Xからの告白(PL)','ぼくらのロクス・アマエヌス(KP)','Paranormal Crime DLC(KP)','Paranormal Crime2～Love and Destroy～(KP)','Paranormal Crime 2DLC トランペッターは祈らない(KP)','Nobody*2(PL)','正偽のイデア(KP)','神はすべてきみに任せたのである(KP)','ヴェヒター達の独白(KP)','rEpl∀λ(KP)']
};

const ProfileSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 bg-white rounded-lg shadow-md p-6"
  >
    <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-700">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </motion.div>
);

const Profile: React.FC = () => {
  const { navigate } = useRoute();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={profileData.image} alt={profileData.name} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">プロフィール</div>
              <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">{profileData.name}</h1>
              <p className="mt-2 text-gray-500">{profileData.memo}</p>
              <p className="mt-2 text-gray-500">性別:  {profileData.gender}</p>
            </div>
          </div>
        </motion.div>

        <ProfileSection title="所持ルルブ" icon={<Book />}>
          <ul className="list-disc list-inside space-y-2">
            {profileData.ownedRulebooks.map((book, index) => (
              <li key={index} className="text-gray-700">{book}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="好きなHO" icon={<Heart />}>
          <ul className="list-disc list-inside space-y-2">
            {profileData.favoriteHandouts.map((ho, index) => (
              <li key={index} className="text-gray-700">{ho}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="好きなシナリオ" icon={<Play />}>
          <ul className="list-disc list-inside space-y-2">
            {profileData.favoriteScenarios.map((scenario, index) => (
              <li key={index} className="text-gray-700">{scenario}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="回りたいシナリオ" icon={<Bookmark />}>
          <ul className="list-disc list-inside space-y-2">
            {profileData.wantToPlayScenarios.map((scenario, index) => (
              <li key={index} className="text-gray-700">{scenario}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="回せるシナリオ" icon={<Pen />}>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {profileData.canRunScenarios.map((scenario, index) => (
              <li key={index} className="text-gray-700 text-sm">{scenario}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="通過予定・KP予定シナリオ" icon={<CalendarCheck />}>
        <ul className="list-disc list-inside space-y-2">
            {profileData.playingScenarios.map((scenario, index) => (
              <li key={index} className="text-gray-700">{scenario}</li>
            ))}
          </ul>
          </ProfileSection>

        <ProfileSection title="自己紹介" icon={<User />}>
          <p className="text-gray-700 leading-relaxed">{profileData.introduction}</p>
        </ProfileSection>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            ホームに戻る
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;