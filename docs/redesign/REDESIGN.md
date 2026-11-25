# 主页改版说明（给 Claude Code 的设计规格）

本仓库基于 al-folio（Jekyll）。目标：在保留 al-folio 内容结构（`_news`、`_projects`、`_bibliography`、`_data`）的前提下，把外观改成深色、带"仿真软件界面"感的科技风，并以 CFD 仿真动画为核心展示内容。

参考稿：`docs/redesign/Main.dc.html`（首页）与 `docs/redesign/Project.dc.html`（仿真项目页）。它们是设计稿，不是可直接部署的页面；里面的内联样式、颜色和布局就是要还原的效果。

## 0. 2026-11 玻璃风格改版（优先于下文的冲突项）

2026-11-25 用户确认：在保留深色底、青色主色和全部内容结构的前提下，把外观从"终端/网格"风改成"磨砂玻璃 + 便当格（bento）"风。参考稿是 Claude 做的预览页（私有 Artifact，链接记在本次改版 PR 的说明里）。下文 §1–§5 与本节冲突的，以本节为准；没提到的继续沿用。

**视觉**

| 项目 | 取值 |
|---|---|
| 页面背景 | `#070B12`，不再用 48px 网格；背后固定一层大幅模糊（约 70px）的仿真截图，再盖一层深色径向渐变压暗 |
| 玻璃面板 | 背景 `rgba(255,255,255,.055)`，边框 `rgba(255,255,255,.12)`，`backdrop-filter: blur(22px) saturate(1.4)`，顶部 1px 内高光 + 柔和投影 |
| 圆角 | 大面板 28px，卡片/图片 20px，小块 14px，按钮和标签全部胶囊形（999px） |
| 主色 | 不变：`#3FE0D0`；突出的指标卡用青色半透明渐变实底 |
| 第二强调色 | `#F2A57E`（暖橙），只用于"方法排行"的前三名 |
| 字体 | 标题 Space Grotesk；正文 Inter；JetBrains Mono 只用于标签、数字和小号元数据，不再用于导航和正文 |
| 卡片悬停 | 边框变 accent + 外发光 + 上移 3px（同原规则） |

**导航**：悬浮的玻璃胶囊（离顶 14px），左边圆形头像 + `Q.HUANG // fluid dynamics`，中间文字链接 Simulations / Publications / In the field / News / CV（不再加 01、02 编号），当前页白底高亮，右边青色实心 Contact 按钮。

**章节标题**：去掉等宽编号，只留标题；标题下可加一行说明。

**首页结构**

1. 首屏便当格：左边大玻璃卡（状态胶囊、姓名、一句话定位、简介、按钮组），右边人像卡（`hero.portrait`，底部叠玻璃标签写职位）。
2. 指标：每个指标一张卡，第一张用青色实底；快照日期和来源放在卡片下方一行小字。
3. 仿真视口 + 方法排行并排：视口同原规范；排行卡统计每种方法出现在几个项目的 `stack:` 里，前 7 名，横条长度按比例。完整 TOOLKIT 列表放进可展开的"Full toolkit"面板，默认收起。
4. Simulations：排序第一的项目做主推大卡（占两列两行、自动播放），其余卡悬停播放。媒体放在 20px 圆角的"画框"里。
5. In the field：会议报告、合影等现场照片，数据在 `_data/field.yml`。首页只预览前 3 张（第一张为大图），超过 3 张时显示 "all N photos →" 链接；全部照片在单独页面 `/field/`（`_pages/field.md`），导航栏 In the field 指向该页面。`/field/` 底部有 "Beyond the lab" 生活照（`_data/life.yml`），每行三张，`size: wide` 占三分之二，`size: pano` 占整行。照片多于 3 张时按每项的 `size:`（big / wide / tall）排成拼贴。只放用户逐张确认过的照片；图片去掉 EXIF/GPS、长边不超过 1600px；列表为空时整块隐藏。
6. Publications、News、Connect 同原规范，套玻璃样式。News 大卡没有配图时显示带分类字样的发光占位，不留空白。

**不要做的事（补充）**：模糊的仿真画面是唯一允许的大面积背景；不要加纯色或彩色渐变大色块。

## 1. 视觉规范

| 项目 | 取值 |
|---|---|
| 页面背景 | `#06080C`，叠加 48px 网格线：`rgba(127,240,228,.045)` 1px |
| 卡片背景 | `#0A0F15`；卡片内媒体区 `#0D141C` |
| 边框 | 常规 `#1E2C38`；分隔线 `#16202A`；次要按钮 `#2A3946` |
| 主色（accent） | `#3FE0D0`（青色），链接 `#7FF0E4`，悬停 `#C9FFF8` |
| 文字 | 主 `#E8F1F5`；正文 `#C3CFD8` / `#A9B7C2`；辅助 `#8A9BA8` |
| 状态灯 | `#5BE38A`，2s 呼吸动画 |
| 标题字体 | Space Grotesk（400/500/700） |
| 标签/数据字体 | JetBrains Mono（400/500） |
| 圆角 | 卡片 10–12px，按钮 6px，标签 4px，筛选胶囊 999px |
| 卡片悬停 | 边框变 accent + `0 0 32px rgba(63,224,208,.18)` 外发光 + 上移 2px |
| 章节标题 | 前面加等宽字体编号（`01`、`02`…），颜色为 accent |

