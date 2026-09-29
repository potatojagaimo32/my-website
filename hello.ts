export {};

type Book = {
	title: string;
	author: string;
	price: string;
	image: string;
	url?: string;
	query: string;
	category: string;
};

type Subgenre = { name: string; detail: string; query: string; genre: string };

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

const genreSubgenreData: Array<[string, string[]]> = [
	["ビジネス・キャリア", ["マインド・自己啓発|時間術・習慣化・思考法", "スキル・実務|マーケティング・営業・プレゼン", "起業・経営|スタートアップ・戦略・財務", "就職・転職|履歴書・面接・業界研究", "リーダーシップ|チーム運営・マネジメント", "キャリア設計|働き方・副業・年収", "文章・コミュニケーション|伝える力・話し方", "ビジネス教養|仕事で使える知識"]],
	["お金・投資", ["マネーリテラシー|節約・税金・貯金", "新NISA・iDeCo|制度・始め方・活用法", "インデックス投資|長期積立・分散投資", "株式投資|企業分析・チャート・配当", "不動産投資|物件選び・収益化", "経済・金融|現代経済・金融史", "仮想通貨・Web3|暗号資産・ブロックチェーン", "家計管理|保険・住宅・教育費"]],
	["語学・資格・学習", ["英語・語学|TOEIC・英会話・留学", "簿記|3級・2級・会計", "IT資格|ITパスポート・基本情報", "宅建・法律|宅建・行政書士", "公務員試験|教養・専門・面接", "哲学・歴史|日本史・世界史・思想", "心理学・統計学|心の仕組み・データ", "勉強法|記憶術・ノート術・受験"]],
	["ライフスタイル・健康", ["筋トレ・フィットネス|自宅トレ・運動習慣", "ダイエット|食事・栄養・体重管理", "睡眠・メンタル|休息・ストレスケア", "料理・レシピ|毎日の献立・作り置き", "旅行ガイド|国内・海外・ひとり旅", "カメラ・写真|撮影・編集・機材", "ガジェット・映画|デジタル・映像作品", "人間関係・恋愛|会話・心理・恋愛術"]],
	["IT・プログラミング", ["Web開発|HTML・CSS・JavaScript・React", "サーバー・インフラ|Linux・Python・SQL・AWS", "アプリ開発|Swift・Kotlin・Flutter", "データ・AI|機械学習・生成AI・分析", "プログラミング基礎|アルゴリズム・設計", "ゲーム開発|Unity・ゲーム制作・3D", "セキュリティ|安全なWeb・ネットワーク", "デザイン・UI|UX・Figma・アクセシビリティ"]],
	["農業・第一次産業", ["スマート農業|IoT・ドローン・精密農業", "作物栽培|土壌・肥料・病害虫", "有機農業|自然栽培・循環型農業", "畜産・酪農|飼育・衛生・経営", "林業|森林管理・木材利用", "水産業|養殖・漁場・水産加工", "農業経営|販売・6次産業化・法人化", "農業機械|トラクター・自動化・整備"]],
	["建築・土木", ["建築設計|住宅・意匠・設計製図", "構造・耐震|構造計算・地震対策", "施工管理|現場管理・工程・品質", "土木・インフラ|道路・橋梁・上下水道", "建築設備|空調・電気・給排水", "都市計画|まちづくり・不動産", "建築CAD・BIM|AutoCAD・Revit・3D", "建築資格|一級建築士・施工管理技士"]],
	["製造・科学技術", ["機械設計|CAD・機械要素・設計", "電気・電子|回路・制御・組み込み", "工場・生産技術|自動化・改善・品質", "ロボティクス|産業ロボット・制御", "化学・素材|材料・化学工学・分析", "エネルギー|電力・再生可能エネルギー", "研究・実験|科学的方法・論文・計測", "品質・安全|品質保証・規格・安全管理"]]
];
const subgenres: Subgenre[] = genreSubgenreData.flatMap(([genre, items]) => items.map((item) => { const [name, detail] = item.split("|"); return { name, detail, query: `${genre} ${name}`, genre }; }));

const images = ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80"];
const manualBooks: Book[] = [
	{
		title: "リーダブルコード",
		author: "Dustin Boswell",
		price: "¥2,640",
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
		url: "https://www.amazon.co.jp/s?k=リーダブルコード",
		query: "リーダブルコード",
		category: "Web開発"
	},
	{
		title: "スマート農業のすすめ",
		author: "農業技術編集部",
		price: "¥2,200",
		image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80",
		url: "https://www.amazon.co.jp/s?k=スマート農業",
		query: "スマート農業",
		category: "スマート農業"
	}
];
const bookTitlePatterns = [
	(name: string) => `${name}の教科書`,
	(name: string) => `${name}入門`,
	(name: string) => `図解 ${name}の基本`,
	(name: string) => `実践 ${name}の技術`,
	(name: string) => `${name}を仕事に活かす本`
];
const generatedBooks: Book[] = subgenres.flatMap((subgenre, subgenreIndex) => bookTitlePatterns.map((createTitle, bookIndex) => ({
	title: createTitle(subgenre.name),
	author: "BOOKMARKET編集部",
	price: `¥${2_200 + bookIndex * 180}`,
	image: images[(subgenreIndex + bookIndex) % images.length],
	url: amazonUrl(subgenre.query),
	query: subgenre.query,
	category: subgenre.name
})));
const books: Book[] = [...manualBooks, ...generatedBooks];

