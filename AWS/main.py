import os

from dotenv import load_dotenv
from fastapi import FastAPI
from supabase import Client, create_client


load_dotenv()

app = FastAPI(title="QFlow API", version="1.0.0")

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")
supabase: Client | None = (
	create_client(supabase_url, supabase_key)
	if supabase_url and supabase_key
	else None
)


@app.get("/")
async def root() -> dict[str, str]:
	return {"message": "QFlow API is running"}


@app.get("/health")
async def health() -> dict[str, str]:
	return {"status": "ok"}


@app.get("/supabase/health")
async def supabase_health() -> dict[str, bool]:
	return {"configured": supabase is not None}
