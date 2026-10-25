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

## 工作方式

- 改版**分阶段执行**：每完成一个阶段就停下，说明该在浏览器里看哪个页面（http://localhost:8080/...），等用户确认后再进入下一阶段。

## 本地运行

不要用 Dev Container，使用仓库里的 `docker-compose.yml`：

```sh
docker compose up -d        # 启动
docker compose logs -f      # 查看构建日志
docker compose down         # 停止
```

预览地址：http://localhost:8080 。修改其他文件会自动重建；但 Windows 上的挂载收不到文件事件，**修改 `_config.yml` 后必须手动 `docker compose restart`**。
