# Vercel Deployment

Vercel is the intended hosting provider for the frontend, likely a Next.js application. Keep the FastAPI service deployment separate unless the hosting architecture is intentionally changed.

## Project Setup

1. Import the frontend repository into Vercel.
2. Select the correct framework preset and root directory.
3. Configure the production branch.
4. Add only the frontend environment variables required by the browser.
5. Configure the API base URL for preview and production environments.

## Environment Variables

Frontend variables must use the framework's public prefix only when they are safe to expose. Never put `SUPABASE_SERVICE_ROLE_KEY` or other private server credentials in Vercel client-side variables.

Keep separate values for:

- Preview deployments
- Production deployments
- Local development

## Deployment Checklist

- [ ] Build succeeds from a clean checkout
- [ ] API base URL points to the correct backend
- [ ] Supabase redirect URLs include the preview and production domains
- [ ] Authentication works after a fresh browser session
- [ ] CORS allows the deployed frontend origin
- [ ] Secrets are configured in Vercel project settings

Related notes: [[Github]] | [[Server]] | [[Supabase]] | [[Account]]
