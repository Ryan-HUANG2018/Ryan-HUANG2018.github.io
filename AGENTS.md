# Agents

Instructions for every AI agent working in this repository (Claude Code, Codex, Copilot or any other).

## This repository

The rules for this repository are in `CLAUDE.md`. Follow them, together with the shared rules below.

## Shared rules (all of the owner's repositories)

The authoritative text is section 13 of `AI_COLLABORATION_RULES.md` in the owner's private `ai-profile` repository, normally checked out next to this one as `../ai-profile`. In short:

- Sync with the remote (`git pull`) before you start. Never edit a clone that is behind.
- Before committing, run `python3 ../ai-profile/tools/check_claims.py .` and stop on any FAIL; the owner decides. The claims that must not be made are listed in `ai-profile/career/claims-denylist.tsv`. Do not copy that list into this repository.
- When you correct a claim, search every file and repository that may hold the same claim, not only the one in front of you.
- If you find an error that an AI wrote or copied in, add a line to `ai-profile/ai-error-log.md`. If `ai-profile` is not available in your session, list the error under "Errors found" in the pull request description.
- If `../ai-profile` is not available, say so. Never skip the check silently.
- Work on a branch and open a pull request. Only the owner merges.

## AI 录入来源（文档）
- AI 新建或实质性修改知识、评估、说明或学习文档时，在文档顶部以适合文件格式的方式记录 **AI 录入信息**：日期、平台、Agent、具体模型、模型依据和审核状态。保留原作者，修改时追加本次贡献信息；无法确认的模型写 `UNKNOWN`，不得猜测。该规则只适用于内部知识与说明记录，不向对外 CV、已发布网页/社交内容、原始 PPT、机器生成索引或财务数据强行加入署名；不构成写入、提交、发布或合并授权。
