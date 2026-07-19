from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import Base, engine
from app.models.user import User
from app.models.listing import Listing

from app.routes.listing import router as listing_router

app = FastAPI(
    title="LocalSkillHub API",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(listing_router)


@app.get("/")
def home():
    return {
        "status": "running",
        "project": "LocalSkillHub API",
    }