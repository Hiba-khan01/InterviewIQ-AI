from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "InterviewIQ AI"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "https://interviewiq.ai"]
    CLERK_SECRET_KEY: str = "mock_secret_key" # Replace in env
    
    # Database
    MONGODB_URI: str = "mongodb://localhost:27017" # Replace in env
    DATABASE_NAME: str = "interviewiq"
    
    # AI APIs
    GEMINI_API_KEY: str = ""
    WHISPER_API_KEY: str = ""
    
    # Cloudinary
    CLOUDINARY_URL: str = ""
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

settings = Settings()
