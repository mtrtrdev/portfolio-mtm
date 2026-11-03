import { Profile, SkillCategory } from "@/types";

export const profileData: Profile = {
  name: "MTM",
  initials: "MTM",
  handle: "@mtrtrdev",
  role: "Full-Stack & Cloud / Generative AI Engineer",
  location: "TOKYO, JAPAN [UTC+9]",
  statement:
    "Architecting scalable cloud infrastructure, production generative AI integrations, and resilient web systems with enterprise-grade engineering rigor.",
  bio: "クラウド基盤（AWS / Azure）および生成AIモデル連携（Azure OpenAI / AWS Bedrock / Vertex AI）の開発・運用経験を持つエンジニア。PHPやPythonによるバックエンド開発から、Linuxサーバー構築、データベース設計、フロントエンドUI実装まで幅広く関わっています。エンジニアとしてのバックグラウンドや、個人開発・技術検証の取り組みについてまとめています。",
  socials: {
    github: "https://github.com/mtrtrdev",
    qiita: "https://qiita.com/motorola",
  },
};

export const skillsData: SkillCategory[] = [
  {
    category: "01 / CLOUD & GENERATIVE AI",
    skills: [
      { name: "AWS", level: "EC2, RDS, Lambda, ECS, CDK" },
      { name: "Microsoft Azure", level: "App Services, VMs, Ops" },
      { name: "Azure OpenAI & Bedrock", level: "LLM Deploy & API" },
      { name: "GCP Vertex AI", level: "Search PoC & Tuning" },
    ],
  },
  {
    category: "02 / LANGUAGES & BACKEND",
    skills: [
      { name: "PHP", level: "CakePHP, API & Architecture" },
      { name: "Python", level: "FastAPI, Flask, Streamlit" },
      { name: "JavaScript / HTML / CSS", level: "Modern Web UI" },
      { name: "TypeScript / React", level: "Component Development" },
      { name: "Java", level: "SDK Modules (Jackson)" },
    ],
  },
  {
    category: "03 / DATABASE & DATA",
    skills: [
      { name: "MySQL / MariaDB", level: "Schema Design & Tuning" },
      { name: "Oracle Database", level: "Log Audit & Maintenance" },
      { name: "CData / Integration", level: "Multi-Source Pipelines" },
      { name: "Appian", level: "Low-Code Platform Dev" },
    ],
  },
  {
    category: "04 / OS & INFRASTRUCTURE",
    skills: [
      { name: "Linux / CentOS", level: "Server Build & Batch Ops" },
      { name: "Windows Server", level: "Param Setup & Patching" },
      { name: "Virtual DC / Private Cloud", level: "Security & Operations" },
      { name: "CI / CD & Job Automation", level: "Cron, Pipelines & Monitoring" },
    ],
  },
];
