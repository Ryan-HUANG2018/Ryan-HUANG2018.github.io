# CLAUDE.md

本仓库是基于 al-folio 的 Jekyll 个人主页。

## 设计规格（必须遵守）

- 改版设计规格在 [docs/redesign/REDESIGN.md](docs/redesign/REDESIGN.md)，参考稿为 `docs/redesign/Main.dc.html`（首页）和 `docs/redesign/Project.dc.html`（仿真项目页）。
- **以后每次改动都必须遵守 REDESIGN.md**：动手前先读一遍，颜色、字体、布局、组件和 front matter 约定以它为准；如果需求和规格冲突，先提出来再改。
- `docs/redesign/` 已在 `_config.yml` 的 `exclude` 中，不会被发布，不要把它移出 exclude。

## 本地运行

不要用 Dev Container，使用仓库里的 `docker-compose.yml`：

```sh
docker compose up -d        # 启动
docker compose logs -f      # 查看构建日志
docker compose down         # 停止
```

预览地址：http://localhost:8080 。修改 `_config.yml` 后容器会自动重启 Jekyll。
