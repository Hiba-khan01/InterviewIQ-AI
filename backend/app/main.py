import uvicorn
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.exceptions import (
    CustomException, RequestValidationError, StarletteHTTPException,
    custom_exception_handler, validation_exception_handler, http_exception_handler
)

from app.core.database import db

# Placeholder Routers
from fastapi import APIRouter
from app.api.v1.users import router as users_router
from app.api.v1.resumes import router as resumes_router
from app.api.v1.interviews import router as interviews_router
from app.api.v1.analytics import router as analytics_router

api_router = APIRouter()
api_router.include_router(users_router, prefix="/users", tags=["Users"])
api_router.include_router(resumes_router, prefix="/resumes", tags=["Resumes"])
api_router.include_router(interviews_router, prefix="/interviews", tags=["Interviews"])
api_router.include_router(analytics_router, prefix="/analytics", tags=["Analytics"])

@api_router.get("/health")
async def health_check():
    return {"status": "healthy"}

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Setup DB Indexes on boot
    try:
        await db.init_indexes()
        print("MongoDB Indexes Initialized Successfully")
    except Exception as e:
        print(f"Skipping Mongo Initialization: {e}")
    yield
    db.close()

app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION, lifespan=lifespan)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Exception Handlers
app.add_exception_handler(CustomException, custom_exception_handler)
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(StarletteHTTPException, http_exception_handler)

# Include API v1 router
app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