const genreGrid = document.querySelector("#genreGrid");
const detailSection = document.querySelector("#detailSection");
const rankingSection = document.querySelector("#ranking");
const subgenreGrid = document.querySelector("#subgenreGrid");
const bookGrid = document.querySelector("#bookGrid");
const savedButton = document.querySelector("#savedButton small");
let savedCount = 0;

function amazonUrl(query: string) {
	return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}`;
}

async function fetchAmazonBooks(_query: string, fallbackBooks: Book[]): Promise<Book[]> {
	return fallbackBooks;
}

function renderGenres() {
	if (!genreGrid) return;
	genreGrid.innerHTML = genres.map((genre, index) => `
		<button class="genre-card" type="button" data-genre="${genre.name}">
			<span class="genre-number">0${index + 1}</span><div class="genre-icon">${genre.icon}</div>
			<h3>${genre.name}</h3><p>${genre.description}</p>
		</button>`).join("");
}

function showCategory(genreName: string) {
	const detailTitle = document.querySelector("#detailTitle");
	const detailDescription = document.querySelector("#detailDescription");
	const genre = genres.find((item) => item.name === genreName);
	if (!detailSection || !rankingSection || !detailTitle || !detailDescription || !genre) return;
	detailTitle.textContent = genre.name;
	detailDescription.textContent = genre.description;
	renderSubgenres(genreName);
	detailSection.classList.remove("is-hidden");
	rankingSection.classList.add("is-hidden");
	detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSubgenres(genreName: string) {
	if (!subgenreGrid) return;
	subgenreGrid.innerHTML = subgenres.filter((subgenre) => subgenre.genre === genreName).map((subgenre) => `
		<button class="subgenre-card" type="button" data-query="${subgenre.query}" data-name="${subgenre.name}" data-genre="${subgenre.genre}">
			<span><h3>${subgenre.name}</h3><p>${subgenre.detail}</p></span><span class="arrow">→</span>
		</button>`).join("");
}

function renderBooks(name: string, currentBooks: Book[]) {
	const title = document.querySelector("#rankingTitle");
	if (!bookGrid || !title) return;
	title.textContent = name;
	bookGrid.innerHTML = currentBooks.slice(0, 10).map((book, index) => `
		<article class="book-card"><span class="rank">${index + 1}</span>
			<div class="cover-wrap"><img src="${book.image}" alt="${book.title}のイメージ"></div>
			<button class="save-book" type="button" aria-label="${book.title}を保存">♡</button>
			<h3>${book.title}</h3><p class="author">${book.author}</p>
			<div class="book-meta"><span class="price">${book.price}</span><a class="amazon-link" href="${book.url || amazonUrl(book.query)}" target="_blank" rel="noopener">Amazonで見る ↗</a></div>
		</article>`).join("");
	document.querySelectorAll<HTMLButtonElement>(".save-book").forEach((button) => {
		button.addEventListener("click", () => { button.textContent = button.textContent === "♥" ? "♡" : "♥"; savedCount += button.textContent === "♥" ? 1 : -1; if (savedButton) savedButton.textContent = String(savedCount); });
	});
}

async function showRanking(name: string, query: string) {
	if (!rankingSection || !detailSection) return;
	renderBooks(name, books);
	rankingSection.classList.remove("is-hidden");
	rankingSection.scrollIntoView({ behavior: "smooth", block: "start" });
	renderBooks(name, await fetchAmazonBooks(query, books.filter((book) => book.category === name)));
}

renderGenres();
genreGrid?.addEventListener("click", (event: Event) => { if (!(event.target instanceof Element)) return; const card = event.target.closest<HTMLButtonElement>(".genre-card"); if (card) showCategory(card.dataset.genre || "IT・プログラミング"); });
subgenreGrid?.addEventListener("click", (event: Event) => { if (!(event.target instanceof Element)) return; const card = event.target.closest<HTMLButtonElement>(".subgenre-card"); if (card) showRanking(card.dataset.name || "Web開発", card.dataset.query || "プログラミング Web開発"); });
document.querySelector("#backButton")?.addEventListener("click", () => { detailSection?.classList.add("is-hidden"); rankingSection?.classList.add("is-hidden"); document.querySelector("#genres")?.scrollIntoView({ behavior: "smooth" }); });
