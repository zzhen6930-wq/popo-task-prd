# POPO-CLI 已上线

支持 **IM、云文档、电子表格、多维表格、日程/会议室** 共 5 个 Skills，已验证通路。Codemaker 发送 IM 消息举例：

---

## 安装 POPO-CLI 支持 2 种方式

### 方式一：通过终端命令安装

1. 本地终端输入：

   ```bash
   curl -fsSL https://popo.gdl.netease.com/install-v1.sh -o /tmp/install.sh && bash /tmp/install.sh && rm -f /tmp/install.sh
   ```

2. CLI 自动识别本地已安装的 Agent，手动选择安装的目标
3. 自动弹出 Open id 登录，登录后确认授权，提示授权成功！
4. 完成授权，终端显示 CLI 安装成功

### 方式二：将 URL 发给 Agent（Codemaker、Claude Code、龙虾等），通过 Agent 安装

1. 给 Agent（包括 OpenClaw）发送命令：

   ```
   https://popo.gdl.netease.com/popo-cli-installation-guide-v1.md，使用链接内容安装
   ```

2. 自动检测本地已安装的 Agent，让你确认是否安装到这个 Agent（如果本地只有 OpenClaw，让你确认是否安装到 OpenClaw），输入确认
3. OpenClaw 自动打开 Open id 登录页（在电脑上打开），登录后确认授权，页面提示授权成功！
4. 龙虾机器人显示安装成功

---

## 体验 CLI

1. 在 **Codemaker** 中直接输入：`帮我给XX（人名）发送一条POPO消息：Hello`，查看消息是否发送成功。
2. 在 **龙虾机器人** 中输入：`帮我给XX（人名）发送一条POPO消息：Hello`，查看消息是否发送成功。

> **PS：** 若使用其余 Skills 体验，请在命令中说明「使用 POPO-CLI 的 Skill 创建云文档」，防止 Agent 自动选择插件内置 Skill。
