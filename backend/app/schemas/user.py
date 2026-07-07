from pydantic import BaseModel, ConfigDict
from typing import Optional, List

class UserProfileUpdate(BaseModel):
    name: Optional[str] = None
    bio: Optional[str] = None
    github: Optional[str] = None
    linkedin: Optional[str] = None
    portfolio: Optional[str] = None

class UserSchema(BaseModel):
    id: str
    clerkId: str
    name: str
    email: str
    avatar: Optional[str] = None
    bio: Optional[str] = None
    experience: Optional[str] = "Fresher"
    currentRole: Optional[str] = "Student"
    skills: List[str] = []
    linkedin: Optional[str] = None
    github: Optional[str] = None
    portfolio: Optional[str] = None
    
    model_config = ConfigDict(from_attributes=True)
