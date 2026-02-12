---
name: lightspec-new
description: Create a new change proposal for tracking work
disable-model-invocation: true
metadata:
  sync:
    version: 2
    hash: sha256-7fc8373222bedc4efeb388bf4c730ba73ccf23996c82ce21bebfc22a751e123e
---
Create a new change proposal to track development work.

## Usage

Use this skill when starting a new feature, bug fix, or any tracked work.

## What This Does

1. Creates a new change directory under `lightspec/changes/<name>/`
2. Creates change metadata for tracking
3. Optionally adds a README.md with description

## Implementation

Use the CLI command:
```bash
lightspec new change <name> [options]
```

### Options

- `--description <text>`: Description to add to README.md
- `--schema <name>`: Workflow schema to use (default: spec-driven)

### Example

```bash
# Create a new change
lightspec new change add-user-authentication --description "Add OAuth2 authentication"

# Or use default description
lightspec new change refactor-database
```

This creates the change structure and makes it ready for artifact creation.
