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
- 仿真视频原片文件夹同样**只读**。用法：复制到 `assets/video/<项目名>/`，再用 `jrottenberg/ffmpeg:6.1-ubuntu` 镜像（不要往网站容器里装 ffmpeg）生成 VP9 `.webm`、视频 40% 处的 poster，以及按卡片比例（约 1.9:1）裁好的 8 秒 `preview.webm`/`preview.jpg`。原 `.mp4` 保留作 H.264 后备。

## 已确认的规格调整（优先于 REDESIGN.md）

- 01 Simulations 的筛选分类是 **Cardiovascular / Bio-locomotion / FSI methods**（不是规格里的 Turbulence / Multiphase / Heat transfer），列表在 `_pages/about.md` 的 `simulations.categories`。
- 页脚右边有访问数（GoatCounter，`_config.yml` 的 `goatcounter_code`）和 "theme based on al-folio" 链接。
- 首屏下方有学术指标面板（`_pages/about.md` 的 `impact`）：数字必须带快照日期和来源；快照超过 3 个月时提醒用户更新。Journal papers 只计研究论文（不含社论）。
- 未确认的内容一律写成 `[占位]`，网页上不显示；整块没有内容就整块隐藏。不要编造论文、数据或经历。

## 工作方式

所有改动都按这个流程走，**不直接推送 `main`**：

1. **新分支**：从最新的 `main` 开一个新分支（`git pull` 后再 `git checkout -b <分支名>`）。
2. **本地预览**：用 docker compose 在 http://localhost:8080 预览，确认网站照常生成、改动的页面显示正常，并告诉用户该看哪个页面。
3. **PR**：推送分支，用 `gh pr create` 开 Pull Request。
4. **检查全部通过**：用 `gh pr checks` 等所有 GitHub Actions 检查通过（包括 Prettier 格式检查）。没通过就在同一分支上修好再推。
5. **用户确认后合并**：把 PR 链接和检查结果告诉用户，由用户决定是否合并。不要自己合并。

提交前用 Prettier 检查格式。CI 每次运行都会安装最新版 Prettier 和 Liquid 插件，所以本地要用同样的最新版本，并加 `--end-of-line auto`（Windows 下文件是 CRLF 换行）。`docs/redesign/` 在 `.prettierignore` 里，不格式化。

## 本地运行

不要用 Dev Container，使用仓库里的 `docker-compose.yml`：

```sh
docker compose up -d        # 启动
docker compose logs -f      # 查看构建日志
docker compose down         # 停止
```

预览地址：http://localhost:8080 。修改其他文件会自动重建；但 Windows 上的挂载收不到文件事件，**修改 `_config.yml` 后必须手动 `docker compose restart`**。
