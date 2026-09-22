# Sites and Product Areas

This note records the application areas that depend on the API and Supabase data model.

## Current Areas

### Queues

Queues are expected to represent work waiting to be processed. Before implementing the API, define ownership, status values, priority, retry behavior, and timestamps.

### Profiles

Profiles are expected to hold application-specific user information related to Supabase Auth users. Keep authentication identity data in Supabase Auth and store only application fields in the profile table.

## Integration Checklist

- [ ] Define the `queues` schema and RLS policies
- [ ] Define the `profiles` schema and relationship to authenticated users
- [ ] Add request and response models to the FastAPI server
- [ ] Add authenticated CRUD endpoints
- [ ] Add frontend API calls and loading/error states
- [ ] Verify authorization with two different users

## Status

The API currently serves health and configuration endpoints only. No queue or profile data is exposed yet.

Related notes: [[Supabase]] | [[Server]] | [[Varcel]]