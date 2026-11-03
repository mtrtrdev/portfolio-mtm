import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "tsukugi",
    title: "継 TSUKUGI — 金継ぎデジタルギャラリー",
    category: "INTERACTIVE 3D WEB / EXPERIMENT",
    year: "2026",
    description:
      "Three.jsとWeb Audio APIを用い、外部アセットを使わずに数式生成で描画した3DインタラクティブWeb。スクロールに応じたカメラワークや、リアルタイムの形状カスタマイズを実装。",
    detailedDescription:
      "日本の伝統工芸「金継ぎ」をモチーフにしたインタラクティブな3D Web実験プロジェクト。外部3Dモデルや音声アセットを排し、Three.jsによるプロシージャルな数式演算のみで陶器の質感・破損・接合の光をレンダリングしています。スクロール進行に同期したシーン遷移演出や、27通りの形状・質感のリアルタイムシミュレーションを構築しています。",
    tags: [
      "Three.js",
      "Web Audio API",
      "Procedural Generation",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "GLSL / Shaders",
      "Core Web Vitals",
    ],
    thumbnailUrl: "/images/projects/tsukugi.jpg",
    demoUrl: "https://tsukugi-kintsugi-gallery.vercel.app/",
    githubUrl: "https://github.com/mtrtrdev",
    highlights: [
      "アセットレス超軽量描画: 外部3Dアセットゼロ・数式生成のみで 60fps の高パフォーマンス描画",
      "スクロール連動演出: スクロール進行に同期して器の状態（静寂→破調→漆接合→金粉蒔絵）が変遷",
      "リアルタイムカスタマイズ: 形状(3種) × 素地(3種) × 継ぎ材(3種) の27通りをリアルタイム切替",
      "Web Audio API連携: 視覚表現と同期したプロシージャルな環境音・エフェクト音の生成",
    ],
    featured: true,
  },
];
