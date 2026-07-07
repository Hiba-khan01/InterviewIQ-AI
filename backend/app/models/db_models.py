from pydantic import BaseModel, ConfigDict, Field
from typing import List, Optional
from datetime import datetime, timezone
from app.models.object_id import PyObjectId

class MongoBaseModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_encoders={PyObjectId: str}
    )

class UserModel(MongoBaseModel):
    clerkId: str
    userId: Optional[str] = None # Alternative reference if needed
    name: str = ""
    email: str
    avatar: str = ""
    bio: str = ""
    experience: str = "Fresher"
    currentRole: str = "Student"
    skills: List[str] = []
    linkedin: str = ""
    github: str = ""
    portfolio: str = ""
    location: str = ""
    theme: str = "dark"
    language: str = "en"
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ResumeModel(MongoBaseModel):
    userId: PyObjectId
    fileName: str = ""
    fileUrl: str = ""
    fileType: str = "pdf"
    cloudinaryId: str = ""
    isActive: bool = True
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ResumeAnalysisModel(MongoBaseModel):
    resumeId: PyObjectId
    resumeScore: int = 0
    atsScore: int = 0
    grammarScore: int = 0
    formattingScore: int = 0
    industryMatch: int = 0
    skills: List[str] = []
    missingSkills: List[str] = []
    strengths: List[str] = []
    weaknesses: List[str] = []
    suggestions: List[str] = []
    learningResources: List[str] = []
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class InterviewModel(MongoBaseModel):
    userId: PyObjectId
    jobRole: str
    company: str = ""
    difficulty: str = "Medium"
    interviewType: str = "Technical"
    duration: int = 30
    status: str = "Created"
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuestionModel(MongoBaseModel):
    interviewId: PyObjectId
    order: int
    question: str
    type: str
    difficulty: str
    expectedAnswer: str = ""
    followUpQuestions: List[str] = []
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class InterviewSessionModel(MongoBaseModel):
    interviewId: PyObjectId
    livekitRoomId: str
    startedAt: Optional[datetime] = None
    endedAt: Optional[datetime] = None
    duration: int = 0
    recordingUrl: str = ""
    status: str = "Created"

class TranscriptModel(MongoBaseModel):
    sessionId: PyObjectId
    questionId: PyObjectId
    question: str
    candidateAnswer: str
    transcript: str
    confidence: float
    timestamps: List[float] = []
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class FeedbackReportModel(MongoBaseModel):
    sessionId: PyObjectId
    overallScore: int
    communication: int
    technical: int
    grammar: int
    confidence: int
    behavioral: int
    problemSolving: int
    professionalism: int
    strengths: List[str] = []
    weaknesses: List[str] = []
    improvements: List[str] = []
    learningResources: List[str] = []
    grade: str
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuestionFeedbackModel(MongoBaseModel):
    reportId: PyObjectId
    questionId: PyObjectId
    question: str
    answer: str
    score: int
    strengths: List[str] = []
    weaknesses: List[str] = []
    expectedAnswer: str
    aiFeedback: str

class AnalyticsModel(MongoBaseModel):
    userId: PyObjectId
    averageScore: int = 0
    highestScore: int = 0
    lowestScore: int = 0
    resumeScoreHistory: List[dict] = []
    interviewHistory: List[dict] = []
    weeklyProgress: List[dict] = []
    monthlyProgress: List[dict] = []
    weakSkills: List[str] = []
    strongSkills: List[str] = []
    updatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class NotificationModel(MongoBaseModel):
    userId: PyObjectId
    title: str
    message: str
    type: str = "info"
    read: bool = False
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class SettingsModel(MongoBaseModel):
    userId: PyObjectId
    theme: str = "dark"
    language: str = "English"
    emailNotifications: bool = True
    pushNotifications: bool = True
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
