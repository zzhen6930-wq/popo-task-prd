// 记忆原型共享数据（对齐 PRD：两层记忆结构）
// 结构：session_memory/<session_id>/ ├── memory.md（长期记忆） └── daily/YYYY-MM-DD.md（每日笔记）
// kind: daily(每日笔记) / longterm(长期记忆)
const AGENTS = [
  {
    id:"agent_notebook", name:"NoteBook 助手", desc:"协同办公智能助手", ava:"📓", agentType:"team",
    avaColor:"linear-gradient(135deg,#6366f1,#8b5cf6)", creator:"青远", lastDream:"今天 03:20",
    sessions:[
      {
        id:"p2p_user_abc123", type:"p2p", source:"user_abc123（青远/张振）", updated:"2026-07-28 14:30",
        files:{
          "memory.md":{ kind:"longterm", body:`# 长期记忆\n\n## 用户偏好\n- 用户偏好：用表格呈现结论，沟通直接给结论\n- 周报格式：按项目组织，不按时间线\n- 不喜欢 emoji 堆砌\n\n## 背景信息\n- 用户负责 AI 产品经理工作，负责协同办公工具\n\n## 决策\n- [决策] v2.0 上线时间定在 9 月 15 日（张三拍板）\n- [决策] 记忆采用 Markdown 文件存储\n\n## 待办事项\n- [待办] 数据看板需求待评审，李四负责，下周一对齐\n\n## 观察 / 假设\n- [观察] 用户倾向于先调研再决策` },
          "daily/2026-07-28.md":{ kind:"daily", body:`# 2026-07-28\n\n- 用户询问 v2.0 排期，确定 9 月 15 日上线\n- 用户偏好：喜欢结构化、深入的技术说明\n- [待办] 数据看板需求待评审，下周一对齐\n- [观察] 用户倾向于先调研再决策` },
          "daily/2026-07-27.md":{ kind:"daily", body:`# 2026-07-27\n\n- 讨论记忆机制：改为两层结构（每日笔记 + 长期记忆）\n- 用户明确：本期只做会话维度记忆\n- [决策] 记忆采用 Markdown 文件存储` },
          "daily/2026-07-25.md":{ kind:"daily", body:`# 2026-07-25\n\n- 梳理竞品记忆方案，趋同于"每日日记 + 长期记忆"两层\n- [观察] 用户关注记忆的物理隔离` },
        }
      },
      {
        id:"group_xyz789", type:"group", source:"group_xyz789（v2.0 项目核心决策群）", updated:"2026-07-28 15:02",
        files:{
          "memory.md":{ kind:"longterm", body:`# 长期记忆\n\n## 背景信息\n- 群定位：v2.0 项目核心决策群，12 人\n- 沟通节奏：快、直接、只说关键信息\n\n## 成员偏好\n- 张三：技术负责人，技术方案最终拍板人\n- 李四：产品经理，负责需求梳理和排期\n\n## 决策\n- [决策] v2.0 上线时间定在 9 月 15 日（张三拍板）\n\n## 待办事项\n- [待办] 数据看板需求评审，李四负责，下周\n- [待办] 技术方案评审排期，张三负责\n\n## 观察 / 假设\n- [观察] 群沟通倾向只说关键信息` },
          "daily/2026-07-28.md":{ kind:"daily", body:`# 2026-07-28\n\n- 讨论 v2.0 排期，定在 9 月 15 日上线，张三主张提前一周\n- 李四提出数据看板需求，待下周评审\n- [观察] 群沟通节奏快，倾向只说关键信息` },
          "daily/2026-07-26.md":{ kind:"daily", body:`# 2026-07-26\n\n- 确认记忆机制两层结构方案\n- 张三主张不过度设计` },
        }
      },
      {
        id:"p2p_user_def456", type:"p2p", source:"user_def456（王五）", updated:"2026-07-28 10:12",
        files:{
          "daily/2026-07-28.md":{ kind:"daily", body:`# 2026-07-28\n\n- 用户首次咨询发布播报配置\n- [待办] 明确 Webhook 回调格式` },
        }
      },
    ],
    dreams:[
      { date:"2026-07-28 03:20", session:"group_xyz789", lines:["拉取当日每日笔记 6 条","压缩去重后抽取决策 1 条、待办 2 条","增量合并写入 memory.md（无冲突）"] },
      { date:"2026-07-28 03:12", session:"p2p_user_abc123", lines:["拉取当日每日笔记 4 条","抽取用户偏好 1 条：周报按项目组织","写入 memory.md，标注时间戳"] },
    ]
  },
  {
    id:"agent_publish", name:"发布播报 Agent", desc:"版本发布自动播报", ava:"📢", agentType:"personal",
    avaColor:"linear-gradient(135deg,#f59e0b,#ef4444)", creator:"王五", lastDream:"昨天 03:08",
    sessions:[
      {
        id:"group_rel001", type:"group", source:"group_rel001（发布通知群）", updated:"2026-07-27 19:40",
        files:{
          "memory.md":{ kind:"longterm", body:`# 长期记忆\n\n## 背景信息\n- 群定位：发布通知群\n- 播报格式：版本号 + 变更摘要 + 负责人\n\n## 决策\n- [决策] 播报统一走机器人，重大变更 @全体\n\n## 待办事项\n- [待办] 补充灰度发布话术` },
          "daily/2026-07-27.md":{ kind:"daily", body:`# 2026-07-27\n\n- 完成 v1.8 发布播报\n- [观察] 群成员关注回滚预案` },
        }
      },
    ],
    dreams:[
      { date:"2026-07-27 03:08", session:"group_rel001", lines:["拉取当日每日笔记 3 条","抽取发布话术 1 条","写入 memory.md"] },
    ]
  },
];
