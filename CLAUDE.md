# CLAUDE.md

本仓库是基于 al-folio 的 Jekyll 个人主页。

## 设计规格（必须遵守）

- 改版设计规格在 [docs/redesign/REDESIGN.md](docs/redesign/REDESIGN.md)，参考稿为 `docs/redesign/Main.dc.html`（首页）和 `docs/redesign/Project.dc.html`（仿真项目页）。
- **以后每次改动都必须遵守 REDESIGN.md**：动手前先读一遍，颜色、字体、布局、组件和 front matter 约定以它为准；如果需求和规格冲突，先提出来再改。
- `docs/redesign/` 已在 `_config.yml` 的 `exclude` 中，不会被发布，不要把它移出 exclude。

## 姓名约定（优先于设计稿里的 "Ryan Huang" / "R.HUANG"）

- 网站显示的姓名：**Qiuxiang (Ryan) Huang**。其中 "(Ryan)" 用较细的灰色字体（字重 400、辅助灰色）。首屏大标题和页脚都用这个名字。
- 导航栏 logo：**Q.HUANG**，后面跟 `// fluid dynamics`。
- 页面 `<title>`、SEO / Open Graph / schema 元数据：用 "Qiuxiang (Ryan) Huang"。
- 论文作者署名格式：**Q. Huang**（名字首字母 + 姓）。

## 个人资料来源

- 本机路径写在 `CLAUDE.local.md`（不提交，仓库是公开的）。
- 用户的个人资料（ai-profile）：需要真实内容（简介、新闻、账号、论文等）时从这里找。**只读**：不要修改、移动或删除那个文件夹里的任何文件。从中整理的内容先列给用户确认，再写进本仓库。
- slides-library（用户的 PPT 索引仓库）同样**只读**，也是网站素材来源。网站需要的素材由 Claude 自己去 ai-profile 和 slides-library 里找，不要等用户逐条口述；找到的内容仍按上一条先列给用户确认。
- 仿真视频原片文件夹同样**只读**。用法：复制到 `assets/video/<项目名>/`，再用 `jrottenberg/ffmpeg:6.1-ubuntu` 镜像（不要往网站容器里装 ffmpeg）生成 VP9 `.webm`、视频 40% 处的 poster，以及按卡片比例（约 1.9:1）裁好的 8 秒 `preview.webm`/`preview.jpg`。原 `.mp4` 保留作 H.264 后备。

## 已确认的规格调整（优先于 REDESIGN.md）

- 01 Simulations 的筛选分类是 **Cardiovascular / Bio-locomotion / Heat transfer / FSI methods**（不是规格里的 Turbulence / Multiphase / Heat transfer），列表在 `_pages/about.md` 的 `simulations.categories`。
- 2026-11 起整体改成磨砂玻璃风格，规格见 REDESIGN.md §0（优先于该文件其余冲突项）。
- 2026-11-27 起有亮色主题（"暖纸"风）和日/月切换按钮，默认跟随系统，规格见 REDESIGN.md §0 的"亮色主题"。改样式时两套主题都要检查。
- TOOLKIT：首页显示"方法排行"卡（按项目 `stack:` 统计），完整列表在可展开的 Full toolkit 面板里。内容在 `_data/toolkit.yml`，每项按 `key` 自动链接到 `stack:` 里含这个 key 的仿真项目。项目页参数卡下方显示该项目的 `stack:`。工具和方法只写 ai-profile 里确认过或文件记载的，不凭印象加；某个项目用了什么，没有记录就不写进它的 `stack:`。
- 页脚右边有访问数（GoatCounter，`_config.yml` 的 `goatcounter_code`）和 "theme based on al-folio" 链接。
- In the field 照片区：首页只预览前 3 张，全部照片在单独页面 `/field/`（用户 2026-11-25 要求首页不要放太多照片）。`/field/` 底部有 "Beyond the lab" 生活照一栏，数据在 `_data/life.yml`、图片在 `assets/img/life/`，同样只放用户逐张选过的照片，不放家人、孩子、住处。数据在 `_data/field.yml`，只放用户逐张确认过的照片（照片里有他人）。图片去掉 EXIF/GPS、长边不超过 1600px，放在 `assets/img/field/`；原图在用户的照片库里，只读。
- 首屏下方有学术指标面板（`_pages/about.md` 的 `impact`）：数字必须带快照日期和来源；快照超过 3 个月时提醒用户更新。Journal papers 只计研究论文（不含社论）。
- 未确认的内容一律写成 `[占位]`，网页上不显示；整块没有内容就整块隐藏。不要编造论文、数据或经历。

## 内容规则（用户已确认）

- 每个仿真视频要写明出自哪篇论文；不确定出处时先问用户。已确认：二维塌陷流道（`collapsible-re`）出自 2021 年 JFM 论文，三维塌陷管（`collapsible-tube-3d`）出自 2024 年 Physics of Fluids 论文。
- 传热结果（热圆柱、狭窄流道）是博士期间的未发表工作：不在博士论文里，也没有发表成论文，只出现在早期 PPT 中。Re、Pr、Nu 等参数目前没有记录，页面不写数值，找到记录再补。
- 奖项不写评审分数；经费不写金额。
- 涉及患者数据（如冠状动脉几何）或合作方设计（如机械心脏瓣膜）的内容，公开前先问用户；仓库里不写具体数据来源。
- 待办事项记在 [docs/TODO.md](docs/TODO.md)（不发布）。求职意向、申请过的岗位等私人信息不写进本仓库（仓库是公开的）。

## 工作方式

所有改动都按这个流程走，**不直接推送 `main`**：

1. **新分支**：从最新的 `main` 开一个新分支（`git pull` 后再 `git checkout -b <分支名>`）。
2. **本地预览**：用 docker compose 在 http://localhost:8080 预览，确认网站照常生成、改动的页面显示正常，并告诉用户该看哪个页面。
3. **PR**：推送分支，用 `gh pr create` 开 Pull Request。
4. **检查全部通过**：用 `gh pr checks` 等所有 GitHub Actions 检查通过（包括 Prettier 格式检查）。没通过就在同一分支上修好再推。
5. **检查通过后合并**：用户 2026-11-25 同意 Claude 自己合并它开的 PR。所有检查通过后直接合并，再把 PR 链接和上线内容告诉用户。照片等需要用户确认的内容，仍要先确认再放进 PR。

提交前用 Prettier 检查格式。CI 用的是 `package.json` 里锁定的版本（Prettier 3.1.1、Liquid 插件 1.4.0），不是最新版；本地用 Node 镜像在仓库里 `npm install --no-save` 后运行 `npx prettier . --check --end-of-line auto`（Windows 下文件是 CRLF 换行，需要这个参数）。`docs/redesign/` 在 `.prettierignore` 里，不格式化。

## 本地运行

不要用 Dev Container，使用仓库里的 `docker-compose.yml`：

```sh
docker compose up -d        # 启动
docker compose logs -f      # 查看构建日志
docker compose down         # 停止
```

预览地址：http://localhost:8080 。修改其他文件会自动重建；但 Windows 上的挂载收不到文件事件，**修改 `_config.yml` 后必须手动 `docker compose restart`**。

## 共享规则

所有仓库共用的规则见 `AGENTS.md`：开始前先同步远程；关于用户的事实以 ai-profile 为准；提交前运行声明检查；更正时找全所有副本；发现 AI 写错的内容记入 ai-profile 的错误日志。
