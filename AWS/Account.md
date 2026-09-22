# Accounts and Access

This note tracks the accounts needed to run and deploy QFlow. Keep credentials in a password manager or environment variables, never in this workspace.

## Required Accounts

| Service | Purpose | Access to record |
| --- | --- | --- |
| GitHub | Source control and collaboration | Repository URL, organization, collaborators |
| Supabase | Database, authentication, and storage | Project URL, project owner, enabled services |
| AWS | Backend hosting and infrastructure | Account ID, region, deployed service |
| Vercel | Frontend hosting | Team, project, production domain |

## Access Checklist

- [ ] GitHub repository created and visibility confirmed
- [ ] Supabase project created and team members invited
- [ ] AWS region and deployment account confirmed
- [ ] Vercel project connected to the frontend repository
- [ ] Production secrets configured in the relevant provider dashboards
- [ ] Local `.env` created from `.env.example`

## Security Rules

- Do not commit `.env` files, private keys, passwords, or service-role keys.
- Use the least-privileged key for each environment.
- Rotate credentials when a team member leaves or a key is exposed.
- Keep production credentials separate from local development credentials.

Related notes: [[Github]] | [[Supabase]] | [[Server]] | [[Sites]] | [[Varcel]]