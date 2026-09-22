# GitHub Workflow

GitHub is the source of truth for the QFlow codebase.

## Repository Setup

1. Create or select the QFlow repository.
2. Add the repository URL to the project records.
3. Protect the default branch before accepting production changes.
4. Store deployment secrets in GitHub or the hosting provider, not in committed files.

## Recommended Branches

- `main`: production-ready code
- `develop`: integration branch, if the team needs one
- `feature/<short-name>`: focused work branches
- `fix/<short-name>`: bug fixes

## Pull Request Checklist

- [ ] The change has a focused description.
- [ ] Secrets and local files are excluded.
- [ ] The API starts successfully.
- [ ] Relevant endpoint or integration checks pass.
- [ ] Documentation is updated when behavior changes.

## Local Commands

```powershell
git status
git add .
git commit -m "Describe the change"
git push
```

Related notes: [[Varcel]] | [[Server]] | [[Account]]
