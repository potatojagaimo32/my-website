const genres = [
  { name: "ビジネス・キャリア", icon: "↗", description: "仕事の成果とキャリアを伸ばす" },
  { name: "お金・投資", icon: "¥", description: "お金の知識と資産運用" },
  { name: "語学・資格・学習", icon: "文", description: "学び直しと資格取得" },
  { name: "ライフスタイル・健康", icon: "◌", description: "毎日を心地よく整える" },
  { name: "IT・プログラミング", icon: "</>", description: "つくる力を身につける" },
  { name: "農業・第一次産業", icon: "⌁", description: "食と自然を支える技術" },
  { name: "建築・土木", icon: "⌂", description: "街と暮らしをつくる技術" },
  { name: "製造・科学技術", icon: "⚙", description: "ものづくりと研究開発" }
];
const subgenres = [
  ["ビジネス・キャリア", ["マインド・自己啓発|時間術・習慣化・思考法", "スキル・実務|マーケティング・営業・プレゼン", "起業・経営|スタートアップ・戦略・財務", "就職・転職|履歴書・面接・業界研究", "リーダーシップ|チーム運営・マネジメント", "キャリア設計|働き方・副業・年収", "文章・コミュニケーション|伝える力・話し方", "ビジネス教養|仕事で使える知識"]],
  ["お金・投資", ["マネーリテラシー|節約・税金・貯金", "新NISA・iDeCo|制度・始め方・活用法", "インデックス投資|長期積立・分散投資", "株式投資|企業分析・チャート・配当", "不動産投資|物件選び・収益化", "経済・金融|現代経済・金融史", "仮想通貨・Web3|暗号資産・ブロックチェーン", "家計管理|保険・住宅・教育費"]],
  ["語学・資格・学習", ["英語・語学|TOEIC・英会話・留学", "簿記|3級・2級・会計", "IT資格|ITパスポート・基本情報", "宅建・法律|宅建・行政書士", "公務員試験|教養・専門・面接", "哲学・歴史|日本史・世界史・思想", "心理学・統計学|心の仕組み・データ", "勉強法|記憶術・ノート術・受験"]],
  ["ライフスタイル・健康", ["筋トレ・フィットネス|自宅トレ・運動習慣", "ダイエット|食事・栄養・体重管理", "睡眠・メンタル|休息・ストレスケア", "料理・レシピ|毎日の献立・作り置き", "旅行ガイド|国内・海外・ひとり旅", "カメラ・写真|撮影・編集・機材", "ガジェット・映画|デジタル・映像作品", "人間関係・恋愛|会話・心理・恋愛術"]],
  ["IT・プログラミング", ["Web開発|HTML・CSS・JavaScript・React", "サーバー・インフラ|Linux・Python・SQL・AWS", "アプリ開発|Swift・Kotlin・Flutter", "データ・AI|機械学習・生成AI・分析", "プログラミング基礎|アルゴリズム・設計", "ゲーム開発|Unity・ゲーム制作・3D", "セキュリティ|安全なWeb・ネットワーク", "デザイン・UI|UX・Figma・アクセシビリティ"]],
  ["農業・第一次産業", ["スマート農業|IoT・ドローン・精密農業", "作物栽培|土壌・肥料・病害虫", "有機農業|自然栽培・循環型農業", "畜産・酪農|飼育・衛生・経営", "林業|森林管理・木材利用", "水産業|養殖・漁場・水産加工", "農業経営|販売・6次産業化・法人化", "農業機械|トラクター・自動化・整備"]],
  ["建築・土木", ["建築設計|住宅・意匠・設計製図", "構造・耐震|構造計算・地震対策", "施工管理|現場管理・工程・品質", "土木・インフラ|道路・橋梁・上下水道", "建築設備|空調・電気・給排水", "都市計画|まちづくり・不動産", "建築CAD・BIM|AutoCAD・Revit・3D", "建築資格|一級建築士・施工管理技士"]],
  ["製造・科学技術", ["機械設計|CAD・機械要素・設計", "電気・電子|回路・制御・組み込み", "工場・生産技術|自動化・改善・品質", "ロボティクス|産業ロボット・制御", "化学・素材|材料・化学工学・分析", "エネルギー|電力・再生可能エネルギー", "研究・実験|科学的方法・論文・計測", "品質・安全|品質保証・規格・安全管理"]]
].flatMap(([genre, items]) => items.map((item) => { const [name, detail] = item.split("|"); return { name, detail, query: `${genre} ${name}`, genre }; }));
const images = ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80"];

