---
name: deploy-workflow
description: Workflow for deploying and bumping a new version of LightSpec
disable-model-invocation: false
metadata:
  sync:
    version: 2
    hash: sha256-73b8634fddeb723c7fb88dcc90c0475c91f802ed3a0a8e0764db12c48270a3c5
---

Follow these step closely.

1. create a branch named releases/release-start-YYYY-MM-DD
2. run `pnpm changeset`
3. open a PR (using gh)
4. approve the PR (using gh if needed)
5. wait for the CI to create the build
6. run `pnpm run release:manual`
