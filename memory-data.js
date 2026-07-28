// 记忆原型共享数据：Agent 智能体 → 会话 sessions → 记忆文件 files
// kind: diary(原始记忆) / topic(主题记忆) / core(核心记忆)
const AGENTS = [
  {
    id:"agent_notebook", name:"NoteBook 助手", desc:"协同办公智能助手", ava:"📓", agentType:"team",
    avaColor:"linear-gradient(135deg,#6366f1,#8b5cf6)", creator:"青远", lastDream:"今天 03:20",
    sessions:[
      {
        id:"p2p_user_abc123", type:"p2p", source:"user_abc123（青远/张振）", updated:"2026-07-28 14:30",
        files:{
          "profile.md":{ kind:"core", body:`# 青远（张振） — 私聊会话\n\n## 会话基本信息\n- 会话类型：私聊\n- 用户角色/职位：AI 产品经理\n- 所在团队/部门：协同办公产品线\n\n## 用户画像\n- 沟通风格：直接、要结论\n- 喜欢的呈现方式：结构化、表格\n- 关注的重点领域：Agent 记忆机制、自动化任务\n- 其他习惯：不喜欢 emoji 堆砌\n\n## 会话主题\n- 常讨论的话题：产品需求、原型评审\n- 当前聚焦：记忆机制 V2` },
          "curated.md":{ kind:"core", body:`# MEMORY.md\n\n## 精选记忆\n- 用户偏好：不要用 emoji，沟通直接给结论\n- 周报格式：按项目组织，不按时间线\n- 用户身份：AI 产品经理，负责协同办公工具\n\n## 主题索引\n- projects/记忆机制V2.md：本期会话记忆的 PRD 与排期\n- people/李四.md：产品经理，需求梳理\n- decisions/v2上线时间.md：定在 9 月 15 日\n\n## 访问边界声明\n- 本文件为 p2p_user_abc123 的隔离记忆\n- 其他会话无法访问此文件内容` },
          "diary/2026-07-28.md":{ kind:"diary", body:`# 2026-07-28\n\n- 用户询问 v2.0 排期，确定 9 月 15 日上线\n- 用户偏好：喜欢结构化、深入的技术说明\n- [待办] 数据看板需求待评审，下周一对齐\n- [观察] 用户倾向于先调研再决策` },
          "diary/2026-07-27.md":{ kind:"diary", body:`# 2026-07-27\n\n- 讨论记忆机制分层：原始/主题/核心三层\n- 用户明确：本期只做会话维度记忆\n- [决策] 记忆采用 Markdown 文件存储` },
          "projects/记忆机制V2.md":{ kind:"topic", body:`# 记忆机制V2\n\n## 项目概况\n- 目标：为 Agent 建立分层、物理隔离的记忆系统\n- 负责人：青远（张振）\n- 当前阶段：原型评审\n- 关键时间节点：9 月 15 日上线\n\n## 关键决策\n- 2026-07-27：本期只做会话维度记忆\n- 2026-07-27：记忆采用 Markdown 文件存储\n\n## 待跟进事项\n- [ ] 数据看板需求评审（李四 / 下周一）` },
          "people/李四.md":{ kind:"topic", body:`# 李四\n\n## 基本信息\n- 角色/职位：产品经理\n- 负责的领域：需求梳理与排期\n\n## 沟通偏好\n- 表达风格：详细、喜欢列表\n\n## 备注\n- 数据看板需求提出人` },
          "decisions/v2上线时间.md":{ kind:"topic", body:`# v2 上线时间\n\n## 决策内容\n- 上线时间定在 2026-09-15（张三拍板）\n\n## 决策影响\n- 排期倒推：8 月底前完成开发\n\n## 相关方\n- 张三（技术负责人）、青远（产品）` },
        }
      },
      {
        id:"group_xyz789", type:"group", source:"group_xyz789（v2.0 项目核心决策群）", updated:"2026-07-28 15:02",
        files:{
          "profile.md":{ kind:"core", body:`# v2.0 项目核心决策群 — 群聊会话\n\n## 会话基本信息\n- 会话类型：群聊\n- 群类型：项目群\n- 群人数：12\n\n## 群主题\n- 主要方向：v2.0 记忆机制研发\n- 当前聚焦：分层架构与物理隔离\n\n## 群氛围\n- 沟通风格：技术向、直接\n- 信息敏感度：内部\n\n## 群规与约定\n- 决策以群公告为准\n\n## 备注\n- 决策拍板人：张三` },
          "curated.md":{ kind:"core", body:`# MEMORY.md\n\n## 精选记忆\n- 群定位：v2.0 项目核心决策群\n- 沟通节奏：快、直接、只说关键信息\n- 张三：技术负责人，技术方案最终拍板人\n- 李四：产品经理，负责需求梳理和排期\n\n## 主题索引\n- projects/v2.0记忆机制.md\n- people/张三.md、people/李四.md\n- decisions/上线时间.md\n\n## 访问边界声明\n- 本文件为 group_xyz789 的隔离记忆` },
          "diary/2026-07-28.md":{ kind:"diary", body:`# 2026-07-28\n\n- 讨论 v2.0 排期，定在 9 月 15 日上线，张三主张提前一周\n- 李四提出数据看板需求，待下周评审\n- [观察] 群沟通节奏快，倾向只说关键信息` },
          "projects/v2.0记忆机制.md":{ kind:"topic", body:`# v2.0 记忆机制\n\n## 项目概况\n- 目标：分层、物理隔离的会话记忆\n- 负责人：张三（技术）/ 李四（产品）\n- 当前阶段：开发\n- 关键节点：9 月 15 日上线\n\n## 待跟进事项\n- [ ] 数据看板需求评审\n- [ ] 技术方案评审排期` },
          "people/张三.md":{ kind:"topic", body:`# 张三\n\n## 基本信息\n- 角色：技术负责人\n- 负责：v2.0 记忆机制技术方案\n\n## 行为模式\n- 决策风格：快速拍板\n\n## 备注\n- 技术方案最终拍板人` },
          "people/李四.md":{ kind:"topic", body:`# 李四\n\n## 基本信息\n- 角色：产品经理\n- 负责：需求梳理和排期\n\n## 备注\n- 数据看板需求提出人` },
          "decisions/上线时间.md":{ kind:"topic", body:`# 上线时间\n\n## 决策内容\n- v2.0 上线时间定在 2026-09-15\n\n## 相关方\n- 张三、李四` },
        }
      },
      {
        id:"p2p_user_def456", type:"p2p", source:"user_def456（王五）", updated:"2026-07-28 10:12",
        files:{
          "diary/2026-07-28.md":{ kind:"diary", body:`# 2026-07-28\n\n- 用户首次咨询发布播报配置\n- [待办] 明确 Webhook 回调格式` },
        }
      },
    ],
    dreams:[
      { date:"2026-07-28 03:20", session:"group_xyz789", lines:["处理群日记 8 条，压缩沉淀 3 条","更新 projects/v2.0记忆机制.md","新增 people/张三.md 画像"] },
      { date:"2026-07-28 03:12", session:"p2p_user_abc123", lines:["处理当日日记 6 条，去重后沉淀 2 条","新增 decisions/v2上线时间.md","核心记忆新增：周报按项目组织"] },
    ]
  },
  {
    id:"agent_publish", name:"发布播报 Agent", desc:"版本发布自动播报", ava:"📢", agentType:"personal",
    avaColor:"linear-gradient(135deg,#f59e0b,#ef4444)", creator:"王五", lastDream:"昨天 03:08",
    sessions:[
      {
        id:"group_rel001", type:"group", source:"group_rel001（发布通知群）", updated:"2026-07-27 19:40",
        files:{
          "profile.md":{ kind:"core", body:`# 发布通知群 — 群聊会话\n\n## 群主题\n- 版本发布播报、回滚通知\n\n## 群规与约定\n- 播报统一走机器人\n- 重大变更 @全体` },
          "curated.md":{ kind:"core", body:`# MEMORY.md\n\n## 精选记忆\n- 群定位：发布通知群\n- 播报格式：版本号 + 变更摘要 + 负责人\n\n## 主题索引\n- projects/发布流程.md` },
          "diary/2026-07-27.md":{ kind:"diary", body:`# 2026-07-27\n\n- 完成 v1.8 发布播报\n- [观察] 群成员关注回滚预案` },
          "projects/发布流程.md":{ kind:"topic", body:`# 发布流程\n\n## 项目概况\n- 标准发布播报流程\n\n## 待跟进\n- [ ] 补充灰度发布话术` },
        }
      },
    ],
    dreams:[
      { date:"2026-07-27 03:08", session:"group_rel001", lines:["处理日记 3 条，沉淀发布话术 1 条"] },
    ]
  },
];
