# 修正内容の確認 (Walkthrough) - NYスタイル ポートフォリオサイト

## 1. 概要

本プロジェクトでは、Vercelでの高速・安全なホスティングを前提とした、**「NYスタイル（エディトリアル×インダストリアル・モダン）」**の個人向け技術ポートフォリオWebサイトを構築しました。

高い匿名性を保ちつつ（イニシャル `MTM`、抽象化された開発実績、差し替え容易なリンク構成）、モダンなWebエンジニアリング能力とクリエイティブな表現力をアピールできる設計となっています。

---

## 2. 実装した主要機能とデザイン特徴

### 🗽 NYスタイル デザインシステム
- **タイポグラフィ**: 
  - 見出しに格式あるエディトリアル調セリフ体（`Playfair Display`）
  - 本文・UIに機能的なグロテスクサンセリフ（`Space Grotesk`）
  - メタ情報・ロット番号にインダストリアル調等幅フォント（`JetBrains Mono`）
- **カラーリング**:
  - ベース：漆黒（`#09090b`）
  - 面（Card）：アスファルトグレー（`#121215`）
  - アクセント：**キャブイエロー（`#facc15`）**（NYタクシーのシグネチャーカラー）
  - 境界線：1px極細ヘアラインボーダー（`rgba(255, 255, 255, 0.1)`）
- **インダストリアル・ディテール**:
  - `[001]`, `INDEX // 02`, `DOC.REF // PROJECT-01` などの図録風ロット番号表記
  - ヘッダーに **NYC & TYO のリアルタイム・ワールドクロック** と稼働ステータスランプを配置

### 🌌 Three.js インタラクティブ3D背景 (`CityParticles.tsx`)
- マンハッタンの摩天楼や夜の街の光をモチーフにした 1,800 個のパーティクルシステム。
- マウスの動きに呼応して滑らかにカメラが追従（Parallax視差効果）。
- 地面に設置された幾何学グリッドライン。
- コンポーネント破棄時のメモリ解放（`geometry.dispose()`, `material.dispose()`, `cancelAnimationFrame`）を徹底し、メモリリークを防止。

### 📦 制作実績ギャラリー＆詳細モーダル (`ProjectsSection.tsx`, `ProjectModal.tsx`)
- アートギャラリーの図録のようなカタロググリッドレイアウト。
- カードをクリックすると、技術スタック・詳細解説・ハイライト・外部リンクを含むモーダルがスムーズに展開。
- `ESC` キー押下や背景オーバーレイのクリックで直感的にクローズ可能。

---

## 3. データの更新・カスタマイズ方法

掲載内容はすべてローカルのTypeScriptファイルで一元管理されています。コードを修正してGit pushするだけで、Vercelに即座に反映されます。

### ① プロフィール・アカウント情報の変更
📁 **[`src/data/profile.ts`](file:///c:/Users/motou/OneDrive/デスクトップ/dev/portfolio_mtm/src/data/profile.ts)**
- 表示名: `MTM`
- 肩書き: `Full-Stack & Cloud / Generative AI Engineer`
- GitHub: `https://github.com/mtrtrdev`
- Qiita: `https://qiita.com/motorola`
- 実務経験スキルスタック（※年数は匿名性向上のため伏せ、担当領域・技術領域のみを明記）:
  - クラウド & 生成AI（AWS, Azure, Azure OpenAI / AWS Bedrock, GCP Vertex AI）
  - 言語 & バックエンド（PHP, Python, JS/HTML/CSS, TypeScript, Java）
  - データベース & データ連携（MySQL/MariaDB, Oracle, CData, Appian）
  - OS & インフラ（Linux/CentOS, Windows Server, 仮想DC/プライベートクラウド）

### ② 制作実績（プロジェクト）の管理
📁 **[`src/data/projects.ts`](file:///c:/Users/motou/OneDrive/デスクトップ/dev/portfolio_mtm/src/data/projects.ts)**
- 制作実績として、実際のプロダクトである**『継 TSUKUGI』金継ぎデジタルギャラリー＆ブランドLP** を掲載。
- 外部3D/音声アセットなしの数式プロシージャル生成（LCP 1.2s未満 / 60fps）、5幕スクロール演出、27通りの誂え機能、公式LINE成約導線などの技術的特長を網羅。
- 実物のキャプチャ画像（`public/images/projects/tsukugi.jpg`）を雑誌見開き風の大判レイアウトおよび詳細モーダルに適用。

---

## 4. Vercel へのデプロイ手順

本プロジェクトは Vercel に最適化されており、**設定不要（Zero-config）**で即時デプロイ可能です。

1. **GitHub にリポジトリを作成してプッシュする**:
   ```bash
   git add .
   git commit -m "feat: complete NY-style portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. **Vercel にログイン・連携する**:
   - [Vercel Dashboard](https://vercel.com/) にアクセスし、**「Add New...」→「Project」** を選択。
   - 作成した GitHub リポジトリをインポート。
   - Framework Preset: `Next.js` が自動認識されます。
   - **「Deploy」** ボタンをクリック。
3. **完了**:
   - 数十秒でビルドが完了し、`https://your-portfolio.vercel.app` で全世界に公開されます。

---

## 5. 検証結果

- **ビルドテスト**: `npm run build` を実行し、TypeScript型チェックおよび静的HTMLプリレンダリングが**エラーなし（0 warnings / 0 errors）**で通過することを確認済み。