const manualBooks = [
  {
    title: "1冊ですべて身につくHTML & CSSとWebデザイン入門講座［第2版］",
    author: "Mana",
    price: "¥2,585",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=1冊ですべて身につくHTML+CSSとWebデザイン入門講座+第2版",
    query: "1冊ですべて身につくHTML CSSとWebデザイン入門講座 第2版",
    category: "Web開発"
  },
  {
    title: "1冊ですべて身につくJavaScript入門講座",
    author: "Mana",
    price: "¥2,794",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=1冊ですべて身につくJavaScript入門講座",
    query: "1冊ですべて身につくJavaScript入門講座",
    category: "Web開発"
  },
  {
    title: "これだけで基本がしっかり身につく HTML/CSS&Webデザイン1冊目の本",
    author: "手嶋 守",
    price: "¥2,420",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=これだけで基本がしっかり身につく+HTML+CSS+Webデザイン1冊目の本",
    query: "これだけで基本がしっかり身につく HTML CSS Webデザイン1冊目の本",
    category: "Web開発"
  },
  {
    title: "HTML&CSSとWebデザインが1冊できちんと身につく本",
    author: "服部 雄樹",
    price: "¥2,750",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=HTML%26CSSとWebデザインが1冊できちんと身につく本",
    query: "HTML CSSとWebデザインが1冊できちんと身につく本",
    category: "Web開発"
  },
  {
    title: "スラスラわかるHTML&CSSのきほん",
    author: "狩野 祐東",
    price: "¥2,420",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=スラスラわかるHTML%26CSSのきほん",
    query: "スラスラわかるHTML CSSのきほん",
    category: "Web開発"
  },
  {
    title: "Webを支える技術",
    author: "山本 陽平",
    price: "¥2,640",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Webを支える技術+山本陽平",
    query: "Webを支える技術",
    category: "Web開発"
  },
  {
    title: "プロになるためのWeb技術入門",
    author: "小森 裕介",
    price: "¥2,860",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=プロになるためのWeb技術入門",
    query: "プロになるためのWeb技術入門",
    category: "Web開発"
  },
  {
    title: "いきなりプログラミング JavaScript",
    author: "Kanata",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=いきなりプログラミング+JavaScript",
    query: "いきなりプログラミング JavaScript",
    category: "Web開発"
  },
  {
    title: "これからのJavaScriptの教科書",
    author: "狩野 祐東",
    price: "¥3,080",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=これからのJavaScriptの教科書",
    query: "これからのJavaScriptの教科書",
    category: "Web開発"
  },
  {
    title: "プロフェッショナルWebプログラミング React",
    author: "杉本 雅広",
    price: "¥3,278",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=プロフェッショナルWebプログラミング+React",
    query: "プロフェッショナルWebプログラミング React",
    category: "Web開発"
  },
  {
  title: "イラスト図解式 この一冊で全部わかるサーバーの基本 第2版",
  author: "きはし まさひろ",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=イラスト図解式+この一冊で全部わかるサーバーの基本+第2版",
  query: "イラスト図解式 この一冊で全部わかるサーバーの基本 第2版",
  category: "サーバー・インフラ"
},
{
  title: "サーバ／インフラエンジニアの基本がこれ1冊でしっかり身につく本",
  author: "馬場俊彰",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=サーバー+インフラエンジニアの基本がこれ1冊でしっかり身につく本",
  query: "サーバ インフラエンジニアの基本がこれ1冊でしっかり身につく本",
  category: "サーバー・インフラ"
},
{
  title: "ゼロからはじめるLinuxサーバー構築・運用ガイド 第2版",
  author: "中島能和",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ゼロからはじめるLinuxサーバー構築運用ガイド+第2版",
  query: "ゼロからはじめるLinuxサーバー構築 運用ガイド 第2版",
  category: "サーバー・インフラ"
},
{
  title: "Amazon Web Services 基礎からのネットワーク＆サーバー構築 改訂4版",
  author: "大澤文孝・玉川憲・片山暁雄・今井雄太",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Amazon+Web+Services+基礎からのネットワーク+サーバー構築+改訂4版",
  query: "Amazon Web Services 基礎からのネットワーク サーバー構築 改訂4版",
  category: "サーバー・インフラ"
},
{
  title: "1週間でLPICの基礎が学べる本 第4版",
  author: "中島能和",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1週間でLPICの基礎が学べる本+第4版",
  query: "1週間でLPICの基礎が学べる本 第4版",
  category: "サーバー・インフラ"
},
{
  title: "実践Amazon Linux AWSでのサーバー構築と運用・管理の必須知識",
  author: "河原木忠司",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=実践Amazon+Linux+AWSでのサーバー構築と運用管理の必須知識",
  query: "実践Amazon Linux AWSでのサーバー構築と運用 管理の必須知識",
  category: "サーバー・インフラ"
},
{
  title: "AWSのしくみと技術がこれ1冊でしっかりわかる教科書 改訂2版",
  author: "小笠原種高",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=AWSのしくみと技術がこれ1冊でしっかりわかる教科書+改訂2版",
  query: "AWSのしくみと技術がこれ1冊でしっかりわかる教科書 改訂2版",
  category: "サーバー・インフラ"
},
{
  title: "この一冊で全部わかるネットワークの基本 第2版",
  author: "福永勇二",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=この一冊で全部わかるネットワークの基本+第2版",
  query: "この一冊で全部わかるネットワークの基本 第2版",
  category: "サーバー・インフラ"
},
{
  title: "仕組みと使い方がわかるDocker＆Kubernetesのきほんのきほん",
  author: "小笠原種高",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=仕組みと使い方がわかる+Docker+Kubernetesのきほんのきほん",
  query: "仕組みと使い方がわかる Docker Kubernetesのきほんのきほん",
  category: "サーバー・インフラ"
},
{
  title: "Linux教科書 LinuCレベル2 Version10.0対応",
  author: "中島能和",
  price: "¥4,840",
  image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Linux教科書+LinuCレベル2+Version10.0対応",
  query: "Linux教科書 LinuCレベル2 Version10.0対応",
  category: "サーバー・インフラ"
},
{
  title: "Kotlinスタートブック 新しいAndroidプログラミング",
  author: "長澤 太郎",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Kotlinスタートブック+新しいAndroidプログラミング",
  query: "Kotlinスタートブック 新しいAndroidプログラミング",
  category: "アプリ開発"
},
{
  title: "Androidアプリ開発の教科書 Kotlin対応 第3版",
  author: "山田 祥寛",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Androidアプリ開発の教科書+Kotlin対応",
  query: "Androidアプリ開発の教科書 Kotlin対応",
  category: "アプリ開発"
},
{
  title: "基礎からわかるAndroidアプリ開発",
  author: "Android開発関連書籍",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Androidアプリ開発+Kotlin+入門",
  query: "Androidアプリ開発 Kotlin 入門",
  category: "アプリ開発"
},
{
  title: "作って楽しむプログラミング Androidアプリ開発",
  author: "技術評論社",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Androidアプリ開発+Kotlin+作って楽しむ",
  query: "Androidアプリ開発 Kotlin 作って楽しむ",
  category: "アプリ開発"
},
{
  title: "Jetpack ComposeによるAndroid UI開発",
  author: "Android開発関連書籍",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Jetpack+Compose+Android+UI+開発",
  query: "Jetpack Compose Android UI 開発",
  category: "アプリ開発"
},
{
  title: "Kotlinプログラミング入門",
  author: "Kotlin開発関連書籍",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Kotlin+プログラミング+入門",
  query: "Kotlin プログラミング 入門",
  category: "アプリ開発"
},
{
  title: "SwiftUIではじめるiPhoneアプリ開発",
  author: "Swift開発関連書籍",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1592286927505-2fd0e3f7c8e6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=SwiftUI+iPhoneアプリ開発",
  query: "SwiftUI iPhoneアプリ開発",
  category: "アプリ開発"
},
{
  title: "iPhoneアプリ開発入門 Swift対応",
  author: "Swift開発関連書籍",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=iPhoneアプリ開発入門+Swift",
  query: "iPhoneアプリ開発入門 Swift",
  category: "アプリ開発"
},
{
  title: "Flutter実践入門 Dartによるクロスプラットフォーム開発",
  author: "Flutter開発関連書籍",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Flutter+実践入門+Dart",
  query: "Flutter 実践入門 Dart",
  category: "アプリ開発"
},
{
  title: "良いコード／悪いコードで学ぶ設計入門",
  author: "仙塲 大也",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=良いコード+悪いコードで学ぶ設計入門",
  query: "良いコード 悪いコードで学ぶ設計入門",
  category: "アプリ開発"
},
{
  title: "Pythonではじめる機械学習",
  author: "Andreas C. Müller / Sarah Guido",
  price: "¥4,180",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Pythonではじめる機械学習",
  query: "Pythonではじめる機械学習",
  category: "データ・AI"
},
{
  title: "ゼロから作るDeep Learning ―Pythonで学ぶディープラーニングの理論と実装",
  author: "斎藤 康毅",
  price: "¥3,740",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ゼロから作るDeep+Learning+Python",
  query: "ゼロから作るDeep Learning Pythonで学ぶディープラーニング",
  category: "データ・AI"
},
{
  title: "ゼロから作るDeep Learning ❷ ―自然言語処理編",
  author: "斎藤 康毅",
  price: "¥3,960",
  image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ゼロから作るDeep+Learning+自然言語処理編",
  query: "ゼロから作るDeep Learning 自然言語処理編",
  category: "データ・AI"
},
{
  title: "Kaggleで勝つデータ分析の技術",
  author: "門脇 大輔 / 阪田 隆司 / 保坂 桂佑 / 平松 雄司",
  price: "¥3,960",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Kaggleで勝つデータ分析の技術",
  query: "Kaggleで勝つデータ分析の技術",
  category: "データ・AI"
},
{
  title: "Pythonによるデータ分析入門 第3版",
  author: "Wes McKinney",
  price: "¥5,280",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Pythonによるデータ分析入門+第3版",
  query: "Pythonによるデータ分析入門 第3版",
  category: "データ・AI"
},
{
  title: "統計学が最強の学問である",
  author: "西内 啓",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=統計学が最強の学問である",
  query: "統計学が最強の学問である",
  category: "データ・AI"
},
{
  title: "最短コースでわかる Pythonプログラミングとデータ分析",
  author: "データ分析関連書籍",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Python+データ分析+入門",
  query: "Python データ分析 入門",
  category: "データ・AI"
},
{
  title: "Pythonではじめるベイズ機械学習入門",
  author: "森賀 新",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Pythonではじめるベイズ機械学習入門",
  query: "Pythonではじめるベイズ機械学習入門",
  category: "データ・AI"
},
{
  title: "先輩データサイエンティストからの指南書",
  author: "浅野 純季 / 木村 真也 / 田中 冬馬 / 武藤 克大 / 栁 泉穂",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=先輩データサイエンティストからの指南書",
  query: "先輩データサイエンティストからの指南書",
  category: "データ・AI"
},
{
  title: "超入門 はじめてのAI・データサイエンス",
  author: "AI・データサイエンス関連書籍",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=超入門+はじめてのAI+データサイエンス",
  query: "超入門 はじめてのAI データサイエンス",
  category: "データ・AI"
},
{
  title: "スッキリわかるJava入門 第5版",
  author: "中山清喬、国本大悟",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スッキリわかるJava入門+第5版",
  query: "スッキリわかるJava入門 第5版",
  category: "プログラミング基礎"
},
{
  title: "スッキリわかるPython入門 第2版",
  author: "国本大悟、須藤秋良",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スッキリわかるPython入門+第2版",
  query: "スッキリわかるPython入門 第2版",
  category: "プログラミング基礎"
},
{
  title: "スッキリわかるC言語入門 第3版",
  author: "中山清喬",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スッキリわかるC言語入門+第3版",
  query: "スッキリわかるC言語入門 第3版",
  category: "プログラミング基礎"
},
{
  title: "新・明解C言語 入門編 第2版",
  author: "柴田望洋",
  price: "¥2,530",
  image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新・明解C言語+入門編+第2版",
  query: "新・明解C言語 入門編 第2版",
  category: "プログラミング基礎"
},
{
  title: "やさしいC 第5版",
  author: "高橋麻奈",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やさしいC+第5版",
  query: "やさしいC 第5版",
  category: "プログラミング基礎"
},
{
  title: "やさしいC++ 第5版",
  author: "高橋麻奈",
  price: "¥2,838",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やさしいC%2B%2B+第5版",
  query: "やさしいC++ 第5版",
  category: "プログラミング基礎"
},
{
  title: "やさしいJava 第7版",
  author: "高橋麻奈",
  price: "¥2,838",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やさしいJava+第7版",
  query: "やさしいJava 第7版",
  category: "プログラミング基礎"
},
{
  title: "独習Python 第2版",
  author: "山田祥寛",
  price: "¥3,608",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=独習Python+第2版",
  query: "独習Python 第2版",
  category: "プログラミング基礎"
},
{
  title: "独習Java 第6版",
  author: "山田祥寛",
  price: "¥3,278",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=独習Java+第6版",
  query: "独習Java 第6版",
  category: "プログラミング基礎"
},
{
  title: "これからはじめるプログラミング 基礎の基礎 改訂4版",
  author: "谷尻かおり",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=これからはじめるプログラミング+基礎の基礎+改訂4版",
  query: "これからはじめるプログラミング 基礎の基礎 改訂4版",
  category: "プログラミング基礎"
},
{
  title: "ゼロからスタート！ Unityゲーム開発 1冊目の教科書",
  author: "ひろはす",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ゼロからスタート+Unityゲーム開発+1冊目の教科書",
  query: "ゼロからスタート Unityゲーム開発 1冊目の教科書",
  category: "ゲーム開発"
},
{
  title: "Unity超入門 やさしくわかるゲーム開発",
  author: "福島光輝",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Unity超入門+やさしくわかるゲーム開発",
  query: "Unity超入門 やさしくわかるゲーム開発",
  category: "ゲーム開発"
},
{
  title: "作って学べる Unity本格入門［Unity 6対応版］",
  author: "賀好昭仁",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=作って学べる+Unity本格入門+Unity+6対応版",
  query: "作って学べる Unity本格入門 Unity 6対応版",
  category: "ゲーム開発"
},
{
  title: "たのしい2Dゲームの作り方 第3版 Unity 6ではじめるゲーム開発入門",
  author: "STUDIO SHIN",
  price: "¥2,948",
  image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=たのしい2Dゲームの作り方+第3版+Unity+6",
  query: "たのしい2Dゲームの作り方 第3版 Unity 6",
  category: "ゲーム開発"
},
{
  title: "作って学ぶゲームプログラミング Unityまるっと入門",
  author: "トライタム",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=作って学ぶゲームプログラミング+Unityまるっと入門",
  query: "作って学ぶゲームプログラミング Unityまるっと入門",
  category: "ゲーム開発"
},
{
  title: "Unityゲーム プログラミング・バイブル 2nd Generation",
  author: "森哲哉ほか",
  price: "¥8,580",
  image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Unityゲーム+プログラミング・バイブル+2nd+Generation",
  query: "Unityゲーム プログラミング・バイブル 2nd Generation",
  category: "ゲーム開発"
},
{
  title: "ハンズオンで身につく！ Unreal Engine 5 ゲーム開発入門",
  author: "遠藤俊太",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ハンズオンで身につく+Unreal+Engine+5+ゲーム開発入門",
  query: "ハンズオンで身につく Unreal Engine 5 ゲーム開発入門",
  category: "ゲーム開発"
},
{
  title: "Unreal Engine 5で極めるゲーム開発",
  author: "湊和久",
  price: "¥5,940",
  image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Unreal+Engine+5で極めるゲーム開発",
  query: "Unreal Engine 5で極めるゲーム開発",
  category: "ゲーム開発"
},
{
  title: "Unreal Engine 5ではじめる！ 3DCGゲームワールド制作入門",
  author: "梅原政司",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Unreal+Engine+5ではじめる+3DCGゲームワールド制作入門",
  query: "Unreal Engine 5ではじめる 3DCGゲームワールド制作入門",
  category: "ゲーム開発"
},
{
  title: "作って学べる Unity超入門",
  author: "鈴木道生",
  price: "¥2,618",
  image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=作って学べる+Unity超入門",
  query: "作って学べる Unity超入門",
  category: "ゲーム開発"
},
{
  title: "マンガ＋図解で基礎がよくわかる 情報セキュリティの教科書",
  author: "左門至峰、厚焼サネ太",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガ+図解+基礎がよくわかる+情報セキュリティの教科書",
  query: "マンガ＋図解で基礎がよくわかる 情報セキュリティの教科書",
  category: "セキュリティ"
},
{
  title: "図解まるわかり セキュリティのしくみ",
  author: "増井敏克",
  price: "¥1,848",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解まるわかり+セキュリティのしくみ",
  query: "図解まるわかり セキュリティのしくみ",
  category: "セキュリティ"
},
{
  title: "マスタリングTCP/IP 情報セキュリティ編 第2版",
  author: "齋藤孝道",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マスタリングTCP%2FIP+情報セキュリティ編+第2版",
  query: "マスタリングTCP/IP 情報セキュリティ編 第2版",
  category: "セキュリティ"
},
{
  title: "IT Text ネットワークセキュリティ",
  author: "菊池浩明、上原哲太郎",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=IT+Text+ネットワークセキュリティ",
  query: "IT Text ネットワークセキュリティ",
  category: "セキュリティ"
},
{
  title: "暗号技術入門 第3版 秘密の国のアリス",
  author: "結城浩",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=暗号技術入門+第3版+秘密の国のアリス",
  query: "暗号技術入門 第3版 秘密の国のアリス",
  category: "セキュリティ"
},
{
  title: "体系的に学ぶ 安全なWebアプリケーションの作り方 第2版",
  author: "徳丸浩",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=体系的に学ぶ+安全なWebアプリケーションの作り方+第2版",
  query: "体系的に学ぶ 安全なWebアプリケーションの作り方 第2版",
  category: "セキュリティ"
},
{
  title: "入門セキュリティコンテスト CTFを解きながら学ぶ実戦技術",
  author: "中島明日香",
  price: "¥2,948",
  image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=入門セキュリティコンテスト+CTFを解きながら学ぶ実戦技術",
  query: "入門セキュリティコンテスト CTFを解きながら学ぶ実戦技術",
  category: "セキュリティ"
},
{
  title: "詳解 インシデントレスポンス 現代のサイバー攻撃に対処するデジタルフォレンジックの基礎から実践まで",
  author: "Steve Anson、石川朝久",
  price: "¥4,620",
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=詳解+インシデントレスポンス+デジタルフォレンジック",
  query: "詳解 インシデントレスポンス 現代のサイバー攻撃に対処するデジタルフォレンジック",
  category: "セキュリティ"
},
{
  title: "小さな企業がすぐにできるセキュリティ入門",
  author: "梧桐彰、那須慎二",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=小さな企業がすぐにできるセキュリティ入門",
  query: "小さな企業がすぐにできるセキュリティ入門",
  category: "セキュリティ"
},
{
  title: "なるほどナットク！ネットワークセキュリティがわかる本",
  author: "伊藤敏幸",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=なるほどナットク+ネットワークセキュリティがわかる本",
  query: "なるほどナットク ネットワークセキュリティがわかる本",
  category: "セキュリティ"
},

  {
    title: "作って学ぶFigma入門［完全版］ ステップ・バイ・ステップで身につくWeb/UIデザインの基本",
    author: "古尾谷眞人",
    price: "¥2,640",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=作って学ぶFigma入門+完全版",
    query: "作って学ぶFigma入門 完全版",
    category: "デザイン・UI"
  },
  {
    title: "表層UIデザインの解剖学 ユーザーの知覚に訴える「見た目」の作り方",
    author: "本田雅人",
    price: "¥2,860",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=表層UIデザインの解剖学",
    query: "表層UIデザインの解剖学",
    category: "デザイン・UI"
  },
  {
    title: "ゲームUI 作り方講座 Photoshop＆After Effectsで学ぶ、UIデザインとアニメーションの基本",
    author: "はなさくの、たかゆ",
    price: "¥3,300",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=ゲームUI+作り方講座",
    query: "ゲームUI 作り方講座",
    category: "デザイン・UI"
  },
  {
    title: "レイアウトの最強原則",
    author: "米倉明男",
    price: "¥2,640",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=レイアウトの最強原則",
    query: "レイアウトの最強原則",
    category: "デザイン・UI"
  },
  {
    title: "これからはじめるIllustratorの本 2026年対応［改訂第10版］",
    author: "ロクナナワークショップ",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=これからはじめるIllustratorの本+2026",
    query: "これからはじめるIllustratorの本 2026年対応",
    category: "デザイン・UI"
  },
  {
    title: "パパッとできて、センスも身につく Illustratorおてがる入門",
    author: "専門学校講師のイラレさん",
    price: "¥2,420",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Illustratorおてがる入門",
    query: "Illustratorおてがる入門",
    category: "デザイン・UI"
  },
  {
    title: "Illustrator & Photoshop & InDesign これ1冊で基本が身につくデザイン教科書［改訂新版］",
    author: "阿部信行",
    price: "¥3,300",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Illustrator+Photoshop+InDesign+これ1冊で基本が身につくデザイン教科書",
    query: "Illustrator Photoshop InDesign これ1冊で基本が身につくデザイン教科書",
    category: "デザイン・UI"
  },
  {
    title: "ノンデザイナーズ・デザインブック［第4版］",
    author: "Robin Williams",
    price: "¥2,640",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=ノンデザイナーズ・デザインブック+第4版",
    query: "ノンデザイナーズ・デザインブック 第4版",
    category: "デザイン・UI"
  },
  {
    title: "なるほどデザイン",
    author: "筒井美希",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=なるほどデザイン+筒井美希",
    query: "なるほどデザイン 筒井美希",
    category: "デザイン・UI"
  },
  {
    title: "デザインの基本ノート 仕事で使えるセンスと技術が一冊で身につく",
    author: "デザインノート編集部",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=デザインの基本ノート",
    query: "デザインの基本ノート",
    category: "デザイン・UI"
  },
  {
    title: "嫌われる勇気 自己啓発の源流「アドラー」の教え",
    author: "岸見一郎、古賀史健",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=嫌われる勇気+岸見一郎+古賀史健",
    query: "嫌われる勇気 自己啓発の源流 アドラーの教え",
    category: "マインド・自己啓発"
  },
  {
    title: "完訳 7つの習慣 人格主義の回復",
    author: "スティーブン・R・コヴィー",
    price: "¥2,420",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=完訳+7つの習慣+人格主義の回復",
    query: "完訳 7つの習慣 人格主義の回復",
    category: "マインド・自己啓発"
  },
  {
    title: "エッセンシャル思考 最少の時間で成果を最大にする",
    author: "グレッグ・マキューン",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=エッセンシャル思考+グレッグ・マキューン",
    query: "エッセンシャル思考 最少の時間で成果を最大にする",
    category: "マインド・自己啓発"
  },
  {
    title: "THINK AGAIN 発想を変える、思い込みを手放す",
    author: "アダム・グラント",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=THINK+AGAIN+発想を変える+思い込みを手放す",
    query: "THINK AGAIN 発想を変える 思い込みを手放す",
    category: "マインド・自己啓発"
  },
  {
    title: "ジェームズ・クリアー式 複利で伸びる1つの習慣",
    author: "ジェームズ・クリアー",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=ジェームズ・クリアー式+複利で伸びる1つの習慣",
    query: "ジェームズ・クリアー式 複利で伸びる1つの習慣",
    category: "マインド・自己啓発"
  },
  {
    title: "道は開ける",
    author: "D・カーネギー",
    price: "¥1,650",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=道は開ける+デール・カーネギー",
    query: "道は開ける デール・カーネギー",
    category: "マインド・自己啓発"
  },
  {
    title: "人を動かす",
    author: "D・カーネギー",
    price: "¥1,650",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=人を動かす+デール・カーネギー",
    query: "人を動かす デール・カーネギー",
    category: "マインド・自己啓発"
  },
  {
    title: "イシューからはじめよ 改訂版",
    author: "安宅和人",
    price: "¥1,980",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=イシューからはじめよ+改訂版",
    query: "イシューからはじめよ 改訂版",
    category: "マインド・自己啓発"
  },
  {
    title: "限りある時間の使い方",
    author: "オリバー・バークマン",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=限りある時間の使い方+オリバー・バークマン",
    query: "限りある時間の使い方",
    category: "マインド・自己啓発"
  },
  {
    title: "実践 7つの習慣 何を学び、いかに生きるか",
    author: "佐々木常夫",
    price: "¥1,430",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=実践+7つの習慣+佐々木常夫",
    query: "実践 7つの習慣 何を学び いかに生きるか",
    category: "マインド・自己啓発"
  },
  {
    title: "ビジネススキル大全 2時間で学ぶ「成果を生み出す」全技術",
    author: "藤井孝一",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=ビジネススキル大全+藤井孝一",
    query: "ビジネススキル大全",
    category: "スキル・実務"
  },
  {
    title: "コンサル時代に教わった 仕事ができる人の当たり前",
    author: "西原亮",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=コンサル時代に教わった+仕事ができる人の当たり前",
    query: "コンサル時代に教わった 仕事ができる人の当たり前",
    category: "スキル・実務"
  },
  {
    title: "Deep Skill ディープ・スキル 人と組織を巧みに動かす深くてさりげない「21の技術」",
    author: "石川明",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Deep+Skill+ディープ・スキル+石川明",
    query: "Deep Skill ディープ・スキル",
    category: "スキル・実務"
  },
  {
    title: "たった1日で即戦力になるExcelの教科書［改訂第3版］",
    author: "吉田拳",
    price: "¥1,980",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=たった1日で即戦力になるExcelの教科書+改訂第3版",
    query: "たった1日で即戦力になるExcelの教科書 改訂第3版",
    category: "スキル・実務"
  },
  {
    title: "Excel仕事のはじめ方 入社1年目からの必須スキルが1冊でわかる",
    author: "古川順平",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Excel仕事のはじめ方+古川順平",
    query: "Excel仕事のはじめ方",
    category: "スキル・実務"
  },
  {
    title: "Excel 効率UPスキル大全",
    author: "井上香緒里",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Excel+効率UPスキル大全+井上香緒里",
    query: "Excel 効率UPスキル大全",
    category: "スキル・実務"
  },
  {
    title: "今すぐ使えるかんたんbiz Excel関数＋組み合わせ 効率UPスキル大全 Copilot対応",
    author: "井上香緒里",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Excel関数+組み合わせ+効率UPスキル大全+Copilot",
    query: "Excel関数 組み合わせ 効率UPスキル大全 Copilot対応",
    category: "スキル・実務"
  },
  {
    title: "最高効率を実現する 経理のExcel",
    author: "羽毛田睦土",
    price: "¥2,970",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=最高効率を実現する+経理のExcel",
    query: "最高効率を実現する 経理のExcel",
    category: "スキル・実務"
  },
  {
    title: "やさしく実践 Word & Excel［Microsoft 365/Office 2024対応］",
    author: "大林ひろこ",
    price: "¥2,420",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=やさしく実践+Word+Excel+Microsoft+365+Office+2024",
    query: "やさしく実践 Word Excel Microsoft 365 Office 2024",
    category: "スキル・実務"
  },
  {
    title: "実例満載 Word＆Excelでできる 営業・経理・総務ですぐに使えるビジネス書類のつくり方",
    author: "稲村暢子",
    price: "¥1,958",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=Word+Excel+営業+経理+総務+ビジネス書類のつくり方",
    query: "Word Excel 営業 経理 総務 ビジネス書類のつくり方",
    category: "スキル・実務"
  },
  {
    title: "増補改訂版 起業の科学 スタートアップサイエンスVer.2",
    author: "田所雅之",
    price: "¥3,520",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=増補改訂版+起業の科学+スタートアップサイエンスVer.2",
    query: "増補改訂版 起業の科学 スタートアップサイエンスVer.2",
    category: "起業・経営"
  },
  {
    title: "起業大全 スタートアップを科学する9つのフレームワーク",
    author: "田所雅之",
    price: "¥3,080",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=起業大全+田所雅之",
    query: "起業大全 スタートアップを科学する9つのフレームワーク",
    category: "起業・経営"
  },
  {
    title: "「起業参謀」の戦略書 スタートアップを成功に導く「5つの眼」と23のフレームワーク",
    author: "田所雅之",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=起業参謀の戦略書+田所雅之",
    query: "起業参謀の戦略書",
    category: "起業・経営"
  },
  {
    title: "超入門 ストーリーでわかる「起業の科学」",
    author: "田所雅之",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=超入門+ストーリーでわかる+起業の科学",
    query: "超入門 ストーリーでわかる 起業の科学",
    category: "起業・経営"
  },
  {
    title: "この一冊で全部わかる ビジネスモデル 基本・成功パターン・作り方が一気に学べる",
    author: "根来龍之",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=この一冊で全部わかる+ビジネスモデル+根来龍之",
    query: "この一冊で全部わかる ビジネスモデル",
    category: "起業・経営"
  },
  {
    title: "大学4年間の経営学が10時間でざっと学べる",
    author: "高橋伸夫",
    price: "¥1,650",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=大学4年間の経営学が10時間でざっと学べる",
    query: "大学4年間の経営学が10時間でざっと学べる",
    category: "起業・経営"
  },
  {
    title: "世界一楽しい決算書の読み方",
    author: "大手町のランダムウォーカー",
    price: "¥1,650",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=世界一楽しい決算書の読み方",
    query: "世界一楽しい決算書の読み方",
    category: "起業・経営"
  },
  {
    title: "逆・タイムマシン経営論 近過去の歴史から未来を読む",
    author: "楠木建、杉浦泰",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=逆・タイムマシン経営論",
    query: "逆・タイムマシン経営論",
    category: "起業・経営"
  },
  {
    title: "もし高校野球の女子マネージャーがドラッカーの『マネジメント』を読んだら",
    author: "岩崎夏海",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=もし高校野球の女子マネージャーがドラッカーのマネジメントを読んだら",
    query: "もし高校野球の女子マネージャーがドラッカーのマネジメントを読んだら",
    category: "起業・経営"
  },
  {
    title: "マネジメント［エッセンシャル版］ 基本と原則",
    author: "P.F.ドラッカー",
    price: "¥2,200",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=マネジメント+エッセンシャル版+ドラッカー",
    query: "マネジメント エッセンシャル版 基本と原則",
    category: "起業・経営"
  },
  {
    title: "絶対内定2028 自己分析とキャリアデザインの描き方",
    author: "杉村太郎、キャリアデザインスクール・我究館",
    price: "¥1,980",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=絶対内定2028+自己分析とキャリアデザインの描き方",
    query: "絶対内定2028 自己分析とキャリアデザインの描き方",
    category: "就職・転職"
  },
  {
    title: "絶対内定2028 エントリーシート・面接",
    author: "杉村太郎、キャリアデザインスクール・我究館",
    price: "¥1,870",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=絶対内定2028+エントリーシート+面接",
    query: "絶対内定2028 エントリーシート 面接",
    category: "就職・転職"
  },
  {
    title: "このまま今の会社にいていいのか？と一度でも思ったら読む 転職の思考法",
    author: "北野唯我",
    price: "¥1,540",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=転職の思考法+北野唯我",
    query: "転職の思考法 北野唯我",
    category: "就職・転職"
  },
  {
    title: "マンガ このまま今の会社にいていいのか？と一度でも思ったら読む 転職の思考法",
    author: "北野唯我、星井博文、松枝尚嗣",
    price: "¥1,375",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=マンガ+転職の思考法+北野唯我",
    query: "マンガ 転職の思考法 北野唯我",
    category: "就職・転職"
  },
  {
    title: "転職に向いてない人がそれでも転職に成功する思考法",
    author: "川野智己",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=転職に向いてない人がそれでも転職に成功する思考法",
    query: "転職に向いてない人がそれでも転職に成功する思考法",
    category: "就職・転職"
  },
  {
    title: "幸せな転職 迷わず進める「キャリア設計」の教科書",
    author: "中村浩一郎",
    price: "¥1,980",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=幸せな転職+迷わず進める+キャリア設計の教科書",
    query: "幸せな転職 キャリア設計の教科書",
    category: "就職・転職"
  },
  {
    title: "転職2.0 日本人のキャリアの新・ルール",
    author: "村上臣",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=転職2.0+日本人のキャリアの新+ルール",
    query: "転職2.0 日本人のキャリアの新ルール",
    category: "就職・転職"
  },
  {
    title: "科学的な適職",
    author: "鈴木祐",
    price: "¥1,650",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=科学的な適職+鈴木祐",
    query: "科学的な適職 鈴木祐",
    category: "就職・転職"
  },
  {
    title: "苦しかったときの話をしようか",
    author: "森岡毅",
    price: "¥1,760",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=苦しかったときの話をしようか+森岡毅",
    query: "苦しかったときの話をしようか 森岡毅",
    category: "就職・転職"
  },
  {
    title: "LIFE SHIFT 2 100年時代の行動戦略",
    author: "アンドリュー・スコット、リンダ・グラットン",
    price: "¥1,980",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.co.jp/s?k=LIFE+SHIFT+2+100年時代の行動戦略",
    query: "LIFE SHIFT 2 100年時代の行動戦略",
    category: "就職・転職"
  },
{
  title: "人を動かし、成果を生み出す リーダーシップの科学",
  author: "鈴木竜太",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=人を動かし成果を生み出す+リーダーシップの科学",
  query: "人を動かし、成果を生み出す リーダーシップの科学",
  category: "リーダーシップ"
},
{
  title: "マッキンゼー リーダーの教室",
  author: "ダナ・マオール、ハンス＝ヴェルナー・カース、カート・ストロヴィンク、ラメシュ・スリニヴァサン",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マッキンゼー+リーダーの教室",
  query: "マッキンゼー リーダーの教室",
  category: "リーダーシップ"
},
{
  title: "3000件の職場の悩みを解決したプロが教える リーダーのふるまい大全",
  author: "本田淳也",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=リーダーのふるまい大全+本田淳也",
  query: "リーダーのふるまい大全 本田淳也",
  category: "リーダーシップ"
},
{
  title: "リーダーは偉くない。",
  author: "立花陽三",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=リーダーは偉くない+立花陽三",
  query: "リーダーは偉くない 立花陽三",
  category: "リーダーシップ"
},
{
  title: "最高のリーダーは何もしない",
  author: "藤沢久美",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=最高のリーダーは何もしない+藤沢久美",
  query: "最高のリーダーは何もしない 藤沢久美",
  category: "リーダーシップ"
},
{
  title: "リーダーは世界史に学べ",
  author: "増田賢作、羽田正",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=リーダーは世界史に学べ",
  query: "リーダーは世界史に学べ",
  category: "リーダーシップ"
},
{
  title: "Learning 知性あるリーダーは学び続ける",
  author: "デヴィッド・ノヴァク、ラリー・ビショップ",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Learning+知性あるリーダーは学び続ける",
  query: "Learning 知性あるリーダーは学び続ける",
  category: "リーダーシップ"
},
{
  title: "ハーバード・ビジネス・レビュー リーダーシップ論文ベスト11 リーダーシップの教科書2 実践編",
  author: "ハーバード・ビジネス・レビュー編集部",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=リーダーシップ論文ベスト11+実践編",
  query: "リーダーシップ論文ベスト11 実践編",
  category: "リーダーシップ"
},
{
  title: "コンサル時代に教わった 仕事ができる上司の当たり前",
  author: "西原亮",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=仕事ができる上司の当たり前+西原亮",
  query: "仕事ができる上司の当たり前 西原亮",
  category: "リーダーシップ"
},
{
  title: "エッセンシャル・イノベーター 2 挑戦力「変化の時代」のリーダーシップ",
  author: "西川世一 監修",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=エッセンシャル・イノベーター2+挑戦力",
  query: "エッセンシャル・イノベーター2 挑戦力 変化の時代のリーダーシップ",
  category: "リーダーシップ"
},
{
  title: "未来をつくるキャリアの授業",
  author: "渡辺秀和",
  price: "¥842",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=未来をつくるキャリアの授業+渡辺秀和",
  query: "未来をつくるキャリアの授業 渡辺秀和",
  category: "キャリア設計"
},
{
  title: "生きづらい時代のキャリアデザインの教科書",
  author: "大垣尚司",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=生きづらい時代のキャリアデザインの教科書",
  query: "生きづらい時代のキャリアデザインの教科書",
  category: "キャリア設計"
},
{
  title: "キャリアづくりの教科書",
  author: "徳谷智史",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=キャリアづくりの教科書+徳谷智史",
  query: "キャリアづくりの教科書 徳谷智史",
  category: "キャリア設計"
},
{
  title: "働くひとのためのキャリア・デザイン",
  author: "金井壽宏",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=働くひとのためのキャリア・デザイン+金井壽宏",
  query: "働くひとのためのキャリア・デザイン 金井壽宏",
  category: "キャリア設計"
},
{
  title: "スタンフォード式 人生デザイン講座 仕事篇",
  author: "ビル・バーネット、デイヴ・エヴァンス",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スタンフォード式+人生デザイン講座+仕事篇",
  query: "スタンフォード式 人生デザイン講座 仕事篇",
  category: "キャリア設計"
},
{
  title: "進化するキャリアオーナーシップ",
  author: "田中研之輔 監修、富士通ラーニングメディア 編",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=進化するキャリアオーナーシップ",
  query: "進化するキャリアオーナーシップ",
  category: "キャリア設計"
},
{
  title: "キャリアデザイン入門［I］基礎力編 第2版",
  author: "大久保幸夫",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=キャリアデザイン入門+基礎力編+第2版",
  query: "キャリアデザイン入門 基礎力編 第2版",
  category: "キャリア設計"
},
{
  title: "キャリアデザイン入門［II］専門力編 第2版",
  author: "大久保幸夫",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=キャリアデザイン入門+専門力編+第2版",
  query: "キャリアデザイン入門 専門力編 第2版",
  category: "キャリア設計"
},
{
  title: "図解「いいキャリア」の育て方 「5つの資」から考える人生戦略",
  author: "田中研之輔",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解+いいキャリアの育て方+5つの資",
  query: "図解 いいキャリアの育て方 5つの資",
  category: "キャリア設計"
},
{
  title: "LIFE SHIFT 2 100年時代の行動戦略",
  author: "アンドリュー・スコット、リンダ・グラットン",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=LIFE+SHIFT+2+100年時代の行動戦略",
  query: "LIFE SHIFT 2 100年時代の行動戦略",
  category: "キャリア設計"
},
{
  title: "伝え方が9割",
  author: "佐々木圭一",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=伝え方が9割+佐々木圭一",
  query: "伝え方が9割 佐々木圭一",
  category: "文章・コミュニケーション"
},
{
  title: "人は話し方が9割",
  author: "永松茂久",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=人は話し方が9割+永松茂久",
  query: "人は話し方が9割 永松茂久",
  category: "文章・コミュニケーション"
},
{
  title: "「うまく言葉にできない」がなくなる 言語化大全",
  author: "山口拓朗",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=言語化大全+山口拓朗",
  query: "言語化大全 山口拓朗",
  category: "文章・コミュニケーション"
},
{
  title: "1分で話せ 世界のトップが絶賛した大事なことだけシンプルに伝える技術",
  author: "伊藤羊一",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1分で話せ+伊藤羊一",
  query: "1分で話せ 伊藤羊一",
  category: "文章・コミュニケーション"
},
{
  title: "何を書けばいいかわからない人のための「うまく」「はやく」書ける文章術",
  author: "山口拓朗",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=何を書けばいいかわからない人のための文章術",
  query: "何を書けばいいかわからない人のための うまく はやく 書ける文章術",
  category: "文章・コミュニケーション"
},
{
  title: "社会人になったらすぐに読む文章術の本",
  author: "藤吉豊、小川真理子",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=社会人になったらすぐに読む文章術の本",
  query: "社会人になったらすぐに読む文章術の本",
  category: "文章・コミュニケーション"
},
{
  title: "秒で伝わる文章術",
  author: "宮崎直人",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=秒で伝わる文章術+宮崎直人",
  query: "秒で伝わる文章術 宮崎直人",
  category: "文章・コミュニケーション"
},
{
  title: "忙しい人に読んでもらえる文章術",
  author: "トッド・ロジャース、ジェシカ・ラスキー＝フィンク",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=忙しい人に読んでもらえる文章術",
  query: "忙しい人に読んでもらえる文章術",
  category: "文章・コミュニケーション"
},
{
  title: "アサーティブ・コミュニケーション",
  author: "戸田久実",
  price: "¥990",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=アサーティブ・コミュニケーション+戸田久実",
  query: "アサーティブ・コミュニケーション 戸田久実",
  category: "文章・コミュニケーション"
},
{
  title: "文章術 ―「伝わる書き方」の練習",
  author: "樺島忠夫",
  price: "¥720",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=文章術+伝わる書き方の練習+樺島忠夫",
  query: "文章術 伝わる書き方の練習 樺島忠夫",
  category: "文章・コミュニケーション"
},
{
  title: "世界一流エンジニアの思考法",
  author: "牛尾剛",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界一流エンジニアの思考法+牛尾剛",
  query: "世界一流エンジニアの思考法 牛尾剛",
  category: "ビジネス教養"
},
{
  title: "FACTFULNESS",
  author: "ハンス・ロスリング、オーラ・ロスリング、アンナ・ロスリング・ロンランド",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=FACTFULNESS",
  query: "FACTFULNESS",
  category: "ビジネス教養"
},
{
  title: "サピエンス全史 上 文明の構造と人類の幸福",
  author: "ユヴァル・ノア・ハラリ",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=サピエンス全史+上",
  query: "サピエンス全史 上 文明の構造と人類の幸福",
  category: "ビジネス教養"
},
{
  title: "サピエンス全史 下 文明の構造と人類の幸福",
  author: "ユヴァル・ノア・ハラリ",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=サピエンス全史+下",
  query: "サピエンス全史 下 文明の構造と人類の幸福",
  category: "ビジネス教養"
},
{
  title: "思考の整理学",
  author: "外山滋比古",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=思考の整理学+外山滋比古",
  query: "思考の整理学 外山滋比古",
  category: "ビジネス教養"
},
{
  title: "知識を操る超読書術",
  author: "メンタリストDaiGo",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=知識を操る超読書術",
  query: "知識を操る超読書術",
  category: "ビジネス教養"
},
{
  title: "学びを結果に変えるアウトプット大全",
  author: "樺沢紫苑",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=学びを結果に変えるアウトプット大全",
  query: "学びを結果に変えるアウトプット大全",
  category: "ビジネス教養"
},
{
  title: "イシューからはじめよ 改訂版",
  author: "安宅和人",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=イシューからはじめよ+改訂版",
  query: "イシューからはじめよ 改訂版",
  category: "ビジネス教養"
},
{
  title: "論語と算盤",
  author: "渋沢栄一",
  price: "¥792",
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=論語と算盤+渋沢栄一",
  query: "論語と算盤 渋沢栄一",
  category: "ビジネス教養"
},
{
  title: "経営者の教科書",
  author: "小宮一慶",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=経営者の教科書+小宮一慶",
  query: "経営者の教科書 小宮一慶",
  category: "ビジネス教養"
},
{
  title: "お金の大学",
  author: "両＠リベ大学長",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金の大学+両学長",
  query: "お金の大学 両学長",
  category: "マネーリテラシー"
},
{
  title: "本当の自由を手に入れる お金の大学",
  author: "両＠リベ大学長",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=本当の自由を手に入れる+お金の大学",
  query: "本当の自由を手に入れる お金の大学",
  category: "マネーリテラシー"
},
{
  title: "ジェイソン流お金の増やし方",
  author: "厚切りジェイソン",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ジェイソン流お金の増やし方",
  query: "ジェイソン流お金の増やし方",
  category: "マネーリテラシー"
},
{
  title: "お金持ちになれる黄金の羽根の拾い方 知的人生設計のすすめ",
  author: "橘玲",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金持ちになれる黄金の羽根の拾い方",
  query: "お金持ちになれる黄金の羽根の拾い方",
  category: "マネーリテラシー"
},
{
  title: "お金の超基本",
  author: "坂本綾子",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金の超基本+坂本綾子",
  query: "お金の超基本 坂本綾子",
  category: "マネーリテラシー"
},
{
  title: "図解・最新 難しいことはわかりませんが、お金の増やし方を教えてください！",
  author: "山崎元、大橋弘祐",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=難しいことはわかりませんが+お金の増やし方を教えてください",
  query: "難しいことはわかりませんが お金の増やし方を教えてください",
  category: "マネーリテラシー"
},
{
  title: "知らないと損する 池上彰のお金の学校",
  author: "池上彰",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=池上彰のお金の学校",
  query: "知らないと損する 池上彰のお金の学校",
  category: "マネーリテラシー"
},
{
  title: "お金のこと、全部教えてください！",
  author: "田内学",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金のこと+全部教えてください+田内学",
  query: "お金のこと、全部教えてください！ 田内学",
  category: "マネーリテラシー"
},
{
  title: "きみのお金は誰のため ボスが教えてくれた「お金の謎」と「社会のしくみ」",
  author: "田内学",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=きみのお金は誰のため",
  query: "きみのお金は誰のため",
  category: "マネーリテラシー"
},
{
  title: "バビロン大富豪の教え",
  author: "ジョージ・S・クレイソン",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=バビロン大富豪の教え",
  query: "バビロン大富豪の教え",
  category: "マネーリテラシー"
},
{
  title: "いちからわかる！新NISA＆iDeCo 2026年最新版",
  author: "山中伸枝 監修",
  price: "¥1,210",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=いちからわかる+新NISA+iDeCo+2026年最新版",
  query: "いちからわかる！新NISA＆iDeCo 2026年最新版",
  category: "新NISA・iDeCo"
},
{
  title: "マンガと図解でよくわかる新NISA＆iDeCo＆ふるさと納税［増補改訂3版］",
  author: "酒井富士子",
  price: "¥1,628",
  image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガと図解でよくわかる新NISA+iDeCo+ふるさと納税",
  query: "マンガと図解でよくわかる新NISA＆iDeCo＆ふるさと納税",
  category: "新NISA・iDeCo"
},
{
  title: "はじめての新NISA＆iDeCo",
  author: "頼藤太希、高山一恵",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめての新NISA+iDeCo+頼藤太希",
  query: "はじめての新NISA＆iDeCo",
  category: "新NISA・iDeCo"
},
{
  title: "株・投資信託・iDeCo・NISAがわかる 今さら聞けない投資の超基本",
  author: "泉美智子、奥村彰太郎",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=株+投資信託+iDeCo+NISA+今さら聞けない投資の超基本",
  query: "株・投資信託・iDeCo・NISAがわかる 今さら聞けない投資の超基本",
  category: "新NISA・iDeCo"
},
{
  title: "投資ど素人が投資初心者になるための株・投資信託・NISA・iDeCo・ふるさと納税超入門 新NISA対応改訂版",
  author: "EditroomH",
  price: "¥1,589",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=投資ど素人が投資初心者になるための+NISA+iDeCo+新NISA対応改訂版",
  query: "投資ど素人が投資初心者になるための株・投資信託・NISA・iDeCo・ふるさと納税超入門 新NISA対応改訂版",
  category: "新NISA・iDeCo"
},
{
  title: "60分でわかる！新NISA 超入門［改訂新版］",
  author: "酒井富士子",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=60分でわかる+新NISA+超入門+改訂新版",
  query: "60分でわかる！新NISA 超入門［改訂新版］",
  category: "新NISA・iDeCo"
},
{
  title: "マンガでカンタン！NISA・iDeCoは7日間でわかります。",
  author: "風呂内亜矢、chiiko",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガでカンタン+NISA+iDeCoは7日間でわかります",
  query: "マンガでカンタン！NISA・iDeCoは7日間でわかります。",
  category: "新NISA・iDeCo"
},
{
  title: "新NISA対応 超改訂版 難しいことはわかりませんが、お金の増やし方を教えてください！",
  author: "山崎元、大橋弘祐",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新NISA対応+難しいことはわかりませんが+お金の増やし方を教えてください",
  query: "新NISA対応 超改訂版 難しいことはわかりませんが、お金の増やし方を教えてください！",
  category: "新NISA・iDeCo"
},
{
  title: "お金の増やし方がぜんぶわかる！新NISA超活用術",
  author: "酒井富士子",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金の増やし方がぜんぶわかる+新NISA超活用術",
  query: "お金の増やし方がぜんぶわかる！新NISA超活用術",
  category: "新NISA・iDeCo"
},
{
  title: "50歳からでも間に合う新NISAとiDeCo",
  author: "横山利香",
  price: "¥990",
  image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=50歳からでも間に合う新NISAとiDeCo",
  query: "50歳からでも間に合う新NISAとiDeCo",
  category: "新NISA・iDeCo"
},
{
  title: "お金は寝かせて増やしなさい",
  author: "水瀬ケンイチ",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金は寝かせて増やしなさい",
  query: "お金は寝かせて増やしなさい",
  category: "インデックス投資"
},
{
  title: "敗者のゲーム",
  author: "チャールズ・エリス",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=敗者のゲーム+チャールズ+エリス",
  query: "敗者のゲーム チャールズ・エリス",
  category: "インデックス投資"
},
{
  title: "ウォール街のランダム・ウォーカー",
  author: "バートン・G・マルキール",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ウォール街のランダム・ウォーカー",
  query: "ウォール街のランダム・ウォーカー",
  category: "インデックス投資"
},
{
  title: "ほったらかし投資術",
  author: "山崎元、水瀬ケンイチ",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ほったらかし投資術",
  query: "ほったらかし投資術",
  category: "インデックス投資"
},
{
  title: "全面改訂 ほったらかし投資術",
  author: "山崎元、水瀬ケンイチ",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=全面改訂+ほったらかし投資術",
  query: "全面改訂 ほったらかし投資術",
  category: "インデックス投資"
},
{
  title: "新NISA完全ガイド",
  author: "日本経済新聞出版",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新NISA+完全ガイド",
  query: "新NISA 完全ガイド",
  category: "インデックス投資"
},
{
  title: "新NISAでお金を増やす方法",
  author: "山崎元",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新NISAでお金を増やす方法",
  query: "新NISAでお金を増やす方法",
  category: "インデックス投資"
},
{
  title: "インデックス投資は勝者のゲーム",
  author: "ジョン・C・ボーグル",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=インデックス投資は勝者のゲーム",
  query: "インデックス投資は勝者のゲーム",
  category: "インデックス投資"
},
{
  title: "お金の増やし方を教えてください！",
  author: "山崎元、大橋弘祐",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=難しいことはわかりませんが+お金の増やし方を教えてください",
  query: "難しいことはわかりませんが お金の増やし方を教えてください",
  category: "インデックス投資"
},
{
  title: "投資の大原則",
  author: "バートン・G・マルキール、チャールズ・D・エリス",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=投資の大原則+マルキール+エリス",
  query: "投資の大原則 マルキール エリス",
  category: "インデックス投資"
},
{
  title: "世界一やさしい 株の教科書 1年生",
  author: "ジョン・シュウギョウ",
  price: "¥1,628",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界一やさしい+株の教科書+1年生",
  query: "世界一やさしい 株の教科書 1年生",
  category: "株式投資"
},
{
  title: "株の超入門書 改訂4版",
  author: "安恒理",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=株の超入門書+改訂4版",
  query: "株の超入門書 改訂4版",
  category: "株式投資"
},
{
  title: "マンガでわかる最強の株入門",
  author: "安恒理、吉村佳",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガでわかる最強の株入門",
  query: "マンガでわかる最強の株入門",
  category: "株式投資"
},
{
  title: "株を買うなら最低限知っておきたい ファンダメンタル投資の教科書",
  author: "足立武志",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ファンダメンタル投資の教科書+足立武志",
  query: "株を買うなら最低限知っておきたい ファンダメンタル投資の教科書",
  category: "株式投資"
},
{
  title: "株式投資の未来 永続する会社が本当の利益をもたらす",
  author: "ジェレミー・シーゲル",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=株式投資の未来+ジェレミー+シーゲル",
  query: "株式投資の未来 永続する会社が本当の利益をもたらす",
  category: "株式投資"
},
{
  title: "敗者のゲーム［原著第8版］",
  author: "チャールズ・エリス",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=敗者のゲーム+原著第8版",
  query: "敗者のゲーム 原著第8版",
  category: "株式投資"
},
{
  title: "ウォール街のランダム・ウォーカー 第13版",
  author: "バートン・マルキール",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ウォール街のランダム+ウォーカー+第13版",
  query: "ウォール街のランダム・ウォーカー 第13版",
  category: "株式投資"
},
{
  title: "ピーター・リンチの株で勝つ",
  author: "ピーター・リンチ、ジョン・ロスチャイルド",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ピーター+リンチの株で勝つ",
  query: "ピーター・リンチの株で勝つ",
  category: "株式投資"
},
{
  title: "バフェットの財務諸表を読む力",
  author: "メアリー・バフェット、デビッド・クラーク",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=バフェットの財務諸表を読む力",
  query: "バフェットの財務諸表を読む力",
  category: "株式投資"
},
{
  title: "会社四季報の達人が教える10倍株・100倍株の探し方",
  author: "渡部清二",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=会社四季報の達人が教える+10倍株+100倍株の探し方",
  query: "会社四季報の達人が教える10倍株・100倍株の探し方",
  category: "株式投資"
},
{
  title: "世界一やさしい 不動産投資の教科書 1年生",
  author: "浅井佐知子",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界一やさしい+不動産投資の教科書+1年生",
  query: "世界一やさしい 不動産投資の教科書 1年生",
  category: "不動産投資"
},
{
  title: "世界一やさしい 不動産投資の教科書 1年生 改訂版",
  author: "浅井佐知子",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界一やさしい+不動産投資の教科書+1年生+改訂版",
  query: "世界一やさしい 不動産投資の教科書 1年生 改訂版",
  category: "不動産投資"
},
{
  title: "不動産投資の教科書",
  author: "不動産投資の教科書編集部",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=不動産投資の教科書",
  query: "不動産投資の教科書",
  category: "不動産投資"
},
{
  title: "知識ゼロから始める 不動産投資の教科書",
  author: "浅井佐知子",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=知識ゼロから始める+不動産投資の教科書",
  query: "知識ゼロから始める 不動産投資の教科書",
  category: "不動産投資"
},
{
  title: "はじめての不動産投資",
  author: "長岐隆弘",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめての不動産投資+長岐隆弘",
  query: "はじめての不動産投資 長岐隆弘",
  category: "不動産投資"
},
{
  title: "不動産投資 最強の教科書",
  author: "鈴木宏佳",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=不動産投資+最強の教科書",
  query: "不動産投資 最強の教科書",
  category: "不動産投資"
},
{
  title: "不動産投資でお金を残すために必要なこと",
  author: "中川寛子",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=不動産投資でお金を残すために必要なこと",
  query: "不動産投資でお金を残すために必要なこと",
  category: "不動産投資"
},
{
  title: "金持ち大家さんになる！",
  author: "浦田健",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=金持ち大家さんになる",
  query: "金持ち大家さんになる",
  category: "不動産投資"
},
{
  title: "不動産投資の超基本",
  author: "牧野知弘",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=不動産投資の超基本",
  query: "不動産投資の超基本",
  category: "不動産投資"
},
{
  title: "マンガでわかる 不動産投資の基本",
  author: "脇田雄太",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガでわかる+不動産投資の基本",
  query: "マンガでわかる 不動産投資の基本",
  category: "不動産投資"
},
{
  title: "経済ってそういうことだったのか会議",
  author: "佐藤雅彦、竹中平蔵",
  price: "¥660",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=経済ってそういうことだったのか会議",
  query: "経済ってそういうことだったのか会議",
  category: "経済・金融"
},
{
  title: "［図解］池上彰の 経済のニュースが面白いほどわかる本",
  author: "池上彰",
  price: "¥669",
  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解+池上彰の+経済のニュースが面白いほどわかる本",
  query: "図解 池上彰の 経済のニュースが面白いほどわかる本",
  category: "経済・金融"
},
{
  title: "池上彰のやさしい経済学 1 しくみがわかる",
  author: "池上彰、テレビ東京報道局",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=池上彰のやさしい経済学+1+しくみがわかる",
  query: "池上彰のやさしい経済学 1 しくみがわかる",
  category: "経済・金融"
},
{
  title: "池上彰のやさしい経済学 2 ニュースがわかる",
  author: "池上彰、テレビ東京報道局",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=池上彰のやさしい経済学+2+ニュースがわかる",
  query: "池上彰のやさしい経済学 2 ニュースがわかる",
  category: "経済・金融"
},
{
  title: "池上彰のマンガでわかる経済学〈1〉経済のしくみ",
  author: "池上彰、北田瀧、松浦まどか",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=池上彰のマンガでわかる経済学+1+経済のしくみ",
  query: "池上彰のマンガでわかる経済学 1 経済のしくみ",
  category: "経済・金融"
},
{
  title: "池上彰のマンガでわかる経済学〈2〉ニュースがわかる",
  author: "池上彰、北田瀧、松浦まどか",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=池上彰のマンガでわかる経済学+2+ニュースがわかる",
  query: "池上彰のマンガでわかる経済学 2 ニュースがわかる",
  category: "経済・金融"
},
{
  title: "マンガでわかるマクロ経済学",
  author: "滝川好夫",
  price: "¥2,090",
  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガでわかるマクロ経済学+滝川好夫",
  query: "マンガでわかるマクロ経済学 滝川好夫",
  category: "経済・金融"
},
{
  title: "マンキュー入門経済学 第3版",
  author: "N・グレゴリー・マンキュー",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンキュー入門経済学+第3版",
  query: "マンキュー入門経済学 第3版",
  category: "経済・金融"
},
{
  title: "高校生からわかるマクロ・ミクロ経済学",
  author: "菅原晃",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1532619187608-e5375cab36ca?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=高校生からわかるマクロ+ミクロ経済学",
  query: "高校生からわかるマクロ・ミクロ経済学",
  category: "経済・金融"
},
{
  title: "ヘンテコノミクス 行動経済学まんが",
  author: "佐藤雅彦、菅俊一、高橋秀明",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ヘンテコノミクス+行動経済学まんが",
  query: "ヘンテコノミクス 行動経済学まんが",
  category: "経済・金融"
},
{
  title: "いまさら聞けない ビットコインとブロックチェーン",
  author: "大塚雄介",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=いまさら聞けない+ビットコインとブロックチェーン",
  query: "いまさら聞けない ビットコインとブロックチェーン",
  category: "仮想通貨・Web3"
},
{
  title: "ブロックチェーン・レボリューション",
  author: "ドン・タプスコット、アレックス・タプスコット",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ブロックチェーン・レボリューション",
  query: "ブロックチェーン・レボリューション",
  category: "仮想通貨・Web3"
},
{
  title: "仮想通貨3.0",
  author: "マイケル・J・ケイシー、ポール・ヴィグナ",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=仮想通貨3.0",
  query: "仮想通貨3.0",
  category: "仮想通貨・Web3"
},
{
  title: "ブロックチェーン・ビジネス",
  author: "猪木幹雄",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ブロックチェーン・ビジネス",
  query: "ブロックチェーン・ビジネス",
  category: "仮想通貨・Web3"
},
{
  title: "NFTの教科書",
  author: "天羽健介、増田雅史",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=NFTの教科書",
  query: "NFTの教科書",
  category: "仮想通貨・Web3"
},
{
  title: "メタバースとWeb3",
  author: "國光宏尚",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=メタバースとWeb3+國光宏尚",
  query: "メタバースとWeb3 國光宏尚",
  category: "仮想通貨・Web3"
},
{
  title: "Web3とは何か",
  author: "岡嶋裕史",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Web3とは何か+岡嶋裕史",
  query: "Web3とは何か 岡嶋裕史",
  category: "仮想通貨・Web3"
},
{
  title: "Web3の教科書",
  author: "森川夢佑斗",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Web3の教科書+森川夢佑斗",
  query: "Web3の教科書 森川夢佑斗",
  category: "仮想通貨・Web3"
},
{
  title: "図解ポケット Web3のしくみがよくわかる本",
  author: "松村雄太",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解ポケット+Web3のしくみがよくわかる本",
  query: "図解ポケット Web3のしくみがよくわかる本",
  category: "仮想通貨・Web3"
},
{
  title: "未来ビジネス図解 仮想空間とVR",
  author: "岩田洋一",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=未来ビジネス図解+仮想空間とVR",
  query: "未来ビジネス図解 仮想空間とVR",
  category: "仮想通貨・Web3"
},
{
  title: "正しい家計管理",
  author: "林總",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=正しい家計管理+林總",
  query: "正しい家計管理 林總",
  category: "家計管理"
},
{
  title: "お金の超基本",
  author: "坂本綾子",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金の超基本+坂本綾子",
  query: "お金の超基本 坂本綾子",
  category: "家計管理"
},
{
  title: "お金の大学",
  author: "両＠リベ大学長",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=お金の大学+両学長",
  query: "お金の大学 両学長",
  category: "家計管理"
},
{
  title: "本当の自由を手に入れる お金の大学",
  author: "両＠リベ大学長",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=本当の自由を手に入れる+お金の大学",
  query: "本当の自由を手に入れる お金の大学",
  category: "家計管理"
},
{
  title: "節約・貯蓄・投資の前に 今さら聞けないお金の超基本",
  author: "泉美智子",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=今さら聞けないお金の超基本+泉美智子",
  query: "節約 貯蓄 投資の前に 今さら聞けないお金の超基本",
  category: "家計管理"
},
{
  title: "年収200万円からの貯金生活宣言",
  author: "横山光昭",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=年収200万円からの貯金生活宣言",
  query: "年収200万円からの貯金生活宣言",
  category: "家計管理"
},
{
  title: "はじめての人のための3000円投資生活",
  author: "横山利香",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめての人のための3000円投資生活",
  query: "はじめての人のための3000円投資生活",
  category: "家計管理"
},
{
  title: "1日1行！ 2年で500万円貯めたズボラ家計簿",
  author: "あき",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=2年で500万円貯めたズボラ家計簿",
  query: "1日1行 2年で500万円貯めたズボラ家計簿",
  category: "家計管理"
},
{
  title: "貯める力",
  author: "リベラルアーツ大学",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=貯める力+リベラルアーツ大学",
  query: "貯める力 リベラルアーツ大学",
  category: "家計管理"
},
{
  title: "年収300万円でもお金の心配がなくなるたった1つの方法",
  author: "大江英樹",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=年収300万円でもお金の心配がなくなるたった1つの方法",
  query: "年収300万円でもお金の心配がなくなるたった1つの方法",
  category: "家計管理"
},
{
  title: "一億人の英文法 すべての日本人に贈る「話すため」の英文法",
  author: "大西泰斗、ポール・マクベイ",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=一億人の英文法",
  query: "一億人の英文法",
  category: "英語・語学"
},
{
  title: "DUO 3.0",
  author: "鈴木陽一",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=DUO+3.0",
  query: "DUO 3.0",
  category: "英語・語学"
},
{
  title: "英語耳 発音ができるとリスニングができる",
  author: "松澤喜好",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=英語耳+松澤喜好",
  query: "英語耳 松澤喜好",
  category: "英語・語学"
},
{
  title: "瞬間英作文トレーニング",
  author: "森沢洋介",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=瞬間英作文トレーニング+森沢洋介",
  query: "瞬間英作文トレーニング 森沢洋介",
  category: "英語・語学"
},
{
  title: "キクタン【Basic】4000語",
  author: "一杉武史",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1455885666463-4f6f6f3f9e0a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=キクタン+Basic+4000語",
  query: "キクタン Basic 4000語",
  category: "英語・語学"
},
{
  title: "速読英単語 必修編［改訂第8版］",
  author: "風早寛",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=速読英単語+必修編+改訂第8版",
  query: "速読英単語 必修編 改訂第8版",
  category: "英語・語学"
},
{
  title: "英文法の鬼100則",
  author: "時吉秀弥",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=英文法の鬼100則",
  query: "英文法の鬼100則",
  category: "英語・語学"
},
{
  title: "関正生の英文法ポラリス［1］標準レベル",
  author: "関正生",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=関正生の英文法ポラリス+1+標準レベル",
  query: "関正生の英文法ポラリス 1 標準レベル",
  category: "英語・語学"
},
{
  title: "TOEIC L&R TEST 出る単特急 金のフレーズ",
  author: "TEX加藤",
  price: "¥979",
  image: "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=TOEIC+金のフレーズ+TEX加藤",
  query: "TOEIC L&R TEST 出る単特急 金のフレーズ",
  category: "英語・語学"
},
{
  title: "英語独習法",
  author: "今井むつみ",
  price: "¥1,056",
  image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=英語独習法+今井むつみ",
  query: "英語独習法 今井むつみ",
  category: "英語・語学"
},
{
  title: "スッキリわかる日商簿記3級 第15版",
  author: "滝澤ななみ",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スッキリわかる日商簿記3級+第15版",
  query: "スッキリわかる日商簿記3級 第15版",
  category: "簿記"
},
{
  title: "みんなが欲しかった！簿記の教科書 日商3級 商業簿記 第13版",
  author: "滝澤ななみ",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=みんなが欲しかった+簿記の教科書+日商3級+第13版",
  query: "みんなが欲しかった！簿記の教科書 日商3級 商業簿記 第13版",
  category: "簿記"
},
{
  title: "みんなが欲しかった！簿記の問題集 日商3級 第13版",
  author: "滝澤ななみ",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=みんなが欲しかった+簿記の問題集+日商3級+第13版",
  query: "みんなが欲しかった！簿記の問題集 日商3級 第13版",
  category: "簿記"
},
{
  title: "スッキリわかる日商簿記2級 商業簿記 第15版",
  author: "滝澤ななみ",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スッキリわかる日商簿記2級+商業簿記+第15版",
  query: "スッキリわかる日商簿記2級 商業簿記 第15版",
  category: "簿記"
},
{
  title: "スッキリわかる日商簿記2級 工業簿記 第14版",
  author: "滝澤ななみ",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スッキリわかる日商簿記2級+工業簿記+第14版",
  query: "スッキリわかる日商簿記2級 工業簿記 第14版",
  category: "簿記"
},
{
  title: "合格テキスト 日商簿記3級",
  author: "TAC簿記検定講座",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=合格テキスト+日商簿記3級+TAC",
  query: "合格テキスト 日商簿記3級 TAC",
  category: "簿記"
},
{
  title: "合格トレーニング 日商簿記3級",
  author: "TAC簿記検定講座",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=合格トレーニング+日商簿記3級+TAC",
  query: "合格トレーニング 日商簿記3級 TAC",
  category: "簿記"
},
{
  title: "いちばんわかる日商簿記3級の教科書",
  author: "CPA会計学院",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=いちばんわかる日商簿記3級の教科書",
  query: "いちばんわかる日商簿記3級の教科書",
  category: "簿記"
},
{
  title: "合格するための本試験問題集 日商簿記3級",
  author: "TAC簿記検定講座",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=合格するための本試験問題集+日商簿記3級",
  query: "合格するための本試験問題集 日商簿記3級",
  category: "簿記"
},
{
  title: "ふくしままさゆきの簿記1級 テキスト",
  author: "ふくしままさゆき",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ふくしままさゆき+簿記1級",
  query: "ふくしままさゆき 簿記1級 テキスト",
  category: "簿記"
},
{
  title: "キタミ式イラストIT塾 ITパスポート 令和08年",
  author: "きたみりゅうじ",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=キタミ式イラストIT塾+ITパスポート+令和08年",
  query: "キタミ式イラストIT塾 ITパスポート 令和08年",
  category: "IT資格"
},
{
  title: "徹底攻略 ITパスポート教科書＋模擬問題 令和8年度",
  author: "株式会社わくわくスタディワールド",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=徹底攻略+ITパスポート教科書+模擬問題+令和8年度",
  query: "徹底攻略 ITパスポート教科書＋模擬問題 令和8年度",
  category: "IT資格"
},
{
  title: "いちばんやさしい ITパスポート 絶対合格の教科書＋出る順問題集 令和8年度",
  author: "高橋京介",
  price: "¥1,738",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=いちばんやさしい+ITパスポート+絶対合格の教科書+令和8年度",
  query: "いちばんやさしい ITパスポート 絶対合格の教科書＋出る順問題集 令和8年度",
  category: "IT資格"
},
{
  title: "令和8年度 ITパスポート 合格教本",
  author: "岡嶋裕史",
  price: "¥1,738",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=令和8年度+ITパスポート+合格教本+岡嶋裕史",
  query: "令和8年度 ITパスポート 合格教本 岡嶋裕史",
  category: "IT資格"
},
{
  title: "出るとこだけ！基本情報技術者［科目A］",
  author: "矢沢久雄",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=出るとこだけ+基本情報技術者+科目A",
  query: "出るとこだけ！基本情報技術者［科目A］",
  category: "IT資格"
},
{
  title: "キタミ式イラストIT塾 基本情報技術者 令和08年",
  author: "きたみりゅうじ",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=キタミ式イラストIT塾+基本情報技術者+令和08年",
  query: "キタミ式イラストIT塾 基本情報技術者 令和08年",
  category: "IT資格"
},
{
  title: "徹底攻略 基本情報技術者教科書 令和8年度",
  author: "株式会社わくわくスタディワールド",
  price: "¥2,178",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=徹底攻略+基本情報技術者教科書+令和8年度",
  query: "徹底攻略 基本情報技術者教科書 令和8年度",
  category: "IT資格"
},
{
  title: "応用情報技術者 合格教本 令和8年度",
  author: "大滝みや子",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=応用情報技術者+合格教本+令和8年度",
  query: "応用情報技術者 合格教本 令和8年度",
  category: "IT資格"
},
{
  title: "情報セキュリティマネジメント 合格教本 令和8年度",
  author: "岡嶋裕史",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=情報セキュリティマネジメント+合格教本+令和8年度",
  query: "情報セキュリティマネジメント 合格教本 令和8年度",
  category: "IT資格"
},
{
  title: "徹底攻略 情報セキュリティマネジメント教科書 令和8年度",
  author: "株式会社わくわくスタディワールド",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=徹底攻略+情報セキュリティマネジメント教科書+令和8年度",
  query: "徹底攻略 情報セキュリティマネジメント教科書 令和8年度",
  category: "IT資格"
},
{
  title: "みんなが欲しかった！宅建士の教科書 2026年度版",
  author: "滝澤ななみ",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=みんなが欲しかった+宅建士の教科書+2026年度版",
  query: "みんなが欲しかった！宅建士の教科書 2026年度版",
  category: "宅建・法律"
},
{
  title: "みんなが欲しかった！宅建士の問題集 2026年度版",
  author: "滝澤ななみ",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=みんなが欲しかった+宅建士の問題集+2026年度版",
  query: "みんなが欲しかった！宅建士の問題集 2026年度版",
  category: "宅建・法律"
},
{
  title: "わかって合格る宅建士 基本テキスト 2026年度",
  author: "TAC宅建士講座",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=わかって合格る宅建士+基本テキスト+2026年度",
  query: "わかって合格る宅建士 基本テキスト 2026年度",
  category: "宅建・法律"
},
{
  title: "出る順宅建士 合格テキスト 1 権利関係 2026年版",
  author: "東京リーガルマインドLEC総合研究所 宅建士試験部",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=出る順宅建士+合格テキスト+権利関係+2026",
  query: "出る順宅建士 合格テキスト 1 権利関係 2026年版",
  category: "宅建・法律"
},
{
  title: "出る順宅建士 合格テキスト 2 宅建業法 2026年版",
  author: "東京リーガルマインドLEC総合研究所 宅建士試験部",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1455885666463-4f7c8c1d3f4b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=出る順宅建士+合格テキスト+宅建業法+2026",
  query: "出る順宅建士 合格テキスト 2 宅建業法 2026年版",
  category: "宅建・法律"
},
{
  title: "出る順宅建士 合格テキスト 3 法令上の制限・税・その他 2026年版",
  author: "東京リーガルマインドLEC総合研究所 宅建士試験部",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=出る順宅建士+合格テキスト+法令上の制限+2026",
  query: "出る順宅建士 合格テキスト 3 法令上の制限・税・その他 2026年版",
  category: "宅建・法律"
},
{
  title: "うかる！ 行政書士 総合テキスト 2026年度版",
  author: "伊藤塾",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=うかる+行政書士+総合テキスト+2026年度版",
  query: "うかる！ 行政書士 総合テキスト 2026年度版",
  category: "宅建・法律"
},
{
  title: "法律の世界地図",
  author: "21世紀の法律を考える会",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=法律の世界地図",
  query: "法律の世界地図",
  category: "宅建・法律"
},
{
  title: "元法制局キャリアが教える 法律を読む技術・学ぶ技術 改訂第4版",
  author: "吉田利宏",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=法律を読む技術+学ぶ技術+改訂第4版",
  query: "元法制局キャリアが教える 法律を読む技術・学ぶ技術 改訂第4版",
  category: "宅建・法律"
},
{
  title: "憲法と法律のしくみがわかる本",
  author: "中村一樹",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=憲法と法律のしくみがわかる本",
  query: "憲法と法律のしくみがわかる本",
  category: "宅建・法律"
},
{
  title: "公務員試験 速攻の時事 令和8年度試験完全対応",
  author: "資格試験研究会",
  price: "¥1,210",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+速攻の時事+令和8年度",
  query: "公務員試験 速攻の時事 令和8年度試験完全対応",
  category: "公務員試験"
},
{
  title: "公務員試験 速攻の時事 実戦トレーニング編 令和8年度",
  author: "資格試験研究会",
  price: "¥1,210",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+速攻の時事+実戦トレーニング編+令和8年度",
  query: "公務員試験 速攻の時事 実戦トレーニング編 令和8年度",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 判断推理",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+判断推理",
  query: "公務員試験 新スーパー過去問ゼミ8 判断推理",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 数的推理",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+数的推理",
  query: "公務員試験 新スーパー過去問ゼミ8 数的推理",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 憲法",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+憲法",
  query: "公務員試験 新スーパー過去問ゼミ8 憲法",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 民法I",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+民法I",
  query: "公務員試験 新スーパー過去問ゼミ8 民法I",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 行政法",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+行政法",
  query: "公務員試験 新スーパー過去問ゼミ8 行政法",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 ミクロ経済学",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+ミクロ経済学",
  query: "公務員試験 新スーパー過去問ゼミ8 ミクロ経済学",
  category: "公務員試験"
},
{
  title: "公務員試験 新スーパー過去問ゼミ8 マクロ経済学",
  author: "資格試験研究会",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+新スーパー過去問ゼミ8+マクロ経済学",
  query: "公務員試験 新スーパー過去問ゼミ8 マクロ経済学",
  category: "公務員試験"
},
{
  title: "公務員試験 受験ジャーナル 9年度 No.2 仕事研究ブック",
  author: "受験ジャーナル編集部",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=公務員試験+受験ジャーナル+9年度+No.2+仕事研究ブック",
  query: "公務員試験 受験ジャーナル 9年度 No.2 仕事研究ブック",
  category: "公務員試験"
},
{
  title: "14歳からの哲学 考えるための教科書",
  author: "池田晶子",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=14歳からの哲学+考えるための教科書",
  query: "14歳からの哲学 考えるための教科書",
  category: "哲学・歴史"
},
{
  title: "哲学と宗教全史",
  author: "出口治明",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=哲学と宗教全史+出口治明",
  query: "哲学と宗教全史 出口治明",
  category: "哲学・歴史"
},
{
  title: "現代思想入門",
  author: "千葉雅也",
  price: "¥1,056",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=現代思想入門+千葉雅也",
  query: "現代思想入門 千葉雅也",
  category: "哲学・歴史"
},
{
  title: "哲学の謎",
  author: "野矢茂樹",
  price: "¥1,210",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=哲学の謎+野矢茂樹",
  query: "哲学の謎 野矢茂樹",
  category: "哲学・歴史"
},
{
  title: "サピエンス全史 上 文明の構造と人類の幸福",
  author: "ユヴァル・ノア・ハラリ",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=サピエンス全史+上",
  query: "サピエンス全史 上 文明の構造と人類の幸福",
  category: "哲学・歴史"
},
{
  title: "銃・病原菌・鉄 上 一万三〇〇〇年にわたる人類史の謎",
  author: "ジャレド・ダイアモンド",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=銃+病原菌+鉄+上",
  query: "銃・病原菌・鉄 上 一万三〇〇〇年にわたる人類史の謎",
  category: "哲学・歴史"
},
{
  title: "世界史 上 人類の結びつきと近代化",
  author: "ウィリアム・H・マクニール",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1455885666463-4f7c8c1d3f4b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界史+上+ウィリアム+H+マクニール",
  query: "世界史 上 ウィリアム・H・マクニール",
  category: "哲学・歴史"
},
{
  title: "詳説日本史研究",
  author: "佐藤信、五味文彦、高埜利彦、鳥海靖",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=詳説日本史研究",
  query: "詳説日本史研究",
  category: "哲学・歴史"
},
{
  title: "角川まんが学習シリーズ 日本の歴史 全16巻定番セット",
  author: "山本博文、五百旗頭薫",
  price: "¥17,600",
  image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=角川まんが学習シリーズ+日本の歴史+全16巻",
  query: "角川まんが学習シリーズ 日本の歴史 全16巻定番セット",
  category: "哲学・歴史"
},
{
  title: "歴史とは何か",
  author: "E・H・カー",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=歴史とは何か+E+H+カー",
  query: "歴史とは何か E・H・カー",
  category: "哲学・歴史"
},
{
  title: "心理学・入門 改訂版",
  author: "サトウタツヤ、渡邊芳之",
  price: "¥2,090",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=心理学・入門+改訂版",
  query: "心理学・入門 改訂版",
  category: "心理学・統計学"
},
{
  title: "はじめて出会う心理学 第3版",
  author: "長谷川寿一、東條正城、大島尚、丹野義彦、廣中直行",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめて出会う心理学+第3版",
  query: "はじめて出会う心理学 第3版",
  category: "心理学・統計学"
},
{
  title: "心理統計学の基礎―統合的理解のために",
  author: "南風原朝和",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=心理統計学の基礎+南風原朝和",
  query: "心理統計学の基礎―統合的理解のために",
  category: "心理学・統計学"
},
{
  title: "続・心理統計学の基礎―統合的理解を広げ深める",
  author: "南風原朝和",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=続・心理統計学の基礎+南風原朝和",
  query: "続・心理統計学の基礎―統合的理解を広げ深める",
  category: "心理学・統計学"
},
{
  title: "心理学研究法 第3版",
  author: "高野陽太郎、岡隆",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=心理学研究法+第3版+高野陽太郎",
  query: "心理学研究法 第3版",
  category: "心理学・統計学"
},
{
  title: "心理学論文の読み方",
  author: "都筑学",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1455885666463-9e6e3b8d1b1f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=心理学論文の読み方+都筑学",
  query: "心理学論文の読み方",
  category: "心理学・統計学"
},
{
  title: "新・涙なしの統計学",
  author: "D. ロウントリー、加納悟",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新・涙なしの統計学",
  query: "新・涙なしの統計学",
  category: "心理学・統計学"
},
{
  title: "やさしい教育心理学 第5版",
  author: "鎌原雅彦、竹綱誠一郎",
  price: "¥2,090",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やさしい教育心理学+第5版",
  query: "やさしい教育心理学 第5版",
  category: "心理学・統計学"
},
{
  title: "行動分析学",
  author: "坂上貴之、井上雅彦",
  price: "¥2,310",
  image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=行動分析学+坂上貴之+井上雅彦",
  query: "行動分析学",
  category: "心理学・統計学"
},
{
  title: "心理学の世界",
  author: "中川佳子、高橋一公",
  price: "¥2,530",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=心理学の世界+中川佳子+高橋一公",
  query: "心理学の世界",
  category: "心理学・統計学"
},
{
  title: "学びを結果に変えるアウトプット大全",
  author: "樺沢紫苑",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=学びを結果に変えるアウトプット大全",
  query: "学びを結果に変えるアウトプット大全",
  category: "勉強法"
},
{
  title: "超効率勉強法",
  author: "メンタリストDaiGo",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=超効率勉強法+メンタリストDaiGo",
  query: "超効率勉強法 メンタリストDaiGo",
  category: "勉強法"
},
{
  title: "最短の時間で最大の成果を手に入れる 超効率勉強法",
  author: "メンタリストDaiGo",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=最短の時間で最大の成果を手に入れる+超効率勉強法",
  query: "最短の時間で最大の成果を手に入れる 超効率勉強法",
  category: "勉強法"
},
{
  title: "勉強大全 ひとりひとりにフィットする1からの勉強法",
  author: "伊沢拓司",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=勉強大全+伊沢拓司",
  query: "勉強大全 ひとりひとりにフィットする1からの勉強法",
  category: "勉強法"
},
{
  title: "東大教授が教える！デキる大人の勉強脳",
  author: "池谷裕二",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=東大教授が教える+デキる大人の勉強脳",
  query: "東大教授が教える デキる大人の勉強脳",
  category: "勉強法"
},
{
  title: "一生モノの勉強法",
  author: "鎌田浩毅",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=一生モノの勉強法+鎌田浩毅",
  query: "一生モノの勉強法 鎌田浩毅",
  category: "勉強法"
},
{
  title: "独学大全 絶対に「学ぶこと」をあきらめたくない人のための55の技法",
  author: "読書猿",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=独学大全+読書猿",
  query: "独学大全 読書猿",
  category: "勉強法"
},
{
  title: "勉強が面白くなる瞬間",
  author: "パク・ソンヒョク",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=勉強が面白くなる瞬間",
  query: "勉強が面白くなる瞬間",
  category: "勉強法"
},
{
  title: "「読む力」と「地頭力」がいっきに身につく 東大読書",
  author: "西岡壱誠",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=東大読書+西岡壱誠",
  query: "東大読書 西岡壱誠",
  category: "勉強法"
},
{
  title: "東大生のノートから学ぶ超速「7回読み」勉強法",
  author: "山口真由",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1455885666463-4f7c8c1d3f4b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=7回読み勉強法+山口真由",
  query: "東大生のノートから学ぶ超速 7回読み 勉強法",
  category: "勉強法"
},
{
  title: "科学的に正しい筋トレ大全",
  author: "庵野拓将",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=科学的に正しい筋トレ大全",
  query: "科学的に正しい筋トレ大全",
  category: "筋トレ・フィットネス"
},
{
  title: "科学的に正しい筋トレ 最強の教科書",
  author: "庵野拓将",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=科学的に正しい筋トレ+最強の教科書",
  query: "科学的に正しい筋トレ 最強の教科書",
  category: "筋トレ・フィットネス"
},
{
  title: "筋トレが最強のソリューションである",
  author: "Testosterone",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=筋トレが最強のソリューションである+Testosterone",
  query: "筋トレが最強のソリューションである Testosterone",
  category: "筋トレ・フィットネス"
},
{
  title: "筋トレ 動き方・効かせ方パーフェクト事典",
  author: "荒川裕志",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=筋トレ+動き方+効かせ方パーフェクト事典",
  query: "筋トレ 動き方・効かせ方パーフェクト事典",
  category: "筋トレ・フィットネス"
},
{
  title: "自重 筋トレ100の基本",
  author: "比嘉一雄",
  price: "¥990",
  image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=自重+筋トレ100の基本+比嘉一雄",
  query: "自重 筋トレ100の基本 比嘉一雄",
  category: "筋トレ・フィットネス"
},
{
  title: "プリズナートレーニング",
  author: "ポール・ウェイド",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=プリズナートレーニング+ポール・ウェイド",
  query: "プリズナートレーニング ポール・ウェイド",
  category: "筋トレ・フィットネス"
},
{
  title: "スロトレ",
  author: "石井直方、谷本道哉",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スロトレ+石井直方+谷本道哉",
  query: "スロトレ 石井直方 谷本道哉",
  category: "筋トレ・フィットネス"
},
{
  title: "自宅でできる自重筋トレ大全",
  author: "荒川裕志",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=自宅でできる自重筋トレ大全+荒川裕志",
  query: "自宅でできる自重筋トレ大全 荒川裕志",
  category: "筋トレ・フィットネス"
},
{
  title: "筋トレの科学",
  author: "ニュートン編集部",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=筋トレの科学+ニュートン",
  query: "筋トレの科学 ニュートン",
  category: "筋トレ・フィットネス"
},
{
  title: "筋肉のしくみ・はたらきゆるっと事典",
  author: "坂井建雄",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=筋肉のしくみ・はたらきゆるっと事典",
  query: "筋肉のしくみ・はたらきゆるっと事典",
  category: "筋トレ・フィットネス"
},
{
  title: "世界一やせるスクワット",
  author: "坂詰真二",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界一やせるスクワット",
  query: "世界一やせるスクワット",
  category: "ダイエット"
},
{
  title: "やせるのはどっち？",
  author: "中野ジェームズ修一",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やせるのはどっち",
  query: "やせるのはどっち 中野ジェームズ修一",
  category: "ダイエット"
},
{
  title: "ずぼらでもラクラク！やせるのはどっち？",
  author: "中野ジェームズ修一",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ずぼらでもラクラク+やせるのはどっち",
  query: "ずぼらでもラクラク やせるのはどっち",
  category: "ダイエット"
},
{
  title: "1日1分！ゆる筋トレダイエット",
  author: "比嘉一雄",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1日1分+ゆる筋トレダイエット",
  query: "1日1分 ゆる筋トレダイエット",
  category: "ダイエット"
},
{
  title: "やせる生活",
  author: "島野雄実",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やせる生活+島野雄実",
  query: "やせる生活 島野雄実",
  category: "ダイエット"
},
{
  title: "医師が教える 食事術 最強の教科書",
  author: "牧田善二",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=医師が教える+食事術+最強の教科書",
  query: "医師が教える 食事術 最強の教科書",
  category: "ダイエット"
},
{
  title: "糖質オフのやせる作りおき",
  author: "牧田善二",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=糖質オフのやせる作りおき",
  query: "糖質オフのやせる作りおき",
  category: "ダイエット"
},
{
  title: "脂肪燃焼！「1日1食」ダイエット",
  author: "石原結實",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=脂肪燃焼+1日1食+ダイエット",
  query: "脂肪燃焼 1日1食 ダイエット",
  category: "ダイエット"
},
{
  title: "やせる！糖質オフのラクうまレシピ",
  author: "江部康二",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やせる+糖質オフ+ラクうまレシピ",
  query: "やせる 糖質オフ ラクうまレシピ",
  category: "ダイエット"
},
{
  title: "食べても太らない魔法のような食べ方",
  author: "菊池真由子",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=食べても太らない魔法のような食べ方",
  query: "食べても太らない魔法のような食べ方",
  category: "ダイエット"
},
{
  title: "スタンフォード式 最高の睡眠",
  author: "西野精治",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1515894203077-9cd36032142f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スタンフォード式+最高の睡眠+西野精治",
  query: "スタンフォード式 最高の睡眠",
  category: "睡眠・メンタル"
},
{
  title: "今さら聞けない 睡眠の超基本",
  author: "柳沢正史",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=今さら聞けない+睡眠の超基本+柳沢正史",
  query: "今さら聞けない 睡眠の超基本",
  category: "睡眠・メンタル"
},
{
  title: "眠っている間に 体の中で何が起こっているのか",
  author: "西多昌規",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=眠っている間に+体の中で何が起こっているのか",
  query: "眠っている間に 体の中で何が起こっているのか",
  category: "睡眠・メンタル"
},
{
  title: "精神科医が教える ストレスフリー超大全",
  author: "樺沢紫苑",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=精神科医が教える+ストレスフリー超大全",
  query: "精神科医が教える ストレスフリー超大全",
  category: "睡眠・メンタル"
},
{
  title: "13歳からのメンタルヘルスの教科書",
  author: "カーラ・ビーン",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=13歳からのメンタルヘルスの教科書",
  query: "13歳からのメンタルヘルスの教科書",
  category: "睡眠・メンタル"
},
{
  title: "最先端科学×マインドフルネスで実現する 最強のメンタル",
  author: "山口創",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=最先端科学+マインドフルネス+最強のメンタル",
  query: "最先端科学×マインドフルネスで実現する 最強のメンタル",
  category: "睡眠・メンタル"
},
{
  title: "メンタル養生",
  author: "すきさん",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=メンタル養生+すきさん",
  query: "メンタル養生",
  category: "睡眠・メンタル"
},
{
  title: "脳と身体を最適化せよ！",
  author: "ポール・J・ザック",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=脳と身体を最適化せよ",
  query: "脳と身体を最適化せよ",
  category: "睡眠・メンタル"
},
{
  title: "OUTLIVE（アウトリブ） 人はどこまで生きられるのか",
  author: "ピーター・アッティア、ビル・ギフォード",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=OUTLIVE+アウトリブ+ピーター・アッティア",
  query: "OUTLIVE（アウトリブ） 人はどこまで生きられるのか",
  category: "睡眠・メンタル"
},
{
  title: "うつにならない言葉の使い方",
  author: "倉成央",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=うつにならない言葉の使い方+倉成央",
  query: "うつにならない言葉の使い方",
  category: "睡眠・メンタル"
},
{
  title: "料理のきほん練習帳",
  author: "小田真規子",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=料理のきほん練習帳+小田真規子",
  query: "料理のきほん練習帳 小田真規子",
  category: "料理・レシピ"
},
{
  title: "世界一美味しい手抜きごはん",
  author: "はらぺこグリズリー",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=世界一美味しい手抜きごはん",
  query: "世界一美味しい手抜きごはん",
  category: "料理・レシピ"
},
{
  title: "syunkonカフェごはん",
  author: "山本ゆり",
  price: "¥1,000",
  image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=syunkonカフェごはん+山本ゆり",
  query: "syunkonカフェごはん 山本ゆり",
  category: "料理・レシピ"
},
{
  title: "りなてぃの一週間3500円献立",
  author: "RINATY",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=りなてぃの一週間3500円献立",
  query: "りなてぃの一週間3500円献立",
  category: "料理・レシピ"
},
{
  title: "つくおき",
  author: "nozomi",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=つくおき+nozomi",
  query: "つくおき nozomi",
  category: "料理・レシピ"
},
{
  title: "作りおきのやせるおかず",
  author: "柳澤英子",
  price: "¥1,320",
  image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=作りおきのやせるおかず+柳澤英子",
  query: "作りおきのやせるおかず 柳澤英子",
  category: "料理・レシピ"
},
{
  title: "料理の教科書",
  author: "川上文代",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=料理の教科書+川上文代",
  query: "料理の教科書 川上文代",
  category: "料理・レシピ"
},
{
  title: "一生使える料理の基本",
  author: "小田真規子",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=一生使える料理の基本",
  query: "一生使える料理の基本",
  category: "料理・レシピ"
},
{
  title: "料理の基本がわかる本",
  author: "主婦の友社",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=料理の基本がわかる本",
  query: "料理の基本がわかる本",
  category: "料理・レシピ"
},
{
  title: "家政婦makoの魔法の時短テクでラクラク作りおき",
  author: "mako",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=家政婦mako+魔法の時短テク",
  query: "家政婦mako 魔法の時短テク",
  category: "料理・レシピ"
},
{
  title: "まっぷる 東京'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,375",
  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+東京+27",
  query: "まっぷる 東京'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 東京観光'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,375",
  image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+東京観光+27",
  query: "まっぷる 東京観光'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 京都社寺めぐり",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+京都社寺めぐり",
  query: "まっぷる 京都社寺めぐり",
  category: "旅行ガイド"
},
{
  title: "まっぷる 大阪観光'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,375",
  image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+大阪観光+27",
  query: "まっぷる 大阪観光'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 熊本・阿蘇 黒川温泉・天草'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,375",
  image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+熊本+阿蘇+黒川温泉+天草+27",
  query: "まっぷる 熊本・阿蘇 黒川温泉・天草'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 台湾'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+台湾+27",
  query: "まっぷる 台湾'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる ソウル'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1538485399081-7c897f2b7d8a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+ソウル+27",
  query: "まっぷる ソウル'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 河口湖・山中湖 富士山'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,375",
  image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+河口湖+山中湖+富士山+27",
  query: "まっぷる 河口湖・山中湖 富士山'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 山陰 出雲・松江・鳥取・萩'27",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,375",
  image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+山陰+出雲+松江+鳥取+萩+27",
  query: "まっぷる 山陰 出雲・松江・鳥取・萩'27",
  category: "旅行ガイド"
},
{
  title: "まっぷる 香港 マカオ",
  author: "昭文社 旅行ガイドブック 編集部",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まっぷる+香港+マカオ",
  query: "まっぷる 香港 マカオ",
  category: "旅行ガイド"
},
{
  title: "カメラはじめます！",
  author: "こいしゆうか",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=カメラはじめます+こいしゆうか",
  query: "カメラはじめます こいしゆうか",
  category: "カメラ・写真"
},
{
  title: "いちばんやさしい新しい写真の教科書",
  author: "やまぐち千予",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=いちばんやさしい新しい写真の教科書",
  query: "いちばんやさしい新しい写真の教科書",
  category: "カメラ・写真"
},
{
  title: "写真がもっと上手くなる デジタル一眼 撮影テクニック事典",
  author: "上田晃司",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=写真がもっと上手くなる+デジタル一眼+撮影テクニック事典",
  query: "写真がもっと上手くなる デジタル一眼 撮影テクニック事典",
  category: "カメラ・写真"
},
{
  title: "写真の教科書",
  author: "岡嶋和幸",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=写真の教科書+岡嶋和幸",
  query: "写真の教科書 岡嶋和幸",
  category: "カメラ・写真"
},
{
  title: "ナショナルジオグラフィック プロの撮り方 構図を極める",
  author: "リチャード・ガーバー",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ナショナルジオグラフィック+プロの撮り方+構図を極める",
  query: "ナショナルジオグラフィック プロの撮り方 構図を極める",
  category: "カメラ・写真"
},
{
  title: "写真の構図・撮り方の教科書",
  author: "河野鉄平",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=写真の構図+撮り方の教科書",
  query: "写真の構図 撮り方の教科書",
  category: "カメラ・写真"
},
{
  title: "すずちゃんの理解して学ぶカメラとレンズ",
  author: "鈴木知子",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=すずちゃんの理解して学ぶカメラとレンズ",
  query: "すずちゃんの理解して学ぶカメラとレンズ",
  category: "カメラ・写真"
},
{
  title: "カメラのきほん練習帳",
  author: "大村祐里子",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=カメラのきほん練習帳",
  query: "カメラのきほん練習帳",
  category: "カメラ・写真"
},
{
  title: "写真が上手くなる100のルール",
  author: "成美堂出版編集部",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=写真が上手くなる100のルール",
  query: "写真が上手くなる100のルール",
  category: "カメラ・写真"
},
{
  title: "もっと撮りたくなる 写真の教科書",
  author: "鈴木心",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=もっと撮りたくなる+写真の教科書",
  query: "もっと撮りたくなる 写真の教科書",
  category: "カメラ・写真"
},
{
  title: "iPhone芸人かじがや卓哉のスゴいiPhone 17 超絶便利なテクニック140",
  author: "かじがや卓哉",
  price: "¥1,628",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=iPhone芸人かじがや卓哉のスゴいiPhone+17",
  query: "iPhone芸人かじがや卓哉のスゴいiPhone 17 超絶便利なテクニック140",
  category: "ガジェット・映画"
},
{
  title: "iPhone芸人かじがや卓哉のスゴいiPhone 16 超絶便利なテクニック140",
  author: "かじがや卓哉",
  price: "¥1,628",
  image: "https://images.unsplash.com/photo-1592286927505-2fd9f2d6e5a4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=iPhone芸人かじがや卓哉のスゴいiPhone+16",
  query: "iPhone芸人かじがや卓哉のスゴいiPhone 16 超絶便利なテクニック140",
  category: "ガジェット・映画"
},
{
  title: "スマホ脳",
  author: "アンデシュ・ハンセン",
  price: "¥1,078",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマホ脳+アンデシュ・ハンセン",
  query: "スマホ脳 アンデシュ・ハンセン",
  category: "ガジェット・映画"
},
{
  title: "14歳からの映画ガイド 世界の見え方が変わる100本",
  author: "河出書房新社",
  price: "¥1,562",
  image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=14歳からの映画ガイド+世界の見え方が変わる100本",
  query: "14歳からの映画ガイド 世界の見え方が変わる100本",
  category: "ガジェット・映画"
},
{
  title: "映画史を学ぶクリティカル・ワーズ 新装増補版",
  author: "村山匡一郎",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=映画史を学ぶクリティカル・ワーズ+新装増補版",
  query: "映画史を学ぶクリティカル・ワーズ 新装増補版",
  category: "ガジェット・映画"
},
{
  title: "日本映画史110年",
  author: "四方田犬彦",
  price: "¥1,100",
  image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=日本映画史110年+四方田犬彦",
  query: "日本映画史110年 四方田犬彦",
  category: "ガジェット・映画"
},
{
  title: "〈映画の見方〉がわかる本 ブレードランナーの未来世紀",
  author: "町山智浩",
  price: "¥737",
  image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=映画の見方がわかる本+ブレードランナーの未来世紀",
  query: "〈映画の見方〉がわかる本 ブレードランナーの未来世紀",
  category: "ガジェット・映画"
},
{
  title: "映画館と観客の文化史",
  author: "加藤幹郎",
  price: "¥990",
  image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=映画館と観客の文化史+加藤幹郎",
  query: "映画館と観客の文化史 加藤幹郎",
  category: "ガジェット・映画"
},
{
  title: "増補改訂版 Film Analysis 映画分析入門",
  author: "マイケル・ライアン、メリッサ・レノス",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Film+Analysis+映画分析入門",
  query: "増補改訂版 Film Analysis 映画分析入門",
  category: "ガジェット・映画"
},
{
  title: "映画の観方 映画通の心得",
  author: "一条真也",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=映画の観方+映画通の心得+一条真也",
  query: "映画の観方 映画通の心得",
  category: "ガジェット・映画"
},
{
  title: "人は話し方が9割",
  author: "永松茂久",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=人は話し方が9割",
  query: "人は話し方が9割",
  category: "人間関係・恋愛"
},
{
  title: "嫌われる勇気",
  author: "岸見一郎、古賀史健",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=嫌われる勇気",
  query: "嫌われる勇気",
  category: "人間関係・恋愛"
},
{
  title: "幸せになる勇気",
  author: "岸見一郎、古賀史健",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=幸せになる勇気",
  query: "幸せになる勇気",
  category: "人間関係・恋愛"
},
{
  title: "人を動かす",
  author: "D・カーネギー",
  price: "¥770",
  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=人を動かす+D・カーネギー",
  query: "人を動かす D・カーネギー",
  category: "人間関係・恋愛"
},
{
  title: "伝え方が9割",
  author: "佐々木圭一",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=伝え方が9割",
  query: "伝え方が9割",
  category: "人間関係・恋愛"
},
{
  title: "超雑談力",
  author: "五百田達成",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=超雑談力",
  query: "超雑談力",
  category: "人間関係・恋愛"
},
{
  title: "会話がとぎれない！話し方66のルール",
  author: "野口敏",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=会話がとぎれない+話し方66のルール",
  query: "会話がとぎれない 話し方66のルール",
  category: "人間関係・恋愛"
},
{
  title: "恋愛の教科書",
  author: "恋愛心理学研究会",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=恋愛の教科書",
  query: "恋愛の教科書",
  category: "人間関係・恋愛"
},
{
  title: "LOVE理論",
  author: "水野敬也",
  price: "¥770",
  image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=LOVE理論+水野敬也",
  query: "LOVE理論 水野敬也",
  category: "人間関係・恋愛"
},
{
  title: "モテるために必要なことはすべてダーウィンが教えてくれた",
  author: "ジェイソン・トレッツ",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=モテるために必要なことはすべてダーウィンが教えてくれた",
  query: "モテるために必要なことはすべてダーウィンが教えてくれた",
  category: "人間関係・恋愛"
},
{
  title: "スマート農業の大研究 ICT・ロボット技術でどう変わる？",
  author: "海津裕（監修）",
  price: "¥3,850",
  image: "https://images.unsplash.com/photo-1523742812427-1d7c4b1b8b8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマート農業の大研究+ICT+ロボット技術",
  query: "スマート農業の大研究 ICT・ロボット技術でどう変わる？",
  category: "スマート農業"
},
{
  title: "図解でよくわかる スマート農業のきほん",
  author: "野口伸（監修）",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解でよくわかる+スマート農業のきほん",
  query: "図解でよくわかる スマート農業のきほん",
  category: "スマート農業"
},
{
  title: "スマート農業",
  author: "農業・食品産業技術総合研究機構（編著）",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマート農業+農業・食品産業技術総合研究機構",
  query: "スマート農業 農業・食品産業技術総合研究機構",
  category: "スマート農業"
},
{
  title: "スマート農業",
  author: "中野明正",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマート農業+中野明正",
  query: "スマート農業 中野明正",
  category: "スマート農業"
},
{
  title: "図解よくわかるスマート農業 デジタル化が実現する儲かる農業",
  author: "三輪泰史（編著）",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解よくわかるスマート農業+デジタル化が実現する儲かる農業",
  query: "図解よくわかるスマート農業 デジタル化が実現する儲かる農業",
  category: "スマート農業"
},
{
  title: "スマート農業 ～自動走行、ロボット技術、ICT・AIの利活用からデータ連携まで～",
  author: "神成淳司（監修）",
  price: "¥49,500",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマート農業+自動走行+ロボット技術+ICT+AI",
  query: "スマート農業 自動走行 ロボット技術 ICT AI",
  category: "スマート農業"
},
{
  title: "スマート農業 ―農業・農村のイノベーションとサスティナビリティ",
  author: "農業情報学会（編）",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマート農業+農業情報学会+イノベーション",
  query: "スマート農業 農業情報学会 農業・農村のイノベーションとサスティナビリティ",
  category: "スマート農業"
},
{
  title: "スマート農業のすすめ ～次世代農業人「スマートファーマー」の心得～",
  author: "神成淳司",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スマート農業のすすめ+スマートファーマー",
  query: "スマート農業のすすめ 次世代農業人 スマートファーマー",
  category: "スマート農業"
},
{
  title: "2030年のフード＆アグリテック ―農と食の未来を変える世界の先進ビジネス70―",
  author: "井熊均、三輪泰史",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=2030年のフード＆アグリテック",
  query: "2030年のフード＆アグリテック 農と食の未来を変える世界の先進ビジネス70",
  category: "スマート農業"
},
{
  title: "新スマート農業 ―進化する農業情報利用",
  author: "農業情報学会（編）",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新スマート農業+進化する農業情報利用",
  query: "新スマート農業 進化する農業情報利用",
  category: "スマート農業"
},
{
  title: "やさいの時間",
  author: "NHK出版",
  price: "¥1,210",
  image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やさいの時間+NHK出版",
  query: "やさいの時間 NHK出版",
  category: "作物栽培"
},
{
  title: "野菜づくり大百科",
  author: "藤田智",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=野菜づくり大百科+藤田智",
  query: "野菜づくり大百科 藤田智",
  category: "作物栽培"
},
{
  title: "新・野菜の作り方",
  author: "藤田智",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新+野菜の作り方+藤田智",
  query: "新・野菜の作り方 藤田智",
  category: "作物栽培"
},
{
  title: "家庭菜園の教科書",
  author: "川城英夫",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=家庭菜園の教科書+川城英夫",
  query: "家庭菜園の教科書 川城英夫",
  category: "作物栽培"
},
{
  title: "はじめての野菜づくり",
  author: "板木利隆",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめての野菜づくり+板木利隆",
  query: "はじめての野菜づくり 板木利隆",
  category: "作物栽培"
},
{
  title: "有機・無農薬でできる野菜づくり",
  author: "野口勲",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1592144661255-1f0c0b6d2f3e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機+無農薬でできる野菜づくり",
  query: "有機 無農薬でできる野菜づくり",
  category: "作物栽培"
},
{
  title: "プランターでかんたん！野菜づくり",
  author: "深町貴子",
  price: "¥1,430",
  image: "https://images.unsplash.com/photo-1599685315640-7e0a3f1b5a2d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=プランターでかんたん+野菜づくり",
  query: "プランターでかんたん 野菜づくり",
  category: "作物栽培"
},
{
  title: "コンテナ菜園の教科書",
  author: "竹内孝功",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=コンテナ菜園の教科書+竹内孝功",
  query: "コンテナ菜園の教科書 竹内孝功",
  category: "作物栽培"
},
{
  title: "野菜の病気と害虫対策",
  author: "草間祐輔",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=野菜の病気と害虫対策",
  query: "野菜の病気と害虫対策",
  category: "作物栽培"
},
{
  title: "自然菜園のすすめ",
  author: "竹内孝功",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=自然菜園のすすめ+竹内孝功",
  query: "自然菜園のすすめ 竹内孝功",
  category: "作物栽培"
},
{
  title: "みんなの有機農業技術大事典",
  author: "農文協（編）",
  price: "¥44,000",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=みんなの有機農業技術大事典",
  query: "みんなの有機農業技術大事典",
  category: "有機農業"
},
{
  title: "有機農業ハンドブック",
  author: "日本有機農業研究会（編）",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機農業ハンドブック+日本有機農業研究会",
  query: "有機農業ハンドブック",
  category: "有機農業"
},
{
  title: "有機栽培の基礎と実際",
  author: "小祝政明",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機栽培の基礎と実際+小祝政明",
  query: "有機栽培の基礎と実際",
  category: "有機農業"
},
{
  title: "有機栽培の野菜つくり",
  author: "小祝政明",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機栽培の野菜つくり+小祝政明",
  query: "有機栽培の野菜つくり",
  category: "有機農業"
},
{
  title: "有機栽培の病気と害虫",
  author: "小祝政明",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機栽培の病気と害虫+小祝政明",
  query: "有機栽培の病気と害虫",
  category: "有機農業"
},
{
  title: "有機栽培の肥料と堆肥",
  author: "小祝政明",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機栽培の肥料と堆肥+小祝政明",
  query: "有機栽培の肥料と堆肥",
  category: "有機農業"
},
{
  title: "今さら聞けない 鶏糞を使いこなす 有機農業の技術",
  author: "農文協（編）",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=今さら聞けない+鶏糞を使いこなす+有機農業の技術",
  query: "今さら聞けない 鶏糞を使いこなす 有機農業の技術",
  category: "有機農業"
},
{
  title: "シン・オーガニック",
  author: "吉田太郎",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=シン・オーガニック+吉田太郎",
  query: "シン・オーガニック",
  category: "有機農業"
},
{
  title: "農家が教える 自然農法",
  author: "農文協（編）",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農家が教える+自然農法+農文協",
  query: "農家が教える 自然農法",
  category: "有機農業"
},
{
  title: "有機農業でつくる米づくり",
  author: "農文協（編）",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1536055612200-22daaa7d5e2a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=有機農業でつくる+米づくり+農文協",
  query: "有機農業でつくる米づくり",
  category: "有機農業"
},
{
  title: "畜産の教科書",
  author: "家畜改良センター",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=畜産の教科書",
  query: "畜産の教科書",
  category: "畜産・酪農"
},
{
  title: "酪農の教科書",
  author: "中央畜産会",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=酪農の教科書",
  query: "酪農の教科書",
  category: "畜産・酪農"
},
{
  title: "家畜飼育の基礎",
  author: "日本家畜飼育学会",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=家畜飼育の基礎",
  query: "家畜飼育の基礎",
  category: "畜産・酪農"
},
{
  title: "新編 畜産ハンドブック",
  author: "扇元敬司",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1545468800-85cc9bc6ba79?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新編+畜産ハンドブック",
  query: "新編 畜産ハンドブック",
  category: "畜産・酪農"
},
{
  title: "家畜飼養学",
  author: "唐澤豊",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=家畜飼養学",
  query: "家畜飼養学",
  category: "畜産・酪農"
},
{
  title: "牛の飼い方・育て方",
  author: "農文協",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=牛の飼い方+育て方",
  query: "牛の飼い方 育て方",
  category: "畜産・酪農"
},
{
  title: "養豚の教科書",
  author: "日本養豚協会",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=養豚の教科書",
  query: "養豚の教科書",
  category: "畜産・酪農"
},
{
  title: "養鶏の教科書",
  author: "日本養鶏協会",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=養鶏の教科書",
  query: "養鶏の教科書",
  category: "畜産・酪農"
},
{
  title: "畜産物の生産と流通",
  author: "農林統計協会",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=畜産物の生産と流通",
  query: "畜産物の生産と流通",
  category: "畜産・酪農"
},
{
  title: "これからの酪農経営",
  author: "農文協",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=これからの酪農経営",
  query: "これからの酪農経営",
  category: "畜産・酪農"
},
{
title: "小さい林業で稼ぐコツ―軽トラとチェンソーがあればできる",
author: "大内正伸",
price: "¥1,980",
image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=小さい林業で稼ぐコツ",
query: "小さい林業で稼ぐコツ 大内正伸",
category: "林業"
},
{
title: "最新版 図解 知識ゼロからの林業入門",
author: "関岡東生",
price: "¥1,980",
image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=図解+知識ゼロからの林業入門",
query: "最新版 図解 知識ゼロからの林業入門",
category: "林業"
},
{
title: "森ではたらく！27人の27の仕事",
author: "古川大輔・山崎大祐",
price: "¥1,760",
image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=森ではたらく+27人の27の仕事",
query: "森ではたらく 27人の27の仕事",
category: "林業"
},
{
title: "「なぜ3割間伐か？」林業の疑問に答える本",
author: "藤森隆郎",
price: "¥1,650",
image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=なぜ3割間伐か+林業の疑問に答える本",
query: "なぜ3割間伐か 林業の疑問に答える本",
category: "林業"
},
{
title: "森林インストラクター入門",
author: "全国森林レクリエーション協会",
price: "¥2,420",
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=森林インストラクター入門",
query: "森林インストラクター入門",
category: "林業"
},
{
title: "日本林業を立て直す―速水林業の挑戦",
author: "速水亨",
price: "¥1,760",
image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=日本林業を立て直す+速水林業の挑戦",
query: "日本林業を立て直す 速水林業の挑戦",
category: "林業"
},
{
title: "本当はすごい森の話―林業家からのメッセージ",
author: "田中惣次",
price: "¥1,540",
image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=本当はすごい森の話+林業家からのメッセージ",
query: "本当はすごい森の話 林業家からのメッセージ",
category: "林業"
},
{
title: "林政学講義",
author: "土屋俊幸",
price: "¥3,080",
image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=林政学講義",
query: "林政学講義 土屋俊幸",
category: "林業"
},
{
title: "林業がつくる日本の森林",
author: "藤森隆郎",
price: "¥2,640",
image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=林業がつくる日本の森林",
query: "林業がつくる日本の森林 藤森隆郎",
category: "林業"
},
{
title: "森林・林業白書 令和7年版",
author: "林野庁",
price: "¥2,200",
image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
url: "https://www.amazon.co.jp/s?k=森林・林業白書+令和7年版",
query: "森林 林業白書 令和7年版 林野庁",
category: "林業"
},
{
  title: "漁師になるには",
  author: "農林水産省",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=漁師になるには",
  query: "漁師になるには",
  category: "水産業"
},
{
  title: "水産業のしくみ",
  author: "中居裕恭",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=水産業のしくみ",
  query: "水産業のしくみ",
  category: "水産業"
},
{
  title: "魚の教科書",
  author: "上田勝彦",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=魚の教科書+上田勝彦",
  query: "魚の教科書 上田勝彦",
  category: "水産業"
},
{
  title: "魚の目利き食べ方図鑑",
  author: "講談社",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=魚の目利き食べ方図鑑",
  query: "魚の目利き食べ方図鑑",
  category: "水産業"
},
{
  title: "水産資源管理学",
  author: "牧野光琢",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=水産資源管理学",
  query: "水産資源管理学",
  category: "水産業"
},
{
  title: "水産学シリーズ 水産資源の管理と持続的利用",
  author: "日本水産学会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=水産資源の管理と持続的利用",
  query: "水産資源の管理と持続的利用",
  category: "水産業"
},
{
  title: "魚類養殖の基礎",
  author: "熊井英水",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=魚類養殖の基礎",
  query: "魚類養殖の基礎",
  category: "水産業"
},
{
  title: "養殖の教科書",
  author: "全国養殖技術協会",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=養殖の教科書",
  query: "養殖の教科書",
  category: "水産業"
},
{
  title: "漁業の歴史",
  author: "田辺悟",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=漁業の歴史+田辺悟",
  query: "漁業の歴史 田辺悟",
  category: "水産業"
},
{
  title: "水産業の未来",
  author: "勝川俊雄",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=水産業の未来+勝川俊雄",
  query: "水産業の未来 勝川俊雄",
  category: "水産業"
},
{
  title: "基礎から学ぶ農業経営論",
  author: "大泉一貫・津谷好人・木下幸雄ほか",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=基礎から学ぶ農業経営論",
  query: "基礎から学ぶ農業経営論",
  category: "農業経営"
},
{
  title: "儲かる農業経営",
  author: "農業経営関連",
  price: "¥1,815",
  image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=儲かる農業経営",
  query: "儲かる農業経営",
  category: "農業経営"
},
{
  title: "絶対にギブアップしたくない人のための 成功する農業",
  author: "岩佐大輝",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=絶対にギブアップしたくない人のための+成功する農業",
  query: "絶対にギブアップしたくない人のための 成功する農業",
  category: "農業経営"
},
{
  title: "農で起業する！",
  author: "農業経営関連",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1523742815096-2b0d4b2c8d10?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農で起業する",
  query: "農で起業する",
  category: "農業経営"
},
{
  title: "直販・通販で稼ぐ！年商1億円農家",
  author: "農業経営関連",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=直販+通販で稼ぐ+年商1億円農家",
  query: "直販 通販で稼ぐ 年商1億円農家",
  category: "農業経営"
},
{
  title: "最強の農起業！",
  author: "農業経営関連",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1464229034936-7a0c2c0f7f3a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=最強の農起業",
  query: "最強の農起業",
  category: "農業経営"
},
{
  title: "小さい農業で稼ぐコツ",
  author: "西田栄喜",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0a2d2f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=小さい農業で稼ぐコツ+西田栄喜",
  query: "小さい農業で稼ぐコツ 西田栄喜",
  category: "農業経営"
},
{
  title: "農業のマーケティング教科書",
  author: "岩崎邦彦",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業のマーケティング教科書+岩崎邦彦",
  query: "農業のマーケティング教科書 岩崎邦彦",
  category: "農業経営"
},
{
  title: "ゼロからはじめる 稼ぐ農業 必ず知っておきたいこと100",
  author: "農業経営関連",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1595000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ゼロからはじめる+稼ぐ農業+必ず知っておきたいこと100",
  query: "ゼロからはじめる 稼ぐ農業 必ず知っておきたいこと100",
  category: "農業経営"
},
{
  title: "アグリビジネス進化論",
  author: "農業経営関連",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1464228250695-9f0d5a7e3c9d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=アグリビジネス進化論",
  query: "アグリビジネス進化論",
  category: "農業経営"
},
{
  title: "農業機械の基礎知識",
  author: "農業機械学会",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械の基礎知識",
  query: "農業機械の基礎知識",
  category: "農業機械"
},
{
  title: "農業機械入門",
  author: "農業機械学会",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1592982537447-6f3c4b8d5c7d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械入門",
  query: "農業機械入門",
  category: "農業機械"
},
{
  title: "トラクタの基礎と整備",
  author: "農業機械学会",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=トラクタの基礎と整備",
  query: "トラクタの基礎と整備",
  category: "農業機械"
},
{
  title: "農業機械整備技能テキスト",
  author: "全国農業機械整備技能士会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1598514982901-ae627f6f0f3b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械整備技能テキスト",
  query: "農業機械整備技能テキスト",
  category: "農業機械"
},
{
  title: "農業機械の選び方・使い方",
  author: "農文協",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械の選び方使い方",
  query: "農業機械の選び方 使い方",
  category: "農業機械"
},
{
  title: "農業機械化の基礎",
  author: "農林水産省",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械化の基礎",
  query: "農業機械化の基礎",
  category: "農業機械"
},
{
  title: "コンバインの構造と整備",
  author: "農業機械学会",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=コンバインの構造と整備",
  query: "コンバインの構造と整備",
  category: "農業機械"
},
{
  title: "農業機械メンテナンス教本",
  author: "農業機械整備技術研究会",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1592982537447-6f3c4b8d5c7d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械メンテナンス教本",
  query: "農業機械メンテナンス教本",
  category: "農業機械"
},
{
  title: "農業機械とスマート農業",
  author: "農研機構",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械とスマート農業",
  query: "農業機械とスマート農業",
  category: "農業機械"
},
{
  title: "農業機械用語事典",
  author: "農業機械学会",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1523742818550-6a66f7a1a0f8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=農業機械用語事典",
  query: "農業機械用語事典",
  category: "農業機械"
},
{
  title: "ようこそ建築学科へ",
  author: "松田達",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ようこそ建築学科へ+松田達",
  query: "ようこそ建築学科へ 松田達",
  category: "建築設計"
},
{
  title: "新米建築士の教科書",
  author: "飯塚豊",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新米建築士の教科書+飯塚豊",
  query: "新米建築士の教科書 飯塚豊",
  category: "建築設計"
},
{
  title: "間取りの方程式",
  author: "飯塚豊",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=間取りの方程式+飯塚豊",
  query: "間取りの方程式 飯塚豊",
  category: "建築設計"
},
{
  title: "住まいの解剖図鑑",
  author: "増田奏",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=住まいの解剖図鑑+増田奏",
  query: "住まいの解剖図鑑 増田奏",
  category: "建築設計"
},
{
  title: "エスキスって何？",
  author: "佐々木勝敏",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=エスキスって何",
  query: "エスキスって何",
  category: "建築設計"
},
{
  title: "建築家になりたい君へ",
  author: "隈研吾",
  price: "¥1,540",
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築家になりたい君へ+隈研吾",
  query: "建築家になりたい君へ 隈研吾",
  category: "建築設計"
},
{
  title: "一生使えるサイズ事典 住宅のリアル寸法 完全版",
  author: "エクスナレッジ",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=一生使えるサイズ事典+住宅のリアル寸法+完全版",
  query: "一生使えるサイズ事典 住宅のリアル寸法 完全版",
  category: "建築設計"
},
{
  title: "コンパクト建築設計資料集成",
  author: "日本建築学会",
  price: "¥5,500",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=コンパクト建築設計資料集成",
  query: "コンパクト建築設計資料集成",
  category: "建築設計"
},
{
  title: "いちばんわかる建築製図入門 改訂版",
  author: "櫻井良明",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=いちばんわかる建築製図入門+改訂版",
  query: "いちばんわかる建築製図入門 改訂版",
  category: "建築設計"
},
{
  title: "改訂版 建築製図 基本の基本",
  author: "櫻井良明",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=改訂版+建築製図+基本の基本",
  query: "改訂版 建築製図 基本の基本",
  category: "建築設計"
},
{
  title: "建築構造のしくみ",
  author: "建築構造関連",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築構造のしくみ",
  query: "建築構造のしくみ",
  category: "構造・耐震"
},
{
  title: "建築構造設計基準",
  author: "国土交通省",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築構造設計基準",
  query: "建築構造設計基準",
  category: "構造・耐震"
},
{
  title: "建築物の構造関係技術基準解説書",
  author: "国土交通省国土技術政策総合研究所ほか",
  price: "¥8,800",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築物の構造関係技術基準解説書",
  query: "建築物の構造関係技術基準解説書",
  category: "構造・耐震"
},
{
  title: "建築構造用教材",
  author: "日本建築学会",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築構造用教材+日本建築学会",
  query: "建築構造用教材 日本建築学会",
  category: "構造・耐震"
},
{
  title: "鉄筋コンクリート構造計算規準・同解説",
  author: "日本建築学会",
  price: "¥8,800",
  image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=鉄筋コンクリート構造計算規準+同解説",
  query: "鉄筋コンクリート構造計算規準 同解説",
  category: "構造・耐震"
},
{
  title: "鋼構造設計規準",
  author: "日本建築学会",
  price: "¥5,500",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=鋼構造設計規準+日本建築学会",
  query: "鋼構造設計規準 日本建築学会",
  category: "構造・耐震"
},
{
  title: "木造住宅の耐震診断と補強方法",
  author: "日本建築防災協会",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=木造住宅の耐震診断と補強方法",
  query: "木造住宅の耐震診断と補強方法",
  category: "構造・耐震"
},
{
  title: "建築物の耐震改修の技術資料",
  author: "日本建築防災協会",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築物+耐震改修+技術資料",
  query: "建築物 耐震改修 技術資料",
  category: "構造・耐震"
},
{
  title: "建築耐震設計における保有耐力と変形性能",
  author: "日本建築学会",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1590644365607-1c5a7c736b3c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築耐震設計における保有耐力と変形性能",
  query: "建築耐震設計における保有耐力と変形性能",
  category: "構造・耐震"
},
{
  title: "建築物の構造計算入門",
  author: "建築構造関連",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築物の構造計算入門",
  query: "建築物の構造計算入門",
  category: "構造・耐震"
},
{
  title: "2026年度版 わかって合格る1級建築施工管理技士 一次検定8年過去問題集",
  author: "TAC出版",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=2026年度版+わかって合格る1級建築施工管理技士+一次検定8年過去問題集",
  query: "2026年度版 わかって合格る1級建築施工管理技士 一次検定8年過去問題集",
  category: "施工管理"
},
{
  title: "この1冊で合格！建築系YouTuberひげごろーの2級建築施工管理技士 第1次 テキスト＆問題集",
  author: "ひげごろー",
  price: "¥2,574",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ひげごろー+2級建築施工管理技士+第1次+テキスト+問題集",
  query: "ひげごろー 2級建築施工管理技士 第1次 テキスト 問題集",
  category: "施工管理"
},
{
  title: "1級建築施工管理第一次検定問題解説集 2026年版",
  author: "地域開発研究所",
  price: "¥4,510",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1級建築施工管理第一次検定問題解説集+2026年版",
  query: "1級建築施工管理第一次検定問題解説集 2026年版",
  category: "施工管理"
},
{
  title: "わかって合格る1級土木施工管理技士 二次検定テキスト＆12年過去問題集 2026年度版",
  author: "TAC出版",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=わかって合格る1級土木施工管理技士+二次検定+2026年度版",
  query: "わかって合格る1級土木施工管理技士 二次検定 テキスト 12年過去問題集 2026年度版",
  category: "施工管理"
},
{
  title: "1級管工事施工管理第一次検定問題解説集 2026年版",
  author: "地域開発研究所",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1級管工事施工管理第一次検定問題解説集+2026年版",
  query: "1級管工事施工管理第一次検定問題解説集 2026年版",
  category: "施工管理"
},
{
  title: "土木施工管理技術テキスト 土木一般編 改訂第3版",
  author: "地域開発研究所",
  price: "¥1,595",
  image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=土木施工管理技術テキスト+土木一般編+改訂第3版",
  query: "土木施工管理技術テキスト 土木一般編 改訂第3版",
  category: "施工管理"
},
{
  title: "1級土木施工管理技士 第一次検定 12年過去問題集 2026年度版",
  author: "TAC出版",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1級土木施工管理技士+第一次検定+12年過去問題集+2026",
  query: "1級土木施工管理技士 第一次検定 12年過去問題集 2026年度版",
  category: "施工管理"
},
{
  title: "2級建築施工管理技士 第一次検定 テキスト＆問題集",
  author: "ひげごろー",
  price: "¥2,574",
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=2級建築施工管理技士+ひげごろー+テキスト+問題集",
  query: "2級建築施工管理技士 ひげごろー テキスト 問題集",
  category: "施工管理"
},
{
  title: "1級電気工事施工管理技士 第一次検定 問題解説集 2026年版",
  author: "地域開発研究所",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1級電気工事施工管理技士+第一次検定+問題解説集+2026年版",
  query: "1級電気工事施工管理技士 第一次検定 問題解説集 2026年版",
  category: "施工管理"
},
{
  title: "建築施工管理技術テキスト",
  author: "地域開発研究所",
  price: "¥6,600",
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築施工管理技術テキスト+地域開発研究所",
  query: "建築施工管理技術テキスト 地域開発研究所",
  category: "施工管理"
},
{
  title: "土木の世界",
  author: "五十畑弘",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=土木の世界",
  query: "土木の世界",
  category: "土木・インフラ"
},
{
  title: "図解入門 よくわかる土木技術の基本と仕組み",
  author: "五十畑弘",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかる土木技術の基本と仕組み",
  query: "よくわかる土木技術の基本と仕組み",
  category: "土木・インフラ"
},
{
  title: "土木施工管理技士 完全攻略",
  author: "土木施工管理技士試験研究会",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=土木施工管理技士+完全攻略",
  query: "土木施工管理技士 完全攻略",
  category: "土木・インフラ"
},
{
  title: "土木工事施工管理基準",
  author: "国土交通省",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=土木工事施工管理基準",
  query: "土木工事施工管理基準",
  category: "土木・インフラ"
},
{
  title: "土木構造物の設計",
  author: "土木学会",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=土木構造物の設計",
  query: "土木構造物の設計",
  category: "土木・インフラ"
},
{
  title: "橋の科学",
  author: "土木学会",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=橋の科学+土木",
  query: "橋の科学 土木",
  category: "土木・インフラ"
},
{
  title: "道路の科学",
  author: "久保田尚",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=道路の科学",
  query: "道路の科学",
  category: "土木・インフラ"
},
{
  title: "インフラの老朽化と維持管理",
  author: "土木学会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=インフラの老朽化と維持管理",
  query: "インフラの老朽化と維持管理",
  category: "土木・インフラ"
},
{
  title: "上下水道のしくみ",
  author: "橋本淳司",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=上下水道のしくみ",
  query: "上下水道のしくみ",
  category: "土木・インフラ"
},
{
  title: "図解入門 最新インフラの基本と仕組み",
  author: "インフラ研究会",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=インフラの基本と仕組み",
  query: "インフラの基本と仕組み",
  category: "土木・インフラ"
},
{
  title: "イラストでわかる建築設備",
  author: "山田信亮・打矢えい二ほか",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=イラストでわかる建築設備",
  query: "イラストでわかる建築設備",
  category: "建築設備"
},
{
  title: "建築設備図が読めるようになる本",
  author: "株式会社きんでん",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築設備図が読めるようになる本",
  query: "建築設備図が読めるようになる本",
  category: "建築設備"
},
{
  title: "建築設備学教科書 新訂第二版",
  author: "建築設備学教科書研究会",
  price: "¥3,960",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築設備学教科書+新訂第二版",
  query: "建築設備学教科書 新訂第二版",
  category: "建築設備"
},
{
  title: "「建築の設備」入門 新訂第二版",
  author: "「建築の設備」入門編集委員会",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築の設備+入門+新訂第二版",
  query: "建築の設備 入門 新訂第二版",
  category: "建築設備"
},
{
  title: "断面図でわかる建築設備",
  author: "柿沼整三・大澤良二",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=断面図でわかる建築設備",
  query: "断面図でわかる建築設備",
  category: "建築設備"
},
{
  title: "ゼロからはじめる 建築の［設備］教室",
  author: "原口秀昭",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ゼロからはじめる+建築の設備教室",
  query: "ゼロからはじめる 建築の設備教室",
  category: "建築設備"
},
{
  title: "基礎からわかる 給排水設備",
  author: "坂上恭介・鎌田元康",
  price: "¥3,630",
  image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=基礎からわかる+給排水設備",
  query: "基礎からわかる 給排水設備",
  category: "建築設備"
},
{
  title: "建築設備関係法令集 令和8年版",
  author: "国土交通省住宅局建築指導課・建築技術者試験研究会",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築設備関係法令集+令和8年版",
  query: "建築設備関係法令集 令和8年版",
  category: "建築設備"
},
{
  title: "建築設備士 学科問題解説集 令和8年度版",
  author: "日建学院建築設備士教材研究会",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築設備士+学科問題解説集+令和8年度版",
  query: "建築設備士 学科問題解説集 令和8年度版",
  category: "建築設備"
},
{
  title: "基礎教材 建築設備 改訂版",
  author: "横山計三・西原直枝・村田博道・河内孝夫",
  price: "¥3,190",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=基礎教材+建築設備+改訂版",
  query: "基礎教材 建築設備 改訂版",
  category: "建築設備"
},
{
  title: "図解入門 よくわかる都市計画の基本と仕組み",
  author: "五十畑弘",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかる都市計画の基本と仕組み",
  query: "よくわかる都市計画の基本と仕組み",
  category: "都市計画"
},
{
  title: "都市計画学",
  author: "谷口守",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=都市計画学",
  query: "都市計画学",
  category: "都市計画"
},
{
  title: "都市計画の教科書",
  author: "都市計画教育研究会",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=都市計画の教科書",
  query: "都市計画の教科書",
  category: "都市計画"
},
{
  title: "都市計画法の解説",
  author: "国土交通省都市局",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=都市計画法の解説",
  query: "都市計画法の解説",
  category: "都市計画"
},
{
  title: "コンパクトシティのつくり方",
  author: "海道清信",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=コンパクトシティのつくり方",
  query: "コンパクトシティのつくり方",
  category: "都市計画"
},
{
  title: "まちづくりの教科書",
  author: "日本建築学会",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=まちづくりの教科書",
  query: "まちづくりの教科書",
  category: "都市計画"
},
{
  title: "都市デザインの考え方",
  author: "西村幸夫",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=都市デザインの考え方",
  query: "都市デザインの考え方",
  category: "都市計画"
},
{
  title: "地域再生の戦略",
  author: "木下斉",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=地域再生の戦略",
  query: "地域再生の戦略",
  category: "都市計画"
},
{
  title: "都市と地域の交通計画",
  author: "交通工学研究会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=都市と地域の交通計画",
  query: "都市と地域の交通計画",
  category: "都市計画"
},
{
  title: "持続可能な都市のつくり方",
  author: "日本都市計画学会",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=持続可能な都市のつくり方",
  query: "持続可能な都市のつくり方",
  category: "都市計画"
},
{
  title: "建築CAD検定試験公式ガイドブック",
  author: "全国建築CAD連盟",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築CAD検定試験+公式ガイドブック",
  query: "建築CAD検定試験 公式ガイドブック",
  category: "建築CAD・BIM"
},
{
  title: "AutoCADではじめる建築製図",
  author: "鳥谷部真",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=AutoCAD+建築製図",
  query: "AutoCAD 建築製図",
  category: "建築CAD・BIM"
},
{
  title: "やさしく学ぶAutoCAD LT 建築製図",
  author: "CAD関連書籍",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=やさしく学ぶ+AutoCAD+建築製図",
  query: "やさしく学ぶ AutoCAD 建築製図",
  category: "建築CAD・BIM"
},
{
  title: "建築CAD検定試験問題集",
  author: "全国建築CAD連盟",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築CAD検定試験+問題集",
  query: "建築CAD検定試験 問題集",
  category: "建築CAD・BIM"
},
{
  title: "RevitではじめるBIM建築設計",
  author: "BIM関連書籍",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Revit+BIM+建築設計",
  query: "Revit BIM 建築設計",
  category: "建築CAD・BIM"
},
{
  title: "Revit Architecture ベーシックマニュアル",
  author: "Revit関連書籍",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Revit+Architecture+ベーシックマニュアル",
  query: "Revit Architecture ベーシックマニュアル",
  category: "建築CAD・BIM"
},
{
  title: "BIMの教科書",
  author: "BIM関連書籍",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=BIMの教科書+建築",
  query: "BIMの教科書 建築",
  category: "建築CAD・BIM"
},
{
  title: "BIM建築設計の実務",
  author: "BIM関連書籍",
  price: "¥3,850",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=BIM+建築設計+実務",
  query: "BIM 建築設計 実務",
  category: "建築CAD・BIM"
},
{
  title: "建築設計のためのJw_cad入門",
  author: "建築CAD関連",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築設計+Jw_cad+入門",
  query: "建築設計 Jw_cad 入門",
  category: "建築CAD・BIM"
},
{
  title: "Jw_cad徹底解説 建築製図編",
  author: "Obra Club",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Jw_cad+徹底解説+建築製図",
  query: "Jw_cad 徹底解説 建築製図",
  category: "建築CAD・BIM"
},
{
  title: "2026年版 1級建築士 合格テキスト",
  author: "総合資格学院",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=2026年版+1級建築士+合格テキスト",
  query: "2026年版 1級建築士 合格テキスト",
  category: "建築資格"
},
{
  title: "2026年版 2級建築士 合格テキスト",
  author: "総合資格学院",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=2026年版+2級建築士+合格テキスト",
  query: "2026年版 2級建築士 合格テキスト",
  category: "建築資格"
},
{
  title: "一級建築士 学科試験 過去問題集",
  author: "日建学院",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=一級建築士+学科試験+過去問題集",
  query: "一級建築士 学科試験 過去問題集",
  category: "建築資格"
},
{
  title: "二級建築士 学科試験 過去問題集",
  author: "日建学院",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=二級建築士+学科試験+過去問題集",
  query: "二級建築士 学科試験 過去問題集",
  category: "建築資格"
},
{
  title: "建築設備士 学科試験 問題集",
  author: "建築設備技術者協会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築設備士+学科試験+問題集",
  query: "建築設備士 学科試験 問題集",
  category: "建築資格"
},
{
  title: "建築施工管理技士 合格テキスト",
  author: "建築施工管理技士試験研究会",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築施工管理技士+合格テキスト",
  query: "建築施工管理技士 合格テキスト",
  category: "建築資格"
},
{
  title: "建築物環境衛生管理技術者 試験問題集",
  author: "日本教育訓練センター",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築物環境衛生管理技術者+試験問題集",
  query: "建築物環境衛生管理技術者 試験問題集",
  category: "建築資格"
},
{
  title: "インテリアコーディネーター 一次試験 過去問題集",
  author: "ハウジングエージェンシー",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=インテリアコーディネーター+一次試験+過去問題集",
  query: "インテリアコーディネーター 一次試験 過去問題集",
  category: "建築資格"
},
{
  title: "福祉住環境コーディネーター検定 試験対策",
  author: "東京商工会議所",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=福祉住環境コーディネーター+試験対策",
  query: "福祉住環境コーディネーター 試験対策",
  category: "建築資格"
},
{
  title: "建築士試験 建築法規のウラ指導",
  author: "教育的ウラ指導",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=建築士試験+建築法規のウラ指導",
  query: "建築士試験 建築法規のウラ指導",
  category: "建築資格"
},
{
  title: "絵ときでわかる機械設計（第2版）",
  author: "池田茂・中西佑二",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=絵ときでわかる機械設計+第2版",
  query: "絵ときでわかる機械設計 第2版",
  category: "機械設計"
},
{
  title: "絵とき「機械設計」基礎のきそ",
  author: "平田宏一",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=絵とき+機械設計+基礎のきそ+平田宏一",
  query: "絵とき 機械設計 基礎のきそ 平田宏一",
  category: "機械設計"
},
{
  title: "機械設計の基礎",
  author: "機械設計関連",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計の基礎",
  query: "機械設計の基礎",
  category: "機械設計"
},
{
  title: "機械要素設計",
  author: "機械要素設計関連",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械要素設計",
  query: "機械要素設計",
  category: "機械設計"
},
{
  title: "機械設計製図",
  author: "機械設計製図関連",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計製図",
  query: "機械設計製図",
  category: "機械設計"
},
{
  title: "機械設計技術者試験 3級 問題集",
  author: "日本機械設計工業会",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計技術者試験+3級+問題集",
  query: "機械設計技術者試験 3級 問題集",
  category: "機械設計"
},
{
  title: "機械設計技術者試験 2級 対策問題集",
  author: "日本機械設計工業会",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計技術者試験+2級+対策問題集",
  query: "機械設計技術者試験 2級 対策問題集",
  category: "機械設計"
},
{
  title: "機械設計便覧",
  author: "機械設計便覧編集委員会",
  price: "¥6,600",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計便覧",
  query: "機械設計便覧",
  category: "機械設計"
},
{
  title: "機械設計ハンドブック",
  author: "機械設計関連",
  price: "¥4,400",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計ハンドブック",
  query: "機械設計ハンドブック",
  category: "機械設計"
},
{
  title: "機械設計のための材料力学",
  author: "機械設計関連",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=機械設計+材料力学",
  query: "機械設計 材料力学",
  category: "機械設計"
},
{
  title: "図解入門 よくわかる最新電気電子回路の基本と仕組み",
  author: "石橋孝一",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかる最新電気電子回路の基本と仕組み",
  query: "よくわかる最新電気電子回路の基本と仕組み",
  category: "電気・電子"
},
{
  title: "電気回路の基礎",
  author: "西村信雄",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=電気回路の基礎",
  query: "電気回路の基礎",
  category: "電気・電子"
},
{
  title: "電子回路の基礎",
  author: "藤井信生",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=電子回路の基礎",
  query: "電子回路の基礎",
  category: "電気・電子"
},
{
  title: "はじめての電子回路",
  author: "松澤昭",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめての電子回路",
  query: "はじめての電子回路",
  category: "電気・電子"
},
{
  title: "電気電子工学の基礎",
  author: "電気学会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=電気電子工学の基礎",
  query: "電気電子工学の基礎",
  category: "電気・電子"
},
{
  title: "マンガでわかる電気回路",
  author: "藤瀧和弘",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1478432780021-b8d273730d8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガでわかる電気回路",
  query: "マンガでわかる電気回路",
  category: "電気・電子"
},
{
  title: "電子工作入門",
  author: "後閑哲也",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=電子工作入門",
  query: "電子工作入門",
  category: "電気・電子"
},
{
  title: "Arduinoで電子工作をはじめよう",
  author: "鈴木哲哉",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Arduino+電子工作",
  query: "Arduino 電子工作",
  category: "電気・電子"
},
{
  title: "電気工事士 完全攻略",
  author: "電気工事士試験研究会",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=電気工事士+完全攻略",
  query: "電気工事士 完全攻略",
  category: "電気・電子"
},
{
  title: "第二種電気工事士 筆記試験すい〜っと合格",
  author: "藤瀧和弘",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=第二種電気工事士+筆記試験+すい〜っと合格",
  query: "第二種電気工事士 筆記試験 すい〜っと合格",
  category: "電気・電子"
},
{
  title: "生産技術あるある",
  author: "生産技術の馬",
  price: "¥1,815",
  image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=生産技術あるある",
  query: "生産技術あるある",
  category: "工場・生産技術"
},
{
  title: "［ポイント図解］生産管理の基本が面白いほどわかる本",
  author: "田島悟",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ポイント図解+生産管理の基本が面白いほどわかる本",
  query: "ポイント図解 生産管理の基本が面白いほどわかる本",
  category: "工場・生産技術"
},
{
  title: "生産管理システム構築のすべて",
  author: "北村友博",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=生産管理システム構築のすべて",
  query: "生産管理システム構築のすべて",
  category: "工場・生産技術"
},
{
  title: "食品工場の生産技術",
  author: "弘中泰雅",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=食品工場の生産技術+弘中泰雅",
  query: "食品工場の生産技術 弘中泰雅",
  category: "工場・生産技術"
},
{
  title: "生産技術と知能化",
  author: "山本秀彦",
  price: "¥2,970",
  image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=生産技術と知能化",
  query: "生産技術と知能化",
  category: "工場・生産技術"
},
{
  title: "新・半導体工場のすべて",
  author: "菊地正典",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=新・半導体工場のすべて",
  query: "新・半導体工場のすべて",
  category: "工場・生産技術"
},
{
  title: "自動車の生産技術",
  author: "芹野洋一 編",
  price: "¥5,280",
  image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=自動車の生産技術+芹野洋一",
  query: "自動車の生産技術 芹野洋一",
  category: "工場・生産技術"
},
{
  title: "工場の事典",
  author: "日経ものづくり 編",
  price: "¥95,000",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=工場の事典+日経ものづくり",
  query: "工場の事典 日経ものづくり",
  category: "工場・生産技術"
},
{
  title: "生産技術マニアル",
  author: "柳川達吉",
  price: "¥31,100",
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=生産技術マニアル+柳川達吉",
  query: "生産技術マニアル 柳川達吉",
  category: "工場・生産技術"
},
{
  title: "生産技術システムの国際水平移転",
  author: "藤岡豊",
  price: "¥5,500",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=生産技術システムの国際水平移転",
  query: "生産技術システムの国際水平移転",
  category: "工場・生産技術"
},
{
  title: "ロボット工学の基礎",
  author: "日本ロボット学会",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ロボット工学の基礎",
  query: "ロボット工学の基礎",
  category: "ロボティックス"
},
{
  title: "はじめてのロボット工学",
  author: "石川潤",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめてのロボット工学",
  query: "はじめてのロボット工学",
  category: "ロボティックス"
},
{
  title: "図解入門 よくわかるロボット工学の基本と仕組み",
  author: "小坂学",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかるロボット工学の基本と仕組み",
  query: "よくわかるロボット工学の基本と仕組み",
  category: "ロボティックス"
},
{
  title: "ロボット制御工学入門",
  author: "松野文俊",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1482670219789-9c9b6c5b5f8c?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ロボット制御工学入門",
  query: "ロボット制御工学入門",
  category: "ロボティックス"
},
{
  title: "ロボットアームの制御",
  author: "川村貞夫",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ロボットアームの制御",
  query: "ロボットアームの制御",
  category: "ロボティックス"
},
{
  title: "ROS 2ではじめよう 次世代ロボットプログラミング",
  author: "原田研介",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ROS+2+ロボットプログラミング",
  query: "ROS 2 ロボットプログラミング",
  category: "ロボティックス"
},
{
  title: "Pythonで学ぶロボット制御",
  author: "中村友昭",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Pythonで学ぶロボット制御",
  query: "Pythonで学ぶロボット制御",
  category: "ロボティックス"
},
{
  title: "ロボットビジョンの基礎",
  author: "日本ロボット学会",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ロボットビジョンの基礎",
  query: "ロボットビジョンの基礎",
  category: "ロボティックス"
},
{
  title: "Arduinoではじめるロボット製作",
  author: "高西淳夫",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Arduino+ロボット製作",
  query: "Arduino ロボット製作",
  category: "ロボティックス"
},
{
  title: "マンガでわかるロボット工学",
  author: "松原仁",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=マンガでわかるロボット工学",
  query: "マンガでわかるロボット工学",
  category: "ロボティックス"
},
{
  title: "図解即戦力 化学業界のしくみとビジネスがこれ1冊でしっかりわかる教科書",
  author: "橘川武郎",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=図解即戦力+化学業界のしくみとビジネスがこれ1冊でしっかりわかる教科書",
  query: "図解即戦力 化学業界のしくみとビジネスがこれ1冊でしっかりわかる教科書",
  category: "化学・素材"
},
{
  title: "ケミカルビジネスエキスパート養成講座 改訂2版",
  author: "化学工業日報社",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ケミカルビジネスエキスパート養成講座+改訂2版",
  query: "ケミカルビジネスエキスパート養成講座 改訂2版",
  category: "化学・素材"
},
{
  title: "ケミカルビジネス情報MAP2025",
  author: "化学工業日報社",
  price: "¥3,850",
  image: "https://images.unsplash.com/photo-1581093458791-9d42e3c6b2b4?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ケミカルビジネス情報MAP2025",
  query: "ケミカルビジネス情報MAP2025",
  category: "化学・素材"
},
{
  title: "はじめて学ぶ化学工学",
  author: "化学工学会",
  price: "¥2,090",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=はじめて学ぶ化学工学",
  query: "はじめて学ぶ化学工学",
  category: "化学・素材"
},
{
  title: "ベーシック化学工学 増補版",
  author: "橋本健治",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ベーシック化学工学+増補版",
  query: "ベーシック化学工学 増補版",
  category: "化学・素材"
},
{
  title: "化学プロセス工学",
  author: "化学工学会",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=化学プロセス工学",
  query: "化学プロセス工学",
  category: "化学・素材"
},
{
  title: "化学工学便覧 改訂七版",
  author: "化学工学会",
  price: "¥39,600",
  image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=化学工学便覧+改訂七版",
  query: "化学工学便覧 改訂七版",
  category: "化学・素材"
},
{
  title: "化学プラント配管設計の基本",
  author: "石井泰範",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=化学プラント配管設計の基本+石井泰範",
  query: "化学プラント配管設計の基本 石井泰範",
  category: "化学・素材"
},
{
  title: "スケールアップの化学工学",
  author: "山口由岐夫",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=スケールアップの化学工学",
  query: "スケールアップの化学工学",
  category: "化学・素材"
},
{
  title: "無機工業化学 第4版",
  author: "安藤淳平",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=無機工業化学+第4版",
  query: "無機工業化学 第4版",
  category: "化学・素材"
},
{
  title: "エネルギーの教科書",
  author: "池内了",
  price: "¥1,980",
  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=エネルギーの教科書",
  query: "エネルギーの教科書",
  category: "エネルギー"
},
{
  title: "図解入門 よくわかる最新エネルギーの基本と仕組み",
  author: "山崎耕造",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかる最新エネルギーの基本と仕組み",
  query: "よくわかる最新エネルギーの基本と仕組み",
  category: "エネルギー"
},
{
  title: "エネルギー白書",
  author: "資源エネルギー庁",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=エネルギー白書",
  query: "エネルギー白書",
  category: "エネルギー"
},
{
  title: "再生可能エネルギーの教科書",
  author: "安田陽",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=再生可能エネルギーの教科書",
  query: "再生可能エネルギーの教科書",
  category: "エネルギー"
},
{
  title: "図解でわかる再生可能エネルギーのしくみ",
  author: "エネルギー総合工学研究所",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=再生可能エネルギー+しくみ",
  query: "再生可能エネルギー しくみ",
  category: "エネルギー"
},
{
  title: "太陽光発電システムの設計と施工",
  author: "太陽光発電協会",
  price: "¥3,520",
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=太陽光発電システムの設計と施工",
  query: "太陽光発電システムの設計と施工",
  category: "エネルギー"
},
{
  title: "電力システム工学",
  author: "関根泰次",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1558449033-4cfcd1e6a1a1?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=電力システム工学",
  query: "電力システム工学",
  category: "エネルギー"
},
{
  title: "原子力発電のしくみ",
  author: "舘野淳",
  price: "¥1,870",
  image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=原子力発電のしくみ",
  query: "原子力発電のしくみ",
  category: "エネルギー"
},
{
  title: "脱炭素社会のエネルギー戦略",
  author: "橘川武郎",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=脱炭素社会のエネルギー戦略",
  query: "脱炭素社会のエネルギー戦略",
  category: "エネルギー"
},
{
  title: "エネルギー問題入門",
  author: "小宮山宏",
  price: "¥1,760",
  image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=エネルギー問題入門",
  query: "エネルギー問題入門",
  category: "エネルギー"
},
{
  title: "これから研究を始める高校生と指導教員のために",
  author: "酒井聡樹",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=これから研究を始める高校生と指導教員のために",
  query: "これから研究を始める高校生と指導教員のために",
  category: "研究・実験"
},
{
  title: "Pythonで学ぶ実験計画法入門",
  author: "金子弘昌",
  price: "¥3,300",
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=Pythonで学ぶ実験計画法入門",
  query: "Pythonで学ぶ実験計画法入門",
  category: "研究・実験"
},
{
  title: "入門 実験計画法",
  author: "永田靖",
  price: "¥4,620",
  image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=入門+実験計画法+永田靖",
  query: "入門 実験計画法 永田靖",
  category: "研究・実験"
},
{
  title: "よくわかる実験計画法",
  author: "中村義作",
  price: "¥2,860",
  image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかる実験計画法+中村義作",
  query: "よくわかる実験計画法 中村義作",
  category: "研究・実験"
},
{
  title: "研究の育て方 ゴールとプロセスの「見える化」",
  author: "近藤克則",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=研究の育て方+ゴールとプロセスの見える化",
  query: "研究の育て方 ゴールとプロセスの見える化",
  category: "研究・実験"
},
{
  title: "1からのデータ分析",
  author: "古川一郎・上原渉",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=1からのデータ分析+古川一郎+上原渉",
  query: "1からのデータ分析 古川一郎 上原渉",
  category: "研究・実験"
},
{
  title: "ケースで学ぶケーススタディ",
  author: "髙橋広行・徳山美津恵・吉田満梨",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ケースで学ぶケーススタディ",
  query: "ケースで学ぶケーススタディ",
  category: "研究・実験"
},
{
  title: "社会科学系大学院生のための研究の進め方",
  author: "ダン・レメニイほか",
  price: "¥1,995",
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=社会科学系大学院生のための研究の進め方",
  query: "社会科学系大学院生のための研究の進め方",
  category: "研究・実験"
},
{
  title: "研究の進め方・まとめ方",
  author: "Kawashima books",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=研究の進め方・まとめ方",
  query: "研究の進め方・まとめ方",
  category: "研究・実験"
},
{
  title: "仕事に生かせる技術者の勉強法",
  author: "中村義作",
  price: "¥1,650",
  image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=仕事に生かせる技術者の勉強法+中村義作",
  query: "仕事に生かせる技術者の勉強法 中村義作",
  category: "研究・実験"
},
{
  title: "品質管理の教科書",
  author: "石川馨",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=品質管理の教科書",
  query: "品質管理の教科書",
  category: "品質・安全"
},
{
  title: "現場で役立つ品質管理",
  author: "日科技連",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=現場で役立つ品質管理",
  query: "現場で役立つ品質管理",
  category: "品質・安全"
},
{
  title: "図解入門 よくわかる最新品質管理の基本と仕組み",
  author: "今里健一郎",
  price: "¥2,640",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=よくわかる最新品質管理の基本と仕組み",
  query: "よくわかる最新品質管理の基本と仕組み",
  category: "品質・安全"
},
{
  title: "QC検定3級 品質管理の手法",
  author: "QC検定過去問題解説委員会",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=QC検定3級+品質管理の手法",
  query: "QC検定3級 品質管理の手法",
  category: "品質・安全"
},
{
  title: "QC検定2級 品質管理の手法",
  author: "QC検定試験対策研究会",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=QC検定2級+品質管理",
  query: "QC検定2級 品質管理",
  category: "品質・安全"
},
{
  title: "安全管理の教科書",
  author: "中央労働災害防止協会",
  price: "¥2,420",
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=安全管理の教科書",
  query: "安全管理の教科書",
  category: "品質・安全"
},
{
  title: "労働安全衛生の基本",
  author: "中央労働災害防止協会",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1581091870627-3b3e4b3f7f1f?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=労働安全衛生の基本",
  query: "労働安全衛生の基本",
  category: "品質・安全"
},
{
  title: "ISO 9001 品質マネジメントシステム入門",
  author: "飯塚悦功",
  price: "¥3,080",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ISO+9001+品質マネジメントシステム入門",
  query: "ISO 9001 品質マネジメントシステム入門",
  category: "品質・安全"
},
{
  title: "ヒューマンエラーの心理学",
  author: "芳賀繁",
  price: "¥2,200",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=ヒューマンエラーの心理学",
  query: "ヒューマンエラーの心理学",
  category: "品質・安全"
},
{
  title: "製造現場の安全管理と改善",
  author: "日刊工業新聞社",
  price: "¥2,750",
  image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=500&q=80",
  url: "https://www.amazon.co.jp/s?k=製造現場+安全管理+改善",
  query: "製造現場 安全管理 改善",
  category: "品質・安全"
},
];



