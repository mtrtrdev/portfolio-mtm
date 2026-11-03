# タスクリスト (Task List) - ポートフォリオサイト構築 (NY Style)

## 概要
- **プロジェクト名**: NYスタイル ポートフォリオサイト (`portfolio_mtm`)
- **目的**: 個人の技術発信・アウトプット用ポートフォリオ（実験的UI・制作物公開・高匿名性）
- **ホスティング環境**: Vercel

---

## ステータス凡例
- [ ] 未着手 (Pending)
- [/] 進行中 (In Progress)
- [x] 完了 (Completed)

---

## タスク一覧

### Phase 1: プロジェクト基盤のセットアップ
- [x] Next.js (App Router) + TypeScript + Tailwind CSS プロジェクトの初期化
- [x] 必要なライブラリのインストール (`three`, `@types/three`, `lucide-react`, `clsx`, `tailwind-merge` 等)
- [x] NYスタイル用フォント設定（エディトリアル調セリフ体・モダンサンセリフ・モノスペース）
- [x] Tailwind CSSのテーマ拡張（NYカラーパレット：漆黒、アスファルト、キャブイエロー等）

### Phase 2: データ設計・管理
- [x] 制作実績データの型定義とローカルデータ作成 (`src/data/projects.ts`)
- [x] 自己紹介・スキルデータの型定義と作成 (`src/data/profile.ts`)
- [x] プロジェクト用ビジュアルSVGの生成 (`public/images/projects/project-01~04.svg`)

### Phase 3: コンポーネント実装 (NYスタイル UI)
- [x] **Background / Canvas**: Three.jsによる都会の夜・摩天楼を想起させるインタラクティブ3Dパーティクル背景 (`CityParticles.tsx`)
- [x] **Header / Navigation**: エディトリアル調のミニマルナビゲーション、NYC/TYOワールドクロック表示 (`Header.tsx`)
- [x] **Hero Section**: 大胆なタイポグラフィ、キャッチコピー、NYインダストリアルデザイン (`HeroSection.tsx`)
- [x] **Projects Section**: 雑誌・図録風ギャラリーグリッド、ホバーエフェクト (`ProjectsSection.tsx`)
- [x] **Project Modal**: クリック時の詳細モーダル（画像、説明、使用技術バッジ、デモ/GitHubリンク） (`ProjectModal.tsx`)
- [x] **Skills & About Section**: 建築的グリッドと整然としたスキルスタック (`SkillsSection.tsx`)
- [x] **Footer**: 各種SNS/GitHubリンク、コピーライト、洗練されたクロージング (`Footer.tsx`)

### Phase 4: レスポンシブ対応・アクセシビリティ・品質調整
- [x] モバイル・タブレットでの表示最適化
- [x] Three.js背景のパフォーマンスチューニング（負荷軽減・リサイズ対応・メモリ破棄）
- [x] キーボード操作・モーダルフォーカス管理等のアクセシビリティ確認（ESCキーで閉じる等）

### Phase 5: ビルド検証・Vercelデプロイ準備
- [x] ローカルビルドテスト (`npm run build`) 通過
- [x] ESLint / TypeScript 型チェックの完全通過
- [x] Vercelデプロイ最適化（Zero-config静的出力）
