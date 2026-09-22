# Supabase

Supabase provides the QFlow data layer and can also provide authentication and storage. The FastAPI client is initialized in [`main.py`](main.py) from environment variables.

## Configuration

Use a local `.env` file during development:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-or-service-role-key
```

Use the public/anon key only for operations protected by Supabase Row Level Security. Keep the service-role key server-side and never expose it to a browser or commit it to Git.

## Current Integration

- Client library: `supabase`
- Shared client: `supabase` in `main.py`
- Configuration check: `GET /supabase/health`
- Current status: no application tables or CRUD endpoints are defined yet

## Suggested Tables

Define the schema in Supabase migrations before adding routes. Existing project notes mention `queues` and `profiles`; document their columns, ownership rules, indexes, and RLS policies before implementation.

For every table, decide:

- Which user or service owns each row
- Which fields are required and uniquely indexed
- Which operations are allowed for anonymous, authenticated, and server users
- What should happen when related records are deleted

## Verification

1. Start the API with `uvicorn main:app --reload`.
2. Open `/supabase/health`.
3. Confirm it returns `{ "configured": true }`.
4. Add a small authenticated query before treating the database as reachable.

Related notes: [[Server]] | [[Account]] | [[Sites]]