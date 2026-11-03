import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "tsukugi",
    title: "継 TSUKUGI — 金継ぎデジタルギャラリー",
    category: "CREATIVE 3D LP / BRAND EXPERIENCE",
    year: "2026",
    description:
      "Three.jsとWeb Audio APIによる数式生成のみで構築されたアセットレス3DギャラリーLP。スクロール連動の5幕演出と27通りのリアルタイム誂えシミュレーターを搭載。",
    detailedDescription:
      "日本の伝統工芸「金継ぎ」の精神性をデジタル空間に昇華させた、没入型ブランドエクスペリエンスLP。外部3Dモデルや音声アセットを排し、プロシージャルな数式演算のみで質感・破壊・接合・蒔絵の光をレンダリング。スクロール進行に連動した5幕のストーリーテリング、27通りのリアルタイム誂え（カスタマイズ）シミュレーター、そして選択仕様を引き継いで職人対話へ繋ぐ公式LINE成約導線を構築しています。",
    tags: [
      "Three.js",
      "Web Audio API",
      "Procedural Generation",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "LINE API Integration",
      "Core Web Vitals",
    ],
    thumbnailUrl: "/images/projects/tsukugi.jpg",
    demoUrl: "https://tsukugi-kintsugi-gallery.vercel.app/",
    githubUrl: "https://github.com/mtrtrdev",
    highlights: [
      "アセットレス超軽量描画: 外部アセットゼロ・数式生成のみで LCP 1.2s未満 / 60fps の圧倒的パフォーマンス",
      "5幕のスクロール演出: スクロールに同期して「静寂 → 分離（破調） → 漆接合 → 金粉蒔絵 → 自由鑑賞」へ変遷",
      "27通りの誂え機能: 形状(3種) × 素地(3種) × 継ぎ材(3種) のリアルタイム切替 ＆ 漢数字価格の自動算出",
      "ハイエンド成約導線: 低摩擦な「お仕立て相談」仮受付証発行から、仕様を引き継ぐ公式LINE職人対話へ連携",
    ],
    featured: true,
  },
];