const bookTitlePatterns = [
  (name) => `${name}の教科書`,
  (name) => `${name}入門`,
  (name) => `図解 ${name}の基本`,
  (name) => `実践 ${name}の技術`,
  (name) => `${name}を仕事に活かす本`
];
const generatedBooks = subgenres.flatMap((subgenre, subgenreIndex) => bookTitlePatterns.map((createTitle, bookIndex) => ({
  title: createTitle(subgenre.name),
  author: "BOOKMARKET編集部",
  price: `¥${2200 + bookIndex * 180}`,
  image: images[(subgenreIndex + bookIndex) % images.length],
  url: amazonUrl(subgenre.query),
  query: subgenre.query,
  category: subgenre.name
})));
const books = [...manualBooks, ...generatedBooks];
const genreGrid = document.querySelector("#genreGrid");
const detailSection = document.querySelector("#detailSection");
const rankingSection = document.querySelector("#ranking");
const subgenreGrid = document.querySelector("#subgenreGrid");
const bookGrid = document.querySelector("#bookGrid");
function amazonUrl(query) { return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}`; }
async function fetchAmazonBooks(query, fallbackBooks) {
  return fallbackBooks;
}     
function renderGenres() {
  if (!genreGrid) return;
  genreGrid.innerHTML = genres.map((genre, index) => `<button class="genre-card" type="button" data-genre="${genre.name}"><span class="genre-number">0${index + 1}</span><div class="genre-icon">${genre.icon}</div><h3>${genre.name}</h3><p>${genre.description}</p></button>`).join("");
}
function showCategory(genreName) {
  const detailTitle = document.querySelector("#detailTitle");
  const detailDescription = document.querySelector("#detailDescription");
  const genre = genres.find((item) => item.name === genreName);
  if (!detailSection || !rankingSection || !detailTitle || !detailDescription || !genre) return;
  detailTitle.textContent = genre.name;
  detailDescription.textContent = genre.description;
  renderSubgenres(genreName);
  detailSection.classList.remove("is-hidden"); rankingSection.classList.add("is-hidden"); detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderSubgenres(genreName) {
  if (!subgenreGrid) return;
  subgenreGrid.innerHTML = subgenres.filter((subgenre) => subgenre.genre === genreName).map((subgenre) => `<button class="subgenre-card" type="button" data-query="${subgenre.query}" data-name="${subgenre.name}" data-genre="${subgenre.genre}"><span><h3>${subgenre.name}</h3><p>${subgenre.detail}</p></span><span class="arrow">→</span></button>`).join("");
}
function renderBooks(name, currentBooks) {
  const title = document.querySelector("#rankingTitle");
  if (!bookGrid || !title) return;
  title.textContent = name;
  bookGrid.innerHTML = currentBooks.slice(0, 10).map((book, index) => `<article class="book-card"><span class="rank">${index + 1}</span><div class="cover-wrap"><img src="${book.image}" alt="${book.title}のイメージ"></div><button class="save-book" type="button" aria-label="${book.title}を保存">♡</button><h3>${book.title}</h3><p class="author">${book.author}</p><div class="book-meta"><span class="price">${book.price}</span><a class="amazon-link" href="${book.url || amazonUrl(book.query)}" target="_blank" rel="noopener">Amazonで見る ↗</a></div></article>`).join("");
  document.querySelectorAll(".save-book").forEach((button) => { button.addEventListener("click", () => { button.textContent = button.textContent === "♥" ? "♡" : "♥"; }); });
}
async function showRanking(name, query) { if (!rankingSection || !detailSection) return; const fallbackBooks = books.filter((book) => book.category === name); renderBooks(name, fallbackBooks); rankingSection.classList.remove("is-hidden"); rankingSection.scrollIntoView({ behavior: "smooth", block: "start" }); renderBooks(name, await fetchAmazonBooks(query, fallbackBooks)); }
renderGenres();
genreGrid?.addEventListener("click", (event) => { const card = event.target.closest(".genre-card"); if (card) showCategory(card.dataset.genre || "IT・プログラミング"); });
subgenreGrid?.addEventListener("click", (event) => { const card = event.target.closest(".subgenre-card"); if (card) showRanking(card.dataset.name || "Web開発", card.dataset.query || "プログラミング Web開発"); });
document.querySelector("#backButton")?.addEventListener("click", () => { detailSection?.classList.add("is-hidden"); rankingSection?.classList.add("is-hidden"); document.querySelector("#genres")?.scrollIntoView({ behavior: "smooth" }); });
