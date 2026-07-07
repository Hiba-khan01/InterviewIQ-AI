from pydantic import BaseModel
from typing import List, Optional

class InterviewCreate(BaseModel):
    jobRole: str
    difficulty: str
    type: str
    duration: int

class InterviewCreated(BaseModel):
    interviewId: str

class QuestionSchema(BaseModel):
    id: str
    question: str
    type: str
    difficulty: str

class QuestionList(BaseModel):
    questions: List[QuestionSchema]

class InterviewSchema(BaseModel):
    id: str
    jobRole: str
    company: Optional[str]
    difficulty: str
    interviewType: str
    duration: int
    status: str

class SessionCreateResponse(BaseModel):
    roomId: str
    token: str

class SessionSchema(BaseModel):
    id: str
    interviewId: str
    livekitRoomId: str
    status: str
