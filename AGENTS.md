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
