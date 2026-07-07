from typing import Optional, List
from bson import ObjectId
from app.repositories.base import BaseRepository
from app.models.db_models import (
    UserModel, ResumeModel, ResumeAnalysisModel, InterviewModel,
    QuestionModel, InterviewSessionModel, TranscriptModel,
    FeedbackReportModel, QuestionFeedbackModel, AnalyticsModel,
    NotificationModel, SettingsModel
)

class UserRepository(BaseRepository[UserModel]):
    collection_name = "users"
    model_class = UserModel

    async def get_by_clerk_id(self, clerk_id: str) -> Optional[UserModel]:
        doc = await self.collection.find_one({"clerkId": clerk_id})
        return UserModel(**doc) if doc else None

    async def get_by_email(self, email: str) -> Optional[UserModel]:
        doc = await self.collection.find_one({"email": email})
        return UserModel(**doc) if doc else None

class ResumeRepository(BaseRepository[ResumeModel]):
    collection_name = "resumes"
    model_class = ResumeModel

    async def get_active_for_user(self, user_id: str) -> Optional[ResumeModel]:
        doc = await self.collection.find_one({"userId": ObjectId(user_id), "isActive": True})
        return ResumeModel(**doc) if doc else None

class ResumeAnalysisRepository(BaseRepository[ResumeAnalysisModel]):
    collection_name = "resume_analysis"
    model_class = ResumeAnalysisModel

class InterviewRepository(BaseRepository[InterviewModel]):
    collection_name = "interviews"
    model_class = InterviewModel

    async def get_by_user(self, user_id: str, limit: int = 10, skip: int = 0) -> List[InterviewModel]:
        return await self.find({"userId": ObjectId(user_id)}, limit=limit, skip=skip)

class QuestionRepository(BaseRepository[QuestionModel]):
    collection_name = "interview_questions"
    model_class = QuestionModel

    async def get_by_interview(self, interview_id: str) -> List[QuestionModel]:
        return await self.find({"interviewId": ObjectId(interview_id)})

class SessionRepository(BaseRepository[InterviewSessionModel]):
    collection_name = "interview_sessions"
    model_class = InterviewSessionModel

class TranscriptRepository(BaseRepository[TranscriptModel]):
    collection_name = "transcripts"
    model_class = TranscriptModel

class FeedbackReportRepository(BaseRepository[FeedbackReportModel]):
    collection_name = "feedback_reports"
    model_class = FeedbackReportModel

    async def get_by_session(self, session_id: str) -> Optional[FeedbackReportModel]:
        doc = await self.collection.find_one({"sessionId": ObjectId(session_id)})
        return FeedbackReportModel(**doc) if doc else None

class QuestionFeedbackRepository(BaseRepository[QuestionFeedbackModel]):
    collection_name = "question_feedback"
    model_class = QuestionFeedbackModel

class AnalyticsRepository(BaseRepository[AnalyticsModel]):
    collection_name = "analytics"
    model_class = AnalyticsModel

    async def get_for_user(self, user_id: str) -> Optional[AnalyticsModel]:
        doc = await self.collection.find_one({"userId": ObjectId(user_id)})
        return AnalyticsModel(**doc) if doc else None

    async def update_average_score(self, user_id: str, new_score: int):
        await self.collection.update_one(
            {"userId": ObjectId(user_id)},
            {"$set": {"averageScore": new_score}}
        )

class NotificationRepository(BaseRepository[NotificationModel]):
    collection_name = "notifications"
    model_class = NotificationModel

    async def get_unread_for_user(self, user_id: str) -> List[NotificationModel]:
        return await self.find({"userId": ObjectId(user_id), "read": False})

class SettingsRepository(BaseRepository[SettingsModel]):
    collection_name = "settings"
    model_class = SettingsModel

    async def get_for_user(self, user_id: str) -> Optional[SettingsModel]:
        doc = await self.collection.find_one({"userId": ObjectId(user_id)})
        return SettingsModel(**doc) if doc else None
