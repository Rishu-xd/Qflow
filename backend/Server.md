# FastAPI Server

The backend is a small FastAPI application in [`main.py`](main.py). It currently exposes a root endpoint, a general health check, and a Supabase configuration check.

## Local Setup

From this directory:

```powershell
python -m pip install -r requirements.txt
uvicorn main:app --reload
```

The server runs at `http://127.0.0.1:8000` by default.

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Confirms that the API is running |
| `GET` | `/health` | General service health check |
| `GET` | `/supabase/health` | Reports whether Supabase credentials are configured |
| `GET` | `/docs` | Opens the interactive OpenAPI documentation |

## Environment

Create `.env` from [`.env.example`](.env.example) and provide:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-key
```

`main.py` loads these values at startup and creates a shared Supabase client when both values are present. The health endpoint reports configuration status but does not test a database query.

## Deployment Notes

- Set environment variables in the hosting provider rather than uploading `.env`.
- Use `0.0.0.0` as the bind host when the provider requires external access.
- Pin dependency versions before a production release.
- Add authentication and request validation before exposing data-changing routes.

Related notes: [[Supabase]] | [[Github]] | [[Varcel]]