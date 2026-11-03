# 実装計画 (Implementation Plan) - NYスタイル ポートフォリオサイト

## 1. プロジェクト概要

個人の技術発信・アウトプットおよび制作物（Projects）を洗練されたビジュアルで紹介するポートフォリオWebサイト。  
**「NYスタイル（New York Editorial & Industrial Modern）」**をデザインコアとし、エディトリアル調の大胆なタイポグラフィ、モノトーン基調に映えるアクセントカラー、Three.jsによる都会的でインタラクティブな3D背景演出を融合させます。  
Vercelでのホスティングに最適化し、Zero-configで高速・安全にデプロイできる構成を採用します。

---

## 2. 技術スタック

- **フレームワーク**: Next.js (App Router, React 19 / 18, TypeScript)
- **スタイリング**: Tailwind CSS (ダークモード最適化、カスタムトークン)
- **3D / グラフィックス**: Three.js (`three`, `@types/three`)
- **アイコン**: Lucide React
- **フォント**: `next/font` による最適化
  - セリフ体 (見出し・アクセント): `Playfair Display` または `Cinzel`
  - サンセリフ (本文・UI): `Geist Sans` または `Inter`
  - モノスペース (メタデータ・コード): `Geist Mono` または `JetBrains Mono`
- **ホスティング**: Vercel

---

## 3. デザインシステム（NYスタイル仕様）

### 3.1 カラーパレット
- **Background (Base)**: `#09090b`（漆黒 / Zinc-950）
- **Surface / Card**: `#121215` / `#18181b`（アスファルトグレー / わずかな透明度）
- **Border / Divider**: `rgba(255, 255, 255, 0.12)`（繊細な極細ヘアライン）
- **Text Primary**: `#fafafa`（ハイコントラスト・オフホワイト）
- **Text Secondary / Muted**: `#a1a1aa` / `#71717a`（スモーキーグレー）
- **Accent (NY Taxi / Signature)**: `#facc15`（キャブイエロー / 鋭いエネルギー感）または クールクローム

### 3.2 ビジュアル・タイポグラフィ原則
- **大判タイポグラフィ**: 画面の主役となる特大フォントサイズ、文字間のメリハリ（Tight tracking vs Wide letter-spacing）。
- **エディトリアル・グリッド**: 雑誌やアートカタログのような枠線（Border）構造と規則的な余白。
- **インダストリアル・ディテール**: 「EDITION 2026」「STATUS: ACTIVE」「LOCAL TIME: NYC/TYO」といった無機質なメタ情報バッジの配置。

### 3.3 3D演出 (Three.js)
- 軽量で高パフォーマンスなCanvasパーティクル＆幾何学ライン。
- 都会の摩天楼（Skyscraper）や夜景の光、ワイヤーフレーム構造を想起させるインタラクティブな背景。
- マウスカーソルの移動に呼応して滑らかに視差（Parallax）や波紋が広がるエフェクト。

---

## 4. ディレクトリ構成

```text
portfolio_mtm/
├── docs/
│   └── portfolio_ny_style/
│       ├── AGENT.md
│       ├── implementation_plan.md
│       ├── task.md
│       └── walkthrough.md (実装完了後に作成)
├── public/
│   └── images/
│       └── projects/          # 制作実績のサムネイル・プレビュー画像
├── src/
│   ├── app/
│   │   ├── globals.css        # グローバルスタイル・フォント・Tailwind
│   │   ├── layout.tsx         # ルートレイアウト（メタデータ、フォント適用）
│   │   └── page.tsx           # メインシングルページ
│   ├── components/
│   │   ├── canvas/
│   │   │   └── CityParticles.tsx   # Three.js 3D背景コンポーネント
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # NYスタイル ヒーロー
│   │   │   ├── ProjectsSection.tsx # 実績ギャラリー一覧
│   │   │   ├── SkillsSection.tsx   # 保有技術・スタック
│   │   │   └── Footer.tsx          # フッター・SNSリンク
│   │   └── ui/
│   │       ├── ProjectModal.tsx    # 実績詳細モーダル
│   │       ├── Badge.tsx           # インダストリアル調タグ
│   │       └── Button.tsx          # NYスタイルのボタン
│   ├── data/
│   │   ├── profile.ts         # プロフィール・スキル定義
│   │   └── projects.ts        # 制作実績データ（TS管理で更新容易）
│   └── types/
│       └── index.ts           # 共通型定義
├── tailwind.config.ts         # カスタムカラー・フォント設定
├── tsconfig.json
└── package.json
```

---

## 5. データモデル設計

### `src/types/index.ts`
```typescript
export interface Project {
  id: string;
  title: string;
  category: string; // e.g. "Web App", "Creative Coding", "OSS"
  year: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  thumbnailUrl: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
```

---

## 6. 実装フェーズ詳細

### フェーズ 1: プロジェクト基盤の構築
1. `create-next-app` による最新の Next.js (App Router, TypeScript, Tailwind CSS) のセットアップ。
2. Tailwind CSS 設定に NY スタイルのカラーパレット、極細ボーダー、フォントファミリーを追加。
3. `next/font/google` を用いたエディトリアル用フォント（Playfair Display等）とサンセリフのインポート。

### フェーズ 2: データレイヤーの実装
1. `src/types/index.ts` に型定義を作成。
2. `src/data/projects.ts` にサンプルおよび実制作物データを記述（ローカル完結型で管理）。
3. `src/data/profile.ts` に経歴、自己紹介、技術スタックを定義。

### フェーズ 3: 3D背景 (Three.js) の実装
1. `CityParticles.tsx`: Three.jsのパーティクルシステム、ジオメトリラインを実装。
2. マウスの追従・リサイズ対応・アンマウント時のクリーンアップ（メモリリーク防止）。
3. 高DPI対応とGPU負荷の最適化。

### フェーズ 4: NYスタイル UI コンポーネント群の実装
1. **Hero**: 大胆な見出し（"CREATIVE DEVELOPER & ARCHITECT" など）、NYタクシーイエローのアクセント、ステータス表示。
2. **Projects Grid**: 雑誌の図録のようなミニマルグリッド、ホバー時に浮かび上がる情報、クリックでモーダル起動。
3. **Project Modal**: 高解像度プレビュー、技術タグ、外部リンクボタン、ESCキーおよび背景クリックでの閉じる処理。
4. **Skills & About**: 整然としたモノトーンのグリッド構造、インダストリアル調メタ情報。
5. **Footer**: コピーライト、タイムゾーン表示、各種ソーシャルリンク。

### フェーズ 5: 検証・Vercelデプロイ最適化
1. TypeScript型チェック (`tsc --noEmit`)。
2. プロダクションビルド検証 (`next build`)。
3. Vercelデプロイ用のリポジトリ構成確認。

