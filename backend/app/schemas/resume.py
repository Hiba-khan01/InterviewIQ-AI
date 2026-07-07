from pydantic import BaseModel
from typing import List

class ResumeUploadResponse(BaseModel):
    resumeId: str
    resumeScore: int

class ResumeAnalysis(BaseModel):
    resumeScore: int
    atsScore: int
    skills: List[str]
    missingSkills: List[str]
    strengths: List[str]
    weaknesses: List[str]
    suggestions: List[str]

class ResumeSchema(BaseModel):
    id: str
    fileName: str
    fileUrl: str
    fileType: str
    isActive: bool