只用深色主题即可；al-folio 自带的明暗切换可以保留但默认深色，或直接关闭。

## 2. 首页结构（自上而下）

1. **吸顶导航**：左侧 `R.HUANG // fluid dynamics` + 发光小方块；右侧等宽字体链接 `01 simulations / 02 publications / 03 news / 04 connect / 05 cv`。
2. **首屏**：左边状态行（呼吸灯 + 机构名）、大号姓名、研究方向一句话、简介、按钮组（Download CV 实心、Google Scholar、GitHub、Teraviq 描边）。右边"仿真视口"：顶栏 `VIEWPORT · VORTICITY |ω|` + `● LIVE`，中间自动循环播放的 CFD 动画（`<video autoplay muted loop playsinline>`），底部四格参数条（Re / MODEL / SOLVER / CELLS）。
3. **01 Simulations**：来自 `_projects` 集合的卡片网格（`auto-fill, minmax(340px, 1fr)`），卡片顶部是动画预览（悬停时播放），下面是标题、一句话说明、等宽技术标签。上方有分类筛选胶囊（All / Turbulence / Multiphase / Heat transfer），按 front matter 的 `category` 过滤。
4. **02 Publications**：沿用 `_bibliography/papers.bib` + jekyll-scholar，重写样式为：左列年份（accent 色等宽字体）、右列标题/作者/期刊、`[PDF] [DOI] [BibTeX] [Video]` 等宽链接。
5. **03 News**：左边一张"最新"大卡片（带配图或短动画），右边按时间倒序的列表，每条有分类标签（SIMULATION / PAPER / TERAVIQ / TALK / AWARD）。数据来自 `_news`，在 front matter 加 `category` 字段；大卡片取最新一条中标记 `featured: true` 的。
6. **04 Connect**：
   - Teraviq 横幅卡片：`Tq` 方形图标、`MY PROJECT · FOUNDER`、`IN DEVELOPMENT` 呼吸灯标签、标题 Teraviq + 斜体标语 "From heartbeats to wingbeats."、介绍"Simulating how fluids and structures interact, at scale."、按钮 `teraviq.com ↗` 指向 https://www.teraviq.com/
   - 社交账号网格：GitHub、Google Scholar、ResearchGate、LinkedIn、Bluesky、X、Email。图标统一用等宽字母缩写方块（GH / GS / RG / in / bs / X / @），不用平台官方标志。链接从 `_data/socials.yml`（或本版本 al-folio 实际使用的社交配置位置）读取。
7. **页脚**：`© 2026 Ryan Huang · built with Jekyll` 与 `t = [最后更新时间] · residuals converged ✓`。

## 3. 仿真项目页（`_projects/*.md` 的布局）

新建布局 `_layouts/simulation.liquid`（或改造现有 project 布局）：

- 顶部返回链接 + 序号 `SIM-01 / 06`
- 技术标签、大标题、一段摘要
- **主播放器**：上方物理场切换按钮（Vorticity / Velocity / Pressure / Q-criterion，按 front matter 的 `fields` 列表生成，每个场一个视频文件），右上角色标条，下方播放/暂停按钮 + 进度条 + 无量纲时间 `t*`
- 四张参数卡：Reynolds number / Mesh / Turbulence model / Compute
- 正文：§1 Setup（支持 MathJax 公式）、§2 Results（两栏图片）
- 右侧边栏：Related paper、Case files on GitHub、Full-res video

建议 front matter：

```yaml
layout: simulation
title: Vortex shedding behind a circular cylinder
category: Turbulence
tags: [LES, OpenFOAM, 3D]
summary: ...
thumbnail: assets/video/cylinder/preview.webm
fields:
  - { name: Vorticity, src: assets/video/cylinder/vorticity.webm }
  - { name: Velocity,  src: assets/video/cylinder/velocity.webm }
params: { re: "3,900", mesh: "12.4M cells", model: "WALE LES", compute: "2,400 core-h" }
links: { paper: ..., code: ..., video: ... }
```

## 4. 动画素材约定

- 格式：首选 `.webm`（VP9），附 `.mp4`（H.264）作后备；网页里用 `<video autoplay muted loop playsinline>`，加 `poster` 首帧图。
- 卡片预览：720p 以内、5–10 秒循环、单个不超过约 3 MB；项目页主视频 1080p。
- 存放：`assets/video/<项目名>/`。GitHub 单文件上限 100 MB，仓库总量建议控制在 1 GB 以内；超大的完整视频放 YouTube 等平台再链接。
- 尊重 `prefers-reduced-motion`：开启时不自动播放。

## 5. 不要做的事

- 不要删除 al-folio 的内容管线（jekyll-scholar、collections、CV 生成）。
- 不要引入渐变大色块背景；科技感来自网格、等宽字体、细边框和发光。
- 占位内容用 `[方括号]` 标出，不要编造论文、数据或经历。
